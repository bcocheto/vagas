# TesteDev

Este é um projeto de exemplo para fins de teste e desenvolvimento.

## Instalação

Para executar este projeto, você precisará ter o Node.js instalado em seu ambiente de desenvolvimento. Em seguida, você pode escolher entre o Yarn ou o npm para instalar as dependências.

### Instalando dependências com Yarn

```bash
yarn install
```

### Instalando dependências com npm

```bash
npm install
```

## Executando o projeto

Existem alguns scripts configurados para ajudá-lo a executar o projeto.

### Executando em modo de desenvolvimento

```bash
yarn dev
```

ou

```bash
npm run dev
```

Este comando iniciará o servidor Express em modo de desenvolvimento usando o Nodemon. Isso significa que o servidor será reiniciado automaticamente sempre que você fizer alterações nos arquivos.

### Executando em modo de produção

```bash
yarn start
```

ou

```bash
npm start
```

Este comando iniciará o servidor Express em modo de produção.

### Compilando o código TypeScript

```bash
yarn build
```

ou

```bash
npm run build
```

Este comando compilará o código TypeScript para JavaScript e o colocará na pasta `dist`.

## Pacotes utilizados

- Express: 4.18.2
- body-parser: 1.20.2
- TypeScript: 5.1.3
- ts-node: 10.9.1
- nodemon: 2.0.22
- @types/express: 4.17.17
- @types/node: 20.3.0

Certifique-se de verificar os arquivos `package.json` e `package-lock.json` para obter as versões mais recentes dos pacotes utilizados.

## Licença

Este projeto está licenciado sob a Licença ISC. Veja o arquivo `LICENSE` para obter mais detalhes.