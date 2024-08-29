let login = '', senha , qtdCont = 0 , valor = 0 , totalGeral = 0 , cesta , loginAut
let article , div, div2, h3, input, p1, p2, span, aLink, main, section, h2, p3, span2, aLink2
let usr = []
let snh = []
let produto = []
if(localStorage.prodArr){
    produto = JSON.parse(localStorage.getItem('prodArr'))
}
let cod = []
if(localStorage.codArr){
    cod = JSON.parse(localStorage.getItem('codArr'))
}
let preco = []
if(localStorage.precoArr){
    preco = JSON.parse(localStorage.getItem('precoArr'))
}
let link = []
if(localStorage.linkArr){
    link = JSON.parse(localStorage.getItem('linkArr'))
}
let descricao = []
if(localStorage.descArr){
    descricao = JSON.parse(localStorage.getItem('descArr'))
}
let qtd = []
if(localStorage.qtdArr){
    qtd = JSON.parse(localStorage.getItem('qtdArr'))
}
let totalCompra = []
if(localStorage.totCompArr){
    totalCompra = JSON.parse(localStorage.getItem('totCompArr'))
}

function getDados(){
    if(localStorage.qtdArr){
        qtd = JSON.parse(localStorage.getItem('qtdArr'))
    }
    localStorage.qtdArr = JSON.stringify(qtd)
    if(localStorage.tot){
        totalCompra = JSON.parse(localStorage.getItem('totCompArr'))
    }
    localStorage.totCompArr = JSON.stringify(totalCompra)
    if(localStorage.prodArr){
        produto = JSON.parse(localStorage.getItem('prodArr'))
    }
    let prod = document.getElementById('produto').value
    produto.push(prod)
    localStorage.prodArr = JSON.stringify(produto)
    document.getElementById('produto').value = ''
    if(localStorage.descArr){
        descricao = JSON.parse(localStorage.getItem('descArr'))
    }
    let descri = document.getElementById('descricao').value
    descricao.push(descri)
    localStorage.descArr = JSON.stringify(descricao)
    document.getElementById('descricao').value = ''
    if(localStorage.codArr){
        cod = JSON.parse(localStorage.getItem('codArr'))
    }
    let codig = document.getElementById('codigo').value
    cod.push(codig)
    localStorage.codArr = JSON.stringify(cod)
    document.getElementById('codigo').value = ''
    if(localStorage.precoArr){
        preco = JSON.parse(localStorage.getItem('precoArr'))
    }
    let prec = document.getElementById('preco').value
    preco.push(parseFloat(prec.replace(',', '.')))
    localStorage.precoArr = JSON.stringify(preco)
    document.getElementById('preco').value = ''
    alert(`Dados Inseridos com Sucesso!`)
}

function montaHTML(){
    main = document.createElement('main')
    main.setAttribute('class', 'container')
    document.body.append(main)
    section = document.createElement('section')
    section.setAttribute('class', 'products-container')
    main.append(section)
    for(i in produto){
        article = document.createElement('article')
        article.setAttribute('class', 'card')
        section.append(article)
        div = document.createElement('div')
        div.setAttribute('class', 'product-image')
        div.setAttribute('id', 'img-' + i)
        div.setAttribute('onclick', "abreLink(" + i + ")")
        article.append(div)
        document.getElementById('img-' + i).style.backgroundImage = 'url(imagem/img' + i + '.jpg'
        h3 = document.createElement('h3')
        h3.setAttribute('id', 'nome' + i)
        h3.innerHTML = produto[i]
        article.append(h3)
        p2 = document.createElement('p')
        p2.innerHTML = 'R$ '
        span = document.createElement('span')
        span.setAttribute('id', cod[i])
        span.setAttribute('class', 'bold')
        span.innerHTML = preco[i].toFixed(2).replace('.', ',')
        p2.append(span)
        article.append(p2)    
    }
    footer = document.createElement('footer')
    footer.setAttribute('id', 'rodape')
    document.body.append(footer)
    h2 = document.createElement('h2')
    h2.innerHTML = 'Informações sobre o site.'
    footer.append(h2)
    aLink2 = document.createElement('a')
    aLink2.setAttribute('id', 'adm')
    aLink2.setAttribute('href', 'atualizacao.html')
    aLink2.innerHTML = 'Administração'
    footer.append(aLink2)
    let logA = localStorage.getItem('loginAutenticado')
    if(logA == 'null' || logA == 'undefined'){
        document.getElementById('log').innerHTML = "Login"
    }else{
        document.getElementById('log').innerHTML = `Bem Vindo, ${localStorage.getItem('loginAutenticado')}`
    }
}

