// js/script.js

function destacarMenuAtivo() {
  const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
  const estaNaPastaPages = window.location.pathname.includes('/pages/');

  document.querySelectorAll('.header .menu-item').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    if (!estaNaPastaPages && href.startsWith('../')) {
      link.setAttribute('href', href.replace('../', './'));
    }

    const paginaLink = href.split('/').pop();

    if (paginaLink === paginaAtual) {
      link.classList.add('ativo');
    } else {
      link.classList.remove('ativo');
    }
  });
}

function loadComponent(elementId, componentName) {
  const element = document.getElementById(elementId);
  if (!element) return;

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

      if (elementId === 'header-placeholder') {
        destacarMenuAtivo();
      }
    })
    .catch((error) => {
      console.error('Erro:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  // Carrega o footer e o header
  loadComponent('footer-placeholder', 'footer.html');

  const usuarioLogado = sessionStorage.getItem('usuarioLogado') === 'true';
  loadComponent(
    'header-placeholder',
    usuarioLogado ? 'headerlogado.html' : 'header.html'
  );

  // Lógica da tela de login
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

  // Lógica do olho da senha (movida para cá onde 'senha' já existe!)
  const botaoOlhoSenha = document.getElementById('OlhoSenha');
  const iconeOlho = botaoOlhoSenha?.querySelector('i');

  function atualizarExibicao(mostrar) {
    if (!senha) return;

    senha.type = mostrar ? 'text' : 'password';

    if (iconeOlho) {
      iconeOlho.classList.toggle('fa-eye', mostrar);
      iconeOlho.classList.toggle('fa-eye-slash', !mostrar);
    }

    botaoOlhoSenha?.setAttribute(
      'aria-label',
      mostrar ? 'Ocultar senha' : 'Mostrar senha'
    );
  }

  if (senha) {
    atualizarExibicao(senha.type === 'text');
    botaoOlhoSenha?.addEventListener('click', () => {
      atualizarExibicao(senha.type === 'password');
    });
  }
});

// Dropdown do perfil no header logado
document.addEventListener('click', (event) => {
  const btnPerfil = event.target.closest('#btnPerfil');
  const menuDropdown = document.getElementById('menuDropdown');

  if (!menuDropdown) return;

  if (btnPerfil) {
    menuDropdown.classList.toggle('ativo');
    return;
  }

  if (!menuDropdown.contains(event.target)) {
    menuDropdown.classList.remove('ativo');
  }
});

// Botões da sidebar de filtros na página de adoção
document.addEventListener('click', (event) => {
  const botaoFiltro = event.target.closest('.sidebar-filtros button');

  if (botaoFiltro) {
    botaoFiltro.classList.toggle('ativo');
  }
});