class Person {
  constructor(public name:string,protected age: number) {
  }

  incrementAge() {
    this.age += 1
  }
  show(this:Person) {
    console.log(`${this.name}です。年齢は${this.age}歳です！`)
  }
}





class Teacher extends Person {
  private static instance: Teacher;
  get subject() {
    if (!this._subject) {
    throw new Error("no subject!")
    }
    return this._subject
  }
  set subject(val:string) {
    if (!val) {
          throw new Error("no subject!")
    }
    this._subject = val
  }
   private constructor(name:string,age:number,private _subject:string) {
    super(name,age)
  }
    show(this:Teacher) {
    console.log(`${this.name}です。年齢は${this.age}歳です。専門教科は${this.subject}！`)
    }

  static getInstance() {
if(  Teacher.instance) return   Teacher.instance
    Teacher.instance = new Teacher("huuta", 40, "")
    return Teacher.instance
  }
}

const teacher = Teacher.getInstance()
