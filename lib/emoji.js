const wordArray = ["coffee", "heart", "cat", "rainbow"];
const emoji = require("node-emoji");

function replaceWordWithEmoji(body) {
  let bodyArr = body.body.split(" ");

  bodyArr.map((word, idx) => {
    if (wordArray.includes(word)) {
      bodyArr[idx] = emoji.get(`:${word}:`);
    }
  });

  body.body = bodyArr.join(" ");
  return body;
}

module.exports = { replaceWordWithEmoji };
