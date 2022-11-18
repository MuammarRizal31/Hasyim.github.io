const click = document.querySelector(".menu-toggle input");
click.addEventListener('click',function(){
    const ul = document.querySelector("ul");
    ul.classList.toggle('slide');
})

const button = document.querySelector('button a');
button.addEventListener('click',function(){
    return 'sabar'
});

function notFound(){
    return alert('MASIH BELOM ADA ISINYA BUNG');
}