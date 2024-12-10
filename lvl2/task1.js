
const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

const fetchUrl = (url) => {
    return fetch(url)
        .then(res => res.json())
}

const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetchUrl(url)
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

Promise.all([usersUrl, postsUrl, commentsUrl].map(fetchData))
    .then(([users, posts, comments]) => {
        console.log( users)
        console.log(posts)
        console.log(comments)
    })
    .catch(error => {
        console.log(error);
    })