function criaLogin(){
    if(localStorage.usrArr){
        usr = JSON.parse(localStorage.getItem('usrArr'))
    }
    if(localStorage.snhArr){
        snh = JSON.parse(localStorage.getItem('snhArr'))
    }
    let novoUsr = prompt("login")
    usr.push(novoUsr)
    localStorage.usrArr = JSON.stringify(usr)
    let novaSnh = prompt("Senha: ")
    snh.push(novaSnh)
    localStorage.snhArr = JSON.stringify(snh)
    if(usr.includes(novoUsr) && snh.includes(novaSnh)){
        alert("Login Criado com Sucesso!")
    }else{
        alert("Login Não efetuado com sucesso!")
    }
}

function abreTelaLogin(){
        if(localStorage.usrArr){
            usr = JSON.parse(localStorage.getItem('usrArr'))
        }
        if(localStorage.snhArr){
            snh = JSON.parse(localStorage.getItem('snhArr'))
        }
        login = prompt("Login: ")
        senha = prompt("Senha: ")
        let indUsr = usr.indexOf(login)
        if(usr[indUsr] == login && snh[indUsr] == senha){
            localStorage.setItem('loginAutenticado', login)
            loginAut = localStorage.getItem('loginAutenticado')
            document.getElementById('log').innerHTML = `Bem Vindo , ${loginAut}`
        }else{
            alert("Digite um usuario ou senha válidos!")
        }
    }

 function compra(qtdId, produt, posArr){
    if(localStorage.posArr){
        qtd[posArr] = parseInt(document.getElementById(qtdId.value))
    }else{
        localStorage.posArr = JSON.stringify(qtd)
    }
    totalCompra[posArr] = qtd[posArr] * parseFloat(document.getElementById(produt).innerText.replace("," , "."))
    localStorage.qtdArr = JSON.stringify(qtd)
    localStorage.totCompArr = JSON.stringify(total)
    localStorage.setItem('produtoIndividual' , produto[posArr])
    localStorage.setItem('descricaoIndividual' , descricao[posArr])
    let url_atual = window.location.href
    if(url_atual != "http://127.0.0.1:5500/produto.html" && url_atual != "http://127.0.0.1:5500/produto.html#"){
        window.location.href = "/produto.html"
    }
    alert("Produto adicionado no Carrinho") 
}

function abreLink(posArr){
    localStorage.setItem('produtoIndividual', produto[posArr])
    localStorage.setItem('descricaoIndividual', descricao[posArr])
    let url_atual = window.location.href
    if(url_atual != "http://127.0.0.1:5500/produto.html" && url_atual != "http://127.0.0.1:5500/produto.html#"){
        window.location.href = "/produto.html"
    }
}

function carregaProduto(){
    let produtoCompra = localStorage.getItem('produtoIndividual')
    let descCompra = localStorage.getItem('descricaoIndividual')
    let pos = produto.indexOf(produtoCompra)
    document.getElementById('tituloProduto').innerHTML = produtoCompra 
    document.getElementById('descProduto').innerHTML = descCompra 
    document.getElementById('imgProd').style.backgroundImage = 'url(marvel/imagem/img' + pos + '.jpg)'
    div2 = document.createElement('div')
    div2.setAttribute('id', 'divProd')
    div2.setAttribute('class', 'card')
    document.body.append(div2)
    p1 = document.createElement('p')
    p1.innerHTML = 'Qtd: '
    div2.append(p1)
    input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('value','1') 
    input.setAttribute('min','1') 
    input.setAttribute('max','10') 
    input.setAttribute('id','qtd-' + pos)
    p1.append(input)
    p2 = document.createElement('p')
    p2.innerHTML = "R$ "
    span = document.createElement('span')
    span.setAttribute('id', cod[pos])
    span.setAttribute('class','bold')
    span.innerHTML = preco[pos].toFixed(2).replace('.', ',')
    p2.append(span)
    div2.append(p2)
    aLink = document.createElement('a')
    aLink.setAttribute('onclick', "compra(" + "'" + 'qtd-' + pos + "'" + ',' + "'" + cod[pos] + "'" + ',' + pos + " )")
    aLink.setAttribute('class' , 'btn')
    aLink.setAttribute('href', '#')
    aLink.innerHTML = 'Comprar'
    div2.append(aLink)
}