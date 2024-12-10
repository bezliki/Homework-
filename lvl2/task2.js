const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

const fetchUrl = (url) => {
    return fetch(url)
        .then(res => res.json())
}


const fetchData = (url) => { 
    return new Promise((resolve, reject) => {
         const timeout = setTimeout(() => {
             reject("error");
             }, 5000)
              fetchUrl(url)
              .then((data) => { 
                clearTimeout(timeout)
                 resolve(data)
                })
                .catch((error) => { 
                    clearTimeout(timeout)
                    reject(error) 
                })
             })
             }


const fetchAllData = () => {
    const users = fetchData(usersUrl)
    const posts = fetchData(postsUrl)
    const comments = fetchData(commentsUrl)


    Promise.race([users, posts, comments])
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
}


fetchAllData()
