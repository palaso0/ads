const title = () => cy.get('h1');
const inputs = () => cy.get('input')
const password = () => cy.get('#password')
const email = () => cy.get('#signin-email-text-field')
const signInButton = () => cy.get('button#sign-in-button')
describe('web-app', () => {
  beforeEach(() => cy.visit('/'));
  
  it('should display todos', () => {
    title().should((t) => expect(t.length).equal(1));
  });
  it('should display inputs labels', () => {
    inputs().should((t)=> expect(t.length).equal(2))
  })
  it('should display password input', () => {
    password().should((t) => expect(t.length).equal(1))
  })
  it('should display email input', () => {
    email().should((t) => expect(t.length).equal(1))
  })
  it('should display the button', () => {
    signInButton().should((t) => expect(t.length).equal(1))
  })  
});
