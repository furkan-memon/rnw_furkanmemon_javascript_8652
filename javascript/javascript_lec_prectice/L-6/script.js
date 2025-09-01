// 1. Grade Calculation Based on Marks
{
    let marks = 85;
    let grade = (marks >= 90) ? "A+" :
        (marks >= 80) ? "A" :
            (marks >= 70) ? "B" :
                (marks >= 60) ? "C" :
                    (marks >= 50) ? "D" : "Fail";

    console.log("Grade:", grade);
}

// 2. Bill Calculation
{
    let qty = 45;
    let pricePerUnit = 200;
    let total = qty * pricePerUnit;
    let discount = (total > 1000) ? total * 0.1 : 0;
    let finalBill = total - discount;

    console.log("Final Bill:", finalBill);
}

// 3. Simple Interest
{
    let principal = 5000;
    let rate = 10;
    let time = 2;

    let simpleInterest = (principal * rate * time) / 100;
    console.log("Simple Interest:", simpleInterest);
}

// 4. Employee Salary
{
    let basicSalary = 60000;
    let hra = basicSalary * 0.2;
    let da = basicSalary * 0.1;
    let grossSalary = basicSalary + hra + da;

    console.log("Gross Salary:", grossSalary);
}

// 5. Swapping Two Numbers
{
    let a = 10, b = 20;
    console.log("Before Swap:", a, b);

    [a, b] = [b, a];

    console.log("After Swap:", a, b);
}

// 6. Basic Number + String Calculations
{
    let calc1 = 20 + "20" + 20;
    let calc2 = 20 + 20 + "20" + 20;
    let calc3 = 20 + 20 + "20" - 20;
    let calc4 = 20 + 20 + "20" - 20 + "20" + 20;
    let calc5 = 20 + 20 + "20" - 20 + "20" - 20 + 20;

    console.log("Calc1:", calc1);
    console.log("Calc2:", calc2);
    console.log("Calc3:", calc3);
    console.log("Calc4:", calc4);
    console.log("Calc5:", calc5);
}

