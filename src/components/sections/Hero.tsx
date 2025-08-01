import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="h-40 w-40 rounded-full border-4 border-blue-600 overflow-hidden bg-muted flex items-center justify-center mb-4">
            {/* Placeholder for profile image */}
            <span className="text-4xl text-muted-foreground">YW</span>
          </div>
          
          <div className="space-y-4 max-w-[600px]">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Yash Wagh</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              An aspiring IT professional passionate about Python, SQL, and full-stack web development.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="animate-bounce rounded-full mt-12"
            asChild
          >
            <a href="#about" aria-label="Scroll to About section">
              <ArrowDown className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;