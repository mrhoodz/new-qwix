import type { Meta, StoryObj } from "storybook-framework-qwik";
import type { MiniServiceCardProps } from "./mini-service-card";
import { MiniServiceCard } from "./mini-service-card";

// import { Navbar, type NavbarProps } from "./navbar";

const meta: Meta<MiniServiceCardProps> = {
  component: MiniServiceCard,
};

type Story = StoryObj<MiniServiceCardProps>;

export default meta;

export const Primary: Story = {
  //👇 Creates specific argTypes

  args: {
    variant: "1",
  },
  render: (props) => <MiniServiceCard {...props}>Some button</MiniServiceCard>,
};

export const Secondary: Story = {
  //👇 Creates specific argTypes

  args: {
    variant: "2",
  },
  render: (props) => <MiniServiceCard {...props}>Some button</MiniServiceCard>,
};

export const Tertiary: Story = {
  //👇 Creates specific argTypes

  args: {
    variant: "3",
  },
  render: (props) => <MiniServiceCard {...props}>Some button</MiniServiceCard>,
};
