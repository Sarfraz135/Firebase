// function Student(name,roll){
//     this.name = name;
//     this.roll = roll;
//     this.getName = function(){
//         return this.name;
//     }
// }




// function Student(name,roll){
//     this.name = name;
//     this.roll = roll;
// }

// Student.prototype.getName = function(){
//     return this.name;
// }

// var student1 = new Student("ghous",123)
// var student2 = new Student("fraz",135)
// console.log(student1.getName())
// console.log(student2.getName())






















// var student2 = {
//     name: "Sarfraz",
//     roll: 321
// }
// console.log("roll" in student2)



// var student2 ={
//     name:"Sarfraz",
//     roll: 321,
//     School: "saylani"
// }

// for(var prop in student2){
//     console.log(prop)
// }




// var student2 ={
//     name:"Sarfraz",
//     roll: 321,
//     School: "saylani"
// }

// for(var key in student2){
//     console.log(student2[key])
// }






// var student2 ={
//     name:"Sarfraz",
//     roll: 321,
//     School: "saylani"
// }

// for(var key in student2){
//     console.log(key,student2[key])
// }





// var student2 ={
//     name:"Sarfraz",
//     roll: 321,
//     School: "saylani"
// }

// console.log(student2.hasOwnProperty("roll"))
// console.log(student2.hasOwnProperty("constructor"))


















//database with firebase

function saveData(){
    var name = document.getElementById("name");
    var roll = document.getElementById("roll");


    var student = {
        name: name.value,
        roll: roll.value,
    }

    // console.log(student)

    // firebase.database().ref('student').set(student)
    // firebase.database().ref('student').set('fraz')
    // firebase.database().ref('student').child("student").set(student)
    // firebase.database().ref('student/student1').set(student)
 

    // set over rite krta hai but push over write nh krta new data enter krta hai
    // firebase.database().ref('student').push(student)

    // firebase.database().ref('student').child("student").push(student)

    // // with random key 
    // var key = Math.random() * 2345687989745;
    // firebase.database().ref('student/' + key.toFixed()).set(student)


    // with firebase random key 
     var key =  firebase.database().ref('student').push().key
    var student = {
        name: name.value,
        roll: roll.value,
        key: key
    }
   
    firebase.database().ref('student/' +key).set(student)


    name.value = "";
    roll.value = ""
}














//get firebase data

// function getFirebaseData(){
//     // once ka method just ek br page k fresh hne pr data get krta hai ..update hne pr data get nh krta
//     firebase.database().ref('student/-MEx3Ru_ojoQSpwsfzk7').once('value',function(data){
//         console.log(data.val())
//     })
// }


// function getFirebaseData(){
//     // once ka method just ek br page k fresh hne pr data get krta hai ..update hne pr data get nh krta
//     firebase.database().ref('student').once('value',function(data){
//         console.log(data.val())
//     })
// }


// function getFirebaseData(){
//     // once ka method just ek br page k fresh hne pr data get krta hai ..update hne pr data get nh krta
//     firebase.database().ref('student').on('child_added',function(data){
//         console.log(data.val())
//     })
// }

// getFirebaseData()











// removed firebase data

// function removedFirebaseData(){
//     firebase.database().ref('student/-MEx3Ru_ojoQSpwsfzk7').remove()
// }


// removedFirebaseData()








// edit firebase data 
function editFirebaseData(){
    firebase.database().ref('student/-MEx3Ru_ojoQSpwsfzk7').set({
        key: '-MEx3Ru_ojoQSpwsfzk7',
        name : 'fraz',
        roll: '112233'
    })
}

editFirebaseData()











