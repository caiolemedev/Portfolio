const projeto1 = document.getElementById('projeto1')

function updateProjects() {
  console.log('rodando o JS')
  let url = `https://api.github.com/users/caiolemedev`

  axios
    .get(url)
    .then(res => {
      const data = res.data
      console.log(data)
    })
    .catch(error => console.log('falhou!'))
}

updateProjects()
