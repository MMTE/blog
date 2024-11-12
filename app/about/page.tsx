import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Github, Linkedin, Mail, Clock } from "lucide-react";
import Link from "next/link";

const skills = {
  frontend: ["React.js", "Preact", "Vue.js", "TypeScript", "HTML5", "CSS3"],
  backend: ["Node.js", "PHP", "Laravel", "Flask", "REST APIs"],
  devops: ["Docker", "Kubernetes", "Nginx", "Linux", "CI/CD"],
  databases: ["PostgreSQL", "MySQL", "Supabase"],
  cloud: ["AWS", "GCP", "Azure"],
};

const experiences = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-employed",
    period: "2022 - Present",
    tech: ["React.js", "Node.js", "PostgreSQL", "Docker"],
    description: "Built scalable web applications and automated deployment systems."
  },
  {
    role: "Laravel Developer",
    company: "WiseTrack",
    period: "2022 (6 months)",
    tech: ["Laravel", "PHP", "Docker"],
    description: "Enhanced backend architecture for mobile attribution platform."
  },
  {
    role: "Ecommerce Technical Manager",
    company: "Nahrain Shoes Company",
    period: "2020-2021",
    tech: ["PHP", "Laravel", "Vue.js"],
    description: "Led e-commerce platform development and digital marketing initiatives."
  },
  {
    role: "PHP Laravel Developer",
    company: "Previous Role",
    period: "2018-2019",
    tech: ["Laravel", "Vue.js", "Docker Swarm"],
    description: "Developed scalable web applications with focus on backend optimization."
  }
];

const quickBios = [
  {
    duration: "1 minute",
    content: "Full-stack developer and DevOps engineer with 7+ years of experience. Specialized in React.js, Node.js, and cloud infrastructure. Built scalable applications from CRM platforms to e-commerce solutions. Strong focus on automation and optimization.",
    icon: <Clock className="h-5 w-5" />
  },
  {
    duration: "3 minutes",
    content: `Full-stack developer and DevOps engineer with a proven track record of building scalable web applications. Over 7 years of experience working with modern technologies like React.js, Node.js, and Docker. Led development of multiple successful projects including a multi-tenant CRM platform and automated WordPress deployment system.

Currently focused on freelance development, creating custom solutions for businesses while maintaining expertise in both frontend and backend technologies. Strong background in e-commerce and educational technology sectors.

Technical expertise spans across the full development stack, from frontend frameworks to infrastructure management with Docker and Kubernetes.`,
    icon: <Clock className="h-5 w-5" />
  },
  {
    duration: "15 minutes",
    content: `Experienced full-stack developer and DevOps engineer with a comprehensive background in web development and system architecture. Over 7 years of hands-on experience in building and optimizing scalable applications, with a strong focus on modern technologies and best practices.

Started my journey in web development with PHP and Laravel, building robust backend systems and APIs. Gradually expanded expertise to include modern frontend frameworks like React.js and Vue.js, allowing me to deliver full-stack solutions. Developed a deep understanding of DevOps practices, implementing CI/CD pipelines and managing cloud infrastructure with Docker and Kubernetes.

Notable achievements include developing a multi-tenant CRM platform that serves small businesses, creating an automated WordPress deployment system (wp1click), and co-founding an LMS platform that gained significant user traction. Each project demonstrated ability to handle complex technical challenges while delivering user-friendly solutions.

Experience spans across various domains:
- Frontend: Expertise in React.js, Preact, and Vue.js, with a focus on building responsive and performant user interfaces
- Backend: Proficient in Node.js, PHP/Laravel, and Python/Flask, designing scalable APIs and microservices
- DevOps: Strong knowledge of Docker, Kubernetes, and cloud platforms (AWS, GCP, Azure)
- Databases: Experience with PostgreSQL, MySQL, and modern solutions like Supabase

Leadership experience includes managing e-commerce platform development and leading digital marketing initiatives at Nahrain Shoes Company, where I successfully improved online traffic and sales conversion rates.

Continuous learner with a background in Industrial Engineering from Amirkabir University of Technology and partial MBA studies, bringing both technical expertise and business understanding to projects.

Currently working as a freelance developer, focusing on creating custom solutions that help businesses scale and optimize their operations. Passionate about staying updated with latest technologies and contributing to the developer community.`,
    icon: <Clock className="h-5 w-5" />
  }
];

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 flex items-center gap-2">
        <Terminal className="h-5 w-5 text-primary" />
        <code className="text-lg font-bold">~/about</code>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-3">
        {quickBios.map((bio, index) => (
          <Card key={index} className="flex flex-col p-6">
            <div className="mb-4 flex items-center gap-2">
              {bio.icon}
              <h3 className="font-bold">About Me in {bio.duration}</h3>
            </div>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {bio.content}
            </p>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Rest of the about page content remains the same */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="mb-4 text-xl font-bold">
              <span className="text-primary">const</span> aboutMe ={" "}
              <span className="text-primary">{`{`}</span>
            </h2>
            <div className="ml-4 space-y-4">
              <p className="text-muted-foreground">
                Passionate Full-Stack Developer with 7+ years of experience in building and optimizing scalable
                web applications. Skilled in React.js, Node.js, PostgreSQL, Docker, and Kubernetes. Proven
                ability to drive projects from concept to deployment, with a focus on creating data-driven
                solutions that enhance customer engagement.
              </p>
              <div className="space-y-2">
                <h3 className="font-bold">Technical Skills</h3>
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="ml-4">
                    <code className="text-sm text-muted-foreground">
                      {category}:{" "}
                      <span className="text-primary">[</span>
                      {items.map((item, i) => (
                        <span key={item}>
                          <span className="text-primary">"</span>
                          {item}
                          <span className="text-primary">"</span>
                          {i < items.length - 1 ? ", " : ""}
                        </span>
                      ))}
                      <span className="text-primary">]</span>
                    </code>
                  </div>
                ))}
              </div>
            </div>
            <h2 className="mt-4 text-xl font-bold">
              <span className="text-primary">{`}`}</span>
            </h2>
          </Card>

          <Card className="mt-8 p-6">
            <h2 className="mb-6 text-xl font-bold">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6">
                  <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary"></div>
                  <h3 className="font-bold">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company} • {exp.period}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="mb-4 text-xl font-bold">Connect</h2>
            <div className="space-y-4">
              <Link
                href="mailto:work.taleghani@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
                <span>work.taleghani@gmail.com</span>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 text-xl font-bold">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Master of Business Administration (MBA)</h3>
                <p className="text-sm text-muted-foreground">Goftegoo Higher Education Institute</p>
                <p className="text-sm text-muted-foreground">Completed two semesters (2016)</p>
              </div>
              <div>
                <h3 className="font-medium">Industrial Engineering</h3>
                <p className="text-sm text-muted-foreground">Amirkabir University of Technology</p>
                <p className="text-sm text-muted-foreground">(Tehran Polytechnic)</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}