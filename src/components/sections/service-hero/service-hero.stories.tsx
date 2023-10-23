import type { Meta, StoryObj } from "storybook-framework-qwik";
import type { ServiceHeroProps } from "./service-hero";
import { ServiceHero } from "./service-hero";

const meta: Meta<ServiceHeroProps> = {
  component: ServiceHero,
};

type Story = StoryObj<ServiceHeroProps>;

export default meta;

export const Primary: Story = {
  //👇 Creates specific argTypes

  render: (props) => <ServiceHero {...props}>Some button</ServiceHero>,
};
