const perfil = document.getElementById('perfil')
const userName = perfil.querySelector('h1')
const userPhoto = perfil.querySelector('img')
const projects = document.getElementsByClassName('projectCard')

const user = 'caiolemedev'
const selectedRepos = [7, 8, 5, 6, 3]

class Project {
  constructor(id) {
    this.name = projects[id].querySelector('h3')
    this.stats = projects[id].querySelectorAll('span')
    this.description = projects[id].querySelector('p')
  }
}

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
          for (let id = 0; id < 5; id++) {
            const project = new Project(id)
            console.log(project)
            setProjectInfo(repos[selectedRepos[id]], project)
          }
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

function setProjectInfo(repo, project) {
  console.log(repo)
  project.name.textContent = `${repo.name}`
  project.description.textContent = `${repo.description}`
  project.stats[0].textContent = `${repo.stargazers_count}`
  project.stats[1].textContent = `${repo.forks}`
}

updatePortfolio()
