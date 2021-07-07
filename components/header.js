const headerTemplate = document.createElement('template')
headerTemplate.innerHTML = `
    <style>    
    nav {
        display: flex;
        background-color: #333;
        overflow: hidden;
        justify-content: space-evenly;
    }

    /* Style the links inside the navigation bar */
    a {
        color: #f2f2f2;
        text-align: center;
        padding: 1em;
        text-decoration: none;
        font-size: 17px;
    }

    ul {
        margin: 0;
        padding: 1em;
        padding-left: 0;
    }

    li{
        list-style-type: none;
        display:inline;
    }

    /* Change the color of links on hover */
    a:hover {
        background-color: #ddd;
        color: black;
    }

    /* Add a color to the active/current link */
    a.active {
        background-color: #4CAF50;
        color: white;
    }
    </style>

    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="about.html">About</a></li>
            </ul>
        </nav>
    <header>`

class Header extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(headerTemplate.content)
    window.addEventListener('load', function () { hightlight(this, shadowRoot) }, true)
  }
}

customElements.define('header-component', Header)

function hightlight (window, current) {
  const URL = window.location.pathname
  const temp = current.querySelectorAll('a')
  for (let i = 0; i < temp.length; i++) {
    if (URL.includes(temp[i].getAttribute('href'))) {
      temp[i].setAttribute('href', '#')
      temp[i].classList.add('active')
      break
    }
  }
}
