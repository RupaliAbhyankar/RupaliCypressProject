describe('NevigateMenus',()=>{

    
    before('Navigate To Url',()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })

    
   it('Mousehover',()=>{

      cy.xpath('(//a[text()="Electronics "])[1]').trigger('mouseover') 
      cy.xpath('(//a[text()="Cell phones "])[2]').click({force: true})
      cy.title().should('include','nopCommerce demo store. Cell phones')

   })
})