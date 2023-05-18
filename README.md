# google_clone

## Instalando e "setando" o React.js

Começar seu projeto instalando o Node.js no site oficial:

https://nodejs.org/en

(escolha a opção da esquerda)

Após isso, para instale o comando que gera um app em React.js:

```
npm install -g create-react-app
```

E então será possível finalmente:

```
npx create-react-app meu-app-react
```

Onde *meu-app-react* é o nome do seu aplicativo, no nosso caso, **google**.

Use então o comando de change directory para entrar no seu repositório:

```
cd meu-app-react
```

E então para para instalar as dependências necessárias, sempre coloque:

```
npm install
```

Caso você queira adicionar alguma biblioteca, como **react-icons**, utilize:

```
npm install react-icons
```

No nosso caso, é importante instalar também a biblioteca para as routes:

```
npm install react-router-dom
```

E a manutenção do site pode ser feita por meio do comando:

```
npm install react-scripts@latest
```

Sempre será rodado na porta 3000. E para rodar o aplicativo, basta:

```
npm run start
```

## Básico de git

Para salvar alterações, ou mesmo manipular repositórios:

Clonar repositório do amigo:

```
git clone https://github.com/BryanBorck/google_clone
```

(ou qualquer outro link)

Atualizar o que amigos fizeram:

```
git pull origin main
```

A *branch* geralmente tem o nome de **main** ou **master**, sempre coloque a que está no repositório, só ver o topo do repositório e achar a palavra branch e conferir o nome.

Adicionar coisas que você fez para seu amigos:

```
git status
```

(Verifica o que você fez)

```
git add .
```

(ou git add X, sendo X algum arquivo que você mexeu)

```
git status
```

(Verifique o que foi adicionado, para ver se não fez algo errado)

```
git commmit -m "meu primeiro commit"
```

(aqui você libera para dar o push)

```
git push origin main
```

Lembre-se sempre de dar pull antes de dar push, e qualquer problema mais complicado que esse, já foge do escopo básico de git.
