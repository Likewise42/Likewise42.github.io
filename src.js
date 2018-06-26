"use strict";

let webDevButton;
let gameDevButton;
let gameDesignButton;

let webDevDiv;
let gameDevDiv;
let gameDesignDiv;

const init = () =>{
	//set elements
	
	webDevButton = document.querySelector("#webDevButton");
	gameDevButton = document.querySelector("#gameDevButton");
	gameDesignButton = document.querySelector("#gameDesignButton");
	
	webDevDiv = document.querySelector("#webDevDiv");
	gameDevDiv = document.querySelector("#gameDevDiv");
	gameDesignDiv = document.querySelector("#gameDesignDiv");
	
	webDevButton.onclick = webDevPress;
	gameDevButton.onclick = gameDevPress;
	gameDesignButton.onclick = gameDesignPress;
	
}

const webDevPress = () =>{
	webDevButton.className = "btn btn-default active";
	gameDevButton.className = "btn btn-default";
	gameDesignButton.className = "btn btn-default";
	
	webDevDiv.style.display = "inline";
	gameDevDiv.style.display = "none";
	gameDesignDiv.style.display = "none";
}

const gameDevPress = () =>{
	webDevButton.className = "btn btn-default";
	gameDevButton.className = "btn btn-default active";
	gameDesignButton.className = "btn btn-default";
	
	webDevDiv.style.display = "none";
	gameDevDiv.style.display = "inline";
	gameDesignDiv.style.display = "none";
}

const gameDesignPress = () =>{
	webDevButton.className = "btn btn-default";
	gameDevButton.className = "btn btn-default";
	gameDesignButton.className = "btn btn-default active";
	
	webDevDiv.style.display = "none";
	gameDevDiv.style.display = "none";
	gameDesignDiv.style.display = "inline";
}


window.onload = init;