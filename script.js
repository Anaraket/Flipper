let list_one = [
    'Наши работы', '', '/assets/img/first_pool.png', '',
    'Наши работы', '', '/assets/img/2.jpg', '',
    'Наши работы', '', '/assets/img/3.jpg', '',
    'Наши работы', '', '/assets/img/4.jpg', '',
    'Наши работы', '', '/assets/img/5.jpg', ''
];
let active_1 = 0;

let list_two = [
    'Система водоподготовки', 'Обеспечивает очистку воды в бассейне с помощью химических реагентов, дозирующих насосов и механических фильтров', '', '/assets/img/equipment1.jpg',
    'Фильтрация и водоочистка', 'Комплексная система, включающая механические фильтры, насосы и дозаторы химии, обеспечивающая стабильную фильтрацию и очищение воды', '', '/assets/img/equipment2.jpg'
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
        slider('title_1', 'text_1', 'el_1', 'right', list_one, 'img_1', 'active_1', 'none');
    } else if (touchEndX > touchStartX + 50) { // Свайп вправо (более 50px)
        slider('title_1', 'text_1', 'el_1', 'left', list_one, 'img_1', 'active_1', 'none');
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
        slider('title_2', 'text_2', 'el_2', 'right', list_two, 'none', 'active_2', 'btn_2');
    } else if (touchEndX2 > touchStartX2 + 50) { // Свайп вправо
        slider('title_2', 'text_2', 'el_2', 'left', list_two, 'none', 'active_2', 'btn_2');
    }
}


function slider(titleID, textID, elID, kuda, list, imgID, actives, btnID) {
    let title = document.getElementById(titleID);
    let text = document.getElementById(textID);
    let el = document.getElementById(elID);
    let img;
    let active;
    let points = el.getElementsByClassName('point');

    if (imgID !== 'none') {
        img = document.getElementById(imgID);
    }
    if (btnID !== 'none') {
        btn = document.getElementById(btnID);
    }
    if (actives == 'active_1') {
        active = active_1;
    } else {
        active = active_2;
    }

    // Сброс активного кружка
    points[Math.floor(active / 4)].classList.remove('point_active');

    // Определяем направление слайда
    if (kuda === "right") {
        active = (active + 4) % list.length;
    } else if (kuda === "left") {
        active = (active - 4 + list.length) % list.length;
    }

    // Обновляем контент
    title.classList.add("slider_anim");
    text.classList.add("slider_anim");
    
    setTimeout(() => {
        title.innerHTML = list[active];
        text.innerHTML = list[active + 1];
        if (btnID !== 'none') {
            btn.onclick = () => {open_img(`${list[active + 3]}`)};
        }
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
    points[Math.floor(active / 4)].classList.add('point_active');

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

function open_img(source) {
    const imgBox = document.getElementById("over_img_box");
    const img = document.getElementById("over_img");

    imgBox.style.display = 'flex';
    setTimeout(() => {
        img.src = source;
        imgBox.classList.add("show");
    }, 10);
}

function closes_img() {
    const imgBox = document.getElementById("over_img_box");

    imgBox.classList.remove("show");
    setTimeout(() => {
        imgBox.style.display = 'none';
    }, 500);
}