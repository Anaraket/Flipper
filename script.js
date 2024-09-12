let list_one = [
    'Бассейн "Горное Озеро"<br>(Алтай)', 'Уникальный бассейн, органично вписывающийся в природный ландшафт Алтайских гор. Кристально чистая вода и великолепные виды создают атмосферу полного единения с природой.', '/assets/img/first_pool.png',
    'Бассейн 2', 'Описание бассейна 2', '/assets/img/2.jpg',
    'Бассейн 3', 'Описание бассейна 3', '/assets/img/3.jpg',
    'Бассейн 4', 'Описание бассейна 4', '/assets/img/4.jpg',
    'Бассейн 5', 'Описание бассейна 5', '/assets/img/5.jpg'
];
let active_1 = 0;

function slider(titleID, textID, elID, kuda, list, imgID, active) {
    let title = document.getElementById(titleID);
    let text = document.getElementById(textID);
    let el = document.getElementById(elID);
    let img = document.getElementById(imgID);
    let points = el.getElementsByClassName('point');

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
    img.style.backgroundImage = `url("${list[active + 2]}")`;

    // Активируем текущий кружок
    points[active / 3].classList.add('point_active');

    // Обновляем активный индекс
    active_1 = active;
}