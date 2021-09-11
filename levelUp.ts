const toUpperCase = (x: string | number) => {
  if (typeof x === "string") {
     console.log(x.toUpperCase())
  } else {
    console.log(x + 100)
     }
}

toUpperCase("aka")

class Baby {
  constructor(
    private name:string,private sex: "Men" | "Women"
  ) { }
  introduce(this: Baby) {
    console.log(`${this.name}は${this.sex}の赤ちゃんです`)
  }

}

const baby = new Baby("涼", "Women")
baby.introduce()
