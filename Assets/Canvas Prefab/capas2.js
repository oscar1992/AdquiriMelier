﻿#pragma strict
var capas:GameObject[];
var tama:int;
public var i:int=0;
var toda:boolean=false;
var a=0;
var camara:GameObject;
function Start () {
	
	tama=capas.Length;	
	i=tama-1;
	
	toda=false;
}

function Update () {

	//text.text="JOJOJ: "+AR.esta;
	
		
	/*for(a=0;a<tama;a++){
		if(a==i){
			//capas[a].renderer.enabled=true;
			capas[a].active=true;
		}else{
			//capas[a].renderer.enabled=false;
			capas[a].active=false;
		}
	}*/
	for(a=0;a<tama;a++){
		if(a<=i){
			capas[a].active=true;
		}else{
			capas[a].active=false;
		}
	}
	if(toda){
		a=0;
		for(a=0;a<tama;a++){
		//capas[a].renderer.enabled=true;
		capas[a].active=true;
		}
	}
	
}

function capama() {
	if(i<tama-1){
		i++;
		toda=false;
	}
}

function capame() {
	if(i>0){
		i--;
		toda=false;
	}
}

function todas() {
	toda=true;
	i=tama-1;
}