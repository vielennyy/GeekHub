let profileURL = 'https://api.github.com/users/vielennyy'
let loader = document.querySelector('.loader')

function stringifyDate (date) {
    return date.getHours() + ":"  
    + date.getMinutes() + '\t'
    + date.getDate() + "/"
    + (date.getMonth()+1)  + "/" 
    + date.getFullYear() ;
}

async function getData(url) {
    let responce = await fetch(url)
    let profile = await responce.json()
    return profile
}

async function showRepos() {
    let profileRepos = document.querySelector('.repo-items')
    profileRepos.innerHTML=''

    profileRepos.appendChild(loader)
    loader.style.display = 'block'

    let user = await getData(profileURL)

    let repos = await getData(user.repos_url)

    loader.style.display = 'none'

    repos.forEach(element => {
        let repo = document.createElement('div')
        repo.classList.add('repo-item')
        repo.innerHTML = `${element.name}`
        profileRepos.appendChild(repo)
        let commit = document.createElement('div')
        commit.classList.add('last-commit')
        repo.appendChild(commit)

        async function showLastCommit() {
            repo.appendChild(loader)
            loader.style.display = 'block'

            let commits = await getData(element.commits_url.slice(0, -6))

            loader.style.display = 'none'

            let date = new Date(commits[0].commit.committer.date)
            commitDate = stringifyDate(date)
            commit.innerHTML = `Last commit in this repository was made ${commitDate}`
        }
        
        repo.addEventListener('click', showLastCommit)

    })
    return true;
}

async function showUser() {
    loader.style.display = 'block'

    let user = await getData(profileURL)

    loader.style.display = 'none'

    // let reposURL = user.repos_url
    // let avatarURL = user.avatar_url
    // let createdAt = user.created_at
    // let login = user.login
    // let userName = user.name
    
    let profileInfo = document.querySelector('.profile-info')
    
    let userName = document.createElement('div')
    userName.classList.add('user-name')
    userName.innerHTML = `${user.name} / ${user.login}`
    
    let userWrapper = document.createElement('div')
    userWrapper.classList.add('user-wrapper')

    let infoWrapper = document.createElement('div')
    infoWrapper.classList.add('info-wrapper')

    let avatarImg = document.createElement('img')
    avatarImg.src = user.avatar_url
    avatarImg.classList.add('user-img')


    
    let userCreated = document.createElement('div')
    userCreated.classList.add('user-created')
    userCreated.innerHTML = `This profile was created ${user.created_at}`

    let profileRepos = document.querySelector('.profile-repos')

    profileInfo.appendChild(userName)
    profileInfo.appendChild(userWrapper)
    userWrapper.appendChild(avatarImg)
    userWrapper.appendChild(infoWrapper)
    infoWrapper.appendChild(userCreated)
    infoWrapper.appendChild(profileRepos)

    let showRepoBTN = document.querySelector('.repos')

    showRepoBTN.addEventListener('click', showRepos)

}

showUser()