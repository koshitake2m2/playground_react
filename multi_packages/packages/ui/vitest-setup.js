// globalにするのは難しかった. vscodeとmulti packageの相性が悪そう...
// import "@testing-library/jest-dom/vitest";
// import "vitest";

import { cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach } from "vitest";

export const user = userEvent.setup();

afterEach(() => {
  cleanup();
});
