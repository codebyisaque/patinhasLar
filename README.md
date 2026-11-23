# 🐾 Patinhas Lar

**Patinhas Lar** é uma aplicação web front-end desenvolvida para aumentar a visibilidade de animais disponíveis para adoção ou que precisam de apoio, conectando pessoas interessadas a formas reais de ajuda como **adoção responsável**, **lar temporário** e **apadrinhamento**.

Projeto desenvolvido como trabalho de conclusão do curso **Transforme-se** (realizado pelo **PROA** em parceria com a **Serasa**), com foco no ensino prático de desenvolvimento Front-End.

---

## 🎯 Objetivo do Projeto

- Aumentar a visibilidade de animais resgatados, em busca de adoção ou necessitando de cuidados contínuos.
- Facilitar o acesso e o entendimento sobre como ajudar por meio de **adoção**, **lar temporário** e **apadrinhamento**.
- Consolidar na prática os conhecimentos de estruturação semântica (HTML5), estilização modularizada (CSS3) e interatividade (JavaScript).

---

## ✨ Páginas e Funcionalidades

- **Página Inicial (`index.html`):** apresentação da plataforma, carrossel interativo de pets (*Dara*, *Maylon*, *Nino*) e seções informativas sobre lar temporário e apadrinhamento.
- **Adoção (`adocao.html`) & Detalhes dos Pets (`paginadetalhes*.html`):** vitrine de animais disponíveis e páginas individuais com informações detalhadas de cada pet.
- **Como Funciona o Apadrinhamento (`comofuncionaoapadrinhamento.html`):** explicação sobre o apoio contínuo aos animais.
- **Lar Temporário (`lartemporario.html`):** informações sobre o acolhimento provisório de pets resgatados.
- **Formulários de Interesse (`InteresseAdoção.html`, `InteresseApadrinhar.html`, `InteresseLarTemp.html`):** fluxos para manifestar interesse em adotar, apadrinhar ou oferecer lar temporário.
- **Cadastro e Autenticação (`cadastroDeUsuario.html`, `login.html`, `RecuperarSenha.html`):** fluxo completo de cadastro, login e recuperação de senha com telas de confirmação.
- **Cadastro de Animal (`cadastrodoanimal.html`):** formulário para registrar novos animais na plataforma.
- **Sobre Nós (`sobreNos.html`) & Parcerias (`parcerias.html`):** apresentação institucional do projeto e empresas/marcas parceiras.
- **Componentes Reutilizáveis (`components/`):** estruturação modular de `header.html`, `headerlogado.html` e `footer.html`.

---

## 🛠️ Tecnologias Utilizadas

[![Minhas Tecnologias](https://skillicons.dev/icons?i=html,css,js)](https://skillicons.dev)

---

## 📁 Estrutura do Projeto

```text
├── assets/
│   └── img/
│       ├── fotosHome/        # Imagens e ícones exclusivos da página inicial
│       └── icons/            # Ícones gerais, redes sociais e logotipos
├── components/               # Componentes reutilizáveis (header, headerlogado, footer)
├── css/                      # Folhas de estilo organizadas por página/módulo
│   ├── style.css
│   ├── footerHeader.css
│   ├── adocao.style.css
│   ├── paginadetalhes.css
│   ├── lartemporario.css
│   ├── comofuncionaoapadrinhamento.css
│   ├── InteressesGeral.css
│   ├── cadastroDeUsuario.css
│   ├── cadastroanimal.css
│   ├── Login&RecuperarSenha.css
│   ├── parcerias.css
│   └── SobreNos.css
├── js/
│   └── script.js             # Scripts de interatividade da aplicação
├── pages/                    # Páginas internas da aplicação
│   ├── adocao.html
│   ├── paginadetalhes.html
│   ├── paginadetalhesDara.html
│   ├── paginadetalhesMaylon.html
│   ├── paginadetalhesNino.html
│   ├── lartemporario.html
│   ├── comofuncionaoapadrinhamento.html
│   ├── InteresseAdoção.html
│   ├── InteresseApadrinhar.html
│   ├── InteresseLarTemp.html
│   ├── cadastroDeUsuario.html
│   ├── CadastroSucesso.html
│   ├── cadastrodoanimal.html
│   ├── login.html
│   ├── RecuperarSenha.html
│   ├── RecuperaçãoSenhaSucesso.html
│   ├── parcerias.html
│   └── sobreNos.html
├── index.html                # Página principal
└── README.md
```

---

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone [https://github.com/seu-usuario/patinhas-lar.git](https://github.com/seu-usuario/patinhas-lar.git)
   ```
2. Acesse a pasta do projeto e abra-a no seu editor de código (ex.: VS Code).
3. Inicie o arquivo `index.html` utilizando a extensão **Live Server** *(recomendado para o carregamento correto dos arquivos em `components/`)* ou abra diretamente no navegador.

---

## 🎓 Contexto Acadêmico

Projeto conclusivo desenvolvido durante o programa **Transforme-se** (**PROA** + **Serasa**), voltado à formação prática em desenvolvimento Front-End.

---

## 👥 Autores

- **Isaque** — [GitHub](https://github.com/codebyisaque)
- **Bianca** — [GitHub](https://github.com/biaoliver102)
- **Bruna** — [GitHub](https://github.com/Bruna-Santos-ctrl)
- **Julia** — [GitHub](https://github.com/DevJuliaLopes-lab)
- **Raphael** — [GitHub](https://github.com/DevRaphaSouza)
- **Vinicius** — [GitHub](https://github.com/vinicasablancas-tech)
- **Vitor** — [GitHub](https://github.com/vitorbernardes-tech)
