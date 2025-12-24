import Link from "next/link";
import { Button } from "@/components/ui/button"; 

export function Header() {
  return (
    <header className="bg-background">
        <nav className="container mx-auto flex justify-between items-center p-5">
          <h1 className="font-bold text-1xl sm:text-2xl md:text-2xl">Camilly Larissa</h1>
          <ul className="flex space-x-15">
            <li><a href="#home" className="hover:text-blue-500">Início</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projetos</a></li>
            <li><a href="#about" className="hover:text-blue-500">Sobre</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contato</a></li>
          </ul>
        </nav>
      </header>
  );
}