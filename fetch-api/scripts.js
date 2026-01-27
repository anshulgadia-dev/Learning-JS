const prod_List = document.getElementById('prod-list');

const fetchData = async () => {
    try {
        const data = await fetch('https://dummyjson.com/products');
        res = await data.json();
        res = res.products;
        res.map((product , index) => {
            const li_tag = document.createElement('li');
            li_tag.setAttribute('id' , index);
            li_tag.innerText = product.title;
            prod_List.appendChild(li_tag)
        })
    } catch (error) {
        console.error("Error in fetching products ", error);
    }
}


const fetch_btn = document.getElementById('fetch-btn');
fetch_btn.addEventListener('click' , ()=>{
   fetchData();
});