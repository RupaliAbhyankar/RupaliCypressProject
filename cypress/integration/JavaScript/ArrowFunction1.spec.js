describe('Javascript Basics',()=>{// while loop


    it('ArrowFunction1',()=>{

// map 

//const numbers= [5,6,7,8,9]
//{ const num= numbers.map((number)=>2*number)

//console.log(num)

//}
      // array of objects
      let Products= [
          {
              Prodid : 101,
              ProdName:'Laptop',
              ProdCompany: 'Sony',
              Prodcolor:'Black',
              ProdPrice: 50000,
              ProdAvailable: true

          },
          {

            Prodid:102,
            ProdName:'Laptop',
            ProdCompany: 'Dell',
            Prodcolor:'Silver',
            ProdPrice:70000,
            ProdAvailable: true
          },
          {
          Prodid: 103,
          ProdName:'Desktop',
          ProdCompany: 'Sony',
          Prodcolor: 'Black',
          ProdPrice:5000,
          ProdAvailable: false
          },

          {
            Prodid: 104,
            ProdName:'Desktop',
            ProdCompany: 'Dell',
            Prodcolor: 'Black',
            ProdPrice:5000,
            ProdAvailable: false
          },
          
          {
            Prodid: 105,
            ProdName:'Mobile',
            ProdCompany: 'Samsung',
            Prodcolor: 'Black',
            ProdPrice:9000,
            ProdAvailable: true
          },
         {
            Prodid: 106,
            ProdName:'Mobile',
            ProdCompany: 'Sony',
            Prodcolor: 'Black',
            ProdPrice:6000,
            ProdAvailable: true
         },
      ];

      let getAvailableProducts= Products.filter((Products)=>{
        return Products.ProdAvailable===false
      })
      console.log(getAvailableProducts)
      
} )
} )
