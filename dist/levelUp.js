"use strict";
const toUpperCase = (x) => {
    if (typeof x === "string") {
        console.log(x.toUpperCase());
    }
    else {
        console.log(x + 100);
    }
};
toUpperCase("aka");
class Baby {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    introduce() {
        console.log(`${this.name}は${this.sex}の赤ちゃんです`);
    }
}
const baby = new Baby("涼", "Women");
baby.introduce();
