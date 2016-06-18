function Person(name, age) {
	this.name = name;
	this.age = age;
	this.sayHi = function() {
		console.log(name + ":" + age);
	}
	this.sayAge = sayAge;
}
function sayAge() {
	console.log(this.name + ' is ' + this.age + ' years old.');
}
Person.prototype.run = function() {
	console.log(this.name + "is running...");
}
var per1 = new Person('LaoWang', 48);
per1.sayHi();
var per2 = new Person('XiaoFang', 16);
per2.sayHi();
console.log(per1.constructor);
console.log(per1.sayHi == per2.sayHi);
per1.sayAge();
console.log(per1.sayAge == per2.sayAge);
per2.run();
console.log(per1.run == per2.run);