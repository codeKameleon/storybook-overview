import { Button } from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  backgroundColor: "#1976d2",
  size: "md",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  backgroundColor: "#193675",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  label: "Button",
  backgroundColor: "#1976d2",
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Button",
  backgroundColor: "#1976d2",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  label: "Button",
  backgroundColor: "#1976d2",
  size: "lg",
};
