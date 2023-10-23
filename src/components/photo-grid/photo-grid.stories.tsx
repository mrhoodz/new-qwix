import type { Meta, StoryObj } from "storybook-framework-qwik";
import type { PhotoGridProps } from "./photo-grid";
import { PhotoGrid } from "./photo-grid";

const meta: Meta<PhotoGridProps> = {
  component: PhotoGrid,
};

type Story = StoryObj<PhotoGridProps>;

export default meta;

export const Primary: Story = {
  //👇 Creates specific argTypes

  render: (props) => <PhotoGrid {...props}>Some button</PhotoGrid>,
};
