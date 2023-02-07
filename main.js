const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const button = $(".button");
const container = $(".container");

const setSize = (col) => {
  const squares = $$(".square");
  const containerWidth = container.offsetWidth;
  squares.forEach((square) => {
    square.style.width = `${containerWidth / col - 8}px`;
    square.style.height = `${containerWidth / col - 8}px`;
  });
};

const renderGrid = () => {
  const row = parseInt(prompt("Please enter row"));
  const col = parseInt(prompt("Please enter col"));
  let htmls = "";
  for (let i = 1; i <= row; i++) {
    htmls += `<div class="row row-${i}">`;
    for (let j = 1; j <= col; j++) {
      htmls += `<div class="col square" ></div>`;
    }
    htmls += `</div>`;
    container.innerHTML = htmls;
    setSize(col);
    handleSquareEvent();
  }
};
const changrSquareColor = () => {
  const squares = $$(".square");
  squares.forEach((square) => {
    square.onmouseover = (e) => {
      const a = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const c = Math.floor(Math.random() * 256);
      const alpha = Math.random();
      console.log(a, b, c, alpha);
      e.target.style.backgroundColor = `rgba(${a},${b},${c},${alpha})`;
    };
    square.onmouseout = (e) => {
      e.target.style.backgroundColor = `rgb(0,0,0)`;
    };
  });
};

const handleSquareEvent = () => {
  changrSquareColor();
};

const app = () => {
  button.onclick = renderGrid;
  //   handleSquareEvent();
  window.onresize = () => {
    setSize();
  };
};

app();
