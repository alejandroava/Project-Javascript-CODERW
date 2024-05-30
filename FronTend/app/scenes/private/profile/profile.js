import { logOut } from "../../../helpers";
import styles from './profile.css';
import loader from '../../../assets/loader.svg';
import medall from '../../../assets/medalla1.png';
import avatar from '../../../assets/avatar.png';

export const ProfileScene = () => {
    

    const pageContent = `
     <div class="${styles["profile-container"]}">
        <div class="${styles["profile-header"]}">
            <img src="${avatar}" alt="Avatar" class="${styles.avatar}">
            <h1 id= "nameUser"></h1>
        </div>
        <div class=${styles["profile-details"]}>
            <div class=${styles["medals"]}>
                <h2>Medallas</h2>
                <ul id= "medals">
                
                </ul>
            </div>
            <div class=${styles["progress"]}>
                <h2>Progreso</h2>
                <table id= "table" class=${styles["table"]}>
                    
                </table>
            </div>
        </div>
    </div>
`;

    const logic = async() => {
        const $myUserName = document.getElementById("nameUser")
        const $myTable = document.getElementById("table")
        const $myListMedals = document.getElementById("medals")
        
        let numeroAleatorio = Math.random() * 18;
        let per = numeroAleatorio.toFixed(2) 
            
      
        try {
            const response = await fetch("http://localhost:3000/perfil")
            
            if (!response.ok) {
                throw new Error("error en la peticion")
             }
            const data = await response.json();
        //    console.log(data)
           
            $myUserName.textContent = data.name
            const fragmentByMedals = data.info.medals.map((medal, i ) => 
                `
                    <li><img src=${medal} alt="medallas" style ="width: 70px"></img></li>
        
                `
            ).join("")
            $myListMedals.innerHTML = fragmentByMedals
           
            const fragmentByTable = data.info.languages.map((language, i ) => 
                `   <tr>
                        <td>${language}</td>
                        <td>
                            <div class=${styles["progress-bar"]}>
                                <div class=${styles["progress-fill"]} style= width:${(i + 2 ) * per }%;}></div>
                            </div>
                        </td>
                    </tr>`
            ).join("")
            $myTable.innerHTML = fragmentByTable
            // console.log(fragment)
        } catch (error) {
            console.log("hubo un error:", error)
        }
    }
    
  
    

    return { pageContent, logic };
}