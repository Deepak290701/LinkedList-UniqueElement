let check = new Map();

let array = [];


function insertInArray(value){
    if(!check[value]){
        array.push(value);
        check[value] = 1;
        console.log('=> Value Added Successfully')
    }
    else{
        console.log('=> Value Already Present')
        return ;
    }
}

insertInArray(10);
insertInArray(20);
insertInArray(30);
insertInArray(-30);
insertInArray("sacadsc");

insertInArray("sacadsc");
insertInArray(30);
insertInArray(10);

console.log(array);