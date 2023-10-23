import type { Meta, StoryObj } from "storybook-framework-qwik";
import type { BigProjectCardProps } from "./big-Project-card";
import { BigProjectCard } from "./big-Project-card";

const meta: Meta<BigProjectCardProps> = {
  component: BigProjectCard,
};

type Story = StoryObj<BigProjectCardProps>;

export default meta;

export const Primary: Story = {
  //👇 Creates specific argTypes

  args: {
    count: "red",
  },
  render: (props) => <BigProjectCard {...props}>Some button</BigProjectCard>,
};
