import styles from './home.css'
import background from '../../../assets/galaxy.jpg'
import image from './panel.jpeg'
import html from '../../../assets/iconos-menu/icono_html.png'
import css from '../../../assets/iconos-menu/css.png'
import js from '../../../assets/iconos-menu/js.png'

export function HomeScene() {
  const pageContent = ` 
    <div class='${styles.container}'>
      <div class='${styles.content} ${styles.color_html}'>
        <h2>HTML</h2>
        <p>Domina la estructura y marcados de paginas web</p>
        <div class='${styles.card_footer}'>
          <a href=''>Empezar aprender</a>
          <img src='${html}'>
        </div> 
      </div>
      <div class='${styles.content} ${styles.color_css}''>
        <h2>CSS</h2>
        <p>Domina el diseño y el estilo de las páginas web.</p>
        <div class='${styles.card_footer}'>
          <a href=''>Empezar aprender</a>
          <img src='${css}'}>
        </div>
      </div>
      <div class='${styles.content} ${styles.color_js}''>
        <h2>Javascript</h2>
        <p>Domina la lógica de programación y la interactividad en las páginas web.</p>
        <div class='${styles.card_footer}'>
          <a href=''>Empezar aprender</a>
          <img src='${js}'>
        </div>  
      </div>
    </div>
    <div class='${styles.container_table}'>
        <h2>TOP 10 Coders</h2>
        <table id="coderTable" class='${styles.table}'>
          <thead>
            <tr>
            <th class='${styles.th_position}'>Posicion</th>
              <th>Nombre</th>
              <th>Marcador</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `;

  const logic = async () => {
    const res = await fetch('http://localhost:3000/coder')
    const data = await res.json()
    console.log(data)

    const tableBody = document.querySelector('#coderTable tbody');

   data.forEach((coder, index) => {
      const $row = document.createElement('tr');
      const $position = document.createElement('td');
      const $nameImageCell = document.createElement('td'); 
      const $nameImageContainer = document.createElement('div'); 
      const $name = document.createElement('span'); 
      const $image = document.createElement('img'); 
      const $score = document.createElement('td');

      $position.textContent = index + 1;
      $name.textContent = coder.name;
      $score.textContent = coder.score;
      $image.src = coder.image;
     $image.style.width = '40px';

      $nameImageContainer.appendChild($image); 
      $nameImageContainer.appendChild($name); 
      $nameImageCell.appendChild($nameImageContainer); 

      $row.appendChild($position);
      $row.appendChild($nameImageCell);
      $row.appendChild($score);
      tableBody.appendChild($row);
    });
  };

  return {
    pageContent,
    logic
  };
}

  

  // return {
  //   pageContent
  // }


  // generate random number between 1 an 10
//   const randomNumber = Math.floor(Math.random() * 10) + 1;

//   const footer = `
//   <footer><p>All rights reserved.</p></footer>
//   `;

//   const pageContent = `
//   <div class="${styles.hidden}" id="home_container">
//     <h2>Home</h2>
//     <p>Welcome to the home view.</p>
//     <div id="user-info"></div>
//     ${footer}
//   </div>
//   <div class="${styles.loader}" id="loader">
//   </div>
//   `;

//   const logic = () => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${randomNumber}`)
//       .then(response => response.json())
//       // .then(json => {
//       //   // Primero, obtenemos el elemento en dodne deseamos insetar el usuario
//       //   const userInfo = document.getElementById('user-info');
//       //   // Luego, creamos dos elementos de tipo p
//       //   const pId = document.createElement('p');
//       //   const pName = document.createElement('p');
//       //   // Luego, mostramos el ID
//       //   pId.innerText = `User: ${json.id}`;
//       //   // Luego, mostramos el nombre
//       //   pName.innerText = `Name: ${json.name}`;
//       //   // Acto seguido insertamos los elementos en el div
//       //   userInfo.appendChild(pId);
//       //   userInfo.appendChild(pName);
//       //   // Finalmente, mostramos el div
//       //   document.getElementById('home_container').classList.remove(styles.hidden);
//       // })
//       .then(({
//         id, name, username, email, address: {
//           street, suite, city, zipcode, geo: {
//             lat, lng
//           }
//         },
//         phone, website, company: {
//           name: companyName, catchPhrase, bs
//         }
//       }) => {
//         const userInfo = document.getElementById('user-info');
//         userInfo.innerHTML = `
//         <p>User: ${id}</p>
//         <p>Name: ${name}</p>
//         <p>Username: ${username}</p>
//         <p>Email: ${email}</p>
//         <p>Address: ${street}, ${suite}, ${city}, ${zipcode}</p>
//         <p>Geo: ${lat}, ${lng}</p>
//         <p>Phone: ${phone}</p>
//         <p>Website: ${website}</p>
//         <p>Company: ${companyName}</p>
//         <p>Catch Phrase: ${catchPhrase}</p>
//         <p>BS: ${bs}</p>
//         `;
//         // Finalmente, ocultamos el loader y mostramos el div
//         document.querySelector(`#loader`).classList.add(styles.hidden);
//         document.getElementById('home_container').classList.remove(styles.hidden);
//       })
//   };

//   return {
//     pageContent,
//     logic
//   }
// }

