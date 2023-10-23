import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Test, type TestProps } from "./test";

const meta: Meta<TestProps> = {
  component: Test,
};

type Story = StoryObj<TestProps>;

export default meta;

export const Primary: Story = {
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: "color" },
    hhh: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
  args: {
    textColor: "red",
  },
  render: (props) => <Test {...props}>Some button</Test>,
};
