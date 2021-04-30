class Textbox extends HTMLElement {
  static get observedAttributes () {
    return ['label']
  }

  constructor () {
    super()
  }

  connectedCallback () {
    const textboxTemplate = document.createElement('template')
    textboxTemplate.innerHTML = `
  <style>

  input {
    display: inline-block;
    width: 100%
    padding: 10px;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }
  </style>`

    const labelText = this.getAttribute('label')
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(textboxTemplate.content)

    const customElement = document.createElement('div')
    customElement.innerHTML =
    `<label for="textbox">${labelText}:</label>
    <input type="text" id="textbox" name="${labelText}"><br><br>`

    shadowRoot.appendChild(customElement)
  }
}

customElements.define('custom-textbox', Textbox)
