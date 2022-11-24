let profileURL = 'https://api.github.com/users/vielennyy'

function makeData (data) {
    return data.getHours() + ":"  
    + data.getMinutes() + '\t'
    + data.getDate() + "/"
    + (data.getMonth()+1)  + "/" 
    + data.getFullYear() ;
}

async function getData(url) {
    let responce = await fetch(url)
    let profile = await responce.json()
    return profile
}

async function showUser() {
    let user = await getData(profileURL)
    // let reposURL = user.repos_url
    // let avatarURL = user.avatar_url
    // let createdAt = user.created_at
    // let login = user.login
    // let userName = user.name
    

    let profileInfo = document.querySelector('.profile-info')
    
    let userName = document.createElement('div')
    userName.classList.add('user-name')
    userName.innerHTML = `${user.name} / ${user.login}`
    
    let avatarImg = document.createElement('img')
    avatarImg.src = user.avatar_url
    avatarImg.classList.add('user-img')
    
    let userCreated = document.createElement('div')
    userCreated.classList.add('user-created')
    userCreated.innerHTML = `This profile was created ${user.created_at}`

    profileInfo.appendChild(userName)
    profileInfo.appendChild(avatarImg)
    profileInfo.appendChild(userCreated)

    let profileRepos = document.querySelector('.profile-repos')
    let showRepoBTN = document.querySelector('.repos')
    let repos = await getData(user.repos_url)

    async function showRepos() {
        repos.forEach(element => {
            console.log(element)
            let repo = document.createElement('div')
            repo.classList.add('repo-item')
            repo.innerHTML = `${element.name}`
            profileRepos.appendChild(repo)
            async function showLastCommit() {
                let commits = await getData(element.commits_url.slice(0, -6))
                let data = new Date(commits[0].commit.committer.date)
                data = makeData(data)
                let commit = document.createElement('div')
                commit.classList.add('last-commit')
                commit.innerHTML = `Last commit in this repository was made ${data}`
                console.log(data)
                this.appendChild(commit)
            }
            repo.addEventListener('click', showLastCommit)

        })
        return true;
    }
    showRepoBTN.addEventListener('click', showRepos)
    

}
showUser()