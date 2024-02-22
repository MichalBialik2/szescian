const getFirstElementValu = () => {
	return parseFloat(document.querySelector("#first-element").value);
};



const polepowierzchni = () => {
	const lst = [];
	let element = getFirstElementValu();
	let zmiana = 6*element^2
	lst.push(zmiana);
	return lst;
};

const objetosc = () => {
	const lst = [];
	let element = getFirstElementValu();
	let zmiana = Math.pow(element, 3);
	lst.push(zmiana);
	return lst;
};

const przekatna = () => {
	const lst = [];
	let element = getFirstElementValu();
	let zmiana = element*Math.sqrt(3)
	lst.push(zmiana);
	return lst;
};

const kula = () => {
	const lst = [];
	let element = getFirstElementValu();
	let zmiana = element/2
	lst.push(zmiana);
	return lst;
};

const cleanNewDiv = () => {
	let allNewDivs = document.querySelectorAll(".new-div");
	allNewDivs.forEach((element) => element.remove());
};

const generateDivs = () => {
	cleanNewDiv();

	const isdlugoscprzekatnejSelected = document.querySelector("#przekatna").checked;
	const isPolepowierzchniSelected = document.querySelector("#polepowierzchni").checked;
	const isObjetoscSelected = document.querySelector("#objetosc").checked;
	const iskulaSelected = document.querySelector("#kula").checked;

	if (isPolepowierzchniSelected) {
		lst = polepowierzchni();
	} else if (isObjetoscSelected) {
		lst = objetosc();
	} else if (isdlugoscprzekatnejSelected) {
		lst = przekatna();
	} else if (iskulaSelected) {
		lst = kula();
	}

	const elementsDiv = document.querySelector("#elements");
	lst.forEach((element) => {
		let newDiv = document.createElement("div");
		newDiv.className = "new-div";
		newDiv.textContent = element;
		elementsDiv.appendChild(newDiv);
	});
};

calculate.addEventListener("click", generateDivs);

