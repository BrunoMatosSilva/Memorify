import { Button } from "@/src/components/ui/button";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-primary font-bold text-2xl">Faça seu login na aplicação</h1>
      <Button>Entrar</Button>
    </main>
  );
}