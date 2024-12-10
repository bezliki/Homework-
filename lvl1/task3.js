function task1() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })
}


function task2() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000)
    })
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000)
    })
}

Promise.all([task1(), task2(), task3()]).then(()=>{
    console.log("task1");
    console.log("task2");
    console.log("task3");

    
})