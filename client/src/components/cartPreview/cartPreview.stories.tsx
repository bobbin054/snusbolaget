// YourComponent.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CartPreview } from "./cartPreview";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "CartPreview",
  component: CartPreview,
} as ComponentMeta<typeof CartPreview>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CartPreview> = () => {
  return <CartPreview />;
};
export const Default = Template.bind({});

Default.args = {
  /*👇 The args you need here will depend on your component */
};
