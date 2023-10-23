import type { Meta, StoryObj } from "storybook-framework-qwik";
import {
  ProjectOverviewCard,
  type ProjectOverviewCardProps,
} from "./project-overview-card";

const meta: Meta<ProjectOverviewCardProps> = {
  component: ProjectOverviewCard,
};

type Story = StoryObj<ProjectOverviewCardProps>;

export default meta;

export const Primary: Story = {
  //👇 Creates specific argTypes
  argTypes: {
    variant: {
      options: ["Primary", "Secondary"],
      control: { type: "radio" },
    },
  },

  render: (props) => {
    console.log(props.variant);
    return <ProjectOverviewCard {...props}>Some button</ProjectOverviewCard>;
  },
};
