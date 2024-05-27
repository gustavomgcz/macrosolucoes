# Projeto MacroSoluções

Site corporativo desenvolvido em React, que permite ao usuário verificar informações e soluções da empresa, tal qual entrar em contato via formulário de contato.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)


## Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** Node.js (Nodemailer), Express

## Instalação

Instale as dependências do front e backend 

```
cd frontend
npm install

cd ../backend
npm install
```

### Pré-requisitos

Certifique-se de ter o Node.js e npm instalados.

### Passos para a instalação

1. Clone o repositório:
```
   git clone https://github.com/SeuUsuario/SeuRepositorio.git
   cd SeuRepositorio
```

2. Crie e configure as variáveis de ambiente:
* Crie um arquivo .env na pasta backend com as seguintes variáveis:
```
    EMAIL_USER=<seu-usuario-de-email>
    EMAIL_PASS=<sua-senha-de-email>
```

## Uso

1. Execute o Backend

```
cd backend
node server.js
```

2. Execute o Frontend

```
cd frontend
npm start
```