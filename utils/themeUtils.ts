export const colors = ["red", "teal", "green", "blue", "orange", "yellow", "cyan", "purple", "pink"];
export const degrees = [100, 200, 300, 400, 500, 600, 700, 800, 900];

export const getRandomColor = () => {
  const c = Math.floor(Math.random() * colors.length);
  const d = Math.floor(Math.random() * degrees.length);

  const bg = `${colors[c]}.${degrees[d]}`;
  const color = d < degrees.indexOf(400) ? "black" : "white";
  return { bg, color };
};
