import type { Meta, StoryObj } from "storybook-framework-qwik";
import type { CompetenceCardProps } from "./competence-card";
import { CompetenceCard } from "./competence-card";

const meta: Meta<CompetenceCardProps> = {
  component: CompetenceCard,
};

type Story = StoryObj<CompetenceCardProps>;

export default meta;

export const Primary: Story = {
  //👇 Creates specific argTypes

  render: (props) => <CompetenceCard {...props}>Some button</CompetenceCard>,
};
