import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            © 2024 Mahdi Taleghani. Built with Next.js & Tailwind CSS
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="mailto:work.taleghani@gmail.com">
            <Mail className="h-5 w-5" />
          </Link>
          <Link href="https://github.com/mmte" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/mahdi-taleghani/" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}