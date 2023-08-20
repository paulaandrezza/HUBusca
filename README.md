# Desafio Click Soft

## 📑 Sobre o Projeto

Este projeto consiste em uma página de busca de perfis e repositórios do github desenvolvida como parte de um teste para um processo
seletivo na ClickSoft. A página foi criada para demonstrar meus conhecimentos e habilidades em
desenvolvimento web.

## 📝 Requisitos do projeto

1. Permita que na tela principal busquemos os dados de uma pessoa do GitHub através do nome de usuário. E que no resultado apareça a foto, o nome, o login e a localização.
2. Permita que ao clicar na foto, abra um perfil com os dados que a API do GitHub fornece: Foto, nome, login, localização, o ID, quantidade de seguidores, quantidade de repositórios públicos, e uma lista com todos os repositórios da pessoa (nome do repositório, linguagem utilizada, descrição, data de criação, data do último push).
3. Ao clicar em um repositório, seremos redirecionados para este repositório no site do GitHub.
4. Crie um menu contendo todos os usuários pesquisados recentemente, que também siga o padrão com os dados iguais ao da tarefa 1, e com perfil igual ao da tarefa 2.

## ✨ Tecnologias Utilizadas

Durante o desenvolvimento do projeto, foram tomadas algumas decisões importantes para garantir a
qualidade, organização e eficiência do código. Abaixo estão as tecnologias utilizadas.

- [NextJs](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [Axios](https://axios-http.com/ptbr/docs/intro)

<br>

## 📚 Organização do Código

A estrutura de pastas do projeto é organizada da seguinte forma:

```
├── public
│   └── ...
│
└── src
    ├── app
    │   ├── favicon.ico
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── theme
    │   │   ├── globalStyles.ts
    │   │   ├── shared.ts
    │   │   └── theme.ts
    │   └── user
    │       └── [username]
    │           └── page.tsx
    │
    ├── components
    │   ├── Card
    │   │   └── ...
    │   │
    │   ├── ProfileCard
    │   │   └── ...
    │   │
    │   ├── RepoCard
    │   │   └── ...
    │   │
    │   ├── SearchBar
    │   │   └── ...
    │   │
    │   ├── Select
    │   │   └── ...
    │   │
    │   └── SmallCard
    │       └── ...
    │
    └── lib
        └── registry.tsx
```

- No diretório `public`, encontramos os arquivos estáticos relacionados à aplicação. Todos esses
  arquivos são acessíveis publicamente.

- Dentro do diretório src, encontra-se a pasta app, que serve como a espinha dorsal da aplicação. Esta pasta contém diversos elementos-chave:

  - `favicon.ico`: Este arquivo representa o ícone exibido na aba do navegador.
  - `layout.tsx`: Trata-se de um componente que descreve a estrutura visual compartilhada entre várias páginas.
  - `page.tsx`, atua como um componente central que encapsula o conteúdo e a lógica associados a rota raiz da aplicação.
  - `theme`: Este diretório contém os arquivos relacionados aos estilos globais e compartilhados da aplicação, garantindo uma aparência consistente em todo o aplicativo.
  - `user`: Dentro dessa pasta encontra-se a pasta `[username]`, que representa uma rota dinâmica. Esta rota contém o arquivo `page.tsx`, que desempenha o papel crucial na renderização da página específica para essa rota. Isso permite que diferentes páginas sejam criadas dinamicamente com base em diferentes valores de `[username]`.

- Dentro do diretório `components`, temos diversos componentes reutilizáveis, como `Card`, `ProfileCard`, `RepoCard`, `SearchBar`, `Select` e
  `SmallCard`, cada um com sua estrutura de arquivos específica.

- O diretório `lib` contém o arquivo `registry.tsx` que é responsável por lidar com a renderização
  correta e o gerenciamento de estilos do pacote Styled Components em uma aplicação Next.js.

<br>

## 🎯 Funcionalidades

### Busca de Dados do GitHub:

Na tela principal, os usuários podem buscar os dados de uma pessoa no GitHub através do nome de usuário.
Os resultados da busca incluem a foto do perfil, nome, login e localização da pessoa.

### Perfil Detalhado:

Ao clicar na foto do perfil na tela principal, os usuários podem acessar um perfil detalhado.
O perfil detalhado exibe informações como a foto do perfil, nome, login, localização, ID, quantidade de seguidores, quantidade de repositórios públicos e uma lista com todos os repositórios da pessoa.
A lista de repositórios inclui o nome do repositório, linguagem utilizada, descrição, data de criação e data do último push.

### Acesso aos Repositórios no GitHub:

Ao clicar em um repositório na lista de repositórios do perfil detalhado, os usuários são redirecionados para a página correspondente desse repositório no site do GitHub.

### Menu de Usuários Recentes:

Um menu contendo todos os usuários pesquisados recentemente é exibido.
Cada entrada no menu inclui a foto do perfil, nome, login e localização do usuário.
Ao clicar em um usuário do menu, os dados desse usuário são exibidos na tela principal, similar à funcionalidade de busca.

<br>

## 💻 Instruções de Instalação e de Uso

Para instalar e usar o projeto "teste-leadster", siga as instruções abaixo:

1. Faça um fork do projeto no GitHub: Acesse o link
   [https://github.com/paulaandrezza/desafio-click-soft](https://github.com/paulaandrezza/desafio-click-soft)
   e clique no botão "Fork" no canto superior direito da página. Isso criará uma cópia do projeto em
   seu próprio repositório do GitHub.

2. Clone o repositório: No seu terminal, navegue até o diretório onde deseja clonar o projeto e
   execute o seguinte comando:

   ```
   git clone https://github.com/SEU_USUARIO_GITHUB/desafio-click-soft.git
   ```

   Certifique-se de substituir "SEU_USUARIO_GITHUB" pelo seu nome de usuário no GitHub.

3. Acesse o diretório do projeto: Execute o seguinte comando no terminal para entrar no diretório do
   projeto:

   ```
   cd desafio-click-soft
   ```

4. Instale as dependências: Execute o comando a seguir para instalar as dependências do projeto usando o npm:

   ```
   npm install
   ```

5. Inicie o servidor de desenvolvimento:

   ```
   npm run dev
   ```

6. Acesse o projeto: Abra o seu navegador e digite o seguinte endereço:
   ```
   http://localhost:3000
   ```
   Agora você poderá visualizar e interagir com o projeto "desafio-click-soft" localmente em seu
   ambiente de desenvolvimento.

É possível acessar o deploy do projeto no seguinte link:
[Desafio Click Soft](https://desafio-click-soft.vercel.app/).

<br>

## 👩 Autora

- Nome: Paula Marinho
- E-mail: [paulaandrezza25@gmail.com](mailto:paulaandrezza25@gmail.com)
- [Perfil no GitHub](https://github.com/paulaandrezza)
- [Perfil no LinkedIn](https://www.linkedin.com/in/paula-andrezza/)
- [Meu portfólio](https://paulaandrezza.github.io/portfolio/)
