

//scenario: verify error message and login to cosole
describe('Nop Commerce',()=>{

    it('identifybyXPATH',()=>{ 
    cy.visit('https://demo.nopcommerce.com/')

    cy.get('input#small-searchterms').type('desktops')// using id
    cy.xpath('//input[@value="Search"]').click()// using relative xpath
    cy.xpath('//div[text()="No products were found that matched your criteria."]').invoke('text').then((text)=>{
        cy.log(text)
} )
} )
} )



describe('Nop Commerces',()=>{

    it('identifybyXPATH1',()=>{ 
    cy.visit('https://demo.nopcommerce.com/')
    //cy.xpath(//a[@title="Show products in category Apparel"])[1].click()
   cy.xpath('(//a[@title="Show products in category Digital downloads"])[1]')
  // cy.xpath('(//a[@title="Show products in category Digital downloads"])[1]').click()
       
    })
} )

describe('Nop Commerces',()=>{

    it('identifybyXPATH1',()=>{ 
    cy.visit('https://demo.nopcommerce.com/')
   
  cy.xpath('//a[contains(text(),"Recently ")]').click()
       
    })
} )