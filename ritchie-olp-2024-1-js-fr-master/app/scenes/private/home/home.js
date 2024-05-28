import styles from './home.css'
import background from '../../../assets/galaxy.jpg'
import image from './panel.jpeg'

export function HomeScene() {
  const pageContent = ` 
  <img class='${styles.background}'src='${background}'>
  <div class='${styles.container}'>
    <div class='${styles.container_info}'>
      <div class='${styles.content}'>
        <h2>Lenguages</h2>
      </div>
      <div class='${styles.content}'>
        <h2>Reto del dia</h2>
      </div>
      <div class='${styles.content}'>
        <h2>foro</h2>
      </div>
    </div>
    <div class='${styles.container_table}'>
        <h2>TOP 10 Coders</h2>
        <table id="coderTable" class='${styles.table}'>
          <thead>
            <tr>
            <th>Posicion</th>
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

    data.forEach((coder,index) => {
      const $row = document.createElement('tr');
      const $position = document.createElement('td')
      const $name = document.createElement('td');
      const $score = document.createElement('td');

      $position.textContent = index + 1
      $name.textContent = coder.name;
      $score.textContent = coder.score;

      $row.appendChild($position)
      $row.appendChild($name);
      $row.appendChild($score);
      tableBody.appendChild($row);
    });
  }
   return {
    pageContent,
    logic
  }
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

