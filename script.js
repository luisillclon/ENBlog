  const circle = document.querySelector(`#cursorCircle`)
  document.addEventListener(`mousemove`, e => {
    const mouseX = e.pageX - 50;
    const mouseY = e.pageY - 50;
    circle.style = `transform: translate3d(${mouseX}px, ${mouseY}px, 0)`
  })
  // Clock
  const $tiempo = document.querySelector('.tiempo'),
    $fecha = document.querySelector('.fecha');

  function Relojdigital() {
    let f = new Date(),
      dia = f.getDate(),
      mes = f.getMonth() + 1,
      anio = f.getFullYear(),
      diaSemana = f.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2)

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

    let semana = ['DOMINGO', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];
    let showSemana = (semana[diaSemana])
    $fecha.innerHTML = `${showSemana} ${dia}-${mes}-${anio}`
  }
  setInterval(() => {
    Relojdigital()
  }, 1000);