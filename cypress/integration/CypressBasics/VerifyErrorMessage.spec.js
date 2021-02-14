describe('nop ecommerce',()=>{
    it('Verifyerrormessage',()=>{

        cy.visit('https://demo.nopcommerce.com/')
        cy.get('.ico-register').invoke('text').then((text) => {
            cy.log (text)
        })
    } )

} )