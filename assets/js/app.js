const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

/* Se acomodan el querySelector con sintaxis de la clase
se pone . antes de la clase */
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location'); /* Se agrega a HTML */

/* Se crea funcion asincrona, se agrega try y catch */
async function displayUser(username) { 
  try{
    $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); /* Se pone json para convertir a objeto */
    console.log(data);
    $n.textContent = data.name; /* Se quitan comillas para traer el dato */
    $b.textContent = data.blog;
    $l.textContent = data.location;
  } catch (err) {   
    handleError(err) /* Se llama a la funcion de error */
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.error(err); /* Se imprime error */
  $n.textContent = `Algo salió mal: ${err}`/* Se agrega $ a n */
}

displayUser('stolinski').catch(handleError);
