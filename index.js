const express = require('express');
const app = express();

const { exec } = require('child_process');

const command = 'npx json-server db.json';

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar json-server: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

app.use(express.static('HTML'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/HTML/servicios.html');
});

app.get('/HTML/servicios.html', (req, res) => {
  res.sendFile(__dirname + '/HTML/servicios.html');
});

app.get('/HTML/home.html', (req, res) => {
  res.sendFile(__dirname + '/HTML/home.html');
});

app.get('/HTML/admin.html', (req, res) => {
  res.sendFile(__dirname + '/HTML/admin.html');
});

app.get('/HTML/contacto.html', (req, res) => {
  res.sendFile(__dirname + '/HTML/contacto.html');
});

app.get('/HTML/registro.html', (req, res) => {
  res.sendFile(__dirname + '/HTML/registro.html');
});

app.get('/HTML/inicio_sesion.html', (req, res) => {
  res.sendFile(__dirname + '/HTML/inicio_sesion.html');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

