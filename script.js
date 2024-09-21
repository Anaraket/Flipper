let list_one = [
    'Бассейн "Горное Озеро"<br>(Алтай)', 'Уникальный бассейн, органично вписывающийся в природный ландшафт Алтайских гор. Кристально чистая вода и великолепные виды создают атмосферу полного единения с природой.', '/assets/img/first_pool.png',
    'Бассейн 2', 'Описание бассейна 2', '/assets/img/2.jpg',
    'Бассейн 3', 'Описание бассейна 3', '/assets/img/3.jpg',
    'Бассейн 4', 'Описание бассейна 4', '/assets/img/4.jpg',
    'Бассейн 5', 'Описание бассейна 5', '/assets/img/5.jpg'
];
let active_1 = 0;

let list_two = [
    'Система фильтрации', 'Поддерживает чистоту воды в бассейне с помощью механических фильтров и дезинфицирующих средств.', '',
    'Автоматическая дезинфекция', 'Обеспечивает регулярное введение дезинфицирующих реагентов и контроль pH.', '',
    'Циркуляционный насос', 'Обеспечивает постоянное движение воды, поддерживая её чистоту и температуру.', '',
    'Ультрафиолетовая очистка', 'Уничтожает бактерии и вирусы с помощью ультрафиолетового излучения.', '',
    'Система управления', 'Электронный блок для мониторинга и управления всеми системами бассейна.', ''
];
let active_2 = 0;

// Функция для обработки свайпов
let touchStartX = 0;
let touchEndX = 0;

const sliderBlock = document.querySelector('.slider'); // Выбираем блок, в котором отслеживаем свайпы

sliderBlock.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX; // Запоминаем начальную точку касания
});

sliderBlock.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX; // Запоминаем конечную точку касания
    handleSwipe(); // Определяем свайп
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) { // Свайп влево (более 50px)
        slider('title_1', 'text_1', 'el_1', 'right', list_one, 'img_1', 'active_1');
    } else if (touchEndX > touchStartX + 50) { // Свайп вправо (более 50px)
        slider('title_1', 'text_1', 'el_1', 'left', list_one, 'img_1', 'active_1');
    }
}

let touchStartX2 = 0;
let touchEndX2 = 0;

const filtrationSystemBlock = document.querySelector('.filtration_system_block');

// Отслеживание свайпов на втором блоке
filtrationSystemBlock.addEventListener('touchstart', (event) => {
    touchStartX2 = event.changedTouches[0].screenX;
});

filtrationSystemBlock.addEventListener('touchend', (event) => {
    touchEndX2 = event.changedTouches[0].screenX;
    handleSwipe2(); // Определение свайпа для второго блока
});

function handleSwipe2() {
    if (touchEndX2 < touchStartX2 - 50) { // Свайп влево
        slider('title_2', 'text_2', 'el_2', 'right', list_two, 'none', 'active_2');
    } else if (touchEndX2 > touchStartX2 + 50) { // Свайп вправо
        slider('title_2', 'text_2', 'el_2', 'left', list_two, 'none', 'active_2');
    }
}


function slider(titleID, textID, elID, kuda, list, imgID, actives) {
    let title = document.getElementById(titleID);
    let text = document.getElementById(textID);
    let el = document.getElementById(elID);
    let img;
    let active;
    let points = el.getElementsByClassName('point');

    if (imgID !== 'none') {
        img = document.getElementById(imgID);
    }
    if (actives == 'active_1') {
        active = active_1;
    } else {
        active = active_2;
    }

    // Сброс активного кружка
    points[Math.floor(active / 3)].classList.remove('point_active');

    // Определяем направление слайда
    if (kuda === "right") {
        active = (active + 3) % list.length;
    } else if (kuda === "left") {
        active = (active - 3 + list.length) % list.length;
    }

    // Обновляем контент
    title.classList.add("slider_anim");
    text.classList.add("slider_anim");
    
    setTimeout(() => {
        title.innerHTML = list[active];
        text.innerHTML = list[active + 1];
        if (imgID !== 'none') {
            img.style.backgroundImage = `url("${list[active + 2]}")`;
        }
        if (imgID !== 'none') {
            img.classList.add('slider_anim-img');
        }
    }, 250);
    setTimeout(() => {
        title.classList.remove("slider_anim");
        text.classList.remove("slider_anim");
        if (imgID !== 'none') {
            img.classList.remove('slider_anim-img');
        }
    }, 600);


    // Активируем текущий кружок
    points[Math.floor(active / 3)].classList.add('point_active');

    // Обновляем активный индекс
    if (actives == 'active_1') {
        active_1 = active;
    } else {
        active_2 = active;
    }
}


function opens() {
    const menu = document.getElementById("hamburger");

    menu.style.display = 'flex';
    setTimeout(() => {
        menu.classList.add("show");
    }, 10);
}

function closes() {
    const menu = document.getElementById("hamburger");

    menu.classList.remove("show");
    setTimeout(() => {
        menu.style.display = 'none';
    }, 500);
}

function copypy(link, text) {
    const tempInput = document.createElement("textarea");
    tempInput.value = link;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);
    alert(text);
}