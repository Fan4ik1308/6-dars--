// Array
//     const mevalar = [
//         "Olma" , "Banan" , "Nok" ,"Olcha" , "Shaftoli" ,
//         [
//             "Cobalt" , "Malibu" , "Captiva" , "Nexia" ,
//             [
//                 "BMW" , "MERS" , "Audi" , "Mustang" , 
//             ],
//             [
//                 "Iphone" , "Samsung" , "Nokia" , "Redmi"
//             ]
//         ],
//         [
//     "Mars" , "ShukurBOt" , "NodirBot"
//         ]
        
//     ];
    


// console.log(mevalar [1][6][0]);

// if else

// push => Oxiridan qoshadi
// unshift=> Boshidan qoshadi
// shift=> Boshidan chopadi
// pop => oxiridan chopadi

// const user = prompt("moshinangizni tanlang");

// console.log(user);



const moshinalar = ["BMW", "MERCEDES", "LAMBORGHINI", "McLaren"];

console.log("Massiv uzunligi:", moshinalar.length);
alert("Massiv uzunligi: " + moshinalar.length);


let isConfirmed = confirm("Oxirgi element olib tashlansinmi?");

if (isConfirmed) {
    let removedCar = moshinalar.pop(); 
    console.log("Chopilgan moshina:", removedCar);
    alert("Chopilgan moshina: " + removedCar);
} else {
    console.log("Massiv o'zgarishsiz qoldi.");
    alert("Massiv o'zgarishsiz qoldi");
}

console.log("Qolgan mashinalar:", moshinalar);
alert("Qolgan mashinalar: " + moshinalar.join(" "));







