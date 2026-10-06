# Digital Clock

Um relógio digital desenvolvido com **HTML, CSS e JavaScript**, criado como um projeto prático para exercitar conceitos fundamentais de desenvolvimento web e manipulação do DOM.

A aplicação exibe a hora atual do sistema no formato **HH:MM:SS** e atualiza automaticamente a cada segundo, proporcionando uma interface simples e responsiva.

## Tecnologias utilizadas

* **HTML5** — Estrutura da aplicação
* **CSS3** — Estilização, posicionamento e layout do relógio
* **JavaScript** — Manipulação do DOM e atualização da hora em tempo real

## Funcionamento

O JavaScript utiliza o objeto `Date` para obter as horas, minutos e segundos atuais do sistema. A função responsável pela atualização é executada a cada segundo através do `setInterval()`.

Os valores são formatados para sempre apresentarem dois dígitos. Por exemplo:

`09:05:03`

em vez de:

`9:5:3`

## Objetivo

Este projeto foi desenvolvido como exercício prático para reforçar conhecimentos básicos de desenvolvimento web, incluindo:

* Estruturação de páginas com HTML
* Estilização e posicionamento com CSS
* Manipulação de elementos através do JavaScript
* Utilização do objeto `Date`
* Atualização dinâmica do conteúdo da página
* Uso de `setInterval()`
* Organização de um projeto web simples

## Como executar

Não é necessário instalar nenhuma dependência.

Basta clonar o repositório ou baixar os arquivos e abrir o arquivo `index.html` em um navegador.

## Estrutura

```text
Digital-Clock/
├── index.html
├── style.css
└── script.js
```

Um projeto pequeno, mas que representa uma etapa importante na prática dos fundamentos do desenvolvimento web.
