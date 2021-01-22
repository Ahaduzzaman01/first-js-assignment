// https://github.com/Ahaduzzaman01/first-js-assignment 

// Problem 1
// Kilometer to meter converter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;

    // This condition is for showing error messages only
    if (kilometer<0){
        return("Distance cannot be negative.");
    }

    return meter;
}



// Problem 2
// Budget calculator
function budgetCalculator(watch, phone, laptop) {
    var watchPrice;
    watchPrice = watch * 50;

    // This condition is for showing error messages only 
    if (watch<0){
        return("You cannot set negative value.");
    }
    
    var phonePrice;
    phonePrice = phone * 100;

    // This condition is for showing error messages only
    if (phone<0){
        return("You cannot set negative value.");
    }

    var laptopPrice;
    laptopPrice = laptop * 500;

    // This condition is for showing error messages only
    if (laptop<0){
        return("You cannot set negative value.");
    }

    var totalPrice;
    totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}


// Problem 3 
// Hotel cost calculator
function hotelCost(days) {
    var totalCost = 0;
    if (days <= 10) {
        totalCost = days * 100;

    // This condition is for showing error messages only
    if (days<=0){
        return("You cannot set zero or negative value.");
    }

    } else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = days - 10;
        var secondTenDays = remainingDays * 80;
        totalCost = firstTenDays + secondTenDays;
    } else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = days - 20;
        var extraDays = remainingDays * 50;
        totalCost = firstTenDays + secondTenDays + extraDays;
    }
    return totalCost;
}


// Problem 4
// Find the longest name
function megaFriend(array){
    var arrayPosition = [0];
    var longestName;
    
    for (var i = 0; i < array.length; i++) {
      if (array[i].length > arrayPosition) {
        var arrayPosition = array[i].length;
        longestName = array[i];
      }
    }
    return longestName;
}