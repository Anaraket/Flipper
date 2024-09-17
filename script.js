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
    points[active / 3].classList.remove('point_active');

    // Определяем направление слайда
    if (kuda === "right") {
        active = (active + 3) % list.length;
    } else if (kuda === "left") {
        active = (active - 3 + list.length) % list.length;
    }

    // Обновляем контент
    title.innerHTML = list[active];
    text.innerHTML = list[active + 1];
    if (imgID !== 'none') {
        img.style.backgroundImage = `url("${list[active + 2]}")`;
    }

    // Активируем текущий кружок
    points[active / 3].classList.add('point_active');

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