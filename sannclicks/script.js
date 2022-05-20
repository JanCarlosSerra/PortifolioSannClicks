document.querySelectorAll('a').forEach(link => {
    const conteudo = document.getElementById('conteudo')

    link.onclick = function(e) {
        e.preventDefault()
            fetch(link.href)
                .then(resp => resp.text())
                .then(sanncliks => conteudo.innerHTML = sanncliks)
    }
})


let contar = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},3000)

function nextImage(){
    contar++;
    if(contar>4){
        contar = 1;
    }
    document.getElementById("radio"+contar).checked = true;
}