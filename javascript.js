//1.Array creation and initialization
let car=["ferrari","lamborghini","porsche","mclaren"];
console.log(car);

//2.Array Manipulation
// remove  an element
let cars=["ferrari","lamborghini","porsche","mclaren"];
cars.shift("ferrari");
console.log(cars);

//ADD an element
let vehicle=["ferrari","lamborghini","porsche","mclaren"];
vehicle.unshift("Rolls Royce");
console.log(vehicle);

//pop an element
let laptop=["dell","hp","lenovo"]
laptop.pop("hp");
console.log(laptop);

//push an element
let file=["single","group","remove"]
file.push("modify");
console.log(file);

//3.removing array item by index
let arr=["file","document","computer"]
arr.pop(arr[1]);
console.log(arr);

//4.Merging the arrays
let arr1=["file","doc","system"]
let arr2=["computer","server","lap"]
console.log(arr1+","+arr2);

//5.reverse an array
let arr3=["file","doc","system"]
arr1.reverse(arr1);
console.log(arr1);

//sorting an array
let arr4=["file","doc","system"]
arr2.sort();
console.log(arr2);

