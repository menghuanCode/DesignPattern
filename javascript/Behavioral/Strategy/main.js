// 策略模式

const S = function (salary) {
    return salary * 4;
}


const A = function (salary) {
    return salary * 3
}

const B = function (salary) {
    return salary * 2
}

const calulateBonus = function (fn, salary) {
    return fn(salary)
}


calulateBonus(A, 10000)