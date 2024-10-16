const { test, expect} = require ("@playwright/test");
const signUpUrl = "https://cloud.appwrite.io/console/register";
test("signUp success", async ({ page }) =>{
await page.goto(signUpUrl);
const nameField = page.getByPlaceholder("Name");
const emailField = page.getByPlaceholder("Email");
const pwdField = page.getByPlaceholder("Password");
const caseField = page.getByRole("checkbox");
const signUpButton = page.getByRole("button", {
    name: "Sign up",
    exact: true,
  });

await nameField.fill("Naima");
await emailField.fill("flq0963kv4@somelora.com");
await pwdField.fill("naimaabou");
await caseField.click();
await signUpButton.click();

await expect( page.getByText("Welcome to Appwrite")).toBeVisible();
}) 

test("sign up missing name", async ({page}) =>{
  await page.goto(signUpUrl);
  const nameField = page.getByPlaceholder("Name");
  const emailField = page.getByPlaceholder("Email");
  const pwdField = page.getByPlaceholder("Password");
  const caseField = page.getByRole("checkbox");
  const signUpButton = page.getByRole("button", {name: "Sign up", exact: true});

  await nameField.fill("");
  await emailField.fill("flq0963kv4@somelora.com");
  await pwdField.fill("naimaabou");
  await caseField.click();
  await signUpButton.click()
  
  await expect (page.getByText("This field is required")).toBeVisible();
})

test("sign up with invalid email", async ({page}) => {
  await page.goto(signUpUrl);
  const nameField = page.getByPlaceholder("Name");
  const emailField = page.getByPlaceholder("Email");
  const pwdField = page.getByPlaceholder("Password");
  const caseField = page.getByRole("checkbox");
  const signUpButton = page.getByRole("button", {name: "Sign up", exact:true});

  await nameField.fill("Naima");
  await emailField.fill("flq0963kv4somelora.com");
  await pwdField.fill("naimaabou");
  await caseField.click();
  await signUpButton.click()

  await expect(page.getByText("Emails should be formatted as: name@example.com")).toBeVisible();
})

test("sign up with invalid password", async ({page}) => {
  await page.goto(signUpUrl);
  const nameField = page.getByPlaceholder("Name");
  const emailField = page.getByPlaceholder("Email");
  const pwdField = page.getByPlaceholder("Password");
  const caseField = page.getByRole("checkbox");
  const signUpButton = page.getByRole("button", {name: "Sign up", exact:true});

  await nameField.fill("Naima");
  await emailField.fill("flq0963kv4@somelora.com");
  await pwdField.fill("naima");
  await caseField.click();
  await signUpButton.click()

  await expect(page.getByText("Password should contain at least 8 characters")).toBeVisible();
})

test(" sing up with checkebox non checked", async ({page}) => {
  await page.goto(signUpUrl);
  const nameField = page.getByPlaceholder("Name");
  const emailField = page.getByPlaceholder("Email");
  const pwdField = page.getByPlaceholder("Password");
  const signUpButton = page.getByRole("button", {name: "Sign up", exact:true});

  await nameField.fill("naima");
  await emailField.fill("flq0963kv4@somelora.com");
  await pwdField.fill("naimaabou");
  
  await signUpButton.click()

  await expect(page.getByText("This field is required")).toBeVisible();
})

