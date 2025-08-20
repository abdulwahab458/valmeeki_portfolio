import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "Jan 2022 - Present",
      type: "Full-time",
      description: [
        "Led development of microservices architecture serving 100k+ daily active users",
        "Mentored junior developers and established best practices for code quality",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with product team to deliver features ahead of schedule"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      duration: "Mar 2020 - Dec 2021",
      type: "Full-time",
      description: [
        "Developed MVP from concept to production in 6 months",
        "Built responsive web applications using React and Node.js",
        "Integrated third-party APIs and payment processing systems",
        "Optimized application performance resulting in 40% faster load times"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Stripe", "Heroku"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Inc",
      location: "Remote",
      duration: "Jun 2019 - Feb 2020",
      type: "Contract",
      description: [
        "Created pixel-perfect responsive designs for client websites",
        "Collaborated with design team to implement interactive UI components",
        "Improved SEO performance and accessibility compliance",
        "Delivered projects on time and within budget for 15+ clients"
      ],
      technologies: ["Vue.js", "SCSS", "Webpack", "Figma", "WordPress"]
    },
    {
      title: "Junior Developer",
      company: "Local Tech Company",
      location: "Chicago, IL",
      duration: "Aug 2018 - May 2019",
      type: "Full-time",
      description: [
        "Assisted in development of internal tools and customer-facing applications",
        "Learned modern development practices and participated in code reviews",
        "Fixed bugs and implemented minor features across multiple projects",
        "Contributed to documentation and testing procedures"
      ],
      technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap", "jQuery"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Professional Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Work Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey spans diverse environments from startups 
              to established companies, each contributing to my growth as a developer.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                      <Badge variant="outline">{experience.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}