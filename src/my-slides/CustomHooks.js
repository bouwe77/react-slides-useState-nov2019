import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# CUSTOM HOOKS

Abstracting code that uses hooks into a **separate function** 

outside of the component to enable **reuse**
`;
  return <MarkdownSlide markdown={markdown} />;
};
