// js/script.js

function loadComponent(elementId, componentName) {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Se a página atual estiver dentro da pasta 'pages', precisamos voltar um nível (../)
  const estaNaPastaPages = window.location.pathname.includes('/pages/');
  const basePath = estaNaPastaPages ? '../components/' : 'components/';

  const filePath = basePath + componentName;

  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Não foi possível encontrar o arquivo: ${filePath}`);
      }
      return response.text();
    })
    .then((html) => {
      element.innerHTML = html;
    })
    .catch((error) => {
      console.error('Erro:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  // Carrega o footer
  loadComponent('footer-placeholder', 'footer.html');

  const usuarioLogado = sessionStorage.getItem('usuarioLogado') === 'true';
  loadComponent(
    'header-placeholder',
    usuarioLogado ? 'headerlogado.html' : 'header.html'
  );

  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  const botaoEntrar = document.querySelector('.btn-normal');

  function atualizarHeader() {
    const camposPreenchidos =
      email?.value.trim().length > 0 || senha?.value.trim().length > 0;
    const logado = sessionStorage.getItem('usuarioLogado') === 'true';

    loadComponent(
      'header-placeholder',
      camposPreenchidos || logado ? 'headerlogado.html' : 'header.html'
    );
  }

  email?.addEventListener('input', atualizarHeader);
  senha?.addEventListener('input', atualizarHeader);

  botaoEntrar?.addEventListener('click', (evento) => {
    if (email?.value.trim() && senha?.value.trim()) {
      sessionStorage.setItem('usuarioLogado', 'true');
    } else {
      evento.preventDefault();
      alert('Preencha o e-mail e a senha para entrar.');
    }
  });
});

document.addEventListener('click', (event) => {
  const btnPerfil = event.target.closest('#btnPerfil');
  const menuDropdown = document.getElementById('menuDropdown');

  if (!menuDropdown) return;

  // Se clicou no ícone de perfil, abre ou fecha o menu
  if (btnPerfil) {
    menuDropdown.classList.toggle('ativo');
    return;
  }

  // Se clicou fora do menu enquanto ele está aberto, fecha
  if (!menuDropdown.contains(event.target)) {
    menuDropdown.classList.remove('ativo');
  }
});

const botaoOlhoSenha = document.getElementById ('OlhoSenha');
const iconeOlho = botaoOlhoSenha?.querySelector ('i');

function atualizarExibicao(mostrar){
  if (!senha) return;

  senha.type = mostrar ? 'text' : 'password';

  if (iconeOlho){
    iconeOlho.classList.toggle ('fa-eye', mostrar);
    iconeOlho.classList.toggle ('fa-eye-slash', !mostrar);
  }

  botaoOlhoSenha?.setAttribute(
    'aria-label',
    mostrar ? 'Ocultar senha' : 'Mostrar senha'
  );
}

atualizarExibicao (senha?.type === 'text');

botaoOlhoSenha?.addEventListener ('click', () => {
  if(!senha) return;
  atualizarExibicao (senha.type === 'password');
});