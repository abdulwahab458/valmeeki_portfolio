import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Valmeeki Singh
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Passionate full-stack developer creating innovative digital solutions 
                that make a difference in people's lives.
              </p>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost">
                  <Github className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-primary transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-primary transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>valmeeki.singh@email.com</p>
                <p>+1 (555) 123-4567</p>
                <p>San Francisco, CA</p>
                <p className="text-sm pt-2">
                  Available for freelance projects and full-time opportunities
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Valmeeki Singh. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              Made with <Heart className="w-4 h-4 text-red-500" /> using React & shadcn/ui
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}