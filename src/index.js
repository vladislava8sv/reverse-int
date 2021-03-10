module.exports = function reverse (n) {
var str=n;
str = parseFloat(str);//переводим строку в число, чтобы избавиться от -
if (str<0) {
   str=str*(-1);
}
var strReverse = str.toString().split('').reverse().join('');//переводим число в строку, чтобы воспользоваться методами
return strReverse;
}
