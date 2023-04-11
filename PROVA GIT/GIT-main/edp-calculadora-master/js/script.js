import {set, clr, equal, set_point, set_op} from "./vista.js";

document.getElementById("clearButton").onclick = clr;
document.getElementById("equalButton").onclick = equal;
document.getElementById("pointButton").onclick = set_point;
document.getElementById("zeroButton").onclick = function() {set(0)};
document.getElementById("oneButton").onclick = function() {set(1)};
document.getElementById("twoButton").onclick = function() {set(2)};
document.getElementById("threeButton").onclick = function() {set(3)};
document.getElementById("fourButton").onclick = function() {set(4)};
document.getElementById("fiveButton").onclick = function() {set(5)};
document.getElementById("sixButton").onclick = function() {set(6)};
document.getElementById("sevenButton").onclick = function() {set(7)};
document.getElementById("eightButton").onclick = function() {set(8)};
document.getElementById("nineButton").onclick = function() {set(9)};
document.getElementById("plusButton").onclick = function() {set_op('+')};
document.getElementById("minusButton").onclick = function() {set_op('-')};
document.getElementById("multiplyButton").onclick = function() {set_op('*')};
document.getElementById("divideButton").onclick = function() {set_op('/')};


