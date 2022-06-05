/**
 * @param {string} code
 */
function renderImage(code) {
  /**
   * @param {string} str
   */
  function string2Bin(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
      result.push(str.charCodeAt(i));
    }
    return result;
  }

  function GetBits(byte) {
    return [
      byte & 128 ? 1 : 0,
      byte & 64 ? 1 : 0,
      byte & 32 ? 1 : 0,
      byte & 16 ? 1 : 0,
      byte & 8 ? 1 : 0,
      byte & 4 ? 1 : 0,
      byte & 2 ? 1 : 0,
      byte & 1 ? 1 : 0,
    ];
  }

  const grid = document.querySelector("div.grid"),
    numbers = string2Bin(code);
  let i = 0;

  grid.innerHTML = "";

  for (const number of numbers) {
    for (let r = 0; r < 8; r++) {
      grid.appendChild(document.createElement("div"));
    }
    const bits = GetBits(number);
    for (let n = 0; n < 8; n++) {
      if (bits[n]) grid.children[i].style.backgroundColor = "black";
      i++;
    }
  }
}
