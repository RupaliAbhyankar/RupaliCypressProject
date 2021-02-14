describe('Javascript Basics',()=>{// while loop


    it('Objects',()=>{

let Car={

CarMake:'BMW',
CarColour:'Red',
CarModel:'Lux',
CarYear:1999,
CarSpec:['wheels','engine','mirrors']
}

    console.log(Car)
  // propertoes of object can be accessed using dot and bracket notation


  console.log(Car.CarMake) // dot notation
  console.log(Car.CarModel)

  console.log(Car.CarSpec[2])



  console.log(Car['CarSpec']) // bracket notation
  console.log(`${Car.CarSpec[1]}`)

console.log(Car['Number'])  // bracket notation


  // add values to object 

  Car.city = 'Germany',
  Car['OwnerName'] = 'Steve',
  

  console.log(Car)




    } )

} )