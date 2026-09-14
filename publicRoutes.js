const express = require('express');
const path = require('node:path');

const { guardarAcceso } = require('./logService');

const router = express.Router();

router.get('/', async (req, res) => {
  await guardarAcceso('/');

  const pagina = path.join(__dirname, 'logs', 'public', 'index.html');
  res.sendFile(pagina);
});

router.get('/status', async (req, res) => {
  await guardarAcceso('/status');

  res.json({
    status: 'ok',
    message: 'Servidor funcionando correctamente',
    data: {
      uptimeSeconds: Math.floor(process.uptime()),
      timestamp: new Date().toISOString()
    }
  });
});

router.get('/health', async (req, res) => {
  await guardarAcceso('/health');

  res.json({
    status: 'ok',
    message: 'healthcheck',
    data: {
      uptimeSeconds: Math.floor(process.uptime()),
      timestamp: new Date().toISOString()
    }
  });
});

module.exports = router;
