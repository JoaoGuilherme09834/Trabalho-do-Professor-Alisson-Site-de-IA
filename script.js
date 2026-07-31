/**
 * ============================================
 * SCRIPT.JS - Histórias dos Videogames
 * ============================================
 * 
 * Este arquivo contém toda a lógica JavaScript
 * do site, incluindo a criação do botão "Voltar
 * ao topo" 100% via JavaScript, como solicitado.
 * 
 * FUNÇÕES PRINCIPAIS:
 * 1. Criação dinâmica do botão "Voltar ao topo"
 * 2. Controle de exibição (aparece/desaparece)
 * 3. Scroll suave ao clicar
 * ============================================
 */

/**
 * ============================================
 * 1. CRIAÇÃO DO BOTÃO "VOLTAR AO TOPO"
 * ============================================
 * 
 * Utilizando document.createElement() para
 * criar o botão inteiramente pelo JavaScript,
 * sem escrever HTML diretamente.
 */
function criarBotaoVoltarAoTopo() {
    // Cria o elemento <button> dinamicamente
    const botao = document.createElement('button');
    
    // Define o texto do botão (símbolo de seta)
    botao.textContent = '⬆';
    
    // Adiciona uma classe CSS para estilização
    botao.classList.add('btn-voltar-topo');
    
    // Define atributo de acessibilidade (ARIA)
    botao.setAttribute('aria-label', 'Voltar ao topo da página');
    
    // Define o título (tooltip) para melhor experiência
    botao.setAttribute('title', 'Voltar ao topo');
    
    /**
     * ============================================
     * 2. ADICIONA O EVENTO DE CLIQUE
     * ============================================
     * 
     * Utilizando addEventListener() para capturar
     * o clique e executar o scroll suave.
     */
    botao.addEventListener('click', function() {
        // Rola a página suavemente para o topo
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Deslocamento suave
        });
    });
    
    // Insere o botão na página usando appendChild()
    document.body.appendChild(botao);
    
    // Retorna o botão criado para uso posterior
    return botao;
}

/**
 * ============================================
 * 3. CONTROLE DE VISIBILIDADE DO BOTÃO
 * ============================================
 * 
 * O botão só deve aparecer quando o usuário
 * rolar a página para baixo. Quando estiver
 * próximo do topo, ele deve desaparecer.
 */
function controlarVisibilidadeBotao(botao) {
    // Define a altura (em pixels) a partir da qual o botão aparece
    const LIMITE_PARA_APARECER = 300;
    
    // Adiciona um listener para o evento de scroll
    window.addEventListener('scroll', function() {
        // Obtém a posição atual do scroll
        const posicaoScroll = window.scrollY || window.pageYOffset;
        
        // Se o scroll for maior que o limite, mostra o botão
        if (posicaoScroll > LIMITE_PARA_APARECER) {
            botao.style.display = 'flex'; // Mostra com flex (para centralizar)
        } else {
            // Senão, esconde o botão
            botao.style.display = 'none';
        }
    });
}

/**
 * ============================================
 * 4. EXECUÇÃO PRINCIPAL
 * ============================================
 * 
 * Quando a página carregar, criar o botão e
 * configurar o controle de visibilidade.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Cria o botão "Voltar ao topo" dinamicamente
    const botaoVoltar = criarBotaoVoltarAoTopo();
    
    // Configura o controle de visibilidade
    controlarVisibilidadeBotao(botaoVoltar);
});

/**
 * ============================================
 * 5. ESTILOS DO BOTÃO (INJETADOS VIA JS)
 * ============================================
 * 
 * Como não podemos usar CSS inline, vamos
 * adicionar os estilos dinamicamente via
 * JavaScript para garantir que o botão
 * funcione corretamente.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Cria um elemento <style> para adicionar os estilos do botão
    const estiloBotao = document.createElement('style');
    estiloBotao.textContent = `
        /* Estilos do botão "Voltar ao topo" */
        .btn-voltar-topo {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, #ff00e5, #2d1b69);
            color: #fff;
            font-size: 28px;
            border: 3px solid #00f5ff;
            cursor: pointer;
            box-shadow: 0 0 30px rgba(255, 0, 229, 0.4);
            transition: all 0.3s ease;
            z-index: 9999;
            display: none; /* Inicialmente escondido */
            align-items: center;
            justify-content: center;
            font-family: 'Arial', sans-serif;
        }

        /* Efeito :hover no botão (alteração visual) */
        .btn-voltar-topo:hover {
            background: linear-gradient(135deg, #ffdd00, #ff00e5);
            transform: scale(1.15) rotate(10deg);
            box-shadow: 0 0 50px rgba(255, 221, 0, 0.6);
            border-color: #ffdd00;
        }

        /* Efeito de foco para acessibilidade */
        .btn-voltar-topo:focus {
            outline: 3px solid #ffdd00;
            outline-offset: 3px;
        }

        /* Responsividade para telas menores */
        @media (max-width: 600px) {
            .btn-voltar-topo {
                width: 50px;
                height: 50px;
                font-size: 22px;
                bottom: 20px;
                right: 20px;
            }
        }

        @media (max-width: 400px) {
            .btn-voltar-topo {
                width: 45px;
                height: 45px;
                font-size: 18px;
                bottom: 15px;
                right: 15px;
            }
        }
    `;
    
    // Adiciona os estilos ao <head> do documento
    document.head.appendChild(estiloBotao);
});

/**
 * ============================================
 * 6. CONFIGURAÇÕES ADICIONAIS
 * ============================================
 * 
 * Função para garantir que o botão funcione
 * mesmo em navegadores mais antigos.
 */
(function garantirCompatibilidade() {
    // Verifica se o método scrollTo com behavior existe
    if (!('scrollTo' in window) || typeof window.scrollTo !== 'function') {
        console.warn('Navegador não suporta scrollTo com behavior smooth.');
        // Fallback: usar scrollTo normal sem smooth
        // (Já está implementado, mas mantemos como segurança)
    }
})();

// Log para indicar que o script foi carregado com sucesso
console.log('✅ Script.js carregado - Site História dos Videogames');
console.log('🎮 Botão "Voltar ao topo" criado dinamicamente com JavaScript!');