import { Github, Linkedin } from "lucide-react"; 

export function Footer() {
  return (
    <footer className="py-9 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose sm:ml-10 text-muted-foreground md:text-left">
          Construído por{" "}
          <a
            href="https://github.com/camilly-larissa"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Camilly Larissa
          </a>
        </p>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/CamillyLarissa" target="_blank" rel="noreferrer">
             <Github className="h-5 w-5 text-gray-500 hover:text-black transition" />
          </a>
          <a href="https://linkedin.com/in/camilly-larissa" target="_blank" rel="noreferrer">
             <Linkedin className="h-5 w-5 text-gray-500 hover:text-blue-600 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}