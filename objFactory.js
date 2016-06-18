function personFactory(name, age) {
	var o = {};
	o.name = name;
	o.age = age;
	o.sayHi = function() {
		console.log(name + ":" + age);
	}
	return o;
}

var per1 = personFactory('LaoWang', 48);
per1.sayHi();
var per2 = personFactory('XiaoFang', 16);
per2.sayHi();

console.log(per1.constructor);
console.log(personFactory.constructor);