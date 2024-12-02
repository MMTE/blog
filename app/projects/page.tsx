import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe, Terminal } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Hooshyar",
    description: "An AI-powered weight loss app built on Dify.ai's low-code platform, enhanced with MemGPT for memory-augmented chats. Created for GenX competition, providing personalized weight loss guidance using advanced AI models.",
    tech: ["Dify.ai", "MemGPT", "ChatGPT", "LLAMA"],
    github: "https://github.com",
    demo: "https://demo.com",
    stats: {
      status: "Production",
      year: "2024",
      type: "Competition"
    }
  },
  {
    title: "Bayan",
    description: "Led the redevelopment of a Quran app serving 500,000+ users. Implemented Kotlin Multiplatform for cross-platform compatibility while managing team collaboration and project timelines.",
    tech: ["Kotlin", "Multiplatform", "Android", "iOS"],
    github: "https://github.com",
    demo: "https://demo.com",
    stats: {
      status: "Production",
      year: "2023",
      type: "Lead Developer"
    }
  },
  {
    title: "Advanced Jalali Calendar",
    description: "Designed a Jalali calendar system with accurate date calculations and advanced reminders. Built with Android Compose and customized Material UI 3.",
    tech: ["Android Compose", "Material UI 3", "Kotlin", "Calendar API"],
    github: "https://github.com",
    demo: "https://demo.com",
    stats: {
      status: "Production",
      year: "2023",
      type: "Android App"
    }
  },
  {
    title: "CRM360",
    description: "Developed a SaaS CRM for small businesses with multi-tenancy support. Implemented organization-level data isolation using PostgreSQL Row Level Security and JWT authentication.",
    tech: ["Next.js", "Preact", "Supabase", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    stats: {
      status: "Production",
      year: "2023",
      type: "SaaS"
    }
  },
  {
    title: "WP1Click",
    description: "Built a PaaS for one-click WordPress deployments using Docker Swarm across VPS. Implemented Ceph cluster for storage and Traefik for reverse proxy with custom domain support.",
    tech: ["Docker Swarm", "Ceph", "Traefik", "WordPress"],
    github: "https://github.com",
    demo: "https://demo.com",
    stats: {
      status: "Production",
      year: "2023",
      type: "PaaS"
    }
  },
  {
    title: "Beyade",
    description: "Developed a COVID-19 memorial platform in one week, fostering a community with 15,000+ registrations. Integrated S3 object storage for media management.",
    tech: ["Laravel", "Vue.js", "S3", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    stats: {
      status: "Production",
      year: "2022",
      type: "Memorial Platform"
    }
  },
  {
    title: "Skilla",
    description: "Designed and developed a multi-tenant LMS platform with custom domain support via Nginx proxy. Achieved 1,000+ signups and revenue through premium sales.",
    tech: ["Laravel", "Vue.js", "Nginx", "MySQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    stats: {
      status: "Production",
      year: "2021",
      type: "SaaS"
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
                {/* <Link href={project.github} target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link> */}
                {/* <Link href={project.demo} target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm">
                    <Globe className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </Link> */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
