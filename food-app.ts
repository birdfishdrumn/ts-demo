
class Score {
  get totalScore() {
    const foods = Foods.getInstance()
    return foods.activeElementsScore.reduce((total,score)=>total + score,0)
  }
  render() {
    document.querySelector(".score__number")!.textContent = String(this.totalScore)
    if (this.totalScore > 10) {
      document.querySelector(".today_score")!.classList.add("score__bg")
    } else {

      document.querySelector(".today_score")!.classList.remove("score__bg")
    }
  }

}


class Food {
  constructor(public element: HTMLDivElement) {
    element.addEventListener("click", this.clickEventHandler.bind(this))
  }
  clickEventHandler() {this.element.classList.toggle("food--active")
    const score = new Score()
    score.render()
  }

}
class Foods {
  private static instance: Foods
  private _activeElements: HTMLDivElement[] = []
   private _activeElementsScore :number[] = []
  elements = document.querySelectorAll<HTMLDivElement>((".food"))
  get activeElements() {
    this._activeElements = []
    this.elements.forEach((element) => {
      if (element.classList.contains("food--active")) {
          this._activeElements.push(element)
        }
    })
    return this._activeElements
  }
  get activeElementsScore() {
    this._activeElementsScore = []
    this.activeElements.forEach((element) => {
      const foodScore = element.querySelector(".food__score")
      if (foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent))
      }
    })
    return  this._activeElementsScore
  }
  private constructor() {
    this.elements.forEach(element => [
      new Food(element)
    ])
  }

  static getInstance() {
    if (!Foods.instance) {
      Foods.instance = new Foods()
    }
    return Foods.instance
  }
}


const food = Foods.getInstance()

// 型アサーションで強制的に片付けをする
const input = document.getElementById("input") as HTMLInputElement

type Dog = string | number
type Bird = string | boolean




food.elements
