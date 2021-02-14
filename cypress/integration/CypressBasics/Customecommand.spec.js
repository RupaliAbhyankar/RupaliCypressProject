///  <reference types="cypress" />

describe('Customsearch',()=>{

    
    before('Navigate To Url',()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })

    it('Customcommand',()=>{

     cy.SarchintoNop('mac')  
     cy.get('.product-title > a').should('be.visible')
    })
})