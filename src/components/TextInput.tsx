import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="h-12 flex items-center px-4 py-3  rounded bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

function TextInputInput({ className, ...props }: TextInputInputProps) {
  return (
    <input
      className={clsx(
        "flex-1 bg-transparent outline-none text-gray-100 text-xs placeholder:text-gray-400",
        className
      )}
      {...props}
    />
  );
}

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
