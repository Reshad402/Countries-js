const loadUsers = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => display(data.results))
}
const display = users => {
    const userContainer = document.getElementById('users-container')
    for(const user of users){
        console.log(user)
        const userDiv = document.createElement('div')
        userDiv.classList.add('use')
        // 14 line a user usr korte hobe jeta dhopra hoiche
        // 16number line a obj er vitor er obj ke call kore anchi
        userDiv.innerHTML=`
        <h3>User Name-${user.email}</h3>
        <p>User info-${user.login.username} ${user.location.postcode}</p>
        <p>User location -${user.location.city} ${user.location.country}</p>
        `
        userContainer.appendChild(userDiv)
    }
}
loadUsers();