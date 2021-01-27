
const textboxTemplate = document.createElement('template')
textboxTemplate.innerHTML = `
  <style>
  label, input {
      display: inline-block;
  }
  </style>`

class Textbox extends HTMLElement {
  static get observedAttributes () {
    return ['label']
  }

  constructor () {
    super()
  }

  connectedCallback () {
    const labelText = this.getAttribute('label')
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(textboxTemplate.content)

    const customElement = document.createElement('div')
    customElement.innerHTML =
    `<label for="textbox">${labelText}:</label>
    <input type="text" id="textbox" name=${labelText}><br><br>`

    shadowRoot.append(customElement)
  }
}

customElements.define('custom-textbox', Textbox)
