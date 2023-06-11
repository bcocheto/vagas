# TesteDev

# 🛠️ Funcionalidades do projeto

- `1°` `Obter informações de um usuário específico`: Obtém informações detalhadas de um usuário com base no seu ID.
- `2°` `Obter a lista de usuários`: Retorna a lista completa de usuários cadastrados no sistema.
- `3°` `Obter a quantidade de acessos de um usuário específico`: Retorna a quantidade de acessos de um usuário com base no seu ID.
- `4°` `Criar um novo usuário`: Cria um novo usuário no sistema.
- `5°` `Atualizar informações de um usuário`: Atualiza as informações de um usuário com base no seu ID.
- `6°` `Deletar um usuário`: Exclui um usuário do sistema.

## 📁 Como rodar o projeto?

### Pré-requisitos
- Node.js instalado em seu ambiente de desenvolvimento.
- Um gerenciador de pacotes como NPM ou Yarn.

### Configurações de ambiente
1. Clone este repositório:
```shell
$ git clone git@github.com:bcocheto/vagas.git
```

2. Acesse a pasta do projeto no terminal/cmd:
```shell
$ cd vagas
```

3. Instale as dependências:
```shell
$ npm install
```
ou
```shell
$ yarn
```

4. Inicie o projeto:
```shell
$ npm run dev
```
ou
```shell
$ yarn dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Documentação das rotas

### Obter informações de um usuário específico

- **URL:** `/user/:id`
- **Método:** GET

Essa rota permite obter informações detalhadas de um usuário específico com base no seu ID.

Exemplo de requisição:

```
GET /user/1
```

### Obter a lista de usuários

- **URL:** `/users`
- **Método:** GET

Essa rota retorna a lista completa de usuários cadastrados no sistema.

Exemplo de requisição:

```
GET /users
```

### Obter a quantidade de acessos de um usuário específico

- **URL:** `/user/access/:id`
- **Método:** GET

Essa rota retorna a quantidade de acessos de um usuário específico com base no seu ID.

Exemplo de requisição:

```
GET /user/access/1
```

### Criar um novo usuário

- **URL:** `/users`
- **Método:** POST

Essa rota permite criar um novo usuário no sistema.

Exemplo de requisição:

```
POST /users

Body:
{
  "name": "John Doe",
  "job": "Developer"
}
```

### Atualizar informações de um usuário

- **URL:** `/user/:id`
- **Método:** PUT

Essa rota permite atualizar informações de um usuário específico com base no seu ID.

Exemplo de requisição:

```
PUT /user/1

Body:
{
  "name": "John Doe",
  "job": "Senior Developer"
}
```

### Deletar um usuário

- **URL:** `/user/:id`
- **Método:** DELETE

Essa rota permite excluir um usuário específico com base no seu ID.

Exemplo de

 requisição:

```
DELETE /user/1
```

Lembre-se de substituir `:id` pelo ID real do usuário desejado.

## Pacotes utilizados

- Express: 4.18.2
- body-parser: 1.20.2
- TypeScript: 5.1.3
- ts-node: 10.9.1
- nodemon: 2.0.22
- @types/express: 4.17.17
- @types/node: 20.3.0

Certifique-se de verificar os arquivos `package.json` e `package-lock.json` para obter as versões mais recentes dos pacotes utilizados.

## Utilizando as rotas no Postman

Você pode importar as rotas do projeto para o Postman utilizando o arquivo "Vaga.postman.json". Para fazer isso, siga as etapas abaixo:

1. Abra o Postman.
2. Clique no botão "Import" no canto superior esquerdo.
3. Selecione a opção "Import From File".
4. Navegue até o diretório onde o projeto está localizado e selecione o arquivo "Vaga.postman.json".
5. Clique no botão "Import" para importar as rotas para o Postman.

Agora você terá todas as rotas disponíveis no projeto no Postman, prontas para serem testadas. Certifique-se de fazer as alterações necessárias nas requisições, como a substituição do ID do usuário e o envio dos dados corretos no corpo da requisição.