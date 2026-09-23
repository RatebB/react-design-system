import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";

const meta = { title: "Components/Alert", component: Alert, tags: ["autodocs"] } satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = { args: { title: "Information", children: "Your profile is up to date." } };
export const Success: Story = { args: { variant: "success", title: "Success", children: "Changes were saved." } };
export const Warning: Story = { args: { variant: "warning", title: "Warning", children: "This action cannot be undone." } };
export const Danger: Story = { args: { variant: "danger", title: "Error", children: "Something went wrong." } };