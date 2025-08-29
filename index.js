// Code your solution in this file!
const hq = 42;
let pickup;

function distanceFromHqInBlocks(pickup) {
    let distanceInBlock;
    
    if (pickup > 42){
        distanceInBlock = pickup - 42;
        return (distanceInBlock);
    }  else if (pickup < 42) {
        distanceInBlock = 42 - pickup;
        return (distanceInBlock);

    } else {
        return "you are not moving. "
    }
}

