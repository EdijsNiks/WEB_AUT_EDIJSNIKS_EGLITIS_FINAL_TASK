class DemoqaPage{
    static get url(){
        return "/automation-practice-form";
    }
    static get firstNameField(){
        return cy.get("#firstName");
    }
    static get lastNameField(){
        return cy.get("#lastName");
    }    
    static get emailField(){
            return cy.get("#userEmail");
    }
    static get genderButton(){
        return cy.get("#gender-radio-1");
    }
    static get mobileField(){
        return cy.get("#userNumber");
    }
    static get dateOfBirth(){
        return cy.get("#dateOfBirthInput");
    }
    static get selectDate(){
        return cy.get(".react-datepicker");
    }
    static get selectMonthFromPopUp(){
        return cy.get(".react-datepicker__month-select");
    }
    static get selectYearFromPopUp(){
        return cy.get(".react-datepicker__year-select");
    }
    static get selectTheDate(){
        return cy.get("div[aria-label='Choose Friday, February 28th, 1930']");
    }
    static get subjectsField(){
        return cy.get("#subjectsContainer");
    }
    static get hobbyMusic(){
        return cy.get("#hobbies-checkbox-3");
    }    
    static get currentAddress(){
        return cy.get("#currentAddress");
    }
    static get setState(){
        return cy.get("#stateCity-wrapper > :nth-child(2)");
    }
    static get setCity(){
        return cy.get("#stateCity-wrapper > :nth-child(3)");
    }
    static get pressUploadPicture(){
        return cy.get("input[type=file]");
    }
    static get pressSubmit(){
        return cy.get("#submit");
    }
    static visit (){
        cy.visit(this.url);
    }


    static get validateTableName(){
        return cy.get(".table > tbody > tr td:nth-child(2)");
    }
    static get validateTableEmail(){
        return cy.get(".table > tbody > tr:nth-child(2) > td:nth-child(2)");
    }
    static get validateTableGender(){
        return cy.get(".table > tbody > tr:nth-child(3) > td:nth-child(2)");
    }
    static get validateTableMobile(){
        return cy.get(".table > tbody > tr:nth-child(4) > td:nth-child(2)");
    }
    static get validateTableBirth(){
        return cy.get(".table > tbody > tr:nth-child(5) > td:nth-child(2)");
    }
    static get validateTableSubjects(){
        return cy.get(".table > tbody > tr:nth-child(6) > td:nth-child(2)");
    }
    static get validateTableHobbies(){
        return cy.get(".table > tbody > tr:nth-child(7) > td:nth-child(2)");
    }
    static get validateTablePicture(){
        return cy.get(".table > tbody > tr:nth-child(8) > td:nth-child(2)");
    }
    static get validateTableAddress(){
        return cy.get(".table > tbody > tr:nth-child(9) > td:nth-child(2)");
    }
    static get validateTableStateAndCity(){
        return cy.get(".table > tbody > tr:nth-child(10) > td:nth-child(2)");
    }

}
export default DemoqaPage;