import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Heading Component",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading Component with h1</h1>,
  },
};
