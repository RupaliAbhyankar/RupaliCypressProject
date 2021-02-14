describe('Nop Commerce',()=>{

    it('identify by locators',()=>{

        cy.visit('https://demo.nopcommerce.com/')
        cy.get('input#small-searchterms').type('desktops')// using id
        cy.get('input.search-box-button').click()//using class
        cy.get('input[type="email"]').type('rupali123@gmail.com')// using attribute value
        cy.get('input#newsletter-subscribe-button').click()
        cy.get('div#newsletter-result-block').should('have.text','Thank you for signing up! A verification email has been sent. We appreciate your interest.')
    
    } )

} )


