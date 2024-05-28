import styles from './navigation-bar.css';
import menuHamburguesa from '../../assets/iconos-menu/menu.png'
import logoutSubMenu from '../../assets/iconos-menu/logoutsubmenu.png'
import hacker from '../../assets/iconos-menu/hacker.png'
import progreso from '../../assets/iconos-menu/progreso.png'
import profile from '../../assets/iconos-menu/profile.png'
import search from '../../assets/iconos-menu/search.png'
import luz from '../../assets/iconos-menu/luz.png'
import codigo from '../../assets/iconos-menu/codigo.png'

export function NavigationBar(
  { user, userImage } =
    { user: 'User', userImage: 'https://via.placeholder.com/150' }
) {

  return `
  <div class="${styles.container}">
    <div class='${styles.menu_flex}'>
      <img id="menu-hamburger" src='${menuHamburguesa}' class='${styles.menu_hamburguer}'>
    </div>
    <div>  
      <h1 class='${styles.title}'>CodeRw./<h1>
    </div> 
    <div class='${styles.menu_right}' >
      <img src=''>
      <img src='${luz}' class='${styles.image}'>
      <img src='${search}' class='${styles.image}' id='search'>
      <img src="${userImage}" alt="User image" id='imageProfile' class='${styles.user_image}'>
      <img src='${codigo}' class='${styles.image}'>
      <p class='${styles.ex_total}'}>0</p>
    </div>
  </div>
    <div class='${styles.sub_menu_wrap}' id='subMenu'>
      <div class='${styles.sub_menu}'>
        <div class='${styles.user_info}'>
          <img src='${userImage}' alt='' class='${styles.user_image}'>
          <h2>${user}</h2>
        </div>
        <hr>
        <a href='${'/dashboard/reports'}'} class='${styles.sub_menu_link}'>
          <img src='${profile}'>
          <p>Ver perfil</p>
          <span>></spanp    </a>
        
        <a href='#' class='${styles.sub_menu_link}'>
          <img src='${progreso}'>
          <p>Progreso</p>
          <span>></span>
        </a>
        <hr>
        <a href='#' class='${styles.sub_menu_link}'>
          <img src='${logoutSubMenu}'>
          <p>Cerrar sesion</p>
          <span>></span>
        </a>
      </div>  
    </div>
    <div class='${styles.container_search}' id='containerSearch'>
        <input type='search' class='${styles.input}'>
        <botton class='${styles.btn}'>Buscar</botton>
    </div>   
  
  `;
}