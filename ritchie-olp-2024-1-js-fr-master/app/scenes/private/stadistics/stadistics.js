export  function StatisticsScene() {
    // const res = await fetch('http://localhost:3000/statistics')
    // const data = await res.json()
    // console.log(data)
    const pageContent = `
    <div>Hola</div>
    `


    const logic = () => {
        console.log('aqui esta estadisticas')
    }
    
    return {
        pageContent,
        logic
    }
    
}