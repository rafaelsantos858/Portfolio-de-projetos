let repositorioobj = JSON.parse(localStorage.getItem("repositorios"));
if (repositorioobj == null) {
    repositorioobj = []
}

var nomerep = repositorioobj[0].nome



var xhr = new XMLHttpRequest()
xhr.open('GET', "https://api.github.com/repos/rafaelsantos858/" + nomerep, false)


xhr.onreadystatechange = function () {

    if (this.status == 200 && this.readyState == 4) {
        const detalhes = JSON.parse(this.responseText)

        //DIV1
        var dono = document.getElementById("dono")
        var imgperfil = document.getElementById("imgperfil")
        var seguidores = document.getElementById("seguidores")
        //DIV2
        var desc = document.getElementById("desc")
        var colaboradores = document.getElementById("colaboradores")
        var branches = document.getElementById("branches")
        //DIV3

        var commits = document.getElementById("commits")  
        
        //DIV4
        var linguagens = document.getElementById("linguagens")





        //DIV1
        dono.innerText += detalhes.owner.login

        imgperfil.src = detalhes.owner.avatar_url
        //DIV3

        function loadseguidores() {
            var xhr = new XMLHttpRequest()
            xhr.open('GET', "https://api.github.com/users/rafaelsantos858/followers", true)
            xhr.onreadystatechange = function () {
                if (this.status == 200 && this.readyState == 4) {

                    seguidores.innerText += this.responseText
                }

            }
            xhr.send();
        }

        loadseguidores()


        //DIV2
        desc.innerHTML += detalhes.description

        function loadcolaboradores() {
            var xhr = new XMLHttpRequest()
            xhr.open('GET',
                "https://api.github.com/repos/rafaelsantos858/teste/collaborators{/collaborator}",
                true)
            xhr.onreadystatechange = function () {
                if (this.status == 200 && this.readyState == 4) {

                    branches.innerText += this.responseText
                }

            }
            xhr.send();
        }
        loadcolaboradores()

        function loadbranches() {
            var xhr = new XMLHttpRequest()
            xhr.open('GET',"https://api.github.com/repos/rafaelsantos858/teste/branches{/branch}",true)
            xhr.onreadystatechange = function () {
                if (this.status == 200 && this.readyState == 4) {

                    colaboradores.innerText += this.responseText
                }

            }
            xhr.send();
        }
        loadbranches()

        function loadcommits() {
            var xhr = new XMLHttpRequest()
            xhr.open('GET',"https://api.github.com/repos/rafaelsantos858/teste/git/commits%7B/sha%7D",true)
            xhr.onreadystatechange = function () {
                if (this.status == 200 && this.readyState == 4) {

                    commits.innerText += this.responseText
                }

            }
            xhr.send();
        }
        loadcommits()

        function loadlinguagens() {
            var xhr = new XMLHttpRequest()
            xhr.open('GET',"https://api.github.com/repos/rafaelsantos858/teste/languages",true)
            xhr.onreadystatechange = function () {
                if (this.status == 200 && this.readyState == 4) {
                    console.log(this.responseText)
                    linguagens.innerText += this.responseText
                }

            }
            xhr.send();
        }
        loadlinguagens()






        










    }

}
xhr.send();