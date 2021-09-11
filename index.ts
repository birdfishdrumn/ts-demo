const foo = "hello"
const getFoo = (lang:string) => {
  return foo + lang.toUpperCase()
}

getFoo("Wlrld")

console.log(getFoo("koji"))
