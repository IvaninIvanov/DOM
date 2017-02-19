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



function reverseList(sel) {
  var toRev;
  // need to find out whether it is a class or id selector
  if (sel.charAt(0) === "#") {
    sel = sel.substr(1);
    toRev = document.getElementById(sel)
  }
  else if (toRev.charAt(0) === ".") {
    sel = sel.substr(1);
    toRev = document.getElementsByClassName(sel)
  }
  else {
    alert("Invalid selector format. Use # for id selector and . for class.")
  }
  // get lenght of list
  var i = toRev.childNodes.length;
  // reverse
  while (i--)
  toRev.appendChild(toRev.childNodes[i]);

  return toRev;
}



function mover(selFrom, selTo) {
  var objFrom, objTo;
  // selector template for target
  if (selFrom.charAt(0) === "#") {
    selFrom = selFrom.substr(1);
    objFrom = document.getElementById(selFrom)
  }
  else if (toRev.charAt(0) === ".") {
    selFrom = selFrom.substr(1);
    objFrom = document.getElementsByClassName(selFrom)
  }
  else {
    alert("Invalid selector format. Use # for id selector and . for class.")
  }

  // selector template for destination
  if (selTo.charAt(0) === "#") {
    selTo = selTo.substr(1);
    objTo = document.getElementById(selTo)
  }
  else if (toRev.charAt(0) === ".") {
    selTo = selTo.substr(1);
    objTo = document.getElementsByClassName(selTo)
  }
  else {
    alert("Invalid selector format. Use # for id selector and . for class.")
  }

  objTo.appendChild(objFrom);
}


function filler(selTarget, selInput) {
  for (var i = 0; i < selInput.length; i++) {
    var elem = document.createElement("li");
    var t = document.createTextNode(selInput[i]);
    elem.appendChild(t);
    selTarget.appendChild(elem);
  }
}


function dupe(sel) {
  // selector template
  var obj, objCopy;
  if (sel.charAt(0) === "#") {
    sel = sel.substr(1);
    obj = document.getElementById(sel)
  }
  else if (toRev.charAt(0) === ".") {
    sel = sel.substr(1);
    obj = document.getElementsByClassName(sel)
  }
  else {
    alert("Invalid selector format. Use # for id selector and . for class.")
  }

  objCopy = obj.cloneNode(true);
  obj.parentElement.appendChild(objCopy);
}
