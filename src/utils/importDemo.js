import { lazy } from "react";

const importDemo = (file) => {
  return lazy(() => import(`../components/${file}`)); // it is a asynchronous task. It  will return a promise. That means - when the file will be imported successfully then the promise will be resolved.
};
export default importDemo;
