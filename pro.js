function Person() {
    var private_name = 'XiaoMing';
    var private_age = 10;
    this.privilege_name = 'XiaoHong';
    this.privilege_age = 9;
    this.showPrivilegeName = function() {
        console.log(private_name, this.privilege_name, this.public_name, Person.static_name);
    };
}
Person.prototype.public_name = 'XiaoFang';
Person.prototype.public_age = 8;
Person.static_name = 'XiaoLi';
Person.static_age = 7;

var pp = new Person();
pp.name = 'XiaoWang';
pp.age = 6;

Person.prototype.showAge = function() {
    console.log(/*private_age, */this.privilege_age, this.public_age, Person.static_age);
};

pp.showPrivilegeName();
pp.showAge();
console.log(pp.private_name, pp.privilege_name, pp.public_name, Person.static_name, pp.name);