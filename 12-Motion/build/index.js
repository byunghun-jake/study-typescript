"use strict";
var $app = document.querySelector("#app");
var $createButton = document.querySelector("button.create-button");
var $articleSection = document.querySelector("section");
var Article = /** @class */ (function () {
    function Article(title, value, type) {
        this.title = title;
        this.value = value;
        this.type = type;
        this.$target = document.querySelector(".article-section");
        this.render();
    }
    Article.prototype.render = function () {
        var $article = document.createElement("article");
        $article.innerHTML = "\n      <div>" + this.title + "</div>\n      <div>" + this.value + "</div>\n    ";
        console.log(this.$target);
        this.$target.appendChild($article);
    };
    return Article;
}());
var Modal = /** @class */ (function () {
    function Modal($target) {
        this.$target = $target;
        this.$modalBackground = document.createElement("div");
        this.$modal = document.createElement("div");
        this.$modalHeader = document.createElement("header");
        this.$closeButton = document.createElement("button");
        this.$modalForm = document.createElement("form");
        this.render();
    }
    Modal.prototype.openModal = function () { };
    Modal.prototype.closeModal = function () { };
    Modal.prototype.render = function () {
        var _this = this;
        this.$modalBackground.className = "modal-background";
        this.$modal.className = "modal";
        this.$modalHeader.className = "modal__header";
        this.$closeButton.classList.add("material-icons", "close-button");
        this.$modalForm.className = "modal__form";
        this.$closeButton.innerText = "close";
        this.$modalHeader.appendChild(this.$closeButton);
        this.$modalForm.innerHTML = "\n      <div class=\"form__field title\">\n        <label>title</label>\n        <input class=\"title\" type=\"text\" name=\"title\" />\n      </div>\n      <div class=\"form__field value\">\n        <label>URL</label>\n        <input type=\"text\" name=\"value\" />\n      </div>\n      <button class=\"submit-button\">\uC0DD\uC131</button>\n    ";
        this.$modalForm.addEventListener("submit", function (event) {
            event.preventDefault();
            var inputs = _this.$modalForm.querySelectorAll("input");
            var title = inputs.item(0).value;
            var value = inputs.item(1).value;
            new Article(title, value, "task");
        });
        this.$modal.appendChild(this.$modalHeader);
        this.$modal.appendChild(this.$modalForm);
        this.$modalBackground.appendChild(this.$modal);
        this.$target.appendChild(this.$modalBackground);
    };
    return Modal;
}());
new Modal($app);
var $modalComponent = document.querySelector(".modal-background");
$createButton.addEventListener("click", function () {
    $modalComponent.style.display = "flex";
    var $closeButton = document.querySelector(".modal__header .close-button");
    $closeButton.addEventListener("click", function () {
        $modalComponent.style.display = "none";
    });
    var $form = document.querySelector(".modal__form");
    $form.addEventListener("submit", function (event) {
        event.preventDefault();
        var $inputs = $form.querySelectorAll("input");
        // if ($articleSection) {
        //   new Article($articleSection, "asdf", "asdf", "image")
        // }
        // $modalComponent.style.display = "none"
    });
});
//# sourceMappingURL=index.js.map