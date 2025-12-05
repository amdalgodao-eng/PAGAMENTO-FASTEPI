# 🚀 Instruções para Executar o Servidor

## 📋 Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- npm (geralmente vem com Node.js)

## ⚙️ Instalação

### 1. Instalar Dependências

```bash
npm install
```

Este comando irá instalar:
- `express`: Framework web para Node.js
- `cors`: Habilitar CORS para requisições do frontend
- `dotenv`: Gerenciar variáveis de ambiente

## 🏃 Executar o Servidor

### Modo Normal

```bash
npm start
```

Ou diretamente:

```bash
node server.js
```

O servidor iniciará na porta 3000 (ou a porta definida no arquivo `.env`).

Você verá a mensagem:
```
🚀 Servidor rodando em http://localhost:3000
📁 Dados serão salvos em: /caminho/para/dados/cartoes.json
```

## 🌐 Acessar a Aplicação

1. Com o servidor rodando, abra seu navegador
2. Acesse: `http://localhost:3000`
3. Você verá a página do formulário de cartão
4. Preencha os dados e clique em "Confirmar"
5. Na página de finalização, clique em "Continuar"
6. Os dados serão salvos no arquivo `dados/cartoes.json`

## 📂 Estrutura de Arquivos

```
webapp/
├── server.js              # Servidor backend Node.js
├── package.json           # Dependências do projeto
├── index.html             # Página principal do formulário
├── finaliza.html          # Página de conclusão
├── dados/                 # Diretório criado automaticamente
│   └── cartoes.json       # Dados salvos (criado automaticamente)
├── css/                   # Estilos CSS
├── js/                    # Scripts JavaScript
└── images/                # Imagens do projeto
```

## 💾 Dados Salvos

Os dados são salvos no formato JSON em `dados/cartoes.json`:

```json
[
  {
    "numero": "1234 5678 9012 3456",
    "nome": "João Silva",
    "mes": "12/",
    "ano": "25",
    "cvc": "123",
    "timestamp": "2025-12-05T15:30:45.123Z",
    "dataFormatada": "05/12/2025 12:30:45"
  }
]
```

## 🔍 Visualizar Dados Salvos

Você pode verificar os dados salvos de duas formas:

### 1. Abrir o arquivo diretamente
```bash
cat dados/cartoes.json
```

### 2. Usar a API (navegador ou curl)
```
http://localhost:3000/api/listar-dados
```

Ou com curl:
```bash
curl http://localhost:3000/api/listar-dados
```

## 🛑 Parar o Servidor

No terminal onde o servidor está rodando, pressione:
```
Ctrl + C
```

## 🔧 Configurações Opcionais

Você pode criar um arquivo `.env` para configurar a porta:

```bash
PORT=3000
```

## ⚠️ Segurança

**IMPORTANTE**: 
- Este é um servidor de desenvolvimento
- Os dados são salvos localmente no arquivo `dados/cartoes.json`
- Para produção, considere usar um banco de dados seguro
- Nunca exponha dados sensíveis de cartão em produção real
- Este projeto é apenas para fins educacionais

## 🐛 Problemas Comuns

### Porta já em uso
Se a porta 3000 já estiver em uso, você pode:
1. Criar arquivo `.env` e mudar a porta: `PORT=3001`
2. Ou parar o processo que está usando a porta 3000

### Erro ao instalar dependências
Se houver erro ao executar `npm install`:
1. Verifique se o Node.js está instalado: `node --version`
2. Verifique se o npm está instalado: `npm --version`
3. Tente limpar o cache: `npm cache clean --force`
4. Tente novamente: `npm install`

## 📝 Logs

O servidor exibe logs no terminal:
- ✅ Sucesso ao salvar dados
- ❌ Erros que ocorrerem
- 📥 Dados recebidos

Exemplo:
```
✅ Dados salvos com sucesso em 05/12/2025 12:30:45
Dados: {
  "numero": "1234 5678 9012 3456",
  "nome": "João Silva",
  ...
}
```

## 🎯 Próximos Passos

Para melhorar o projeto, você pode:
1. Adicionar autenticação
2. Usar banco de dados (MongoDB, PostgreSQL, etc.)
3. Adicionar validação de cartão mais robusta
4. Implementar criptografia dos dados
5. Criar painel administrativo para visualizar dados
6. Adicionar testes automatizados

## 📞 Suporte

Se tiver problemas, verifique:
1. Se o Node.js está instalado corretamente
2. Se todas as dependências foram instaladas (`node_modules/` existe)
3. Se a porta não está em uso por outro programa
4. Os logs no terminal para mensagens de erro
