const { Given, When, Then } = require('@cucumber/cucumber');
const { HomePage, InstructorsPage } = require('../pageobjects');

Given('I am on the Eteration Academy homepage', async () => {
    await HomePage.open();
});

When('I navigate to the instructors page', async () => {
    await HomePage.navigateToInstructors();
});

Then('I should see a non-empty list of instructors', async () => {
    const hasInstructors = await InstructorsPage.hasInstructors();
    await expect(hasInstructors).toBe(true);
});

Then('the instructor count should be {int}', async (expectedCount) => {
    const actualCount = await InstructorsPage.getInstructorCount();
    await expect(actualCount).toBe(expectedCount);
}); 