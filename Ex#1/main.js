const path = require('path');
const date = new Date();
const filename = path.basename(__filename);
const dateParam = ` Часы - ${date.getHours()}\n Минуты - ${date.getMinutes()}\n Число - ${date.getDate()}\n Месяц - ${date.getMonth() + 1}\n Год - ${date.getFullYear()}\n Имя файла - ${filename}`;
console.log(dateParam);
