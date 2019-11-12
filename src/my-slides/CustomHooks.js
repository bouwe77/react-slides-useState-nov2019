import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# CUSTOM HOOKS

* ...
`;
  return <MarkdownSlide markdown={markdown} />;
};
