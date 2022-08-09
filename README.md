# Weather Now

Sistema criado em VueJs para exibição de dados climáticos utilizando a API [OpenWeather](https://openweathermap.org/api).

### Demo: [Weather-now-vue](https://weather-now-vue.netlify.app/)

## Instalação

Use o NPM para instalar os pacotes necessários para rodar.

```bash
npm install
```

### Adicionar API Key

O projeto utiliza a API [OpenWeather](https://openweathermap.org/api) para obter as informações sobre o clima. Deve-se criar uma conta e gerar a API KEY para utilizar no projeto.

Após obter a chave da API deverá adicionar ela no arquivo `.env` da pasta raiz do projeto na variável `VUE_APP_WEATHER_API_KEY={{API_KEY}}` substituindo `{{API_KEY}}` pela chave gerada no site.


## Rodar o projeto

Ambiente de desenvolvimento
```bash
npm run serve
```

Criar build para deploy
```bash
npm run build
```

## Testes

O projeto conta com testes unitários utilizando o Jest.

Para rodar:
```bash
npm run test:unit
```