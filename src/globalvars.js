class Person {
  constructor(id, name, gender, age) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
}

var persons = [
    new Person(1, 'Bob', 'male', 25),
    new Person(2, 'Carol', 'female', 24),
    new Person(3, 'Ted', 'male', 35),
    new Person(4, 'Alice', 'female', 34)
]

class Entry {
  constructor(id, ownerName, dogName) {
    this.id = id;
    this.ownerName = ownerName;
    this.dogName = dogName;
  }
}

export { Person, persons, Entry };