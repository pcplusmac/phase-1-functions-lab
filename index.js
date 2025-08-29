// Code your solution in this file!
const hq = 42;
let pickup;
let startBlock;
let endBlock;

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

function distanceFromHqInFeet(pickup) {
    let blocks = distanceFromHqInBlocks(pickup);
    let distanceInFeet = blocks * 264;
    return (distanceInFeet);
}

function distanceTravelledInFeet(startBlock,endBlock) {
    let blocksTravel;
    let distanceTravel;
    
    if (startBlock > endBlock) {
        blocksTravel = startBlock - endBlock;
        distanceTravel = blocksTravel * 264;
        return distanceTravel;
    } else if (startBlock < endBlock) {
        blocksTravel =  endBlock - startBlock ;
        distanceTravel = blocksTravel * 264;
        return distanceTravel;
    } else {
        return "lazy!"
    }
}
