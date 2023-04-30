# Asset Database
![Imagem da aplicação](https://i.postimg.cc/VsT8R8Lh/Screenshot-from-2022-07-24-17-04-55.png)

# 💻 Descrição geral do projeto
Desenvolvido individualmente para utilização na aplicação front-end do desafio XP Inc. Criação de uma API com a rota /assets que contém as principais informações de uma ação, como o nome (ticker do papel) e o valor de uma quantidade desta ação (valor unitário). Estas informações foram necessárias para a criação das tabelas em que as ações seriam disponibilizadas para negociação na aplicação.

# 🛠 Tecnologias:
- Node.
- Express.
- JavaScript.
- ORM (Sequelize).

# ⚡ Rodando localmente:
Clone o projeto:
```bash
git clone git@github.com:TabataSouto/stock-investing-app-xp.git
```

Entre no diretório do projeto:
```bash
cd asset-database
```

Instale as dependências:
```bash
npm install
```

Crie o arquivo dotenv e inicie o servidor:
```bash
docker-compose up -d
```

Acesse o container:
```bash
docker exec -it assets bash
```

Inicie a aplicação:
```bash
npm run dev
```

# ✅ Status do projeto
Concluído

# 💽 Deploy
O Deploy deste projeto foi realizado no [Vercel](COLOCAR LINK AQUI).

# 📚 Aprendizados:
Inicialmente o deploy foi feito via Heroku, mas com a mudança da plataforme aprendy a realizar deploy de back-end também pelo vercel.

# 👧 Colaborador
Tabata Caroline Souto
