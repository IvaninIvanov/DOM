/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "778885 ";
    // e.g. return "UP654321";
}

function fn() {
    return "Ivanin ";
}

function sn() {
    return "Ivanov";
}

// add your functions here
function addTextTo(addto,string) {
  addto.textContent += string;
}

function replaceText(elm,str) {
  elm.textContent = str;
}

function moreBears() {
  document.getElementById("animals").src = "http://placebear.com/400/200";
  document.getElementById("animals").alt = "A bear.";
  document.getElementById("animals").title = "A BEAR!";
}

function setId(elm,str) {
  elm.id = str;
  return elm;
}

function setClass(elm,str) {
  elm.className = str;
  return elm;
}

function addAClass(elm,str) {
  elm.classList.add(str);
  return elm;
}

function removeAClass(elm,str) {
  elm.classList.remove(str);
}

function newElement(name) {
  var elm = document.createElement(name);
  return elm;
}

function findElementById(id) {
  var elm = document.getElementById(id);
  return elm;
}

function findElementByQuery(query) {
  var elm = document.querySelectorAll(query);
  return elm;
}
