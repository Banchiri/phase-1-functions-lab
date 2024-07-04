const headquarters = 42;
function distanceFromHqInBlocks(value){
    return Math.abs(value - headquarters);
}
function distanceFromHqInFeet(value){
    return (distanceFromHqInBlocks(value) * 264);
}
function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264;
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if(distance <= 400){
        return 0;
    }
    else if(distance > 400 && distance <=1200){
        return (distance - 400) * 0.02;
    }
    else if(distance >=2000 && distance <= 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}
