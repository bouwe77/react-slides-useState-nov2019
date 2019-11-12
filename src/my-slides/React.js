import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# REACT

* Components are the **building blocks** of your application

* State makes your components **dynamic**
    `;
  return <MarkdownSlide markdown={markdown} />;
};
