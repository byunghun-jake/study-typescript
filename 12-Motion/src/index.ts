const $app = document.querySelector("#app") as HTMLElement

const $createButton = document.querySelector(
  "button.create-button",
) as HTMLButtonElement

const $articleSection = document.querySelector("section")

type ArticleType = "image" | "video" | "note" | "task"

class Article {
  private $target = document.querySelector(".article-section") as HTMLElement

  constructor(
    private title: string,
    private value: string,
    private type: ArticleType,
  ) {
    this.render()
  }

  private render() {
    const $article = document.createElement("article")
    $article.innerHTML = `
      <div>${this.title}</div>
      <div>${this.value}</div>
    `
    console.log(this.$target)
    this.$target.appendChild($article)
  }
}

class Modal {
  $modalBackground = document.createElement("div")
  $modal = document.createElement("div")
  $modalHeader = document.createElement("header")
  $closeButton = document.createElement("button")
  $modalForm = document.createElement("form")

  constructor(private $target: HTMLElement) {
    this.render()
  }

  openModal() {}
  closeModal() {}
  render() {
    this.$modalBackground.className = "modal-background"
    this.$modal.className = "modal"
    this.$modalHeader.className = "modal__header"
    this.$closeButton.classList.add("material-icons", "close-button")
    this.$modalForm.className = "modal__form"

    this.$closeButton.innerText = "close"
    this.$modalHeader.appendChild(this.$closeButton)

    this.$modalForm.innerHTML = `
      <div class="form__field title">
        <label>title</label>
        <input class="title" type="text" name="title" />
      </div>
      <div class="form__field value">
        <label>URL</label>
        <input type="text" name="value" />
      </div>
      <button class="submit-button">생성</button>
    `
    this.$modalForm.addEventListener("submit", (event) => {
      event.preventDefault()
      const inputs = this.$modalForm.querySelectorAll("input")
      const title = inputs.item(0).value
      const value = inputs.item(1).value
      new Article(title, value, "task")
    })

    this.$modal.appendChild(this.$modalHeader)
    this.$modal.appendChild(this.$modalForm)
    this.$modalBackground.appendChild(this.$modal)

    this.$target.appendChild(this.$modalBackground)
  }
}

new Modal($app)

const $modalComponent = document.querySelector(
  ".modal-background",
) as HTMLDivElement

$createButton.addEventListener("click", () => {
  $modalComponent.style.display = "flex"

  const $closeButton = document.querySelector(
    ".modal__header .close-button",
  ) as HTMLButtonElement
  $closeButton.addEventListener("click", () => {
    $modalComponent.style.display = "none"
  })

  const $form = document.querySelector(".modal__form") as HTMLFormElement
  $form.addEventListener("submit", (event) => {
    event.preventDefault()
    const $inputs = $form.querySelectorAll("input")

    // if ($articleSection) {
    //   new Article($articleSection, "asdf", "asdf", "image")
    // }
    // $modalComponent.style.display = "none"
  })
})
