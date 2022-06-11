<h1 align="center"> SwagLabs Cypress </h1>

<p align="center">
<img src="https://img.shields.io/badge/LICENSE-MIT-green"/> 
<img src="https://img.shields.io/badge/CYPRESS-10.1.0-green"/>
<img src="https://img.shields.io/badge/STATUS-WORKING-yellow"/>
</p>

<h2 align="center"> • Repositório destinado a laboratório de Teste Automatizados no Cypress para o site https://www.saucedemo.com/ </h2>

:construction: Este projeto segue em construção :construction:

## 👉 Índice 

* [Índice](#-índice) - [Getting Started](#-getting-started) - [Acesso ao projeto](#-acesso-ao-projeto) - [Abrir e rodar o projeto](#️-abrir-e-rodar-o-projeto)


## 🏁 Getting Started

![NodeV](https://img.shields.io/badge/NODE-14.17.1-blue)

O passo a passo para executar o Cypress é bem simples, será necessário que você tenha Node instalado previamente. No meu caso, o node utilizado foi a versão 14.17.1.

## 📁 Acesso ao projeto

* Clone o repositório na sua máquina usando:
```
git clone https://github.com/eiazeez/SwagLabsCy.git
```

## 🛠️ Abrir e rodar o projeto

* Lembre-se entrar na pasta do projeto e instalar as depedências com
```
npm install cypress --save-dev
```
caso use yarn, pode utilizar o comando
```
yarn add cypress --dev
```

![CPT2206080057-621x347](https://user-images.githubusercontent.com/92765887/172528698-9dbcfb13-1319-448d-9b3a-b60bb2878b8f.gif)


* ainda dentro da pasta do projeto, para abrir a interface do Cypress use o comando
```
npx cypress open
```
![CPT2206080106-621x349](https://user-images.githubusercontent.com/92765887/172529378-ecf15eec-8443-4a7f-8a84-c3db8304196b.gif)

#
* Após abrir a interface do Cypress, para abrir os casos de testes, selecione a opção E2E Testing 

![image](https://user-images.githubusercontent.com/92765887/173204646-0233450e-f20a-4895-a20d-35a4717f696e.png)

#
* Selecione qual navegador será usado (no meu caso, uso o Google Chrome)

![image](https://user-images.githubusercontent.com/92765887/173204664-0bb0cc6a-5bc9-4786-8447-6ce1144ccdec.png)

#
* Arquivos '.cy.js' são arquivos de testes. Selecione um dos arquivos para rodar o teste

![image](https://user-images.githubusercontent.com/92765887/173204701-7fe991d1-3496-49ee-bec7-049543ff5238.png)







