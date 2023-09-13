import { createBrowserRouter } from "react-router-dom";
import { Button } from "@fluentui/react-components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Button appearance="primary">Get started</Button>
      </div>
    ),
  },
]);
