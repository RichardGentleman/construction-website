class Modal {
  constructor() {
    this.injectHTML()
    this.modal = document.querySelector(".modal")
    this.closeIcon = document.querySelector(".modal__close")
    this.events()
  }

  events() {

    // listen for close click
    this.closeIcon.addEventListener("click", () => this.closeTheModal())

    // pushes any key
    document.addEventListener("keyup", e => this.keyPressHandler(e))
  }

  openTheModal() {
    this.modal.classList.add("modal--is-visible")
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeTheModal()
    }
  }
  //
  // openTheModal() {
  //   this.modal.classList.add("modal--is-visible")
  // }
  //
  closeTheModal() {
    this.modal.classList.remove("modal--is-visible")
  }

  injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="modal">
      <div class="modal__inner">
        <h2 class="section-title section-title--blue section-title--less-margin"><i class="ion-android-mail"></i>Get in <strong>Touch</strong></h2>
        <div class="wrapper wrapper--narrow">
          <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
        </div>

        <div class="social-icons">
          <a href="#" class="social-icons__icon"><i class="ion-social-facebook"></i></a>
          <a href="#" class="social-icons__icon"><i class="ion-social-twitter"></i></a>
          <a href="#" class="social-icons__icon"><i class="ion-social-googleplus"></i></a>
          <a href="#" class="social-icons__icon"><i class="ion-social-instagram"></i></a>
        </div>

        </div>
        <div class="modal__close">X</div>
        <p class="modal--attribute">Icons from https://ionicons.com/v2/</p>
    </div>
    `)
  }
}

export default Modal
