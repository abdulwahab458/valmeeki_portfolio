import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4">
              <Badge variant="secondary" className="mb-4 animate-pulse">
                Available for new opportunities
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground/80 bg-clip-text text-transparent">
              Valmeeki Singh
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">
              Full Stack Software Developer
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Passionate about creating innovative digital solutions that make a difference. 
              Specializing in modern web technologies and scalable applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="group">
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button size="icon" variant="ghost" className="hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-secondary opacity-10 animate-pulse" />
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-muted-foreground">
                  VS
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}