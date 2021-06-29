# MarvelHubAngular

## Configuração do projeto

Antes de iniciar o projeto, é necessário configurar as variáveis de ambiente com as keys de autenticação da API da Marvel. Dessa maneira, será possível realizar as requisições utilizadas neste projeto.

Nos arquivos `src/environments/environment.prod.ts` e `src/environments/environment.ts`, atribua às chaves `marvel_api_public_key` e  `marvel_api_private_key` seus respectivos valores conforme site da [API da Marvel](https://developer.marvel.com/documentation/getting_started).

Caso não tenha como gerar uma chave por algum motivo, faça o download da minha chave [neste link](https://drive.google.com/file/d/11YI4hjyCFRb3H0juRyJRt7MIBa5bau58/view?usp=sharing) (caso eu tenha te autorizado a acessar esse arquivo, você provavelmente já tem também a senha).

## Iniciando o projeto

Para iniciar, entre na pasta raiz e instale todas as dependências com o comando:

`npm install`

Depois, inicie com o comando:

`npm start`