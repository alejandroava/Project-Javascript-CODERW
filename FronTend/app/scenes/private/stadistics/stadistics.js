import styles from './stadistics.css'
export function StatisticsScene() {
    
    const pageContent = `
    <div class=${styles["table-container"]}>
        <h1 class=${styles["h1"]} >Estadísticas de Retos de Programación</h1>
        <table class=${styles["table"]}>
            <thead class=${styles["thead"]}>
                <tr>
                    <th>Nombre del Reto</th>
                    <th>Primer Intento</th>
                    <th>Mejor Intento</th>
                    <th>Intentos</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Reto 1</td>
                    <td>85</td>
                    <td>95</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Reto 2</td>
                    <td>70</td>
                    <td>80</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Reto 3</td>
                    <td>90</td>
                    <td>98</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Reto 4</td>
                    <td>60</td>
                    <td>75</td>
                    <td>4</td>
                </tr>
            </tbody>
        </table>
    </div>
    `


    const logic = () => {
        
    }
    
    return {
        pageContent,
        logic
    }
    
}