import { dummy } from "./extension.js";

describe(dummy.name, () => {
  it("works", () => {
    expect(dummy()).toMatchInlineSnapshot(`"data from extension"`);
  });
});
