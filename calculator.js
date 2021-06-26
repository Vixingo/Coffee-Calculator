function fn1(){
    cost1 = document.getElementById("cheapest_cost").value;
    cost2 = document.getElementById("expensive_cost").value;
    monday = document.getElementById("mon_num").value;
    friday = document.getElementById("fri_num").value;
    tuesday = document.getElementById("tues_num").value;
    saturday = document.getElementById("sat_num").value;
    wednesday = document.getElementById("wed_num").value;
    sunday = document.getElementById("sun_num").value;
    thursday = document.getElementById("thurs_num").value;

    allCost = parseInt(cost1 )+ parseInt(cost2); 
    averageCost =  allCost/2;
    document.getElementById("avg_cost").innerHTML =  averageCost + ("$");

    
    
    let weeklyCoffee = parseInt(monday)+ parseInt(friday)+ parseInt(tuesday)+ parseInt(saturday)+ parseInt(wednesday)+ parseInt(sunday)+ parseInt(thursday); 
    
    
    let numberCoffeesMonthly = weeklyCoffee * 4;
    document.getElementById("month").innerHTML = numberCoffeesMonthly + (" cup");


    let numberCoffeesYearly = weeklyCoffee * 52;
    document.getElementById("year").innerHTML=  numberCoffeesYearly;


    let monthlyExpensive =  numberCoffeesMonthly *  cost2;
    document.getElementById("monthlyExpensive").innerHTML =  monthlyExpensive + ("$");

    
    let monthlyCheapest =  numberCoffeesMonthly *  cost1;
    document.getElementById("monthlyCheapest").innerHTML =  monthlyCheapest + ("$");


    let monthlyAverage = numberCoffeesMonthly * averageCost;
    document.getElementById("monthlyAverage").innerHTML =  monthlyAverage + ("$");

    let yearlyExpensive = numberCoffeesYearly * cost2;
    document.getElementById("yearlyExpensive").innerHTML =  yearlyExpensive + ("$");

    let yearlyCheapest = numberCoffeesYearly * cost1 ;
    document.getElementById("yearlyCheapest").innerHTML =  yearlyCheapest + ("$");

    let yearlyAverage = numberCoffeesYearly * averageCost;
    document.getElementById("yearlyAverage").innerHTML =  yearlyAverage + ("$");

    

    if( numberCoffeesMonthly < 22){
        document.getElementById("cup_img").src = "images/under_22 1.png" ;
    }
    else if (numberCoffeesMonthly < 80){
        document.getElementById("cup_img").src = "images/alart.png" ;
    }
    else if(numberCoffeesMonthly > 80 ) {
        document.getElementById("cup_img").src = "images/madeof.png" ;
    }


    document.getElementById("showme").style.display= "block";
}