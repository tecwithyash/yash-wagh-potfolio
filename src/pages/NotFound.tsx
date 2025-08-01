import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-20">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              404 - Page Not Found
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <Button asChild size="lg">
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}