import type { Meta, StoryObj } from "storybook-framework-qwik";
import type { OurServiceAreasProps } from "./our-service-areas";
import { OurServiceAreas } from "./our-service-areas";

const meta: Meta<OurServiceAreasProps> = {
  component: OurServiceAreas,
};

type Story = StoryObj<OurServiceAreasProps>;

export default meta;

export const Primary: Story = {
  //👇 Creates specific argTypes
  argTypes: {
    count: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },

  render: (props) => <OurServiceAreas {...props}>Some button</OurServiceAreas>,
};
