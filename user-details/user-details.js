let userId = new URL(location.href).searchParams.get('userId');

let gettingUserInfo = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    let user = await response.json();

    let header = document.createElement('div');
    header.innerText = 'Information about the USER';
    header.classList.add('header');

    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    let userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('user-info');

    let idDiv = document.createElement('div');
    idDiv.innerText = `${user.id}`;
    idDiv.classList.add('id-style');

    let nameDiv = document.createElement('div');
    nameDiv.innerText = `${user.name}`;
    nameDiv.classList.add('name-style');

    let userNameDiv = document.createElement('div');
    userNameDiv.innerText = `${user.username}`;
    userNameDiv.classList.add('userName-style');

    let emailDiv = document.createElement('div');
    emailDiv.innerText = `${user.email}`;
    emailDiv.classList.add('email-style');

    userInfoDiv.append(idDiv, nameDiv, userNameDiv, emailDiv);

    let infoDiv = document.createElement('div');
    infoDiv.classList.add('info-style');

    let addressDiv = document.createElement('div');
    addressDiv.innerText =
        `
        ADDRESS:
        Street: ${user.address.street}
        Suite: ${user.address.suite}
        City: ${user.address.city}
        Zipcode: ${user.address.zipcode}
        `;
    addressDiv.classList.add('address-style');

    let geoDiv = document.createElement('div');
    geoDiv.innerText =
        `
        GEO:
        lat: ${user.address.geo.lat}
        lng: ${user.address.geo.lng}
        `;
    geoDiv.classList.add('geo-style');

    let contactsDiv = document.createElement('div');
    contactsDiv.innerText =
        `
        CONTACTS:
        Phone: ${user.phone}
        Website: ${user.website}
        Company: ${user.company.name}
        ${user.company.bs} 
        ${user.company.catchPhrase}
        `;
    contactsDiv.classList.add('contacts-div');

    infoDiv.append(addressDiv, geoDiv, contactsDiv);

    let button = document.createElement('button');
    button.innerText = 'posts of current user';
    button.onclick = () => {
        if (gettingPosts()) {
            button.setAttribute('disabled', 'true');
        } else {
            button.removeAttribute('disabled')
        }
    }
    button.classList.add('button-current-post');

    wrapper.append(userInfoDiv, infoDiv, button);
    document.body.append(header, wrapper);
}
void gettingUserInfo();

let gettingPosts = async () => {
    let response2 = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    let posts = await response2.json();

    let postsDivEl = document.createElement('div');
    postsDivEl.classList.add('post-wrapper');

    for (const post of posts) {
        let postDivEl = document.createElement('div');
        postDivEl.innerText = `TITLE: ${post.title}`;
        postDivEl.classList.add('post-title');

        let button = document.createElement('button');
        button.innerText = 'more info';
        button.classList.add('post-button');
        button.onclick = () => {
            location.href = `../post-details/post-details.html?postsId=${post.id}`;
        };

        postDivEl.appendChild(button);
        postsDivEl.appendChild(postDivEl);
    }
    document.body.append(postsDivEl);
}