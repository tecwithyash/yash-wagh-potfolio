import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    { category: "Programming Languages", items: ["Python", "JavaScript"] },
    { category: "Web Technologies", items: ["HTML", "React.js", "Node.js", "Express.js"] },
    { category: "Databases", items: ["SQL", "MongoDB", "Neo4j", "Oracle DB"] },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6"></div>
          <p className="max-w-[800px] text-lg text-muted-foreground">
            Aspiring IT professional with hands-on experience in Python, SQL, and web development, seeking an entry-level role to apply technical skills and contribute to innovative software solutions while continuing to grow in a dynamic and collaborative environment.
          </p>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-8">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <Card key={skillGroup.category} className="text-center">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillGroup.items.map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;