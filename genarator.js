function* getGenarator (start = 0, stop = 100, step = 5) {
    for (let i = start; i < stop; i += step) {
        yield i
    }
}

const genaratorIterator = getGenarator(10, 20, 1);

// console.log(genaratorIterator.next())
// console.log(genaratorIterator.next())
// console.log(genaratorIterator.next())
// console.log(genaratorIterator.next())

for(let v of genaratorIterator) {
    console.log(v)
}