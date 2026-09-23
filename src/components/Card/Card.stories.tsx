import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    children: null,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <h3 className="font-semibold">Project settings</h3>
      <p className="mt-2 text-sm text-gray-600">Reusable content container for React applications.</p>
    </Card>
  ),
};