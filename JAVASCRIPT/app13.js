
const myPromise=(boolenvalue)=>{
    return new Promise((resolve,reject)=>{
        if(boolenvalue){
            resolve("Promise resolved")
        } else{
            reject("Promise rejected")
        }
    })
}

myPromise(true).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})