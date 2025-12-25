import { Button } from "@/components/ui/button";

export default function Resume() {
  return (
    <>
    <h1 className="text-4xl font-semibold text-green-600">Olá, Eu sou Camilly Larissa</h1>
    <h2 className="mt-2 text-2xl">Estudante de Computação</h2>
    <p className="mt-4"> 
      Estudante de Ciência da Computação com foco em desenvolvimento Fullstack. 
      Experiência em Java (Spring Boot) e Python no backend, além de React/Next.js no frontend. 
      Apaixonada por criar soluções eficientes e aplicar o aprendizado acadêmico em desafios reais.
      </p>
      <Button className="mt-6" asChild>
        <a
          href="/Camilly_Larissa_Resume.pdf"
          download
        >
          Baixar Currículo
        </a>
      </Button>
    </>

  )
}