const footerTemplate = document.createElement('template')
footerTemplate.innerHTML = `
  <style>
    footer {
      height: 80px;
      padding: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #dfdfe2;
      border-top: 2px solid black;
    }
        
    a {
      margin: 0;
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }
    
    .social-row {
      margin: 0;
      padding: 0;
      width: 20%;
      height: 60%;
      display: inline-flex;
      flex-direction: row;
      justify-content: space-between;
    }
    
    img {
      width: 2.5em;
      height: 2.5em;
    }

    p {
      margin: 0;
      font-size: 110%;
    }

  </style>

  <footer>
    <div class="social-row">
      <a href="https://www.linkedin.com/in/jason-amar/"><img src="images/linkedin.png"></img></a>
      <a href="https://github.com/JasonAmar"><img src="images/github.png"></img></a>
    </div>
    <p>2021 © Jason Amar</p>
  </footer>`

class Footer extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(footerTemplate.content)
  }
}

customElements.define('footer-component', Footer)
