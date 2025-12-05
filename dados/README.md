# 📊 Diretório de Dados

Este diretório contém os dados salvos do formulário de cartão de crédito.

## 📁 Arquivo Principal

- **cartoes.json**: Contém todos os registros de cartões salvos

## 📋 Estrutura dos Dados

Cada entrada no arquivo `cartoes.json` contém:

```json
{
  "numero": "1234 5678 9012 3456",    // Número do cartão
  "nome": "Nome Completo",             // Nome do titular
  "mes": "12/",                        // Mês de validade
  "ano": "25",                         // Ano de validade (2 dígitos)
  "cvc": "123",                        // Código de segurança
  "timestamp": "2025-12-05T15:54:27.978Z",     // ISO timestamp
  "dataFormatada": "05/12/2025, 15:54:27"      // Data formatada pt-BR
}
```

## 🔒 Segurança

⚠️ **IMPORTANTE**: 
- Este arquivo contém dados sensíveis de cartão de crédito
- Apenas para fins educacionais/desenvolvimento
- NUNCA commitar este arquivo no Git (está no .gitignore)
- Em produção, usar banco de dados seguro e criptografia

## 📊 Formato do Arquivo

O arquivo `cartoes.json` é um array JSON:

```json
[
  {
    "numero": "...",
    "nome": "...",
    ...
  },
  {
    "numero": "...",
    "nome": "...",
    ...
  }
]
```

Cada novo registro é adicionado ao final do array.

## 🔍 Visualizar Dados

### Via Arquivo
```bash
cat dados/cartoes.json
```

### Via API
```bash
curl http://localhost:3000/api/listar-dados
```

Ou no navegador:
```
http://localhost:3000/api/listar-dados
```

## 📈 Estatísticas

- **Formato**: JSON
- **Encoding**: UTF-8
- **Tamanho**: Varia conforme número de registros
- **Atualização**: Automática via API

## 🧹 Limpar Dados

Para limpar todos os dados salvos:

```bash
echo "[]" > dados/cartoes.json
```

Ou deletar o arquivo (será recriado automaticamente):

```bash
rm dados/cartoes.json
```

## 🚨 Aviso Legal

Este sistema é apenas para fins educacionais. Nunca use para coletar dados reais de cartões de crédito sem conformidade total com PCI DSS e outras regulamentações de segurança de dados.
