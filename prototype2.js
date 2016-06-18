function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype = {
	constructor:Person,
	sayHi: function() {
		console.log(this.name + ':' + this.age);
	}
};

function Student(name, age, grade) {
	Person.call(this, name, age);
	this.grade = grade;
}
for(var i in Person.prototype){
	Student.prototype[i] = Person.prototype[i];
}

Student.prototype.constructor = Student;
Student.prototype.study = function() {
	console.log(this.name + ':' + this.age + ':' + this.grade);
};

var p = new Person('XiaoMing', 15);
p.sayHi();
var s = new Student('XiaoHong', 16, 'three');
s.sayHi();
s.study();

console.log(p);
console.log(s);
console.log(p.constructor);
console.log(s.constructor);