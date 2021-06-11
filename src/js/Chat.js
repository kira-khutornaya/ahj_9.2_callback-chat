export default class Chat {
  constructor(container) {
    this.container = container;
  }

  bindToDOM() {
    this.widgetBtn = document.createElement('button');
    this.widgetBtn.classList.add('widget__btn');
    this.container.appendChild(this.widgetBtn);

    this.createChat();
    this.chat = document.querySelector('.widget__wrapper');

    this.widgetBtn.addEventListener('click', this.openForm.bind(this));

    this.closeBtn = document.querySelector('.widget-form__close');
    this.closeBtn.addEventListener('click', this.closeForm.bind(this));
  }

  createChat() {
    const widgetWrapper = document.createElement('div');
    widgetWrapper.classList.add('widget__wrapper');

    widgetWrapper.innerHTML = `
      <button class="widget-form__close">&#10006;</button>
      <h3 class="widget-form__title">Напишите нам</h3>
      <form class="widget-form">
          <label class="widget-field__group">
            <span class="widget-field__label">Введите текст сообщения</span>
            <textarea class="widget__field"></textarea>
          </label>
          <button class="widget-form__btn">Отправить</button>
      </form>
    `;

    this.container.appendChild(widgetWrapper);
  }

  openForm() {
    this.widgetBtn.classList.remove('increase');
    this.chat.classList.remove('compression');
    this.widgetBtn.classList.add('compression');
    this.chat.classList.add('increase');
  }

  closeForm() {
    this.widgetBtn.classList.remove('compression');
    this.chat.classList.remove('increase');
    this.widgetBtn.classList.add('increase');
    this.chat.classList.add('compression');
  }
}
