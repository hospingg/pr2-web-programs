
// Дано два рядки:
const firstRow = 'Slow and steady wins the race';
const secondRow = 'You can say that again';

// // У кожній з них необхідно порахувати кількість літер "a" і вивести рядок, в якому таких літер більше.
function getRow(firstRow, secondRow) {
    return (firstRow.match(/a/gi) || []).length > (secondRow.match(/a/gi) || []).length ? firstRow : secondRow;
}
// метод match() з регулярним виразом /a/gi повертає масив з усіма літерами "а" і у випадку, якщо їх нема, повертає пустиій масив
// тернарний оператор порівнює розмір масиивів і виводить стрінг значеення з найбільшою кількістю літер "а" 


// console.log(getRow(firstRow, secondRow)); //'You can say that again’


// Завдання під *
// зробити програму інтерактивною, використовуючи команди prompt()і alert().
// зробити так щоб можна було порахувати будь-яку літеру, яку введе користувач, (метод prompt())
function getRowWithPrompt() {
    const firstRow = prompt('Будь ласка, введіть першу фразу');
    const secondRow = prompt('Будь ласка, введіть другу фразу');

    const countA = str => (str.match(/a/gi) || []).length;
    const countFirst = countA(firstRow);
    const countSecond = countA(secondRow);
    if (countFirst > countSecond) {
        alert(`Фраза з найбільшою кількістю літер "а": ${firstRow}`);
    } else if (countFirst < countSecond) {
        alert(`Фраза з найбільшою кількістю літер "а": ${secondRow}`);
    } else {
        alert('Обидві фрази мають однакову кількість літер "а".');
    }
}

// getRowWithPrompt();

/*
Завдання 2
Є номер телефону з 13 символів: +380664567890
Правила форматування такі:
    після +38 має бути пропуск;
    потім йде кругла дужка, що відкривається;
    потім три цифри (код оператору зв’язку);
    потім кругла дужка, що закривається;
    знову пробіл;
    три цифри;
    мінус;
    чотири цифри.
У нас має бути функція, яка приймає телефон рядком і повертає назад відформатований телефон:
console.log(formattedPhone('+380664567890')); // +38 (066) 456-78-90


Завдання під *
    зробити програму інтерактивною, використовуючи команди prompt() і alert()
    Напишіть функцію так, щоб вона могла приймати телефон у форматі 80971234567, а повертати +38 (097) 123-45-67
    Напиши функцію, яка може приймати телефон у форматі 0671234567 а повертало у форматі +38 (067) 123-45-67
    Повертайте повідомлення, що формат функції неправильний, якщо передається щось несхоже на +80971234567 або 80631234567 або 80971234567 або 0631234567
*/

function formattedPhone(phone) {
    
    // Видаляємо всі символи, що не є цифрами
    const cleanedPhone = phone.replace(/\D/g, '');

    // Перевіряємо формати:
    if (cleanedPhone.length === 10 && cleanedPhone.startsWith('0')) {
        // Якщо номер має формат 0671234567
        return `+38 (${cleanedPhone.slice(0, 3)}) ${cleanedPhone.slice(3, 6)}-${cleanedPhone.slice(6, 8)}-${cleanedPhone.slice(8, 10)}`;
    } else if (cleanedPhone.length === 12 && cleanedPhone.startsWith('380')) {
        // Якщо номер має формат +380671234567
        return `+38 (${cleanedPhone.slice(3, 6)}) ${cleanedPhone.slice(6, 9)}-${cleanedPhone.slice(9, 11)}-${cleanedPhone.slice(11, 13)}`;
    } else if (cleanedPhone.length === 11 && cleanedPhone.startsWith('8')) {
        // Якщо номер має формат 80971234567
        return `+38 (${cleanedPhone.slice(2, 5)}) ${cleanedPhone.slice(5, 8)}-${cleanedPhone.slice(8, 10)}-${cleanedPhone.slice(10, 12)}`;
    } else {
        // Якщо формат неправильний
        return 'Неправильний формат телефону';
    }
}

function interactivePhoneFormat() {
    const phone = prompt('Будь ласка, введіть номер телефону у форматі 0671234567, +380671234567 або 80971234567:');
    const formatted = formattedPhone(phone);
    alert(formatted);
}

// Виклик інтерактивної функції
interactivePhoneFormat();



