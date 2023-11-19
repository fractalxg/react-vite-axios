// função para remover acento de palavras
const noAccent = (word) => word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  
// const para formatar a data
const formattedDate = (date) => {
    const dayTime = date
    const weatherDay = dayTime.split(' ')
    const weatherDaySplitted = weatherDay[0].split('-')
    const weatherDayFormatted = `${weatherDaySplitted[2]}/${weatherDaySplitted[1]}/${weatherDaySplitted[0]}`
    return weatherDayFormatted
}

// função para obter dia da semana
const dayToWeek = (date) => {
    const objData = new Date(date)
    let day = objData.getDay()
    switch (day) {
        case 0:
            day = "Domingo"
            break;
        case 1:
            day = "Segunda-Feira"
            break;
        case 2:
            day = "Terça-Feira"
            break;
        case 3:
            day = "Quarta-Feira"
            break;
        case 4:
            day = "Quinta-Feira"
            break;
        case 5:
            day = "Sexta-Feira"
            break;
        case 6:
            day = "Sábado"
            break;
    }

    return day
}
  
  export { noAccent, formattedDate, dayToWeek }