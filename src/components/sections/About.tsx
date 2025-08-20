import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Heart, Lightbulb, Users } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions to complex problems."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong believer in teamwork and effective communication for successful projects."
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Focused on creating exceptional user experiences that make a real impact."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">About Me</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building Digital Experiences
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              With over 5 years of experience in software development, I've had the privilege 
              of working on diverse projects ranging from startups to enterprise applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>My Journey</CardTitle>
                <CardDescription>
                  From curiosity to professional expertise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  My journey in software development began with a simple curiosity about how 
                  websites worked. This curiosity evolved into a passion for creating digital 
                  solutions that solve real-world problems. I've worked with startups, 
                  mid-size companies, and contributed to open-source projects.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>What Drives Me</CardTitle>
                <CardDescription>
                  Passion for continuous learning and growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  I'm driven by the challenge of turning complex problems into elegant, 
                  user-friendly solutions. Whether it's optimizing performance, implementing 
                  new features, or mentoring fellow developers, I find fulfillment in 
                  continuous learning and sharing knowledge.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform group">
                <CardContent className="pt-6">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}