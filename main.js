const perfil = document.getElementById('perfil')
const userName = perfil.querySelector('h1')
const userPhoto = perfil.querySelector('img')
const project1 = document.getElementById('project1')
const project1Name = project1.querySelector('h3')

const user = 'caiolemedev'

function updatePortfolio() {
  console.log('rodando o JS')
  let url = `https://api.github.com/users/${user}`

  axios
    .get(url)
    .then(res => {
      const data = res.data
      console.log(data)
      setUserInfo(data)

      axios
        .get(data.repos_url)
        .then(res => {
          const repos = res.data
          console.log(repos)
          setProjectInfo(repos[1])
        })
        .catch(error => {
          console.log(error)
        })
    })
    .catch(error => {
      console.log(error)
    })
}

function setUserInfo(data) {
  userName.textContent = `${data.name}`
  userPhoto.src = `${data.avatar_url}`
}

function setProjectInfo(repo) {
  project1Name.textContent = `${repo.name}`
}

updatePortfolio()
