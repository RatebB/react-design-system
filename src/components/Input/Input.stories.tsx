import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: "Email", placeholder: "you@example.com" } };
export const WithHint: Story = { args: { label: "Password", hint: "Minimum 8 characters", type: "password" } };
export const WithError: Story = { args: { label: "Email", value: "wrong", error: "Please enter a valid email address", readOnly: true } };