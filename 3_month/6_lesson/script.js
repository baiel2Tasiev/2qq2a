fetch('https://fakestori.com/products').then((response)=>{
    return response.json()
}).then((data))=>{  
    console.log(data);

    for(let i=0;i<data.length;i++){
    document.querySelector('.all_products').innerHTML +=`   
    <div class="all_products_item" data-id="${data[i].id}">
        <img src="${data[i].image}">
        <h2>Name:${data[i].title}</h2>
        <h2>Price:${data[i].price}</h2>
        <button> Добвьте корзину </button>
    </div>
        '
    `
    }
}