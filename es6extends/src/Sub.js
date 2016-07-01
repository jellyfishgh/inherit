import Sup from './Sup.js';

class Sub extends Sup {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    toString() {
        return `${this.name} : ${this.age}`;
    }
}

export default Sub;