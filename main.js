const perfil = document.getElementById('perfil')
const userName = perfil.querySelector('h1')
const userPhoto = perfil.querySelector('img')
const project1 = document.getElementById('project1')
const project1Name = project1.querySelector('h3')
const project1Stats = project1.querySelectorAll('span')
const project1Description = project1.querySelector('p')

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
  console.log(repo)
  project1Name.textContent = `${repo.name}`
  project1Description.textContent = `${repo.description}`
  project1Stats[0].textContent = `${repo.stargazers_count}`
  project1Stats[1].textContent = `${repo.forks}`
}

updatePortfolio()
