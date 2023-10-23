import type { Meta, StoryObj } from "storybook-framework-qwik";
import type { ContactUsHeroProps } from "./contact-us-hero";
import { ContactUsHero } from "./contact-us-hero";

const meta: Meta<ContactUsHeroProps> = {
  component: ContactUsHero,
};

type Story = StoryObj<ContactUsHeroProps>;

export default meta;

export const Primary: Story = {
  //👇 Creates specific argTypes

  render: (props) => <ContactUsHero {...props}>Some button</ContactUsHero>,
};
