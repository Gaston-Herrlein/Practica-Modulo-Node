/* eslint-disable linebreak-style */
const readline = require('node:readline');
const connection = require('./lib/connect-mongose');
const Article = require('./models/article');

async function initArticle() {
  // borrar todos los agente
  const deleted = await Article.deleteMany();
  console.log(`Eliminados ${deleted.deletedCount} articulos.`);

  // crear articulos iniciales
  const inserted = await Article.insertMany([
    {
      name: 'Bicicleta',
      sale: true,
      price: 230.15,
      photo: 'bicicleta.png',
      tag: ['lifestyle', 'motor']
    },
    {
      name: 'Iphone 3GS',
      sale: false,
      price: 50.00,
      photo: 'iphone-3gs.png',
      tag: ['lifestyle', 'mobile']
    },
    {
      name: 'Laptop Asus TUF',
      sale: true,
      price: 600.99,
      photo: 'asus-tuf.png',
      tag: ['lifestyle', 'laptop']
    },
    {
      name: 'Guitarra',
      sale: false,
      price: 60.35,
      photo: 'guitarra.png',
      tag: ['lifestyle', 'musica']
    }
  ]);
  console.log(`Creados ${inserted.length} articulos.`);
}

function pregunta(texto) {
  return new Promise((resolve, reject) => {
    // conectar readline con la consola
    const ifc = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    ifc.question(texto, (respuesta) => {
      ifc.close();
      resolve(respuesta.toLowerCase() === 'si');
    });
  });
}

const main = async () => {
  await new Promise((resolve) => {
    connection.once('open', resolve);
  });
  const borrar = await pregunta('Estas seguro que quieres borrar el contenido de esta BD? (no)');
  if (!borrar) {
    process.exit();
  }
  await initArticle();
  connection.close();
};
main().catch((err) => console.log('Hubo un error', err));
