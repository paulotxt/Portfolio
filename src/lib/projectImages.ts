export function getProjectImages(slug: string): string[] {
  // Import all files under src/assets/projects eagerly as urls.
  // We'll filter by image extensions (case-insensitive) below.
  const modules = import.meta.glob('/src/assets/projects/**/*', { eager: true, as: 'url' }) as Record<string, string>;

  const images: Array<{ path: string; url: string }> = [];

  const imageRE = /\.(jpe?g|png|webp|svg)$/i;

  // Try several candidate folder names: the slug itself and known aliases
  const aliases: Record<string, string> = {
    formaturas: 'graduation',
    teatro: 'theater',
    'desfile-natalino': 'desfile',
    'coral-natalino': 'coral',
  };

  const candidates = [slug];
  if (aliases[slug]) candidates.push(aliases[slug]);

  // Normalize and collect matching image files for the given slug or its aliases
  Object.entries(modules).forEach(([rawPath, url]) => {
    // rawPath can start with '/' or './' depending on environment; normalize to no leading './' or '/'
    const path = rawPath.replace(/^\.\//, '').replace(/^\//, '');

    if (!imageRE.test(path)) return;

    const lp = path.toLowerCase();
    const base = 'src/assets/projects/';

    for (const cand of candidates) {
      if (lp.includes(base + cand.toLowerCase() + '/')) {
        images.push({ path, url });
        break;
      }
    }
  });

  // If nothing matched, provide a helpful debug list of available project folders
  if (images.length === 0 && typeof window !== 'undefined') {
    const folders = new Set<string>();
    Object.keys(modules).forEach(k => {
      const p = k.replace(/^\.\//, '').replace(/^\//, '');
      const m = p.match(/src\/assets\/projects\/([^\/]+)\//i);
      if (m) folders.add(m[1]);
    });
    // eslint-disable-next-line no-console
    console.warn(`[getProjectImages] slug=${slug} matched 0 files. Available folders:`, Array.from(folders));
  } else if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.debug(`[getProjectImages] slug=${slug} matched ${images.length} files:`, images.map(i => i.path));
  }

  // Sort by filename (natural numeric order)
  images.sort((a, b) => {
    const aName = a.path.split('/').pop() || '';
    const bName = b.path.split('/').pop() || '';
    return aName.localeCompare(bName, undefined, { numeric: true, sensitivity: 'base' });
  });

  return images.map(i => i.url);
}

export default getProjectImages;
