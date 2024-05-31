import { navigateTo } from '../../../../../Router.js';
import { formValidator } from '../../../../../helpers';
import style from './login-form.css';


import logo from '../../../../../assets/logo.svg'
import icon from '../../../../../assets/icono.svg'

export async function LoginFormComponent() {
  const root = document.getElementById('root');

  root.innerHTML = `
<div>
 
  <div class="${style.temp_wrap}" px-4">
  
  <div class="${style.container}">

  <div class="${style.hero_top}">
    <div class="${style.heading_left}">
      <p class="${style.header_item_medium}">CoderRW</p>
      
    </div>
    <div class="${style.heading_right}">
      <p class="${style.header_item_small}">Model Insights</p>
      <p class="${style.header_item_small}">Methodology</p>
    </div>
  </div>
  <div class="${style.format}">
    <form id="loginForm" class="${style.form}">
    <h2 class="${style.titless}">Login</h2>
    <label for="email" class="${style.label}">Email:</label>
    <input type="text" id="email" name="email" autocomplete="email" class="${style['input-email']}">
    <label for="password" class="${style.label}">Password:</label>
    <input type="password" id="password" name="password" autocomplete="current-password" class="${style['input-password']}">
    <button type="submit" class="${style['button-send']}">Login</button>
    </form>
  </div>

    <!-- Hallucination Index -->

    <div class="${style.hallucination}">

      

      <div class="${style["hal_row"]}">
        <span class="${style.rotate1} ${style.time1}">R</span>
        <span class="${style.rotate2} ${style.time2}">I</span>
        <span class="${style.rotate3} ${style.time3}">W</span>
        <span class="${style.rotate4} ${style.time4}">I</span>
        <span class="${style.rotate5} ${style.time5}">R</span>
        <span class="${style.rotate6} ${style.time6}">I</span>
        <span class="${style.rotate7} ${style.time7}">W</span>
        <span class="${style.rotate8} ${style.time8}">I</span>
        <span class="${style.rotate9} ${style.time9}">R</span>
        <span class="${style.rotate10} ${style.time10}">I</span>
        <span class="${style.rotate2} ${style.time2}">W</span>
        <span class="${style.rotate3} ${style.time3}">I</span>
        <span class="${style.rotate4} ${style.time5}">R</span>
        <span class="${style.rotate5} ${style.time2}">I</span>
        <span class="${style.rotate6} ${style.time1}0">W</span>
        <span class="${style.rotate8} ${style.time8}">I</span>
        <span class="${style.rotate1} ${style.time9}">R</span>
        <span class="${style.rotate3} ${style.time7}">I</span>
        <span class="${style.rotate7} ${style.time6}">W</span>
        <span class="${style.rotate2} ${style.time5}">I</span>
        <span class="${style.rotate3} ${style.time4}">R</span>
        <span class="${style.rotate8} ${style.time2}">I</span>
        <span class="${style.rotate9} ${style.time3}">W</span>
        <span class="${style.rotate10} ${style.time1}">I</span>
      </div>

      <div class="${style.hal_row}">
        <span class="${style.rotate1} ${style.time5}">C</span>
        <span class="${style.rotate3} ${style.time2}">O</span>
        <span class="${style.rotate5} ${style.time10}">D</span>
        <span class="${style.rotate7} ${style.time9}">E</span>
        <span class="${style.rotate9} ${style.time8}">R</span>
        <span class="${style.rotate10} ${style.time7}">H</span>
        <span class="${style.rotate2} ${style.time5}">T</span>
        <span class="${style.rotate4} ${style.time6}">M</span>
        <span class="${style.rotate6} ${style.time4}">L</span>
        <span class="${style.rotate8} ${style.time3}">J</span>
        <span class="${style.rotate10} ${style.time2}">A</span>
        <span class="${style.rotate9} ${style.time1}">V</span>
        <span class="${style.rotate8} ${style.time2}">A</span>
        <span class="${style.rotate7} ${style.time3}">S</span>
        <span class="${style.rotate6} ${style.time6}">C</span>
        <span class="${style.rotate5} ${style.time4}">R</span>
        <span class="${style.rotate4} ${style.time8}">I</span>
        <span class="${style.rotate3} ${style.time9}">T</span>
        <span class="${style.rotate2} ${style.time1}0">C</span>
        <span class="${style.rotate1} ${style.time4}">O</span>
        <span class="${style.rotate7} ${style.time5}">D</span>
        <span class="${style.rotate5} ${style.time3}">E</span>
        <span class="${style.rotate6} ${style.time2}">R</span>
        <span class="${style.rotate2} ${style.time1}">S</span>
      </div>

      <div class="${style.hal_row}">
        <span class="${style.rotate7} ${style.time5}">C</span>
        <span class="${style.rotate6} ${style.time4}">O</span>
        <span class="${style.rotate5} ${style.time7}">D</span>
        <span class="${style.rotate4} ${style.time6}">E</span>
        <span class="${style.rotate3} ${style.time9}">S</span>
        <span class="${style.rotate2} ${style.time10}">T</span>
        <span class="${style.rotate1} ${style.time3}">R</span>
        <span class="${style.rotate10} ${style.time1}">A</span>
        <span class="${style.rotate8} ${style.time7}">N</span>
        <span class="${style.rotate5} ${style.time9}">S</span>
        <span class="${style.rotate6} ${style.time2}">F</span>
        <span class="${style.rotate3} ${style.time3}">O</span>
        <span class="${style.rotate2} ${style.time4}">R</span>
        <span class="${style.rotate4} ${style.time5}">M</span>
        <span class="${style.rotate5} ${style.time7}">A</span>
        <span class="${style.rotate7} ${style.time5}">N</span>
        <span class="${style.rotate9} ${style.time6}">D</span>
        <span class="${style.rotate6} ${style.time8}">O</span>
        <span class="${style.rotate3} ${style.time9}">V</span>
        <span class="${style.rotate2} ${style.time7}">I</span>
        <span class="${style.rotate1} ${style.time1}">D</span>
        <span class="${style.rotate4} ${style.time2}">A</span>
        <span class="${style.rotate7} ${style.time3}">S</span>
        <span class="${style.rotate8} ${style.time2}">S</span>
      </div>"

      <div class="${style.hal_row}">
        <span class="${style.rotate5} ${style.time5}">E</span>
        <span class="${style.rotate3} ${style.time6}">L</span>
        <span class="${style.rotate10} ${style.time2}">A</span>
        <span class="${style.rotate5} ${style.time3}">G</span>
        <span class="${style.rotate8} ${style.time2}">U</span>
        <span class="${style.rotate7}${style.time10}">E</span>
        <span class="${style.rotate6} ${style.time8}">N</span>
        <span class="${style.rotate4} ${style.time3}">R</span>
        <span class="${style.rotate1} ${style.time7}">O</span>
        <span class="${style.rotate3} ${style.time1}">N</span>
        <span class="${style.rotate2} ${style.time2}">&</span>
        <span class="${style.rotate5} ${style.time3}">P</span>
        <span class="${style.rotate6} ${style.time1}">A</span>
        <span class="${style.rotate9} ${style.time5}">R</span>
        <span class="${style.rotate5} ${style.time3}">K</span>
        <span class="${style.rotate6} ${style.time10}">I</span>
        <span class="${style.rotate7} ${style.time9}">N</span>
        <span class="${style.rotate9} ${style.time8}">G</span>
        <span class="${style.rotate8} ${style.time6}">F</span>
        <span class="${style.rotate2} ${style.time4}">A</span>
        <span class="${style.rotate3} ${style.time3}">L</span>
        <span class="${style.rotate4} ${style.time1}">C</span>
        <span class="${style.rotate2} ${style.time2}">O</span>
        <span class="${style.rotate2} ${style.time5}">N</span>
      </div>

      <div class="${style.hal_row}">
        <span class="${style.rotate5} ${style.time7}">C</span>
        <span class="${style.rotate6} ${style.time5}">A</span>
        <span class="${style.rotate7} ${style.time6}">T</span>
        <span class="${style.rotate8} ${style.time1}">N</span>
        <span class="${style.rotate9} ${style.time3}">N</span>
        <span class="${style.rotate2} ${style.time4}">R</span>
        <span class="${style.rotate3} ${style.time9}">L</span>
        <span class="${style.rotate2} ${style.time8}">U</span>
        <span class="${style.rotate1} ${style.time7}">C</span>
        <span class="${style.rotate10} ${style.time6}">Y</span>
        <span class="${style.rotate9} ${style.time6}">N</span>
        <span class="${style.rotate5} ${style.time5}">O</span>
        <span class="${style.rotate3} ${style.time7}">T</span>
        <span class="${style.rotate5} ${style.time9}">I</span>
        <span class="${style.rotate7} ${style.time3}">O</span>
        <span class="${style.rotate6} ${style.time2}">N</span>
        <span class="${style.rotate2} ${style.time1}">I</span>
        <span class="${style.rotate1} ${style.time7}">N</span>
        <span class="${style.rotate7} ${style.time6}">D</span>
        <span class="${style.rotate9} ${style.time7}">E</span>
        <span class="${style.rotate6} ${style.time8}">X</span>
        <span class="${style.rotate8} ${style.time4}">G</span>
        <span class="${style.rotate1} ${style.time10}">P</span>
        <span class="${style.rotate3} ${style.time1}">T</span>
      </div>
    </div>

    <!-- Hallucination Index END -->

    <div class="${style.hero_bottom}">
      <div>
        <h1 class="${style.title}">BOOST YOUR SKILLS</h1>
        <p class="${style.subtitle}">An Intergalactic Code Journey</p>
      </div>
      <div class="${style.type}">
        <img src="${logo}" class="${style.logo}"> 
      </div>
    </div>

  </div>
</div>
    
    `;
  
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // previene el comportamiento por default que es, recargar la pagina
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(!formValidator(email, password)){
      alert('Please fill in all fields');
      return;
    }
    const token = await login(email, password);
    if (token) {
      localStorage.setItem('token', token);
      navigateTo('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  });
}

async function login(email, password) {
  try {
    const response = await fetch('http://localhost:4000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Login failed:', error);
    return null;
  }
}
