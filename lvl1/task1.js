//first

const wait = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}


wait(1000)
    .then(() => console.log("1 sec"))
