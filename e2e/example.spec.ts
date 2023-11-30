import { test, expect, rest } from "next/experimental/testmode/playwright/msw";

test("prints name retrieved from the API", async ({ page, msw }) => {
  msw.use(
    rest.get("http://localhost:3000/api/hello", (req, res, ctx) => {
      return res.once(
        ctx.status(200),
        ctx.json({
          name: "Bar",
        })
      );
    })
  );

  await page.goto("/");

  await expect(page.getByTestId("message")).toHaveText("Hello Bar");
});
