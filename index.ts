

let url = 'https://jsonplaceholder.typicode.com/posts'
let res = document.getElementById('finres')
let addJsonBtn = document.getElementById('addJson')

type Post = {
    "userId": number,
    "id": number,
    "title": string,
    "body":string
}

// async function fetchValues() {
//     let arr:Post[] = []
//     fetch(url).then(response => {
//         return response.json()
//     }).then(resolve => {
//         console.log(resolve)
//         for (let post in resolve) {
//             let postItem = resolve[post]
//             let postObj: Post = {
//                 userId: postItem.userID,
//                 id: postItem.id,
//                 title: postItem.title,
//                 body: postItem.body
//             }
//             arr.push(postObj)
//         }       
//     })
//     console.log(arr)
// }

let fetchValues = async () => {
        let arr: Post[] = []
        fetch(url).then(response => {
            return response.json()
        }).then(result => {
            for (let post in result) {
                let prom = new Promise<Post>(resolve => {
                    let postItem = result[post]
                    let postObj:Post = {
                        userId: postItem.userID,
                        id: postItem.id,
                        title: postItem.title,
                        body: postItem.body
                    }
                
                    resolve(postObj)
                    return postObj
                }).then(solution => {
                    let p = document.createElement('p')
                    p.textContent = JSON.stringify(solution)
                    console.log(p)
                    res?.appendChild(p)
                }) 
                
            }
            
        })
        
}

addJsonBtn?.addEventListener('click', fetchValues)

