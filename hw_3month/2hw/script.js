



document.addEventListener("DOMContentLoaded", ()=> {
    const postContainer = document.getElementById("posts-container");
    const loader = document.getElementById("load");

    async function postss() {
       try{
           load.classList.remove("hidden")
           const response = await fetch("https://jsonplaceholder.typicode.com/posts");
           if(!response.ok){
               throw new Error(`status: ${response}`)
           }
           const postsss = await response.json();

           postsss.forEach(post =>{
               const postsElement =  document.createElement("div");
               postsElement.classList.add('post');
               postsElement.innerHTML = `
               
               <h3>${post.title}</h1>
               <p>${post.body}</p>
               <h3>${post.id}</h4>
               `;
               postContainer.appendChild(postsElement);
           });
       }catch{
           console.error("ошибка", error)
       }finally{
           load.classList.add("hidden")

       }
    }
    postss()

})
