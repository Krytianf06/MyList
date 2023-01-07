let todoInput; //miejsce, gdzie uzytkownik wpisuje treść zadania
let errorInput; // info o braku zadania
let addBtn; // przycisk dodania zadania
let ulList; // lista zadań, tagi Ul

const main = () => {};

const prepareDOMelement = () => {
	todoInput = document.querySelector(".todo-input");
	errorInput = document.querySelector(".error-info");
	addBtn = document.querySelector(".btn-add");
	ulList = document.querySelector(".todoList ul");
};

const prepareDOMevent = () => {};

document.addEventListener("DOMContentLoaded", main);
