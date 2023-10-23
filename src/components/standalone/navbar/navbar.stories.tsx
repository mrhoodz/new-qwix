import type { Meta, StoryObj } from "storybook-framework-qwik";

import { Navbar, type NavbarProps } from "./navbar";

const meta: Meta<NavbarProps> = {
  component: Navbar,
};

type Story = StoryObj<NavbarProps>;

export default meta;

export const Primary: Story = {
  //👇 Creates specific argTypes

  args: {
    textColor: "red",
  },
  render: (props) => <Navbar {...props}>Some button</Navbar>,
};
