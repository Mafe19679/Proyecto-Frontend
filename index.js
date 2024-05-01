const { exec } = require('child_process');

// Comando para ejecutar json-server
const command = 'npx json-server db.json';

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar json-server: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});


const express = require('express');
const app = express();
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
