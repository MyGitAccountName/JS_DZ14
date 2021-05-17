let a = b = i = functionNumber = 0;
let result = '';

// Вывод на экран результата
function showResult(str) {
    document.getElementById('result').innerHTML = str;
    document.getElementById('result').style.display = 'block';
}

// Показать список заданий
function showTaskList() {
    document.getElementById('task').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('taskList').style.display = 'block';
    for (i = 1; i < 6; i++) {
        document.querySelector("#task input:nth-of-type(" + i + ")").value = '';
    }
    document.querySelector("#task p:nth-of-type(1)").style.display = 'none';
    document.querySelector("#task p:nth-of-type(2)").style.display = 'none';
}

// Отображение полей ввода данных
function enterParameters(condition, ...texts) {
    document.getElementById('condition').innerText = condition;
    for (i = 0; i < texts.length; i++) {
        document.querySelector("#task h3:nth-of-type(" + (i + 1) + ")").innerHTML = texts[i];
        document.querySelector("#task h3:nth-of-type(" + (i + 1) + ")").style.display = 'block';
        document.querySelector("#task input:nth-of-type(" + (i + 1) + ")").style.display = 'block';
    }
    for (i = texts.length; i < 5; i++) {
        document.querySelector("#task h3:nth-of-type(" + (i + 1) + ")").style.display = 'none';
        document.querySelector("#task input:nth-of-type(" + (i + 1) + ")").style.display = 'none';
    }
    document.getElementById('task').style.display = 'block';
}

// Выбор заголовков для ввода данных
function setParameters(n) {
    functionNumber = n;
    document.getElementById("taskList").style.display = 'none';
    switch (n) {
        case 1: {
            enterParameters("Выбор меньшего числа", "Первое число:", "Второе число:");
            break;
        }
        case 2: {
            enterParameters("Возведение числа в указанную степень", "Число:", "Степень:");
            break;
        }
        case 3: {
            enterParameters("Математическое действие", "Первое число:", "Второе число:", "Действие (+,-,*,/)");
            break;
        }
        case 4: {
            enterParameters("Проверка числа на простоту", "Число:");
            break;
        }
        case 5: {
            enterParameters("Вывод таблицы умножения");
            break;
        }
        case 6: {
            enterParameters("Остаток от деления", "Делимое:", "Делитель:");
            break;
        }
        case 7: {
            enterParameters("Сумма чисел", "Число 1:", "Число 2:", "Число 3:", "Число 4:", "Число 5:");
            break;
        }
        case 8: {
            enterParameters("Выбор большего числа", "Число 1:", "Число 2:", "Число 3:", "Число 4:", "Число 5:");
            break;
        }
        case 9: {
            enterParameters("Числа в указанном диапазоне", "Начало диапазона:", "Конец диапазона:");
            document.querySelector("#task p:nth-of-type(1)").style.display = 'block';
            document.querySelector("#task p:nth-of-type(2)").style.display = 'block';
            break;
        }
        case 10: {
            enterParameters("Дата следующего дня в виде строки", "День:", "Месяц:", "Год:");
            break;
        }
    }
}

// Получение значения указанного параметра
function getParameter(i) {
    return document.querySelector("#task input:nth-of-type(" + (i) + ")").value;
}

// Проверка на пустоту хотя бы одного параметра
function isSomeEmpty(paramsNumber) {
    for (i = 1; i <= paramsNumber; i++)
        if (getParameter(i) === '') return true;
    return false;
}

// Проверка на пустоту всех параметров
function isAllEmpty(paramsNumber) {
    let j = 0;
    for (i = 1; i <= paramsNumber; i++)
        if (getParameter(i) === '') j++;
    if (j === paramsNumber) return true;
    else return false;
}

// Проверка на тип данных для нескольких параметров
function isSomeNaN(...P) {
    for (i = 0; i < P.length; i++) {
        if (isNaN(P[i])) {
            return true;
        }
    }
    return false;
}

// Выбор меньшего числа
function returnSmallerNumber(p1, p2) {
    a = +p1;
    b = +p2;
    if (isSomeEmpty(2) || isSomeNaN(a, b)) {
        alert("Ошибка в исходных данных!");
        return '';
    } else if (a === b) return "Числа равны";
    else if (a < b) return a;
    else return b;
}

// Возведение в степень
function exponentiation(p1, p2) {
    a = +p1;
    b = +p2;
    if (isSomeEmpty(2) || isSomeNaN(a, b)) {
        alert("Ошибка в исходных данных!");
        return '';
    } else return Math.pow(a, b);
}

// Калькулятор
function calc(p1, p2, p3) {
    a = +p1;
    b = +p2;
    if (isSomeEmpty(3) || isSomeNaN(a, b) || ((p3 !== '+') && (p3 !== '-') && (p3 !== '*') && (p3 !== '/'))) {
        alert("Ошибка в исходных данных!");
        return '';
    } else switch (p3) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}

// Проверка числа на простоту
function isPrimeNumber(p1) {
    a = +p1;
    if (isSomeEmpty(1) || isNaN(a)) {
        alert("Ошибка в исходных данных!");
        return '';
    } else if ((a < 2) || (a % 1 !== 0)) {
        return false;
    } else {
        b = 0;
        for (i = 2; i <= a; i++) {
            if (a % i === 0) b++;
        }
        if (b === 1) return true;
        else return false;
    }
}

// Таблица умножения для числа
function showMultiplicationTable(p1) {
    a = +p1;
    result = '';
    if (isNaN(a)) {
        alert("Ошибка в исходных данных!");
        return '';
    } else {
        for (let i = 1; i < 10; i++) {
            if (a * i < 10) result = result + '\xa0\xa0' + a * i;
            else result = result + ' ' + a * i;
        }
    }
    return result;
}

