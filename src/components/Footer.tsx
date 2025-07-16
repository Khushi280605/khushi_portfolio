import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/20 py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-bold gradient-text">Khushi</span>
          </div>

          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/Khushi280605"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/khushi2806"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:yadavkhushi7448@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="flex items-center space-x-1 text-muted-foreground text-sm">
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 text-primary" />
            <span>by Khushi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;