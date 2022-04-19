export const getAllUsers=()=>{
    return fetch('http://localhost:8088/users')
    .then(res => res.json())
}

export const getUserById = (user) => {
     return fetch(`http://localhost:8088/users/${user.id}`).then((res) => res.json())
}