// Остаток от деления
function getRemainderOfDivision(p1, p2) {
    a = +p1;
    b = +p2;
    if (isSomeEmpty(2) || isSomeNaN(a, b)) {
        alert("Ошибка в исходных данных!");
        return '';
    } else if (b === 0) return NaN;
    else if (a === 0) return 0;
    else if ((a > 0) && (b > 0)) {
        while (a >= b) a -= b;
        return a;
    } else if ((a < 0) && (b < 0)) {
        while (a <= b) a -= b;
        return a;
    } else if ((a < 0) && (b > 0)) {
        b *= -1;
        while (a <= b) a -= b;
        return a;
    } else if ((a > 0) && (b < 0)) {
        b *= -1;
        while (a >= b) a -= b;
        return a;
    }
}

// Сумма чисел
function getSum(...P) {
    let sum = 0;
    if (isAllEmpty(P.length)) {
        alert("Введите числа для сложения!");
        return '';
    }
    for (i = 0; i < P.length; i++) {
        if (isNaN(P[i])) {
            alert("Ошибка в исходных данных!");
            return ''
        } else sum += (+P[i]);
    }
    return sum;
}

// Выбор большего числа
function returnBiggerNumber(...P) {
    let bigger = +P[0];
    if (isAllEmpty(P.length)) {
        alert("Введите числа для сравнения!");
        return '';
    }
    for (i = 0; i < P.length; i++) {
        if (isNaN(P[i])) {
            alert("Ошибка в исходных данных!");
            return ''
        } else if ((+P[i] > bigger) && (P[i] !== '')) bigger = +P[i];
    }
    return bigger;
}

// Чётные/нечётные числа из диапазона
function showNumbersInArea(p1, p2, p3) {
    a = +p1;
    b = +p2;
    result = '';
    if (isSomeEmpty(2) || isSomeNaN(a, b)) {
        alert("Ошибка в исходных данных!");
        return '';
    } else if (a <= b) {
        for (i = Math.ceil(a); i <= b; i++) {
            if ((p3 === true) && (i % 2 === 0)) result = result + ', ' + i;
            else if ((p3 === false) && ((i % 2 === 1) || (i % 2 === -1))) result = result + ', ' + i;
        }
    } else if (a > b) {
        for (i = Math.floor(a); i >= b; i--) {
            if ((p3 === true) && (i % 2 === 0)) result = result + ', ' + i;
            else if ((p3 === false) && ((i % 2 === 1) || (i % 2 === -1))) result = result + ', ' + i;
        }
    }
    return result.slice(2);
}

// Количество дней в месяце
function getDaysNumber(p1, p2) {
    switch (+p1) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: {
            return 31;
        }
        case 2: {
            if (+p2 % 4 === 0) return 29;
            else return 28;
        }
        default:
            return 30;
    }
}

// Дата следующего дня
function showNextDayDate(p1, p2, p3) {
    a = +p1;
    b = +p2;
    let c = +p3;
    if (isSomeEmpty(3) || isSomeNaN(a, b, c) || (a < 1) || (a > getDaysNumber(b, c)) || (b < 1) || (b > 12) ||
        (c < 1) || (c > 9999) || (a % 1 !== 0) || (b % 1 !== 0) || (c % 1 !== 0)) {
        alert("Ошибка в исходных данных!");
        return '';
    } else if (a === getDaysNumber(b, c)) {
        a = 1;
        if (b === 12) {
            b = 1;
            c++;
        } else b++;
    } else a++;

    if (a < 10) a = '0' + a;
    if (b < 10) b = '0' + b;
    if (c < 10) c = '000' + c;
    else if ((c > 10) && (c < 100)) c = '00' + c;
    else if ((c > 100) && (c < 1000)) c = '0' + c;
    return (`${a}.${b}.${c}`);
}

// Выполнение выбранного задания
function doChosen() {
    switch (functionNumber) {
        case 1: {
            result = returnSmallerNumber(getParameter(1), getParameter(2));
            showResult(result);
            break;
        }
        case 2: {
            result = exponentiation(getParameter(1), getParameter(2));
            showResult(result);
            break;
        }
        case 3: {
            result = calc(getParameter(1), getParameter(2), getParameter(3));
            showResult(result);
            break;
        }
        case 4: {
            if (isPrimeNumber(getParameter(1)) === '')
                result = ('');
            else if (isPrimeNumber(getParameter(1)) === true)
                result = (`${getParameter(1)} - простое число`);
            else if (isPrimeNumber(getParameter(1)) === false)
                result = (`${getParameter(1)} - не простое число`);
            showResult(result);
            break;
        }
        case 5: {
            result = '';
            for (i = 1; i < 10; i++) {
                result = result + '<br>' + showMultiplicationTable(i);
                showResult(result);
            }
            break;
        }
        case 6: {
            result = getRemainderOfDivision(getParameter(1), getParameter(2));
            showResult(result);
            break;
        }
        case 7: {
            result = getSum(getParameter(1), getParameter(2), getParameter(3), getParameter(4), getParameter(5));
            showResult(result);
            break;
        }
        case 8: {
            result = returnBiggerNumber(getParameter(1), getParameter(2), getParameter(3), getParameter(4), getParameter(5));
            showResult(result);
            break;
        }
        case 9: {
            result = showNumbersInArea(getParameter(1), getParameter(2), document.getElementById('r1').checked);
            showResult(result);
            break;
        }
        case 10: {
            result = showNextDayDate(getParameter(1), getParameter(2), getParameter(3));
            showResult(result);
            break;
        }
    }
}