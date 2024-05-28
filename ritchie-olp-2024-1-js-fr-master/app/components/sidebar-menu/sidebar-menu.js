import html from '../../assets/iconos-menu/html.png'
import css from '../../assets/iconos-menu/css.png'
import js from '../../assets/iconos-menu/js.png'
import styles from './sidebar-menu.css';

export function SidebarMenu(data = []) {

  const path = window.location.pathname;

  // if path === href, add active class
  data.forEach((item) => {
    if (path === item.href) {   
      item.active = true;
    }
  });

  return `
    <aside id='sidebar' class="${styles["sidebar-menu"]}">
      <ul>
        ${data.map((item) => `
          <li id="${item.href}" class="${item.active ? styles.active : ''}">
            <img  class= '${styles.image}' src='${item.imagen}'>
             ${item.name === 'Lenguajes' ?
      `<button type='button' class='${styles.lenguage}' id='lenguage'>${item.name}</button>
            <ul class='${styles.list_show}' id='list_show'>
              <li class='${styles.list_inside}'>
                <img src='${html}' class='${styles.image_list}'>
                <button type='button'class='${styles.btn}'>HTML</button></li>
              <li class='${styles.list_inside}'>
               <img src='${css}' class='${styles.image_list}'>
                <button type='button' class='${styles.btn}'>CSS</button></li>
              <li class='${styles.list_inside}'>
                <img src='${js}' class='${styles.image_list}'>
                <button type='button' class='${styles.btn}'>JS</button></li>
            </ul>`
      : `<button type="button">${item.name}</button>`
    }
          </li>
           
        `).join('')}
        <li><button id="logout" type="button">Logout</button></li>
      </ul>
    </aside>
  `;
}