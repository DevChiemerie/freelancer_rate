const ratePerHour = 89;

function dayRate (ratePerHour) {
   return ratePerHour * 8;
}

const amountPerDay = dayRate(ratePerHour);
console.log("Rate per day is:", amountPerDay);



const fixedBudget = 20000;

function daysInBudget (fixedBudget, amountPerDay) {
    return fixedBudget / amountPerDay;
}

const daysOfWork = daysInBudget(fixedBudget, amountPerDay);
console.log("Number of days the budget will cover is:", Math.floor(daysOfWork));



function percentage (percent, number) {
    return (percent / 100) * number; 
}

const fortyTwoPercent = percentage(42, 156640);

console.log("42 percent of 156640 is:", fortyTwoPercent);


const numDays = 230;
const discount = fortyTwoPercent;

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const billableDaysPerMonth = 22;
  const dayRateValue = dayRate(ratePerHour);
  const monthlyRate = dayRateValue * billableDaysPerMonth;
  const fullMonths = Math.floor(numDays / billableDaysPerMonth);
  const remainingDays = numDays % billableDaysPerMonth;
  const discountedAmount = fullMonths * monthlyRate * (1 - discount / 100);
  const remainingAmount = remainingDays * dayRateValue;
  return Math.ceil(discountedAmount + remainingAmount);
}

const amountForAllDays = priceWithMonthlyDiscount(ratePerHour, numDays, 42);

console.log("Amount for 230 days with 42% discount is:", amountForAllDays); 
