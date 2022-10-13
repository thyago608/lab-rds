import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import "./styles/global.css";

export function App() {
  return (
    <div className="py-8 min-h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-2">
          Faça login e comece a usar!
        </Text>
      </header>
      <form className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="**********"
              className="mt-1"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="remeber" className="flex items-center gap-2">
          <Checkbox id="remeber" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>
        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>
      <footer className="mt-8 flex flex-col items-center gap-4">
        <Text asChild>
          <a href="#" className="text-gray-400 underline hover:text-gray-200 ">
            Esqueceu a sua senha
          </a>
        </Text>
        <Text asChild>
          <a href="#" className="text-gray-400 underline hover:text-gray-200 ">
            Não possui conta ? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
