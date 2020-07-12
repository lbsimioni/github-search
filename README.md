# GitHub Search

# Português

O projeto foi desenvolvido com o objetivo de sintetizar os conhecimentos em requisições http através do JavaScript puro.

## Idéia

A idéia do projeto foi desenvolver uma aplicação web que busque usuários no GitHub, pelo seu nome de usuário, utilizando uma API pública do GitHub.

## Desenvolvimento

O projeto foi desenvolvido em HTML, CSS e JavaScript puro, além de utilizar o Bootstrap (`https://getbootstrap.com.br`) e o AXIOS (`https://github.com/axios/axios`).
O projeto é composto por uma classe responsável por cuidar do DOM, ou seja, criar e excluir elementos da página (`js/dom-manipulator.js`), uma classe para cuidar dos dev's que forem inseridos, responsável por adicionar e excluir dev's do localStorage (`js/devs.js`) e uma pasta onde estão localizados 3 maneiras de se fazer requisições http, o primeiro (`js/requests/ajax.js`), onde se faz a requisão http diretamente por 'XMLHttpRequest', o segundo (`js/requests/promise.js`), já uma versão mais nova onde se faz a requisição por 'XMLHttpRequest', mas utilizando uma Promise e o ultimo (`js/requests/axios.js`) que utiliza a biblioteca do AXIOS para requisições, sendo esta a mais nova e a recomendado para fazer requisições.

## Disponibilidade

O projeto está rodando em `https://lbsimioni.github.io/github-search/`, utilizando o AXIOS para requisições http.

# English

The project was developed with the aim to synthesizing knowledge in http requests using pure JavaScript.

## Ideia

The idea of ​​the project was to develop a web application that searches for users on GitHub, by their username, using a public GitHub API.

## Development


The project was developed in HTML, CSS and pure JavaScript, in addition to using Bootstrap (`https://getbootstrap.com`) and o AXIOS (`https://github.com/axios/axios`).
The project consists of a class responsible for taking care of the DOM, that is, creating and deleting elements from the page (`js/dom-manipulator.js`), a class to take care of the dev's that are inserted, responsible for adding and deleting dev's from localStorage (`js/devs.js`) and a folder where 3 ways to make http requests are located, the first (`js/requests/ajax.js`), where http request is made directly by 'XMLHttpRequest', the second (`js/requests/promise.js`), already a newer version where the request is made by 'XMLHttpRequest', but using a Promise and the last (`js/requests/axios.js`) that uses the AXIOS library for requests, which is the newest and recommended for making requests.

## Availability

The demo of project is running at `https://lbsimioni.github.io/github-search/` and use AXIOS for http requests.
