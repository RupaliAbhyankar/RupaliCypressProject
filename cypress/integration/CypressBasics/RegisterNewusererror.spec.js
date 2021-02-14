describe('Verify Mendetory fields',()=>{

    
    before('Navigate To Url',()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })

    
   it('Check error message',()=>{

     cy.get('.ico-register').click()
     cy.title().should('include','nopCommerce demo store. Register')
     cy.get('#register-button').click()
     cy.get('#FirstName-error').invoke('text').as('errormsg')
     cy.get('@errormsg').should('include','First name is required.')

   })
})