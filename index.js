function getDayInfo(data=""){
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

    let dateParts = data.split(".");
    let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

    let firstWeekday = new Date(dateObject.getFullYear(), dateObject.getMonth(), 1).getDay();
    let offsetDate = (dateObject.getDate() + firstWeekday)-1;
    let result= Math.ceil(offsetDate / 7);

    let day= days[dateObject.getDay()];
    let numberOfMonth=months[dateObject.getMonth()];
    let yearNumber=dateObject.getFullYear();

    return day + ", " + result + " " + "неделя " + " " + numberOfMonth + " "+ yearNumber + " " + "года"
}
getDayInfo("12.09.2022");