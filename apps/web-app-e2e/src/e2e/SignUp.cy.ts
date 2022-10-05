

describe('SignUp', () => {
    beforeEach(() => cy.visit('/signUp'))
    it('should display input Select User Type', () => {
        const userTypeMenu = () => cy.get('#sign-up-select-user-type');
        const client = () => cy.get("#Sign-up-CLIENT")
        const publisher = () => cy.get("#Sign-up-PUBLISHER")
        const admin = () => cy.get("#Sign-up-ADMIN")

        userTypeMenu().should((t) => expect(t.length).equal(1))
        userTypeMenu().should('have.attr', 'aria-expanded', 'false')
        client().should((t) => expect(t.length).equal(0))
        publisher().should((t) => expect(t.length).equal(0))
        admin().should((t) => expect(t.length).equal(0))
        userTypeMenu().click()
        userTypeMenu().should('have.attr', 'aria-expanded', 'true')
        client().should((t) => expect(t.length).equal(1))
        publisher().should((t) => expect(t.length).equal(1))
        admin().should((t) => expect(t.length).equal(1))
    })
    it('should display title SignUp', () => {
        const signUpTitle = () => cy.get('h1');
        signUpTitle().should((t) => expect(t.length).equal(1));
    })
    it('should display input User Type', () => {
        cy.get('label#sign-up-select-user-type-label').should((t) => expect(t.length).equal(1));
    })
    it('should display input First Name', () => {
        const firstNameInput = () => cy.get('#sign-up-first-name-label')
        firstNameInput().should((t) => expect(t.length).equal(1));
    })
    it('should display input Last Name', () => {
        const lastNameInput = () => cy.get('#sign-up-last-name-label')
        lastNameInput().should((t) => expect(t.length).equal(1));
    })
    it('should display input User Name', () => {
        const userNameInput = () => cy.get('#sign-up-user-name-label')
        userNameInput().should((t) => expect(t.length).equal(1));
    })
    it('should display input Email Address', () => {
        const emailAddressInput = () => cy.get('#sign-up-email-address-label')
        emailAddressInput().should((t) => expect(t.length).equal(1));
    })
    it('should display input Password', () => {
        const passwordInput = () => cy.get('#sign-up-password-label')
        passwordInput().should((t) => expect(t.length).equal(1));
    })
    it('should display the button', () => {
        const signUpButton = () => cy.get('button#sign-up-button')
        signUpButton().should((t) => expect(t.length).equal(1))
    })
});

describe('Display photo URL and cellphone inputs when select Publisher as User type', () => {
    beforeEach(() => cy.visit('/signUp'))
    it('should display input Select User Type', () => {
        const userTypeMenu = () => cy.get('#sign-up-select-user-type');
        const client = () => cy.get("#Sign-up-CLIENT")
        const publisher = () => cy.get("#Sign-up-PUBLISHER")
        const admin = () => cy.get("#Sign-up-ADMIN")

        userTypeMenu().should((t) => expect(t.length).equal(1))
        userTypeMenu().should('have.attr', 'aria-expanded', 'false')
        client().should((t) => expect(t.length).equal(0))
        publisher().should((t) => expect(t.length).equal(0))
        admin().should((t) => expect(t.length).equal(0))
        userTypeMenu().click()
        userTypeMenu().should('have.attr', 'aria-expanded', 'true')
        client().should((t) => expect(t.length).equal(1))
        publisher().should((t) => expect(t.length).equal(1))
        admin().should((t) => expect(t.length).equal(1))
        publisher().click()
        const photoUrlInput = () => cy.get('#sign-up-photo-url')
        const cellphoneInput = () => cy.get('#sign-up-cellphone')
        photoUrlInput().should((t) => expect(t.length).equal(1))
        cellphoneInput().should((t) => expect(t.length).equal(1))
    })
});