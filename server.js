const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Servir arquivos estáticos do diretório atual

// Criar diretório dados se não existir
const DADOS_DIR = path.join(__dirname, 'dados');
const DADOS_FILE = path.join(DADOS_DIR, 'cartoes.json');

// Inicializar arquivo de dados
async function inicializarDados() {
    try {
        await fs.access(DADOS_DIR);
    } catch {
        await fs.mkdir(DADOS_DIR, { recursive: true });
    }

    try {
        await fs.access(DADOS_FILE);
    } catch {
        await fs.writeFile(DADOS_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
}

// Rota para salvar dados do cartão
app.post('/api/salvar-dados', async (req, res) => {
    try {
        const dados = req.body;
        
        // Adicionar timestamp
        dados.timestamp = new Date().toISOString();
        dados.dataFormatada = new Date().toLocaleString('pt-BR');

        // Ler dados existentes
        let dadosExistentes = [];
        try {
            const conteudo = await fs.readFile(DADOS_FILE, 'utf-8');
            dadosExistentes = JSON.parse(conteudo);
        } catch (error) {
            console.log('Criando novo arquivo de dados');
        }

        // Adicionar novos dados
        dadosExistentes.push(dados);

        // Salvar no arquivo
        await fs.writeFile(
            DADOS_FILE, 
            JSON.stringify(dadosExistentes, null, 2), 
            'utf-8'
        );

        console.log(`✅ Dados salvos com sucesso em ${new Date().toLocaleString('pt-BR')}`);
        console.log('Dados:', JSON.stringify(dados, null, 2));

        res.json({ 
            success: true, 
            mensagem: 'Dados salvos com sucesso!',
            timestamp: dados.timestamp
        });

    } catch (error) {
        console.error('❌ Erro ao salvar dados:', error);
        res.status(500).json({ 
            success: false, 
            erro: 'Erro ao salvar dados' 
        });
    }
});

// Rota para listar todos os dados salvos (opcional - para visualização)
app.get('/api/listar-dados', async (req, res) => {
    try {
        const conteudo = await fs.readFile(DADOS_FILE, 'utf-8');
        const dados = JSON.parse(conteudo);
        res.json({ success: true, dados });
    } catch (error) {
        res.json({ success: true, dados: [] });
    }
});

// Inicializar servidor
inicializarDados().then(() => {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
        console.log(`📁 Dados serão salvos em: ${DADOS_FILE}`);
    });
});
