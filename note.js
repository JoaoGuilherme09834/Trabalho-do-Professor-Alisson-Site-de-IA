/**
 * ============================================
 * SCRIPT.JS - História dos Videogames
 * ============================================
 * 
 * Este arquivo contém toda a lógica JavaScript
 * do site, incluindo a criação do botão "Voltar
 * ao topo" 100% via JavaScript.
 * ============================================
 */

/**
 * ============================================
 * 1. CRIAÇÃO IMEDIATA DO BOTÃO
 * ============================================
 * 
 * O botão é criado assim que o script é carregado,
 * mas só aparece após o usuário rolar a página.
 */

// Cria o botão imediatamente (execução imediata)
(function criarBotaoVoltarAoTopo() {
    console.log('🎮 Iniciando criação do botão "Voltar ao topo"...');
    
    // 1. Cria o elemento <button> dinamicamente
    const botao = document.createElement('button');
    console.log('✅ Botão criado com document.createElement()');
    
    // 2. Define o texto do botão (símbolo de seta)
    botao.textContent = '⬆';
    console.log('✅ Texto do botão definido: ⬆');
    
    // 3. Adiciona uma classe CSS para estilização
    botao.classList.add('btn-voltar-topo');
    console.log('✅ Classe "btn-voltar-topo" adicionada');
    
    // 4. ATRIBUTO DE ACESSIBILIDADE - ARIA-LABEL
    botao.setAttribute('aria-label', 'Voltar ao topo da página');
    console.log('✅ ARIA-label adicionado para acessibilidade');
    
    // 5. Define o título (tooltip)
    botao.setAttribute('title', 'Voltar ao topo da página');
    console.log('✅ Título/tooltip definido');
    
    // 6. ADICIONA O EVENTO DE CLIQUE
    botao.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('🔼 Botão clicado - voltando ao topo');
        // Rola a página suavemente para o topo
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    console.log('✅ Evento de clique adicionado com addEventListener()');
    
    // 7. Insere o botão na página usando appendChild()
    document.body.appendChild(botao);
    console.log('✅ Botão inserido na página com appendChild()');
    console.log('✅ Botão criado com SUCESSO!');
    
    // 8. CONTROLE DE VISIBILIDADE
    // Define a altura (em pixels) a partir da qual o botão aparece
    const LIMITE_PARA_APARECER = 300;
    
    // Função que controla se o botão aparece ou não
    function controlarVisibilidade() {
        const posicaoScroll = window.scrollY || window.pageYOffset;
        
        if (posicaoScroll > LIMITE_PARA_APARECER) {
            botao.style.display = 'flex';
            botao.style.opacity = '1';
        } else {
            botao.style.display = 'none';
            botao.style.opacity = '0';
        }
    }
    
    // Adiciona listener para o evento de scroll
    window.addEventListener('scroll', controlarVisibilidade);
    console.log('✅ Controle de visibilidade configurado');
    
    // Executa uma vez para verificar a posição inicial
    controlarVisibilidade();
    
    // Retorna o botão caso precise
    return botao;
})();

/**
 * ============================================
 * 2. ESTILOS DO BOTÃO (INJETADOS VIA JS)
 * ============================================
 * 
 * Adiciona os estilos CSS dinamicamente
 */
(function adicionarEstilosBotao() {
    console.log('🎨 Injetando estilos CSS do botão...');
    
    // Cria um elemento <style>
    const estiloBotao = document.createElement('style');
    estiloBotao.textContent = `
        /* ============================================
           ESTILOS DO BOTÃO "VOLTAR AO TOPO"
           ============================================ */
        
        .btn-voltar-topo {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, #ff00e5, #2d1b69);
            color: #ffffff;
            font-size: 28px;
            border: 3px solid #00f5ff;
            cursor: pointer;
            box-shadow: 0 0 30px rgba(255, 0, 229, 0.4);
            transition: all 0.3s ease;
            z-index: 9999;
            display: none;
            align-items: center;
            justify-content: center;
            font-family: 'Arial', sans-serif;
            user-select: none;
            padding: 0;
            line-height: 1;
        }

        /* EFEITO :HOVER - alteração visual ao passar o mouse */
        .btn-voltar-topo:hover {
            background: linear-gradient(135deg, #ffdd00, #ff00e5);
            transform: scale(1.15) rotate(10deg);
            box-shadow: 0 0 50px rgba(255, 221, 0, 0.6);
            border-color: #ffdd00;
            color: #1a0a2e;
        }

        /* EFEITO DE FOCO PARA ACESSIBILIDADE */
        .btn-voltar-topo:focus {
            outline: 3px solid #ffdd00;
            outline-offset: 3px;
        }

        /* EFEITO ATIVO (QUANDO CLICADO) */
        .btn-voltar-topo:active {
            transform: scale(0.9);
            transition: transform 0.1s ease;
        }

        /* RESPONSIVIDADE */
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

        /* ANIMAÇÃO DE ENTRADA */
        .btn-voltar-topo {
            animation: fadeInUp 0.3s ease;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px) scale(0.8);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
    `;
    
    // Adiciona ao head
    document.head.appendChild(estiloBotao);
    console.log('✅ Estilos CSS injetados com sucesso!');
})();

