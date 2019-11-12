import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Custom hooks

* ...
`;
  return <MarkdownSlide markdown={markdown} />;
};
