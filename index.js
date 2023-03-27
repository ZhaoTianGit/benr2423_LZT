// // let data1 = 1
// // let data2 = "1.11"

// // console.log(data1, "is :", typeof data1)
// // console.log(data2, "is :", typeof data2)

// // let data3 = data1 + parseFloat(data2)

// // console.log(data3, typeof data3)

// //Array
// let data = ["one", 2, true]
// console.log(data)
// console.log(data[1], typeof data[1])

//Object
let user ={
    name:"soo",
    faculty:"FKEKK",
    phone: 123456,
    email: "soo@utem.edu.my"
    }
    
    console.log(user.phone, typeof user.phone)

let user1 ={
    name:"soo",
    faculty:"FKEKK",
    phone: [123456,098765],
    email: "soo@utem.edu.my"
    }
    console.log(user1.phone, typeof user1.phone)
    
let user2 ={
    name:"soo",
    faculty:"FKEKK",
    phone:  {
        office: 123456,
        home:   098765
    },
    email: "soo@utem.edu.my"
}
console.log(user2.phone.home, typeof user2.phone.home)