import DemoqaPage from "../pageObject/Demoqa.page"

describe("DemoQA spec", () => {
  context("Automation scenarios", () => {
    beforeEach(() => {
      cy.visit("/automation-practice-form");
    });

    it("Automation positive CASE", () => {
      //Set full name
      DemoqaPage.firstNameField.type("Donald");
      //Set Email
      DemoqaPage.lastNameField.type("random");
      //Set email
      DemoqaPage.emailField.type("hello@random.com");
      //Set gender
      DemoqaPage.genderButton.click({force: true});
      //Set number
      DemoqaPage.mobileField.type("29485678");
      //Click date of birth field
      DemoqaPage.dateOfBirth.click();
      //Select birth date
      DemoqaPage.selectDate.click();
      //Select the month of birth
      DemoqaPage.selectMonthFromPopUp.select("February");
      //Select the year of birth
      DemoqaPage.selectYearFromPopUp.select("1930");
      //Select the February 28th
      DemoqaPage.selectTheDate.click();
      //Select Economics as subject
      DemoqaPage.subjectsField.type("Economics{enter}");
      //Select music as hobby
      DemoqaPage.hobbyMusic.click({force: true});
      //Set image path and upload it to cypress
      const fileName = 'cypress/files/Football-2.jpeg';
      DemoqaPage.pressUploadPicture.selectFile(fileName);
      //Set the address
      DemoqaPage.currentAddress.type("Zvejnieku iela");
      //Set state as NCR
      DemoqaPage.setState.click().type("NCR{enter}");
      //Set city as Delhi
      DemoqaPage.setCity.click().type("Delhi{enter}");
      //Press submit
      DemoqaPage.pressSubmit.click({force: true});


      //Validate if all the form fields contain the same info that was provided
      DemoqaPage.validateTableName.should("contain.text", "Donald random")
      DemoqaPage.validateTableEmail.should("contain.text", "hello@random.com")
      DemoqaPage.validateTableGender.should("contain.text", "Male")
      DemoqaPage.validateTableMobile.should("contain.text", "29485678")
      DemoqaPage.validateTableBirth.should("contain.text", "28 February,1930")
      DemoqaPage.validateTableSubjects.should("contain.text", "Economics")
      DemoqaPage.validateTableHobbies.should("contain.text", "Music")
      DemoqaPage.validateTablePicture.should("contain.text", "Football-2.jpeg")
      DemoqaPage.validateTableAddress.should("contain.text", "Zvejnieku iela")
      DemoqaPage.validateTableStateAndCity.should("contain.text", "NCR Delhi")

    });
  });
})
