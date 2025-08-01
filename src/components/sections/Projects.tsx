import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Attendance System",
      description: "Designed and developed a desktop-based attendance management system using Python for backend operations. Managed student attendance records with SQL database integration. Built a clean and intuitive user interface using wxPython.",
      technologies: ["Python", "SQL", "wxPython"],
    },
    {
      title: "DocuQuery",
      description: "Built an AI-based question-answering system for PDFs using Retrieval-Augmented Generation (RAG). Extracted and chunked PDF text with PyMuPDF and SentenceTransformers. Used ChromaDB for semantic search and Flan-T5 for generating responses. Designed an accessible Streamlit UI with screen reader and keyboard navigation support.",
      technologies: ["Python", "Streamlit", "ChromaDB", "SentenceTransformers"],
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6"></div>
          <p className="max-w-[800px] text-lg text-muted-foreground">
            Here are some of the projects I've worked on, showcasing my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm mb-4">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-0">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-2 py-0.5">
                    {tech}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;