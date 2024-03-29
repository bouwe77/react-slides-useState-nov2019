import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# REACT ⚛️

* Components are the **UI building blocks** of your application

* State makes your components **dynamic**

* Next to UI, components can also have logic and behavior
    `;
  return <MarkdownSlide markdown={markdown} />;
};
