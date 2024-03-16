// ------------------TYPE ALIAS------------------
// helps implement DRY principle
// so define shape of employee
type Employee = {
    readonly id: number,
    personName: string,
    retire: (date: Date)=> void
}

let employee: Employee = {
    id: 1,
    personName: "Prem Kuamr",
    retire: (date: Date) => {
        console.log(date);
    }
}

// ------------------UNION TYPES------------------
function kgsToLbs(weight: number | string): number{
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}

kgsToLbs(10)
kgsToLbs('10')
