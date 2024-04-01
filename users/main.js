let getAllUsers = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();

    let header = document.createElement('div');
    header.innerText = 'Information about USERS';
    header.classList.add('header');

    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    for (const user of users) {

        let userDiv = document.createElement('div');
        userDiv.classList.add('user-class');

        let idDiv = document.createElement('div');
        idDiv.innerText = `${user.id}`;
        idDiv.classList.add('id-class');

        let nameDiv = document.createElement('div');
        nameDiv.innerText = `${user.name}`;
        nameDiv.classList.add('name-class');

        let button = document.createElement('button');
        button.innerText = 'user details';
        button.classList.add('button');

        userDiv.append(idDiv, nameDiv, button);
        wrapper.appendChild(userDiv);

        button.onclick = () => {
            location.href = `../user-details/user-details.html?userId=${user.id}`;
        }
    }
    document.body.append(header, wrapper);
}
void getAllUsers();