/**
 * ============================================
 * 3. VERIFICAÇÃO DE LINKS INTERNOS
 * ============================================
 */
(function verificarLinksInternos() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    let linksQuebrados = 0;
    
    links.forEach(link => {
        const destino = link.getAttribute('href');
        if (destino && destino !== '#') {
            const elemento = document.querySelector(destino);
            if (!elemento) {
                console.warn(`⚠️ Link quebrado: ${destino} não encontrado`);
                linksQuebrados++;
            }
        }
    });
    
    if (linksQuebrados === 0) {
        console.log('✅ Todos os links internos estão funcionando!');
    } else {
        console.warn(`⚠️ ${linksQuebrados} links quebrados encontrados`);
    }
})();

/**
 * ============================================
 * 4. VERIFICAÇÃO DE IMAGENS
 * ============================================
 */
(function verificarImagens() {
    const imagens = document.querySelectorAll('img');
    
    if (imagens.length === 0) {
        console.warn('⚠️ Nenhuma imagem encontrada na página');
        return;
    }
    
    let imagensCarregadas = 0;
    
    imagens.forEach(img => {
        if (img.complete) {
            imagensCarregadas++;
        } else {
            img.addEventListener('load', function() {
                imagensCarregadas++;
                if (imagensCarregadas === imagens.length) {
                    console.log(`✅ Todas as ${imagens.length} imagens carregadas!`);
                }
            });
            
            img.addEventListener('error', function() {
                console.warn(`⚠️ Imagem não encontrada: ${img.src}`);
                img.alt = 'Imagem não disponível';
                img.style.opacity = '0.5';
            });
        }
    });
    
    console.log(`🖼️ ${imagens.length} imagens verificadas`);
})();

/**
 * ============================================
 * 5. CONFIGURAÇÃO DE LINKS EXTERNOS
 * ============================================
 */
(function configurarLinksExternos() {
    const linksExternos = document.querySelectorAll('a[target="_blank"]');
    
    linksExternos.forEach(link => {
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    if (linksExternos.length > 0) {
        console.log(`🔗 ${linksExternos.length} links externos configurados`);
    }
})();

/**
 * ============================================
 * 6. DETECÇÃO DE DISPOSITIVO MÓVEL
 * ============================================
 */
(function detectarDispositivoMovel() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        console.log('📱 Dispositivo móvel detectado');
        document.body.classList.add('mobile');
    } else {
        console.log('💻 Desktop detectado');
        document.body.classList.add('desktop');
    }
})();

/**
 * ============================================
 * 7. LOG DE INICIALIZAÇÃO
 * ============================================
 */
console.log('🎮 ============================================');
console.log('🎮 SITE: História dos Videogames');
console.log('🎮 Desenvolvido por: João Guilherme Martelli Olivio Cunha');
console.log('🎮 Turma: 2º Ano E');
console.log('🎮 Colégio: 3º Colégio da Polícia Militar do Paraná');
console.log('🎮 ============================================');
console.log('✅ Script.js carregado com SUCESSO!');
console.log('✅ Botão "Voltar ao topo" CRIADO e FUNCIONANDO!');
console.log('✅ Role a página para baixo e veja o botão aparecer!');
console.log('🎮 ============================================');

/**
 * ============================================
 * FIM DO SCRIPT
 * ============================================
 * 
 * FUNCIONALIDADES IMPLEMENTADAS:
 * ✅ Botão criado com document.createElement()
 * ✅ Texto definido via JavaScript
 * ✅ Classe adicionada via JavaScript
 * ✅ Inserido com appendChild()
 * ✅ Sem HTML direto do botão
 * ✅ Evento com addEventListener()
 * ✅ Scroll com behavior: "smooth"
 * ✅ Posicionado no canto inferior
 * ✅ Aparece após scroll (300px)
 * ✅ Desaparece no topo
 * ✅ :hover com alteração visual
 * ✅ ARIA-label para acessibilidade
 * ✅ Estilos injetados dinamicamente
 * ✅ Compatível com navegadores
 * ============================================
 */