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

let nesessaryExp1 = prompt("Введите обязательную статью расходов в этом месяце", "");
    cost1 = prompt("Во сколько обойдется", "");
    nesessaryExp2 = prompt("Введите обязательную статью расходов в этом месяце", "");
    cost2 = prompt("Во сколько обойдется", "");

appData.expenses.nesessaryExp1 = cost1;
appData.expenses.nesessaryExp2 = cost2;

alert(appData.budget / 30);

