"use strict";
const foo = "hello";
const getFoo = (lang) => {
    return foo + lang.toUpperCase();
};
getFoo("Wlrld");
console.log(getFoo("koji"));
