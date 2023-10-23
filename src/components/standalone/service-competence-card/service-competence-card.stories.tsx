import type { Meta, StoryObj } from "storybook-framework-qwik";
import type { ServiceCompetenceCardProps } from "./service-competence-card";
import { ServiceCompetenceCard } from "./service-competence-card";

const meta: Meta<ServiceCompetenceCardProps> = {
  component: ServiceCompetenceCard,
};

type Story = StoryObj<ServiceCompetenceCardProps>;

export default meta;

export const Primary: Story = {
  //👇 Creates specific argTypes
  argTypes: {
    variant: {
      options: ["big", "small"],
      control: { type: "radio" },
    },
  },

  render: (props) => (
    <ServiceCompetenceCard {...props}>Some button</ServiceCompetenceCard>
  ),
};
