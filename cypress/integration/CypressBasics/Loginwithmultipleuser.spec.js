const getFixtures = [
    {
        "name":"Logindata1",
        "context": "1"
    },
    {
      "name":"Logindata2",
      "context": "2"
    },
    
  ]

  
  describe('Login with multiple user',function(){
  
    getFixtures.forEach((getFixture)=>{
        context(getFixture.context,function(){
          before(function(){
            cy.fixture(getFixture.name).then(function(data){
              this.data = data;
            })
          })
  
          it('Login with multiple user',function(){
  
            cy.visit('https://demo.nopcommerce.com/')
            cy.get('.ico-login').click()
            cy.title().should('include','nopCommerce demo store. Login')

            cy.get('#Email').type(this.data.email)
            cy.get('#Password').type(this.data.password)
          
            cy.get('.login-button').click()
           cy.title().should('include','nopCommerce demo store')
      
      
         })
        })
    })
  
  
      
  
  
  
  })