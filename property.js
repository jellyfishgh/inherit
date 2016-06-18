function Person () {
    var p1 = "abc";
    this.name = "HeMu";
}
Person.p2 = "xyz";
var per = new Person();
per.p3 = "lmn";
Person.prototype.p4 = "opq";

console.log("Person:");
console.log(Person.name, Person.p1, Person.p2, Person.p3, Person.p4);
console.log("per:");
console.log(per.name, per.p1, per.p2, per.p3, per.p4);
console.log(Person instanceof Object, per instanceof Object);