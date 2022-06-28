// const arr = [1, 2, 3, 4, 5];

// let index = 0;

// function next() {
//   return  arr[index++]
// }

// console.log(next());
// console.log(next());
// console.log(next());
// console.log(next());
// console.log(next());
// console.log(next());

// const range = {
//     start: 0,
//     stop : 100,
//     step: 5,
// }

// range[Symbol.iterator] = function () {

//     let corrunt = this.start
//     const stop = this.stop
//     const step = this.step

//     return{
//         next() {
//             const obj = {
//                 value : corrunt,
//                 done : stop < corrunt,
//             }

//             corrunt += step
//             return obj
//         }
//     }


// }

// const rangeIterator = range[Symbol.iterator]()

// for(let v of range) {
//     console.log(v)
// }


const pName = 'Product'

// for (let v of pName) {
//     console.log(v);
// }

pName[Symbol.iterator] = function () {
    return{
        next(){
            return pName
        }
    }
}

const pNameIterator = pName[Symbol.iterator]()

console.log(pNameIterator.next().value)
console.log(pNameIterator.next().value)
console.log(pNameIterator.next().value)