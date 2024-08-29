let user, pass

function gravarLogin(){
    user = document.getElementById("login").value
    pass = document.getElementById("senha").value
    localStorage.setItem("login", user)
    localStorage.setItem("senha", pass)
    alert("Login criado com Sucesso!")
    document.getElementById("login").value = ""
    document.getElementById("senha").value = ""
}

function verificaLogin(){
    user = localStorage.getItem("login")
    pass = localStorage.getItem("senha")
    if(user == document.getElementById("login").value &&
    pass == document.getElementById("senha").value){
        alert("Parabéns. Você está logado!")
    }else{
        alert("Usuário ou senha incorretos!")
    }   
}