const tableBody = document.querySelector('tbody')
const requestURL = 'https://api.github.com/users/JasonAmar/repos'
const request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.onload = function () {
  const response = this.response
  for (let index = 0; index < response.length; index++) {
    const row = document.createElement('tr')
    const name = response[index].name
    const description = response[index].description
    const latestCommitDate = response[index].pushed_at
    const rowContent = `
    <td scope="row">${name}</td>
    <td>${description}</td>
    <td>${latestCommitDate}</td>
    `
    row.innerHTML = rowContent
    tableBody.append(row)
  }
}
