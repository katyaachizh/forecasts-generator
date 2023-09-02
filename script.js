const forecastTemplate = document.querySelector('#forecast-item');
const forecastContainer = document.querySelector('.forecasts');
const forecastButton = document.querySelector('.forecast-btn');
const heading = document.querySelector('h1');
const percent = document.querySelector('p');




function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};



forecastButton.addEventListener('click', function() {

    function makeForecast (title, value) {
        const myForecast = forecastTemplate.content.cloneNode(true);
        myForecast.querySelector('h3').textContent = title;
        myForecast.querySelector('p').textContent = value;
    
        return myForecast;
    };  


        const number = generateRandom(1, 5);
        let prediction = "";

        switch(number) {
            case 1:
                prediction = "Сегодня хороший день для занятий спортом!"
            break;
            
            case 2:
                prediction = "Сегодня тебя будет преследовать удача!"
            break;

            case 3:
                prediction = "Сегодня лучше одеваться потеплее!"
            break;

            case 4:
                prediction = "Сегодня отличный день для встерчи с подругой!"
            break;

            case 5:
                prediction = "Сегодня хороший день для шоппинга!"
            break;
        };

    heading.textContent = prediction;

    const value = Math.floor(Math.random() * 100) + "%";
    percent.textContent = "Вероятность: " + value;

    const newCard = makeForecast (prediction, "Вероятность: " + value);
    forecastContainer.prepend(newCard);
})



/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
