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
  res.sendFile(__dirname + '/HTML/home.html');
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
// imagenes
app.get('/IMG/1.png', (req, res) => {
  res.sendFile(__dirname + '/IMG/1.png');
});
app.get('/IMG/2.png', (req, res) => {
  res.sendFile(__dirname + '/IMG/2.png');
});
app.get('/IMG/3.jpg', (req, res) => {
  res.sendFile(__dirname + '/IMG/3.jpg');
});
app.get('/IMG/4.jpg', (req, res) => {
  res.sendFile(__dirname + '/IMG/4.jpg');
});
app.get('/IMG/5.jpg', (req, res) => {
  res.sendFile(__dirname + '/IMG/5.jpg');
});
app.get('/IMG/6.jpg', (req, res) => {
  res.sendFile(__dirname + '/IMG/6.jpg');
});
app.get('/IMG/ANALYTICS.jpg', (req, res) => {
  res.sendFile(__dirname + '/IMG/ANALYTICS.jpg');
});
app.get('/IMG/des2.png', (req, res) => {
  res.sendFile(__dirname + '/IMG/des2.png');
});
app.get('/IMG/bearded-man-shirt-making-selfie-showing-thumb-up.jpg', (req, res) => {
  res.sendFile(__dirname + '/IMG/bearded-man-shirt-making-selfie-showing-thumb-up.jpg');
});
app.get('/IMG/happy-overjoyed-woman-rejoicing-her-success.jpg', (req, res) => {
  res.sendFile(__dirname + '/IMG/happy-overjoyed-woman-rejoicing-her-success.jpg');
});
app.get('/IMG/IA.webp', (req, res) => {
  res.sendFile(__dirname + '/IMG/IA.webp');
});

app.get('/IMG/IMG-CONTACTO.jpeg', (req, res) => {
  res.sendFile(__dirname + '/IMG/IMG-CONTACTO.jpeg');
});

app.get('/IMG/Logo.png', (req, res) => {
  res.sendFile(__dirname + '/IMG/Logo.png');
});
app.get('/IMG/LogoCompleto.png', (req, res) => {
  res.sendFile(__dirname + '/IMG/LogoCompleto.png');
});
app.get('/IMG/SECURITY.webp', (req, res) => {
  res.sendFile(__dirname + '/IMG/SECURITY.webp');
});
app.get('/IMG/sistema-html-concepto-sitio-web_23-2150376752.png', (req, res) => {
  res.sendFile(__dirname + '/IMG/sistema-html-concepto-sitio-web_23-2150376752.png');
});
// css
app.get('/CSS/admin.css', (req, res) => {
  res.sendFile(__dirname + '/CSS/admin.css');
});
app.get('/CSS/contacto.css', (req, res) => {
  res.sendFile(__dirname + '/CSS/contacto.css');
});
app.get('/CSS/general.css', (req, res) => {
  res.sendFile(__dirname + '/CSS/general.css');
});
app.get('/CSS/home.css', (req, res) => {
  res.sendFile(__dirname + '/CSS/home.css');
});
app.get('/CSS/inicio_sesion.css', (req, res) => {
  res.sendFile(__dirname + '/CSS/inicio_sesion.css');
});
app.get('/CSS/registro.CSS', (req, res) => {
  res.sendFile(__dirname + '/CSS/registro.CSS');
});
app.get('/CSS/servicios.css', (req, res) => {
  res.sendFile(__dirname + '/CSS/servicios.css');
});
app.get('/JS/admin.js', (req, res) => {
  res.sendFile(__dirname + '/JS/admin.js');
});
app.get('/JS/contacto.js', (req, res) => {
  res.sendFile(__dirname + '/JS/contacto.js');
});
app.get('/JS/sign_in.js', (req, res) => {
  res.sendFile(__dirname + '/JS/sign_in.js');
});
app.get('/JS/sign_up.js', (req, res) => {
  res.sendFile(__dirname + '/JS/sign_up.js');
});

app.get('/db.json', (req, res) => {
  res.sendFile(__dirname + '/db.json');
});
app.get('/index.js', (req, res) => {
  res.sendFile(__dirname + '/index.js');
});
app.get('/package.json', (req, res) => {
  res.sendFile(__dirname + '/package.json');
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

