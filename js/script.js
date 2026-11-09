// js/script.js

function loadComponent(elementId, componentName) {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Se a página atual estiver dentro da pasta 'pages', precisamos voltar um nível (../)
  const estaNaPastaPages = window.location.pathname.includes('/pages/');
  const basePath = estaNaPastaPages ? '../components/' : 'components/';
  
  const filePath = basePath + componentName;

  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Não foi possível encontrar o arquivo: ${filePath}`);
      }
      return response.text();
    })
    .then(html => {
      element.innerHTML = html;
    })
    .catch(error => {
      console.error('Erro:', error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  // Carrega o footer
  loadComponent("footer-placeholder", "footer.html");

  // Defina sua lógica de login
  const usuarioLogado = false; // Mude para true se estiver logado

  if (usuarioLogado) {
    loadComponent("header-placeholder", "headerlogado.html");
  } else {
    loadComponent("header-placeholder", "header.html");
  }
});