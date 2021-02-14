describe('nop ecommerce',()=>{
    it('Navigate to url',()=>{
        cy.visit('https://demo.nopcommerce.com/')

        cy.get('.answer:nth-of-type(2)').click()

        cy.get('input.vote-poll-button').click()
        cy.get('#block-poll-vote-error-1').should('have.text','Only registered users can vote.')

     
       //cy.get('.ico-register').click()
       // cy.get('#small-searchterms').type('Apple')    // using id
       // cy.get('.search-box-button').click()  //using class
        //cy.get('.product-box-add-to-cart-button').click() // // need to use  attribute value , using class now
    
    } )

} )