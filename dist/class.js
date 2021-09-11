"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    show() {
        console.log(`${this.name}です。年齢は${this.age}歳です！`);
    }
}
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    get subject() {
        if (!this._subject) {
            throw new Error("no subject!");
        }
        return this._subject;
    }
    set subject(val) {
        if (!val) {
            throw new Error("no subject!");
        }
        this._subject = val;
    }
    show() {
        console.log(`${this.name}です。年齢は${this.age}歳です。専門教科は${this.subject}！`);
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher("huuta", 40, "");
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance();
