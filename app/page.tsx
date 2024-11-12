import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Terminal, Code2, User, ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const latestPosts = [
  {
    title: "Building a Modern Web Application with Next.js 13",
    date: "2024-03-20",
    slug: "building-modern-web-app-nextjs-13",
    category: "Next.js"
  },
  {
    title: "Understanding TypeScript's Advanced Types",
    date: "2024-03-15",
    slug: "understanding-typescript-advanced-types",
    category: "TypeScript"
  },
  {
    title: "State Management in React: A Comprehensive Guide",
    date: "2024-03-10",
    slug: "state-management-react-guide",
    category: "React"
  }
];

const featuredProjects = [
  {
    title: "Multi-tenant CRM Platform",
    description: "A scalable CRM platform for small businesses.",
    tech: ["React.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "wp1click",
    description: "One-click WordPress deployment platform.",
    tech: ["Flask", "Docker Swarm", "MySQL"],
  },
  {
    title: "LMS Platform",
    description: "Learning Management System MVP.",
    tech: ["Laravel", "Vue.js", "PostgreSQL"],
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-background py-24">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/0" />
        <div className="container relative">
          <div className="flex flex-col items-start gap-4">
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              <Terminal className="mr-1 h-3 w-3" />
              <code>mmte.me</code>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-primary">const</span>{" "}
              <span className="text-muted-foreground">developer</span> ={" "}
              <span className="text-primary">{`{`}</span>
            </h1>
            <div className="ml-8 flex flex-col gap-2">
              <p className="text-xl">
                <span className="text-muted-foreground">name:</span>{" "}
                <span className="text-primary">"Mahdi Taleghani"</span>,
              </p>
              <p className="text-xl">
                <span className="text-muted-foreground">role:</span>{" "}
                <span className="text-primary">"Full Stack Developer | DevOps Engineer"</span>,
              </p>
              <p className="text-xl">
                <span className="text-muted-foreground">location:</span>{" "}
                <span className="text-primary">"Tehran, Iran"</span>,
              </p>
              <p className="text-xl">
                <span className="text-muted-foreground">experience:</span>{" "}
                <span className="text-primary">"7+ years"</span>
              </p>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-primary">{`}`}</span>
            </h1>
            <div className="mt-8 flex gap-4">
              <Link href="/projects">
                <Button>
                  <Code2 className="mr-2 h-4 w-4" />
                  View Projects
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary">
                  <User className="mr-2 h-4 w-4" />
                  About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border bg-muted/40 py-20 px-10 rounded-lg border-rounded">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="text-primary">$</span> ls ./expertise/*
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg border  bg-background p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                <h3 className="font-bold">Frontend Development</h3>
              </div>
              <code className="text-sm text-muted-foreground">
                ["React.js", "Preact", "Vue.js", "TypeScript"]
              </code>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" />
                <h3 className="font-bold">Backend Development</h3>
              </div>
              <code className="text-sm text-muted-foreground">
                ["Node.js", "PHP", "Laravel", "Flask"]
              </code>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                <h3 className="font-bold">DevOps & Infrastructure</h3>
              </div>
              <code className="text-sm text-muted-foreground">
                ["Docker", "Kubernetes", "Nginx", "CI/CD"]
              </code>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-2xl pl-10 font-bold tracking-tight">Latest Blog Posts</h2>
            <Link href="/blog" className="pr-10 flex items-center text-sm text-primary hover:underline">
              View all posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full transition-colors hover:bg-muted/50">
                  <CardHeader>
                    <div className="mb-2">
                      <code className="rounded bg-primary/10 px-2 py-1 text-xs text-primary">
                        {post.category}
                      </code>
                    </div>
                    <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
                    <time className="text-sm text-muted-foreground">{post.date}</time>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border border-rounded rounded-lg bg-muted/40 py-20 px-10 mb-20">
        <div className="container">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
            <Link href="/projects" className="flex items-center text-sm text-primary hover:underline">
              View all projects <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card key={project.title} className="h-full transition-colors hover:bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <code
                        key={tech}
                        className="rounded-md bg-primary/10 px-2 py-1 text-xs text-primary"
                      >
                        {tech}
                      </code>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}