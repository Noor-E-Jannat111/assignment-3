


//kilometerToMeter

function kilometerToMeter (meter){
    var km = 7;
    var meter = km * 1000;
    return meter;
}

var kiloMeter = kilometerToMeter(7);
console.log(kiloMeter);

 
//budgetCalculator

function budgetCalculator(watch, phone, laptop){
    var watch = 50;
    var phone = 100;
    var laptop = 500;
    var total = 50 + 100 + 500;
    return total;
}

var total = 50 + 100 + 500;
console.log(total);


//megaFriend

function megaFriend(array){
    var max = array[0].length;
    var ans = array[0];
    for(var i = 1; i < array.length; i++){
        var maxi = array[i].length;
        if(maxi > max) {
            ans = array[i];
            max = maxi;
        }
    }
    return ans;
}

console.log(megaFriend(["Sajaid", "Moina", "Rukaiya Nakib"]))