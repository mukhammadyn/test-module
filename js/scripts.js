// while
// try/catch
// async/await
// module
// urlSearchParams
// switch/case

// let i = 12

// while(i < 10) {
//   console.log(i)
//   i++
// }

// do {
//   console.log("lorem")
//   i++
// } while(i < 10)

// async function myAsyncFn(){

//   try {

//     const arr = null
//     arr.map(item => console.log(item))
//     // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1123')

//     // if(!res.ok) {
//     //   throw new Error("O'xshamadi")
//     // }

//     // const data = await res.json()

//     // return data
//   } catch(err) {

//     console.log(err)

//   }

//   console.log("first")

// }

// myAsyncFn()

// function isValidJSON(json){
//   let canParse = true

//   try {
//     JSON.parse(json)
//   } catch(err) {
//     canParse = false
//   }

//   return canParse
// }

// const jsonFormat = JSON.stringify({a: 12, b: 18})

// if(isValidJSON(jsonFormat)) {
//   console.log(JSON.parse(jsonFormat))
// }


// new, process, rejected, delivering, done, archive

// new -> ko'k
// process -> sariq
// delivering -> och sariq
// rejected -> qizil
// done -> yashil
// archive -> seriy

// const elStatus = document.querySelector(".status")

// const backStatus = "archive"

// const statuses = {
//   new: {
//     text: "Yangi",
//     color: "dodgerblue",
//   },
//   process: {
//     text: "Jarayonda",
//     color: "yellow",
//   },
//   delivering: {
//     text: "Yetqazilmoqda",
//     color: "yellow",
//   },
//   rejected: {
//     text: "Chuchvara otmen",
//     color: "red",
//   },
//   done: {
//     text: "Yetkazib berildi",
//     color: "green",
//   },
//   archive: {
//     text: "Arxiv",
//     color: "gray",
//   },
// }

// elStatus.style.backgroundColor = statuses[backStatus].color
// elStatus.textContent = statuses[backStatus].text








// if(backStatus === "new") {
//   elStatus.style.backgroundColor = "dodgerblue"
// } else if(backStatus === "process") {
//   elStatus.style.backgroundColor = "yellow"
// } else if(backStatus === "rejected") {
//   elStatus.style.backgroundColor = "red"
// } else if(backStatus === "delivering") {
//   elStatus.style.backgroundColor = "yellow"
// } else if(backStatus === "done") {
//   elStatus.style.backgroundColor = "green"
// } else if(backStatus === "archive") {
//   elStatus.style.backgroundColor = "gray"
// }

// switch(backStatus) {
//   case "new": {
//     elStatus.style.backgroundColor = "dodgerblue"
//   } case "process": {
//     elStatus.style.backgroundColor = "yellow"
//   } default: {
//     elStatus.style.backgroundColor = "pink"
//   }
// }


