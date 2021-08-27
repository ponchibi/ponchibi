function person(name,age)
{
  this.name=name;
  this.age=age;
}
var p=new person('Hello',12);
for (var key in p)
{
  console.log(key,p); 
}
