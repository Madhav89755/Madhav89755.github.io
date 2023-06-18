function dispSideBar() {
	document.getElementById('sidebar').style.display='block';
	document.getElementById('clickBtn').style.display='none';
	document.getElementById('shop').style.display='none';
	document.getElementById('navbar').style.opacity=0.5;
	document.getElementById('navbar').style.opacity=0.5;
	document.getElementById('video').style.opacity=0.5;
}
function closeSideBar(){
	document.getElementById('sidebar').style.display='none';
	document.getElementById('clickBtn').style.display='block';	
	document.getElementById('shop').style.display='block';	
	document.getElementById('navbar').style.opacity=1;
	document.getElementById('navbar').style.opacity=1;
	document.getElementById('video').style.opacity=1;
}

function sea(){
	document.getElementById("vaccum").style.color='gray';
	document.getElementById("sea").style.color='white';
	document.getElementById('text').innerHTML = 
		'Merlin is a family of rocket engines developed by SpaceX for use on its Falcon'+
		'1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use RP-1 and'+
		'liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine'+
		+'was originally designed for recovery and reuse.';
	document.getElementById('sub_contain').style.backgroundImage="url('falcon9_media/sea_level.jpg')";
}
function vaccum(){
	document.getElementById("vaccum").style.color='white';
	document.getElementById("sea").style.color='gray';
	document.getElementById('text').innerHTML = 
		'Merlin Vacuum features a larger exhaust section and a significantly larger'+
		' expansion nozzle to maximize the engine’s efficiency in the vacuum of space.'+
		' Its combustion chamber is regeneratively cooled, while the expansion nozzle'+ 
		' is radiatively cooled. At full power, the Merlin Vacuum engine operates with'+
		' the greatest efficiency ever for an American-made hydrocarbon rocket engine.';
	document.getElementById('sub_contain').style.backgroundImage="url('falcon9_media/vacc_level.jpg')";
}

function oView(){
	document.getElementById("oView").style.color='white';
	document.getElementById("Eng").style.color='gray';
	document.getElementById("landLeg").style.color='gray';
	document.getElementById('div3_text').innerHTML = 
		"Falcon 9’s first stage incorporates nine Merlin engines and"+
		"aluminum-lithium alloy tanks containing liquid oxygen and rocket-"+
		"grade kerosene (RP-1) propellant."+
		"Falcon 9 generates more than 1.7 million pounds of thrust at sea"+
		"level.";
	document.getElementById('div_3').style.backgroundImage="url('falcon9_media/first_stage_overview.jpg')";
}

function Eng(){
	document.getElementById("oView").style.color='gray';
	document.getElementById("Eng").style.color='white';
	document.getElementById("landLeg").style.color='gray';
	document.getElementById('div3_text').innerHTML = 
		"The nine Merlin engines on the first stage are gradually throttled"+
		"near the end of first-stage flight to limit launch vehicle"+
		"acceleration as the rocket’s mass decreases with the burning of"+
		"fuel. These engines are also used to reorient the first stage prior to"+
		"reentry and to decelerate the vehicle for landing.";	
	document.getElementById("tbl_engine_first_stage").style.display="block";
	document.getElementById('div_3').style.backgroundImage="url('falcon9_media/first_stage_engines.jpg')";
}

function landLeg(){
	document.getElementById("oView").style.color='gray';
	document.getElementById("Eng").style.color='gray';
	document.getElementById("landLeg").style.color='white';
	document.getElementById('div3_text').innerHTML = 
		"The Falcon 9 first stage is equipped with four landing legs made of state-of-the-art carbon fiber with aluminum honeycomb."+
		"Placed symmetrically around the base of the rocket, they are stowed at the base of the vehicle and deploy just prior to landing."+
		"Learn more about SpaceX reusability ";
	document.getElementById('div_3').style.backgroundImage="url('falcon9_media/first_stage_landing_legs')";
}