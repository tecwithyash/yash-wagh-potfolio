import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "yashwagh699@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:yashwagh699@gmail.com",
    },
    {
      title: "Phone",
      value: "+91-9284970698",
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+919284970698",
    },
    {
      title: "LinkedIn",
      value: "LinkedIn Profile",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Contact Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6"></div>
          <p className="max-w-[800px] text-lg text-muted-foreground">
            Feel free to reach out to me through any of these channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contactInfo.map((contact, index) => (
            <a 
              key={index} 
              href={contact.href}
              target={contact.title === "Email" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="h-full hover:border-blue-600 transition-colors">
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="p-2 rounded-full bg-blue-100 mb-3">
                    {contact.icon}
                  </div>
                  <CardTitle>{contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-md font-medium">
                    {contact.value}
                  </CardDescription>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;