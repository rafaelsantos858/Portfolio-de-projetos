function loadgit() {


    var xhr = new XMLHttpRequest()
    xhr.open('GET', "https://api.github.com/users/rafaelsantos858/repos", true)


    xhr.onreadystatechange = function () {

        if (this.status == 200 && this.readyState == 4) {
            const infogit = JSON.parse(this.responseText)



            var section = document.querySelector("section")

            for (let i = 0; i < infogit.length; i++) {

                section.innerHTML += "<div class='sec'> <p> Nome repositorio:" + infogit[i].name + "</p> <br> <p>Linguagem:" + infogit[i].language + " </p> <br> <p><a id= linkcustom target=_blank href=" + infogit[i].html_url + ">Link repositorio</a></p> <br> <span><a class='detalhes' onclick='salvar(this)' id='" + infogit[i].name + "' target='_blank' href='#'>Detalhes</a> </span>  <br><img id='img1' src='capas/"+infogit[i].name+".png' alt=''></div> "

            }

        }

    }
    xhr.send();

}

loadgit()

let repositorio = JSON.parse(localStorage.getItem("repositorio"))

if (repositorio == null) {
    repositorio = []
}





function salvar(rep) {

    localStorage.clear
    var array = []

    array.push({
        nome: rep.id
    })

    var arrayJson = JSON.stringify(array)

    localStorage.repositorios = arrayJson

    window.location.href = "detalhes.html"
    

}