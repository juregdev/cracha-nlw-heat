const Social_midia = {
  github: 'filipebarrosg',
  instagram: 'filipe_barrosg',
  facebook: 'filipe.barrosg'
}

function change_link() {
  for (let Link of midia.children) {
    const social = Link.getAttribute('class')
    Link.href = `https://${social}.com/${Social_midia[social]}`
  }
}

change_link()

function get_profile_infos_github() {
  const url = `https://api.github.com/users/${Social_midia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      user_bio.textContent = data.bio
      git.href = data.html_url
      user_photo.src = data.avatar_url
      user_login.textContent = data.login
    })
}

get_profile_infos_github()
