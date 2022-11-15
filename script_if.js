let name = prompt('Введите Ваше имя:');
let secondname = prompt('Введите Ваше отчество:');
let surname = prompt('Введите Вашу фамилию:');
let age = 0;
age = prompt('Введите Ваш возраст(лет):');
let sex = confirm('Ваш пол - мужской?');
let benefite = 63;
if (sex) {
    sex="мужской";
} else {
     sex="женский";
     benefite = 58;
}
let countAge = 'Нет';
if ( age >= benefite) {
    countAge = 'Да';
}
alert(`ФИО: ${name} ${secondname} ${surname}\n Возраст (лет): ${age}\n Возраст (дней): ${age*365}\n Пол: ${sex}\n Пенсионный возраст: ${countAge}`);
