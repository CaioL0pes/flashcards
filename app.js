function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementsById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML = `
    <article class="cartao">
                <div class="cartao__conteudo">
                    <h3>Programação</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>O que é JS</p>
                    </div>
                    <div class="Cartao__conteudo__resposta">
                   <p>JS é uma linguagem de programação</p>
                     </div>
                </div>
            </article>
            <article class="cartao">
                <div class="cartao__conteudo">
                    <h3>Inglês</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>Como se fala número um em Inglês?</p>
                    </div>
                    <div class="Cartao__conteudo__resposta">
                    <p>Number one</p>
                     </div>
                </div>
            </article>
            `
            container.appenChild(cartao)
}

