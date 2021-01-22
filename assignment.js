//

/**
 * Returns the value after converting it from kilometer to meter
 * 
 * @param {number} value The number to convert 
 */
function kilometerToMeter(value){

  if(value < 0)
    return "Can not convert a negative value";
  else  
    return value * 1000; // 1km = 1000m  

}

/**
 * Returns total budget of buying watch, phone and laptop
 * 
 * @param {number} watch The number of watch to buy
 * @param {number} phone The number of phone to buy
 * @param {number} laptop The number of laptop to buy
 *  
 */
function budgetCalculator(watch,phone,laptop){

  let watchPrice  = 50;    //cost per watch
  let phonePrice  = 100;  //cost per phone
  let laptopPrice = 500;  //cost per laptop

  if(watch < 0)
    return "Please enter a valid number of watch.";
  else if(phone < 0)
    return "Please enter a valid number of phone.";
  else if(laptop < 0)
    return "Please enter a valid number of laptop."
  else
    return (watch * watchPrice) + (phone * phonePrice) + (laptop * laptopPrice); 

}


/**
 * Returns total hotel cost by calculating number of days stayed
 * 
 * @param {number} days The number of days stayed at hotel
 */
function hotelCost(days){

  let firstTenDaysCost    = 100;   //cost per day for 1-10 days
  let afterTenDaysCost    = 80;    //cost per day for 11-20 days
  let afterTwentyDaysCost = 50;    //cost per day after 20 days

  let remainingDays,remainingDaysCost;

  if(days >0){
    if(days > 20){
      remainingDays = days - 20;
      remainingDaysCost = remainingDays * afterTwentyDaysCost;

      return remainingDaysCost + (afterTenDaysCost * 10) + (firstTenDaysCost * 10);
    }
    else if(days <=20 && days > 10){
      remainingDays = days - 10;
      remainingDaysCost = remainingDays * afterTenDaysCost;
      
      return remainingDaysCost + (firstTenDaysCost * 10);
    }
    else{
      return days * firstTenDaysCost;
    }
  }
  else{
    return 'Please Enter Postive Number to Calculate Cost...';
  }
}

/**
 * Returns the longest name among the friend from the array
 * 
 * @param {array of string} names The names of friends 
 */
function megaFriend(names){
  if(Array.isArray(names) && names.length > 0){   //checking whether the array is valid or empty 
    var longest = names[0];
    for(let i=1; i<names.length; i++)
      {
        if(names[i].length > longest.length)    //checking for the longest name
          longest = names[i];   //storing the longest name in the variable
      }
      return longest;
  }
  else
    return "Please enter valid names.";
    
}