
function step1() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })
}


function step2() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000)
    })
}


step1()
.then(()=>console.log('step 1'))

step2()
.then(()=>console.log('step 2'))