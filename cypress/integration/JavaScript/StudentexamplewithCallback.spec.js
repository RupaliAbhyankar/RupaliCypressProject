describe('js',()=>{


    it('Student Example without call backs',()=>{
      
         /*
         example - student database ....everytime we add a new student...
         data base should be updated with new data
       
          */

          let students = [

              {
                 id:1,
                 name:'alex',
                 age:7,
                 rollnum:1

              },
              {
                   id:2,
                   name:'joe',
                   age:8,
                   rollnum:2
              }
          ]


          let createStudent = (student) =>{
                setTimeout(()=>{
                     students.push(student)
                },3000)
          }

          let getStudentDetails = () =>{
               setTimeout(()=>{

                   students.forEach((student)=>{
                        console.log(`${student.id} ${student.name} ${student.age} ${student.rollnum}`)
                    })
                    console.log(students)

               },1000)
         }



        // getStudentDetails()

        createStudent({ id:3, name:'steve',age:9,rollnum:3})
        getStudentDetails()


    })


   


})