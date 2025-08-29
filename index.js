// Code your solution in this file!
const hq = 42;
let pickup;
let startBlock;
let endBlock;
let start;
let destination;

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


function calculatesFarePrice(start, destination) {
    let fare;
    let feet = distanceTravelledInFeet(start,destination);
    if (feet <= 400) {
        fare = 0;
        return (fare)

    } else if ((feet > 400 ) && (feet <= 2000)) {
        fare = (feet - 400 ) *0.02;
        return fare;
    }else if ((feet > 2000) && (feet <= 2500)) {
        fare = 25;
        return fare;
    }else if (feet > 2500) {
        return "cannot travel that far"
    }else {
        return "what can i do for you?"
    }
}