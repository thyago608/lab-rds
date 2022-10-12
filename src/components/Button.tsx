import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp className="w-full py-4 px-3 font-semibold text-sm text-black cursor-pointer text-center rounded bg-cyan-500 hover:bg-cyan-300 transition-colors focus:ring-2 ring-white">
      {children}
    </Comp>
  );
}
