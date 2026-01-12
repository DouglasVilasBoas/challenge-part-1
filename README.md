# Challenger

## Descrição

Projeto de estudos onde eu precisava linkar o cliente com o tecnico que estivesse ativo, simulando um chamado de serviço.

## Tecnologias

- **Express.js**: Framework web para Node.js
- **MongoDB**: Banco de dados NoSQL
- **Axios**: Cliente HTTP para requisições
- **UUID**: Geração de identificadores únicos
- **dotenv**: Gerenciamento de variáveis de ambiente
- **http-errors**: Criação de objetos de erro HTTP padronizados

## Estrutura do Projeto

```
├── config/                 # Configurações da aplicação
├── database/               # Conexão e inicialização do banco de dados
├── repository/             # Camada de acesso a dados
│   ├── factory.js         # Factory pattern para repositórios
│   └── index.js
├── service/               # Lógica de negócio
│   ├── signatureService.js
│   └── technicalService.js
├── src/
│   ├── adapter/           # Adaptadores e transformações
│   │   ├── techinicalLinkedSignature.js
│   │   └── verifySignature.js
│   └── controller/        # Controladores de rotas
│       ├── techinicalLinkedSignature.js
│       └── verifySignature.js
├── index.js               # Arquivo principal da aplicação
├── route.js               # Definição de rotas
└── package.json           # Dependências do projeto
```

## API Endpoints

### GET `/signature/verify/:id`
Verifica uma assinatura digital por ID.

**Parâmetros:**
- `id` (string): Identificador da assinatura a ser verificada

**Resposta:**
- Status 200: Assinatura verificada com sucesso
- Status 400/404: Erro na requisição ou assinatura não encontrada

### POST `/link`
Cria um link de assinatura técnica.

**Body:**
- Dados necessários para criar o link de assinatura

**Resposta:**
- Status 201: Link criado com sucesso
- Status 400: Erro na requisição

## Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd challenger
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione as configurações necessárias (porta, conexão MongoDB, etc)

## Uso

Para iniciar o servidor em modo de desenvolvimento com auto-reload:

```bash
npm start
```

O servidor executará por padrão na porta configurada no arquivo `config/index.js`.

## Configuração

As configurações da aplicação são gerenciadas através do arquivo `config/index.js`. Configure as seguintes variáveis de ambiente:

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Configuração do Servidor
PORT=3000

# Configuração do MongoDB
MONGODB_URI=mongodb://localhost:27017/challenger
MONGODB_DB_NAME=challenger

# Configuração da Aplicação
NODE_ENV=development
```

**Descrição das variáveis:**

- `PORT`: Porta em que o servidor será executado (padrão: 3000)
- `MONGODB_URI`: URI de conexão com o MongoDB (ex: `mongodb://localhost:27017/challenger` ou `mongodb+srv://usuario:senha@cluster.mongodb.net/database`)
- `MONGODB_DB_NAME`: Nome do banco de dados MongoDB
- `NODE_ENV`: Ambiente de execução (`development`, `production`, etc)

### Gerenciamento de Erros

O projeto utiliza `http-errors` para criar e padronizar respostas de erro HTTP. Isso garante:

- Respostas de erro consistentes
- Códigos HTTP apropriados
- Mensagens de erro bem formatadas
- Fácil rastreamento de erros

## Padrões de Arquitetura

O projeto segue uma arquitetura em camadas:

- **Controller**: Recebe requisições HTTP e chama os serviços
- **Service**: Contém a lógica de negócio
- **Repository**: Camada de acesso aos dados com padrão Factory
- **Adapter**: Transformações e integrações externas
- **Config**: Gerenciamento centralizado de configurações

## Desenvolvido

Projeto desenvolvido como desafio técnico.

## Licença

ISC
