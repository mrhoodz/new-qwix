import type { Meta, StoryObj } from "storybook-framework-qwik";
import type { SearchComponentProps } from "./search-component";
import { SearchComponent } from "./search-component";

const meta: Meta<SearchComponentProps> = {
  component: SearchComponent,
};

type Story = StoryObj<SearchComponentProps>;

export default meta;

export const Primary: Story = {
  //👇 Creates specific argTypes

  render: (props) => <SearchComponent {...props}>Some button</SearchComponent>,
};
