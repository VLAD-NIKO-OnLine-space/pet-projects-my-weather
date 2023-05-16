// получить сегодняшний месяц, день недели и число
export const getDate = () => {
    const days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const month = ['Январь', 'Февраль', 'Март','Апрель','Май','Июнь','Июль','Август', 'Сентябрь', 'Октябрь','Ноябрь','Декабрь' ]
    let day = new Date()

    const dayNow = days[day.getDay()];

    const dateNow = day.getDate()

    const monthNow = month[day.getMonth()] 

    return [dayNow, monthNow, dateNow]
}

// перевод из времени из unix в привычный вид
export const getTime = (time) => {
    let unix_timestamp = time
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let formattedTime = hours + ':' + minutes.substr(-2)
    return formattedTime;
}