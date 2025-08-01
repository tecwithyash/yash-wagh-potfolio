import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Arts",
      institution: "BAMU",
      period: "2023-2026",
      score: "",
    },
    {
      degree: "HSC",
      institution: "Maharashtra State Board",
      period: "2022-2023",
      score: "87.83%",
    },
    {
      degree: "SSC",
      institution: "Maharashtra State Board",
      period: "2020-2021",
      score: "76.60%",
    },
  ];

  const certificationData = [
    {
      name: "SQL Specialist Oracle 1Z0-914",
      issuer: "Oracle",
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6"></div>
          <p className="max-w-[800px] text-lg text-muted-foreground">
            My academic background and professional certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-12">
          {educationData.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 pb-3">
                <CardTitle className="text-xl flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  {item.degree}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <p className="font-medium">{item.institution}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="h-4 w-4" />
                    <span>{item.period}</span>
                    {item.score && (
                      <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {item.score}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationData.map((cert, index) => (
              <Card key={index} className="border-l-4 border-blue-600">
                <CardContent className="p-4">
                  <h4 className="text-lg font-bold">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;