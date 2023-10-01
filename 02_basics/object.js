//Singleton
//Object.create   //like that also we can create object but at the time of constructor

//object literal

const mysym = Symbol("key1 ")

const jsUser= {
    name:"Prasad",
    "full name": "Prasad Somvanshi",
    [mysym]:"mykey1",
    email:"Prasad@gmail.com",
    location:"pune",
    isLOggedIn: false,
    lastLoginDays:["monday","saturday"]

}


//name and "full name having same data type as string we can write name dirrectly js Automatically take as string"

console.log(jsUser.email); 
console.log(jsUser["full name"]);

console.log(jsUser[mysym]);
console.log(typeof [mysym]);