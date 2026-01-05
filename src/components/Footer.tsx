import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl tracking-wider text-foreground">
              PAULO
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Fotógrafo de eventos em São Luís – MA. Registrando momentos com 
              emoção, intensidade e cores vibrantes.
            </p>
          </div>

          <br />
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm tracking-editorial uppercase text-foreground font-medium">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/559888839166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Phone size={16} />
                  +55 98 8883-9166
                </a>
              </li>
              <li>
                <a
                  href="mailto:pauloandreesc@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Mail size={16} />
                  pauloandreesc@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/_parecer.paulo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Instagram size={16} />
                 @_parecer.paulo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-xs tracking-wider">
            © {new Date().getFullYear()} PAULO FOTOGRAFIA. São Luís, Maranhão.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
