let money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false

};

for (i=0; i<2; i++){
    let nesessaryExp = prompt("Введите обязательную статью расходов в этом месяце", "");
        cost = prompt("Во сколько обойдется", "");

    if( typeof(nesessaryExp) === "string" && typeof(nesessaryExp) != null && nesessaryExp != "" 
    && nesessaryExp.length < 50 && typeof(cost) != null && cost != ""){
        console.log("done");
        appData.expenses[nesessaryExp] = cost;
    } else{

    }
}

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
        console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень достатка");
} else{
    console.log ("Произошла ошибка");
}