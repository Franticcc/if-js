var user = 'John Doe';
var student = 'Nikita';
var user = student;
console.log(user);
console.log(student);
// переменная user присваивает значение переменной student, то есть Nikita
var test = 1 + '1';
//при добавлении строчного типа данных к номерному происходит конкатенация - слияние строк и получится 11
test = test - 1 
console.log(test);
// test -= 1 короткий способ 
// если отнимаем один то получается 10 так как у нас число 11 с строчным типом,если убрать строчный тип поличим 0
var test = Boolean (1 + '1');
 console.log(test);
//  var test = !! 1 + '1'
// будет true так как у нас известное число больше нуля занимающие строку...