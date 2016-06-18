function Person() {
	this.name = 'LaoWang';
}
Person.prototype.name = 'HongHong';
var per = new Person();
console.log(per.name);

per.name = 'XiaoLi';
console.log(per.name);

delete per.name;
console.log(per.name);