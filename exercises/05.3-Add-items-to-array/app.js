var arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.

while(arr.length < 7){
    var nRandom = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(nRandom) === -1) arr.push(nRandom);
}

console.log(arr);

