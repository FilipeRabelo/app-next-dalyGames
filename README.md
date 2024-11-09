
# DalyGames 🎮

**DalyGames** é um aplicativo desenvolvido em **Next.js** para trazer aos gamers os melhores e mais recentes lançamentos de videogames. Utilizando uma API externa, ele atualiza as informações dos jogos em tempo real, oferecendo uma interface moderna e responsiva com o auxílio de **React** e **Tailwind CSS**.

## 📌 Funcionalidades

- **Lançamentos em Tempo Real**: As informações dos jogos são atualizadas diretamente de uma API, mantendo o usuário informado sobre os lançamentos mais recentes.
- **Interface Moderna e Responsiva**: Usando React e Tailwind CSS, o layout se adapta perfeitamente a qualquer dispositivo, proporcionando uma ótima experiência de usuário.
- **SEO e Performance**: Aproveitando o Next.js para uma renderização rápida e otimizada, o app é ideal para usuários que valorizam a velocidade e acessibilidade.

## 🚀 Tecnologias Utilizadas

- **Next.js** - Framework para React com SSR, SSG e otimizações para SEO e performance.
- **React** - Biblioteca JavaScript para a construção da interface de usuário.
- **Tailwind CSS** - Framework CSS para estilização rápida e responsiva.
- **API Externa** - Para atualização em tempo real dos dados dos videogames.

## 📂 Estrutura do Projeto

```plaintext
.
├── public/                # Imagens e assets públicos
├── src/
│   ├── components/        # Componentes reutilizáveis
│   ├── pages/             # Páginas do Next.js
│   ├── styles/            # Estilos globais e configurações do Tailwind CSS
│   └── utils/             # Funções utilitárias e serviços de API
├── .env                   # Variáveis de ambiente (chave da API etc.)
├── README.md              # Documentação do projeto
└── package.json           # Dependências e scripts do projeto
```

## 📦 Instalação e Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/app-next-dalyGames.git
   cd app-next-dalyGames
   ```
2. Instale as dependências:

   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente:

   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione as chaves necessárias, como a chave da API de videogames.
4. Execute o projeto:

   ```bash
   npm run dev
   ```

   O app estará disponível em `http://localhost:3000`.

## 🛠️ Desenvolvimento

Para desenvolvimento, utilize o comando `npm run dev` para iniciar o servidor em modo de desenvolvimento. Alterações no código serão aplicadas automaticamente graças ao Hot Reload do Next.js.

## 📈 Planejamento de Melhorias

- Adicionar filtros personalizados (gêneros, plataformas, etc.) para facilitar a busca.
- Implementar um sistema de favoritos para que os usuários possam salvar seus jogos preferidos.
- Integrar análises e classificações de jogos para maior interação.

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Fork o projeto.
2. Crie uma branch para sua funcionalidade: `git checkout -b minha-funcionalidade`.
3. Faça o commit das alterações: `git commit -m 'Minha nova funcionalidade'`.
4. Envie para o repositório: `git push origin minha-funcionalidade`.
5. Abra um Pull Request.

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
