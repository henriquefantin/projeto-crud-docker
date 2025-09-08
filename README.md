# Projeto CRUD com Node.js, Sequelize, Postgres e Docker

Este projeto é uma API CRUD de usuários construída com Node.js, Express, Sequelize e banco de dados Postgres, totalmente containerizada com Docker e Docker Compose.

## Funcionalidades

- Cadastro de usuário
- Listagem de todos os usuários
- Consulta de usuário por ID
- Atualização de usuário
- Remoção de usuário

## Como rodar o projeto

### Pré-requisitos

- [Docker](https://www.docker.com/products/docker-desktop) instalado

### Passos

1. Clone este repositório:
   ```sh
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   cd SEU_REPOSITORIO
   ```

2. Suba os containers (API + banco de dados):
   ```sh
   docker-compose up --build
   ```

3. Rode as migrations para criar as tabelas:
   ```sh
   docker-compose exec app npx sequelize-cli db:migrate
   ```

4. Acesse a API em [http://localhost:3000](http://localhost:3000)

## Exemplos de rotas

- **Listar todos usuários:**  
  `GET /usuario/registro/todos`

- **Buscar usuário por ID:**  
  `GET /usuario/registro/individual/:id`

- **Cadastrar usuário:**  
  `POST /usuario/cadastrar`  
  Body (JSON):
  ```json
  {
    "name": "Nome",
    "age": 25,
    "email": "email@exemplo.com"
  }
  ```

- **Atualizar usuário:**  
  `POST /usuario/atualizar`  
  Body (JSON):
  ```json
  {
    "id": "ID_DO_USUARIO",
    "name": "Novo Nome",
    "age": 30,
    "email": "novo@email.com"
  }
  ```

- **Deletar usuário:**  
  `DELETE /usuario/deletar/:id`

---

Recursos utilizados: Node.js, Sequelize, Postgres e Docker.