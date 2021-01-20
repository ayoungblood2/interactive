$('.grid-item').click(function() {
 
  $(this).css('grid-column','span 3');

  $(this).css('height','auto');
});

$(function () {
  let x, y;
  const mousemove = ({ clientX, clientY }) => (x = clientX, y = clientY);
  const dist = (x1, y1, x2, y2) => Math.sqrt(Math.abs(x1 - x2) + Math.abs(y1 - y2));
  const points = [];
  const MIN_DIST = 1;
  const MAX_POINTS = 800;
  const svgns = 'http://www.w3.org/2000/svg';
  let { width, height } = svg.getBoundingClientRect();
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  addEventListener('resize', () => {
    const r = svg.getBoundingClientRect();
    width = r.width; height = r.height;
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  });
  function frame() {
    requestAnimationFrame(frame);
    if (!x || !y) return;
    if (!points.length) return points.push([x, y]);
    const [px, py] = points[points.length - 1];
    const d = dist(x, y, px, py);
    if (d < MIN_DIST) return;
    points.push([x, y]);
    const pathString = points.reduce((acc, [x, y]) => {
      return acc + ` ${x},${y}`
    }, '');
    polyline.setAttribute('points', pathString);
    if (points.length > MAX_POINTS) points.shift();
  }

  addEventListener('mousemove', mousemove);
  requestAnimationFrame(frame);
});

$(window).mousemove(function (e) {
  $("a")
    .on("mouseenter", function () {
      $('#polyline').addClass("active")
    })
});
$(window).mousemove(function (e) {
  $("a")
    .on("mouseleave", function () {
      $('#polyline').removeClass("active")
    })
});

