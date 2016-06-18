function People(name, location, subjects) {
    this.name = name;
    this.location = location;
    this.subjects = subjects;
}

function Animal(name) {
    this.name = name;
    return new Animal("cat");
}

var people = new People("jellyfish", {
    "province": "GuangDong",
    "city": "GuangZhou"
}, ["Math", "English"]);