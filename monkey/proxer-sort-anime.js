// ==UserScript==
// @name        Sort Animes by reviews
// @namespace   Violentmonkey Scripts
// @match       https://proxer.me/*
// @grant       none
// @require https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2
// @version     1.0
// @author      -
// @description 15.1.2024, 00:18:38
// ==/UserScript==

const extractOrder = (node) => {
  const [rating, number] = node.querySelector('div:nth-child(4)').innerText.match(/[0-9.]+/g);
  return rating * number;
}
VM.observe(document.body, () => {
  if (!location.href.startsWith('https://proxer.me/season')) return;
  const parent = document.querySelector('#seasonEntries > div');
  if (!parent) return;
  const sorted = [...parent.children].sort((a,b) => extractOrder(b) - extractOrder(a));
  sorted.forEach(node => parent.appendChild(node))
  return true;
});
