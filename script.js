// -------------------------------- места с "сервера"
const arrMaxServer = [{
  rows: 10,
  seat: 160
}]

// получить arrMaxServer в константы
const [{
  rows: maxRows,
  seat: maxSeat
}] = arrMaxServer


function getMaxSeatsInRows() {
  let totalSeats = maxSeat / maxRows;
  return totalSeats
}

// -------------------------------- render
const render = (container, template, place = `beforeend`) => {
  if (container instanceof Element) {
    container.insertAdjacentHTML(place, template);
  }
}

const createSeatsTemplate = () => `<div class="countdown__buy-seats-plan-item"></div>`;

function renderSeats() {
  const seatsPlanInner = document.querySelector('.countdown__buy-seats-plan-inner');

  for (let i = 1; i <= maxSeat; i++) {
    render(seatsPlanInner, createSeatsTemplate());
  }

  // ---> принимает на вход строку/массив/число
  showSelectedSeats(7, 7);
  showSelectedSeats(4, 5);
  showSelectedSeats(24, 9);
  showSelectedSeats(2, 94);
  showSelectedSeats(23, 29);
}


// -------------------------------- power JS
function showSelectedSeats(row, place) {
  const seats = Array.from(document.querySelectorAll('.countdown__buy-seats-plan-item'));

  const totalSeats = getMaxSeatsInRows();
  // console.log(`всего мест: ${maxSeat}`);
  // console.log(`всего рядов: ${maxRows}`);
  // console.log(`мест в каждом ряду: ${totalSeats}`);
  // console.log(` `);


  // выбр.ряд     всего мест   выбр.место
  //  7ряд   *       16      +     5     = порядковый элемент в контейнере
  if (row <= maxRows && place <= totalSeats) {
    seats[(row - 1) * totalSeats + (place - 1)].style.border = '1px solid #00FFA9';
    console.warn(`вы выбрали ${row} ряд, ${place} место`);
  }
  if (row >= maxRows && place >= totalSeats) {
    console.warn(`${row} ряда и ${place} места не существует!`);
  } else {
    if (row >= maxRows) {
      console.warn(`${row} ряда не существует!`);
    }
    if (place >= totalSeats) {
      console.warn(`${place} места не существует!`);
    }
  }
}

renderSeats();