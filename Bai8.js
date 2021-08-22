//Câu 1

var a=4;
var b=8;
var c=12;
s=a++ - c-- + b++ -a-- * ++b / --a;
//4 -12 +8 -5*10/3 =16.66666667
console.log(s); 

//Câu 2
var a=4;
var b=8;
s=++a - --b + a++ + ++a - b--;
//5 - 7 +5 + 7 -7 =3
console.log(s); 
