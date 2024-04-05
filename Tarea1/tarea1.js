
function calculateExpenses(expectedSales, dayMonth, totalSales){
    difference = totalSales - expectedSales
    responseEven = "It was a good day! " + difference + " Sales"
    responseOdd = "It was a good day and its an odd number day, Get ready for tommorrow!!"
    itsDay = 'odd'
   
    if (dayMonth % 2 === 0){
        itsDay = 'even'
    }
    console.log("Its a " +itsDay + " number day")

    if (difference > 0){
        console.log(itsDay= 'even'?responseEven:responseOdd)
    }else{
        
        console.log("Need to adjust budget " + difference + " Sales")
    }

}


calculateExpenses(200, 13, 150);