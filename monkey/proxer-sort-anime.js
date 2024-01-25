// ==UserScript==
// @name        Sort Animes by reviews
// @namespace   Violentmonkey Scripts
// @match       https://proxer.me/season*
// @grant       none
// @version     1.0
// @author      -
// @description 15.1.2024, 00:18:38
// ==/UserScript==

const extractOrder = (node) => {
  const [rating, number] = node.querySelector('div:nth-child(4)').innerText.match(/[0-9.]+/g);
  return rating * number;
}
const parent = document.querySelector('#seasonEntries > div');
const sorted = [...parent.children].sort((a,b) => extractOrder(b) - extractOrder(a));
sorted.forEach(node => parent.appendChild(node))
