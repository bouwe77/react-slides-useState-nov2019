import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# useState hook

Making function components stateful
    `;
  return <MarkdownSlide markdown={markdown} />;
};
