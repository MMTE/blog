import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Building a Modern Web Application with Next.js 13",
    date: "2024-03-20",
    description: "Learn how to leverage the latest features in Next.js 13 to build scalable web applications.",
    slug: "building-modern-web-app-nextjs-13",
    readTime: "8 min read",
    category: "Next.js"
  },
  {
    title: "Understanding TypeScript's Advanced Types",
    date: "2024-03-15",
    description: "Deep dive into TypeScript's advanced type system and how to use it effectively.",
    slug: "understanding-typescript-advanced-types",
    readTime: "12 min read",
    category: "TypeScript"
  },
  {
    title: "State Management in React: A Comprehensive Guide",
    date: "2024-03-10",
    description: "Explore different state management solutions in React and when to use them.",
    slug: "state-management-react-guide",
    readTime: "10 min read",
    category: "React"
  }
];

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 flex items-center gap-2">
        <Terminal className="h-5 w-5 text-primary" />
        <code className="text-lg font-bold">~/blog</code>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="group relative overflow-hidden border bg-background transition-colors hover:bg-muted/50">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <code className="rounded bg-primary/10 px-2 py-1 text-xs text-primary">
                    {post.category}
                  </code>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <time className="text-sm text-muted-foreground">{post.date}</time>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{post.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}