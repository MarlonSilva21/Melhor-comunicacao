<h1 align="center">
    <br>
    Rest API NodeJS + Express + MongoDB
</h1>

<h4 align="center">
Project developed for student purposes
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/marlonsilva21/Melhor-comunicacao.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/marlonsilva21/Melhor-comunicacao.svg">

  <a href="https://www.codacy.com/app/marlonsilva21/Melhor-comunicacaojava?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=marlonsilva21/Melhor-comunicacao&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://api.codacy.com/project/badge/Grade/691b85e51bf240b997ae6ff82ea41590">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/marlonsilva21/Melhor-comunicacao.svg">
  <a href="https://github.com/marlonsilva21/Melhor-comunicacao/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/marlonsilva21/Melhor-comunicacao.svg">
  </a>

  <a href="https://github.com/marlonsilva21/Melhor-comunicacao/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/marlonsilva21/Melhor-comunicacao.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/marlonsilva21/Melhor-comunicacao.svg">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#install">How to install </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#features">Features </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#structure">Project structure </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Technologies

<p id="rocket-technologies">This repository was developed having as main technologies:</p>

- [NodeJS](https://www.oracle.com/br/java/technologies/javase-jdk11-downloads.html)
- [Express](https://www.eclipse.org/downloads/)
- [JavaScript](https://spring.io/projects/spring-boot)
- [MongoDB](https://www.mysql.com/)
- [WebStorm](https://www.eclipse.org/downloads/)
- And another bunch of packages....

<h2 id="install"> How to install </h2>

### Using Git (recommended)

1.  Clone the project from github.

```bash
git clone https://github.com/MarlonSilva21/Melhor-comunicacao.git 
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
npm install
```
<h2 id="features"> Features </h2>

- Pre-defined response structures with proper status codes.
- Validations added.
- Light-weight project.

<h2 id="structure"> Project structure </h2>

```sh
.
├── package.json
└── src
    ├── controlles
    │   └── productController.js
    │   
    ├── database
    │   └── index.js
    │   
    ├── model
    │   └── products.js
    │   
    └── index.js



```

### Running API server locally

```bash
npm start 
```
#### On another terminal run the database
```bash
mongod 
```

## Routes

**GET** - *List all phones*
```
/register/products-phones
```

**GET** - *Search for a specific phone*
```
/register/product-phone/:phoneId
```
**POST** - *Create product record*
```
/register/product-phone
```

**PUT** - *update product registration*
```
/register/product-phone/:phoneId
```

**DELETE** - *Delete product*
```
/register/product-phone/:phoneId
```

## JSON for registration
```
{
    "model": "Mi 11i",
    "price": 4500,
    "brand": "Xiaomi",
    "startDate": " "
    "endDate": "2021/10/31",
    "color": "white"
}
```

## presentation video
```
https://youtu.be/VqM4c81_ae8
```

##

Made with ♥ by Marlon Silva :wave: [Get in touch!](https://www.linkedin.com/in/marlon-silva-43075a184/)



