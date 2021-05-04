
const textareaTemplate = document.createElement('template')
textareaTemplate.innerHTML = `
  <style>

textarea {
    padding: 10px;
    line-height: 1.5;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
}

label {
    display: block;
    margin-bottom: 10px;
}
  </style>`

class Textarea extends HTMLElement {
  static get observedAttributes () {
    return ['label', 'rows', 'cols']
  }

  constructor () {
    super()
  }

  connectedCallback () {
    const labelText = this.getAttribute('label')
    const rows = this.getAttribute('rows')
    const cols = this.getAttribute('cols')
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(textareaTemplate.content)

    const customElement = document.createElement('div')
    customElement.innerHTML =
    `<label for="textarea">${labelText}</label>
    <textarea id="textarea" placeholder="..." name="${labelText}" rows="${rows}" cols="${cols}"></textarea><br><br>`

    shadowRoot.append(customElement)
  }
}

customElements.define('custom-textarea', Textarea)
