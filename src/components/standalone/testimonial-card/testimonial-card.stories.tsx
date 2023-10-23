import type { Meta, StoryObj } from "storybook-framework-qwik";
import type { TestimonialCardProps } from "./testimonial-card";
import { TestimonialCard } from "./testimonial-card";

const meta: Meta<TestimonialCardProps> = {
  component: TestimonialCard,
};

type Story = StoryObj<TestimonialCardProps>;

export default meta;

export const Primary: Story = {
  //👇 Creates specific argTypes
  argTypes: {
    variant: {
      options: ["mobile", "tablet"],
      control: { type: "radio" },
    },
  },
  render: (props) => <TestimonialCard {...props}>Some button</TestimonialCard>,
};
