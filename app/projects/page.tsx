import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe, Terminal } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Multi-tenant CRM Platform",
    description: "A scalable CRM platform for small businesses with full-stack implementation using React.js and Node.js.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Supabase"],
    github: "https://github.com",
    demo: "https://demo.com",
    stats: {
      status: "Production",
      year: "2023",
      type: "Freelance"
    }
  },
  {
    title: "wp1click",
    description: "Platform for one-click WordPress site deployment with automated Docker Swarm management.",
    tech: ["Flask", "Docker Swarm", "MySQL", "API"],
    github: "https://github.com",
    demo: "https://demo.com",
    stats: {
      status: "Open Source",
      year: "2022",
      type: "Personal"
    }
  },
  {
    title: "LMS Platform",
    description: "Co-founded and developed an MVP for a Learning Management System that gained significant user traction.",
    tech: ["Laravel", "Vue.js", "PostgreSQL", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    stats: {
      status: "MVP",
      year: "2021",
      type: "Startup"
    }
  }
];

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 flex items-center gap-2">
        <Terminal className="h-5 w-5 text-primary" />
        <code className="text-lg font-bold">~/projects</code>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="group relative overflow-hidden border bg-background transition-colors hover:bg-muted/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>{project.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <code
                    key={tech}
                    className="rounded-md bg-primary/10 px-2 py-1 text-xs text-primary"
                  >
                    {tech}
                  </code>
                ))}
              </div>
              <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span>🚀 {project.stats.status}</span>
                <span>📅 {project.stats.year}</span>
                <span>💼 {project.stats.type}</span>
              </div>
              <div className="flex gap-4">
                <Link href={project.github} target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
                <Link href={project.demo} target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm">
                    <Globe className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}