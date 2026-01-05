import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/sobre", label: "Sobre" },
    { path: "/projetos", label: "Projetos" },
    { path: "/servicos", label: "Serviços" },
    { path: "/contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-display text-2xl tracking-wider text-foreground hover:text-primary transition-colors"
        >
          PAULO
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-sm tracking-editorial uppercase font-body link-underline transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <li 
              key={link.path}
              className={`transform transition-all duration-300 ${
                isMobileMenuOpen 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Link
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-display tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
