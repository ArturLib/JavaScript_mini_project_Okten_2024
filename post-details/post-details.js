let postId = new URL(location.href).searchParams.get('postsId');

let gettingPostInfo = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    let post = await response.json();

    let header = document.createElement('div');
    header.innerText = 'Post details';
    header.classList.add('header');

    let postWrapper = document.createElement('div');
    postWrapper.classList.add('post-wrapper');

    let titlePost = document.createElement('div');
    titlePost.innerText = `TITLE: ${post.title}`;
    titlePost.classList.add('title-style');

    let bodyPost = document.createElement('div');
    bodyPost.innerText = `BODY: ${post.body}`;
    bodyPost.classList.add('body-style');

    postWrapper.append(titlePost, bodyPost);
    document.body.append(header, postWrapper);

    await getPostComments();
}
void gettingPostInfo();

let getPostComments = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    let comments = await response.json();

    let commentsWrapper = document.createElement('div');
    commentsWrapper.classList.add('comments-wrapper');

    for (const comment of comments) {
        let commentDivEl = document.createElement('div');
        commentDivEl.classList.add('comment-style');

        let idDivEl = document.createElement('div');
        idDivEl.innerText = `ID: ${comment.id}`;
        idDivEl.classList.add('id-style');

        let nameDivEl = document.createElement('div');
        nameDivEl.innerText = `NAME: ${comment.name}`;
        nameDivEl.classList.add('name-style');

        let emailDivEl = document.createElement('div');
        emailDivEl.innerText = `EMAIL: ${comment.email}`;
        emailDivEl.classList.add('email-style');

        let bodyDivEl = document.createElement('div');
        bodyDivEl.innerText = `BODY: ${comment.body}`;
        bodyDivEl.classList.add('body-comment-style');

        commentDivEl.append(idDivEl, nameDivEl, emailDivEl, bodyDivEl);
        commentsWrapper.appendChild(commentDivEl);
    }
    document.body.appendChild(commentsWrapper);
}