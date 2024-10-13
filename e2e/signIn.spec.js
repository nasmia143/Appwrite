const { test, expect } = require("@playwright/test");
const loginUrl = "https://cloud.appwrite.io/console/login";
test("Login success", async ({ page }) => {
  await page.goto(loginUrl);
  const emailField = page.getByPlaceholder("Email");
  const pwdField = page.getByPlaceholder("Password");
  const signButton = page.getByRole("button", {
    name: "Sign in",
    exact: true,
  });

  await emailField.fill("sitepi3811@rowplant.com");
  await pwdField.fill("@@appwrite@@");
  await signButton.click();

  await expect(page.getByText("Abou")).toBeVisible();
});

test("Login with invalid email format", async ({ page }) => {
  await page.goto(loginUrl);
  const emailField = page.getByPlaceholder("Email");
  const pwdField = page.getByPlaceholder("Password");
  const signButton = page.getByRole("button", { name: "Sign in", exact: true });

  await emailField.fill("sitepi3811rowplant.com");
  await pwdField.fill("@@appwrite@@");
  await signButton.click();

  await expect(
    page.getByText("Emails should be formatted as: name@example.com")
  ).toBeVisible();
});

test("Login with wrong credentials", async ({ page }) => {
  await page.goto(loginUrl);
  const emailField = page.getByPlaceholder("Email");
  const pwdField = page.getByPlaceholder("Password");
  const signButton = page.getByRole("button", { name: "Sign in", exact: true });

  await emailField.fill("nasmia.study@gmail.com");
  await pwdField.fill("@@appwrite@");
  await signButton.click();

  await expect(
    page.getByText("Invalid credentials. Please check the email and password ")
  ).toBeVisible();
});
