const perfil = document.getElementById('perfil')
const userName = perfil.querySelector('h1')
const userPhoto = perfil.querySelector('img')
const projects = document.getElementsByClassName('projectCard')
const project1Name = projects[0].querySelector('h3')
const project1Stats = projects[0].querySelectorAll('span')
const project1Description = projects[0].querySelector('p')

function getProjects() {
  //set construct for projects
}

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
          setProjectInfo(repos[1], projects[0])
          setProjectInfo(repos[2], projects[1])
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

//change this fuction to receive any project
function setProjectInfo(repo, project) {
  console.log(repo)
  project1Name.textContent = `${repo.name}`
  project1Description.textContent = `${repo.description}`
  project1Stats[0].textContent = `${repo.stargazers_count}`
  project1Stats[1].textContent = `${repo.forks}`
}

updatePortfolio()
