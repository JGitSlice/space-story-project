function repairShip(){
    document.getElementById("story").innerHTML = `
        Repairing Ship:<br><br>
        You repaired the engine and power slowly returned to the ship.<br>
        The navigation system detected a mysterious planet nearby.<br>
        The control panels flickered back online after the repair.<br>
        A warning message appeared: Unknown lifeform detected.
    `
    document.getElementById("button1").innerText = "Land On Planet";
    document.getElementById("button2").innerText = "Scan Lifeform";
    
    document.getElementById("button1").onclick = landOnPlanet;
    document.getElementById("button2").onclick = scanLifeForm;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/repairShip.jpg)"

}

function sendSignal(){
    document.getElementById("story").innerHTML = `
        Sending a Signal:<br><br>
        A strange alien signal responded from somewhere beyond the asteroid field.<br>
        The ship’s screens flickered with symbols no human had ever seen before.<br>
        Suddenly, the radar detected an unknown spacecraft approaching rapidly.<br>
        A voice echoed through the cockpit: “You are not alone.”
    `
    document.getElementById("button1").innerText = "Follow The Signal";
    document.getElementById("button2").innerText = "Hide The Ship";

    document.getElementById("button1").onclick = followTheSignal;
    document.getElementById("button2").onclick = hideTheShip;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/sendSignal.jpeg)";

}

function landOnPlanet(){
    document.getElementById("story").innerHTML = `
        Landing on Planet:<br><br>
        The ship descended through thick purple clouds onto the unknown planet.<br>
        Strange glowing plants surrounded the landing area in complete silence.<br>
        Your scanners detected abandoned structures buried beneath the surface.<br>
        Suddenly, distant footsteps echoed outside the ship.
    `
    document.getElementById("button1").innerText = "Explore Ruins";
    document.getElementById("button2").innerText = "Return To Ship";
    
    document.getElementById("button1").onclick = exploreRuins;
    document.getElementById("button2").onclick = returnToShip;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/landOnPlanet.jpg)";

}

function scanLifeForm(){
    document.getElementById("story").innerHTML = `
        Scanning Lifeform:<br><br>
        The scanners locked onto the unidentified lifeform moving near the ship.<br>
        Its heartbeat pattern did not match any known species in the database.<br>
        A distorted transmission began repeating from the dark side of the planet.<br>
        Then the radar suddenly showed multiple lifeforms approaching rapidly.
    `
    document.getElementById("button1").innerText = "Track Signal";
    document.getElementById("button2").innerText = "Prepare Weapons";
    
    document.getElementById("button1").onclick = trackSignal;
    document.getElementById("button2").onclick = prepareWeapons;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/scanLife.png)";

}

function followTheSignal(){
    document.getElementById("story").innerHTML = `
        Following the Signal:<br><br>
        You adjusted the ship’s course and followed the mysterious transmission deeper into space.<br>
        A massive abandoned station slowly emerged from the darkness ahead.<br>
        The signal suddenly became clearer, repeating coordinates from inside the station.<br>
        Then the ship’s power briefly shut down without warning.
    `
    document.getElementById("button1").innerText = "Dock At Station";
    document.getElementById("button2").innerText = "Restore Power";
    
    document.getElementById("button1").onclick = dockAtStation;
    document.getElementById("button2").onclick = restorePower;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/followingSignal.jpg)";

}

function hideTheShip(){
    document.getElementById("story").innerHTML = `
        Hiding the Ship:<br><br>
        You powered down the engines and drifted silently through the asteroid field.<br>
        The unknown spacecraft passed nearby, scanning the surrounding debris.<br>
        For a moment, the radar went completely dark across the entire ship.<br>
        Then a faint knocking sound echoed from the cargo bay below.
    `
    document.getElementById("button1").innerText = "Investigate Cargo Bay";
    document.getElementById("button2").innerText = "Remain Silent";
    
    document.getElementById("button1").onclick = investigateCargoBay;
    document.getElementById("button2").onclick = remainSilent;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/hideShip.webp)";

}

function exploreRuins(){

    document.getElementById("story").innerHTML = `
        Exploring The Ruins:<br><br>
        You entered the ancient ruins buried beneath the planet’s surface.<br>
        Strange blue symbols glowed faintly across the cracked stone walls.<br>
        Deep inside the structure, a massive sealed doorway slowly began opening.<br>
        Then your flashlight revealed movement in the darkness ahead.
    `

    document.getElementById("button1").innerText = "Enter The Doorway";
    document.getElementById("button2").innerText = "Hide In Shadows";

    document.getElementById("button1").onclick = enterDoorway;
    document.getElementById("button2").onclick = hideInShadows;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/exploreTheRuins.jpg)";
}

function returnToShip(){

    document.getElementById("story").innerHTML = `
        Returning To Ship:<br><br>
        You rushed back toward the ship as the distant noises grew louder behind you.<br>
        The landing area was now covered in thick fog from an approaching storm.<br>
        Warning alarms suddenly activated across the ship’s exterior sensors.<br>
        An unidentified object was detected moving beneath the spacecraft.
    `

    document.getElementById("button1").innerText = "Inspect Beneath Ship";
    document.getElementById("button2").innerText = "Take Off Immediately";

    document.getElementById("button1").onclick = inspectShip;
    document.getElementById("button2").onclick = takeOff;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/returnToShip.jpg)";
}

function trackSignal(){

    document.getElementById("story").innerHTML = `
        Tracking Signal:<br><br>
        The ship followed the distorted transmission toward a hidden canyon on the planet.<br>
        Ancient alien symbols began appearing across the navigation screens.<br>
        A massive underground structure was detected beneath the rocky surface.<br>
        Suddenly, the signal stopped and complete silence filled the ship.
    `

    document.getElementById("button1").innerText = "Enter The Structure";
    document.getElementById("button2").innerText = "Return To The Ship";

    document.getElementById("button1").onclick = enterStructure;
    document.getElementById("button2").onclick = returnToShip;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/trackSignal.png)";
}

function prepareWeapons(){

    document.getElementById("story").innerHTML = `
        Preparing Weapons:<br><br>
        You activated the ship’s defense systems and armed the plasma cannons.<br>
        Warning alarms echoed through the halls as the lifeforms surrounded the ship.<br>
        One of the creatures suddenly slammed against the cockpit window.<br>
        Emergency power levels began dropping rapidly across the spacecraft.
    `

    document.getElementById("button1").innerText = "Fire Warning Shot";
    document.getElementById("button2").innerText = "Seal The Cockpit";

    document.getElementById("button1").onclick = fireWarningShot;
    document.getElementById("button2").onclick = sealCockpit;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/prepareWeapons.png)";
}

function dockAtStation(){

    document.getElementById("story").innerHTML = `
        Docking At Station:<br><br>
        The ship slowly connected to the abandoned station through a damaged airlock.<br>
        Emergency lights flickered across the empty metal corridors inside.<br>
        Strange claw marks covered the walls near the control center entrance.<br>
        Then a loud metallic sound echoed from deeper within the station.
    `

    document.getElementById("button1").innerText = "Explore The Corridor";
    document.getElementById("button2").innerText = "Return To Ship";

    document.getElementById("button1").onclick = exploreCorridor;
    document.getElementById("button2").onclick = returnToShip;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/dockAtStation.jpg)";
}

function restorePower(){

    document.getElementById("story").innerHTML = `
        Restoring Power:<br><br>
        You rerouted emergency energy to the ship’s main systems.<br>
        The control panels slowly flickered back online across the cockpit.<br>
        A hidden transmission was suddenly detected coming from the abandoned station.<br>
        The message repeated only one sentence: “Do not enter.”
    `

    document.getElementById("button1").innerText = "Ignore Warning";
    document.getElementById("button2").innerText = "Leave The Area";

    document.getElementById("button1").onclick = ignoreWarning;
    document.getElementById("button2").onclick = leaveArea;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/restorePower.jpg)";
}

function investigateCargoBay(){

    document.getElementById("story").innerHTML = `
        Investigating Cargo Bay:<br><br>
        You slowly opened the cargo bay doors while the knocking continued in the darkness.<br>
        Several storage containers had been torn apart from the inside.<br>
        A trail of glowing green liquid led toward the ventilation system above.<br>
        Suddenly, the motion sensors detected movement directly behind you.
    `

    document.getElementById("button1").innerText = "Chase The Creature";
    document.getElementById("button2").innerText = "Seal Cargo Bay";

    document.getElementById("button1").onclick = chaseCreature;
    document.getElementById("button2").onclick = sealCargoBay;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/cargoBay.jpg)";
}

function remainSilent(){

    document.getElementById("story").innerHTML = `
        Remaining Silent:<br><br>
        You stayed completely silent as the unknown ship drifted nearby in the darkness.<br>
        The radar suddenly picked up encrypted transmissions between multiple vessels.<br>
        One of the enemy scans briefly locked onto your hidden spacecraft.<br>
        Then the entire asteroid field began shaking violently around you.
    `

    document.getElementById("button1").innerText = "Escape The Field";
    document.getElementById("button2").innerText = "Continue Hiding";

    document.getElementById("button1").onclick = escapeField;
    document.getElementById("button2").onclick = continueHiding;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/remainSilent.jpg)";
}

function enterDoorway(){

    document.getElementById("story").innerHTML = `
        Entering The Doorway:<br><br>
        The massive stone doorway slowly opened into a glowing underground chamber.<br>
        Ancient alien machines hummed softly beneath layers of dust and sand.<br>
        A floating crystal at the center of the room began reacting to your presence.<br>
        Then a holographic map of the galaxy appeared before your eyes.
    `

    document.getElementById("button1").innerText = "Touch The Crystal";
    document.getElementById("button2").innerText = "Download Star Map";

    document.getElementById("button1").onclick = goodEnding;
    document.getElementById("button2").onclick = goodEnding;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/enterDoorway.jpg)";
}

function hideInShadows(){

    document.getElementById("story").innerHTML = `
        Hiding In Shadows:<br><br>
        You quietly hid behind the ruined pillars as footsteps echoed closer.<br>
        A tall alien figure slowly walked through the chamber carrying strange technology.<br>
        The creature paused for a moment as if it sensed your presence nearby.<br>
        Then the entire structure suddenly began collapsing around you.
    `

    document.getElementById("button1").innerText = "Run For Exit";
    document.getElementById("button2").innerText = "Reveal Yourself";

    document.getElementById("button1").onclick = escapeEnding;
    document.getElementById("button2").onclick = badEnding;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/hideInShadows.png)";
}

function inspectShip(){

    document.getElementById("story").innerHTML = `
        Inspecting Beneath Ship:<br><br>
        You carefully stepped beneath the spacecraft while the storm intensified overhead.<br>
        Deep claw marks covered the landing gear near the engine compartment.<br>
        Something large suddenly moved beneath the fog beside the ship.<br>
        The ground started shaking as glowing eyes appeared in the darkness.
    `

    document.getElementById("button1").innerText = "Fight Creature";
    document.getElementById("button2").innerText = "Retreat To Ship";

    document.getElementById("button1").onclick = badEnding;
    document.getElementById("button2").onclick = takeOff;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/inspectShip.jpg)";
}

function takeOff(){

    document.getElementById("story").innerHTML = `
        Escaping Planet:<br><br>
        The ship engines roared back to life as you escaped the dangerous planet.<br>
        Below you, the ancient ruins slowly disappeared beneath thick storm clouds.<br>
        Although many mysteries remained unsolved, you survived the encounter.<br>
        Your next journey through the galaxy had only just begun.
    `

    document.getElementById("button1").innerText = "Continue Journey";
    document.getElementById("button2").innerText = "End Adventure";

    document.getElementById("button1").onclick = goodEnding;
    document.getElementById("button2").onclick = endGame;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/takeOff.jpg)";
}

function enterStructure(){

    document.getElementById("story").innerHTML = `
        Entering Structure:<br><br>
        You entered the hidden structure beneath the canyon in complete silence.<br>
        Massive alien machines surrounded a glowing energy core in the center.<br>
        The control systems suddenly activated as the signal recognized your presence.<br>
        Then a hidden star gate slowly opened before the ship.
    `

    document.getElementById("button1").innerText = "Enter Star Gate";

    document.getElementById("button2").innerText = "Activate Core";

    document.getElementById("button1").onclick = goodEnding;
    document.getElementById("button2").onclick = secretEnding;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/enterStructure.jpg)";
}

function fireWarningShot(){

    document.getElementById("story").innerHTML = `
        Warning Shot Fired:<br><br>
        The plasma cannons fired bright energy blasts across the dark landscape.<br>
        The approaching creatures suddenly stopped moving near the ship.<br>
        One massive lifeform slowly emerged from the shadows beyond the storm.<br>
        Then your weapon systems completely overheated.
    `

    document.getElementById("button1").innerText = "Escape Immediately";
    document.getElementById("button2").innerText = "Stand Your Ground";

    document.getElementById("button1").onclick = takeOff;
    document.getElementById("button2").onclick = badEnding;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/fireWarningShot.jpg)";
}

function sealCockpit(){

    document.getElementById("story").innerHTML = `
        Sealing Cockpit:<br><br>
        Heavy security doors locked across the cockpit as emergency alarms echoed loudly.<br>
        The creatures continued striking the ship from outside in the darkness.<br>
        Oxygen reserves began falling while the power systems weakened rapidly.<br>
        Then the emergency communication channel suddenly activated by itself.
    `

    document.getElementById("button1").innerText = "Answer Transmission";
    document.getElementById("button2").innerText = "Shut Down Systems";

    document.getElementById("button1").onclick = secretEnding;
    document.getElementById("button2").onclick = badEnding;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/sealCockpit.jpg)";
}

function exploreCorridor(){

    document.getElementById("story").innerHTML = `
        Exploring Corridor:<br><br>
        You followed the dim emergency lights deeper into the abandoned station.<br>
        Frozen bodies floated silently through the damaged hallways around you.<br>
        A secure laboratory door suddenly opened at the end of the corridor.<br>
        Inside, a strange glowing artifact rested on a metal platform.
    `

    document.getElementById("button1").innerText = "Take Artifact";
    document.getElementById("button2").innerText = "Leave Station";

    document.getElementById("button1").onclick = secretEnding; 
    document.getElementById("button2").onclick = goodEnding;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/exploreCorridor.jpg)";
}

function ignoreWarning(){

    document.getElementById("story").innerHTML = `
        Ignoring Warning:<br><br>
        You ignored the mysterious warning and entered the abandoned station carefully.<br>
        Strange alien symbols illuminated the dark walls around the control room.<br>
        The station’s systems suddenly recognized your ship and restored full power.<br>
        Then a hidden transmission revealed coordinates to an unknown galaxy.
    `

    document.getElementById("button1").innerText = "Follow Coordinates";
    document.getElementById("button2").innerText = "Destroy Transmission";

    document.getElementById("button1").onclick = secretEnding;
    document.getElementById("button2").onclick = goodEnding;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/ignoreWarnings.jpg)";
}

function leaveArea(){

    document.getElementById("story").innerHTML = `
        Leaving Area:<br><br>
        You turned the ship away from the station and escaped into open space.<br>
        The mysterious signal slowly faded behind you among the distant stars.<br>
        Although the truth remained unknown, the danger was finally over.<br>
        Your ship safely continued its lonely journey across the galaxy.
    `

    document.getElementById("button1").innerText = "Continue Exploring";
    document.getElementById("button2").innerText = "End Mission";

    document.getElementById("button1").onclick = goodEnding;
    document.getElementById("button2").onclick = endGame;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/leaveArea.jpg)";
}

function goodEnding(){

    document.getElementById("story").innerHTML = `
        GOOD ENDING:<br><br>
        Your decisions led humanity to one of the greatest discoveries in history.<br>
        Ancient alien technology opened new paths across the stars for future explorers.<br>
        The mysteries of the galaxy were no longer hidden from mankind.<br>
        Captain, your name would be remembered forever among the stars.
    `

    document.getElementById("button1").innerText = "Play Again";
    document.getElementById("button2").innerText = "End Game";

    document.getElementById("button1").onclick = function () {
        window.location.reload();
    };
    document.getElementById("button2").onclick = endGame;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/goodEnding.jpg)";
}

function chaseCreature(){

    document.getElementById("story").innerHTML = `
        Chasing The Creature:<br><br>
        You followed the strange creature through the narrow ventilation tunnels.<br>
        The lights flickered as distant screeches echoed around the ship.<br>
        Suddenly, the creature disappeared inside an abandoned maintenance room.<br>
        Inside the room, you discovered stolen alien technology glowing brightly.
    `

    document.getElementById("button1").innerText = "Take Technology";
    document.getElementById("button2").innerText = "Destroy It";

    document.getElementById("button1").onclick = secretEnding;
    document.getElementById("button2").onclick = goodEnding;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/chaseCreature.png)";
}

function sealCargoBay(){

    document.getElementById("story").innerHTML = `
        Sealing Cargo Bay:<br><br>
        Heavy metal doors slammed shut across the cargo section of the ship.<br>
        Loud banging continued from inside while warning lights flashed red.<br>
        The lifeform was trapped, but the ship’s oxygen systems were damaged.<br>
        Emergency systems suggested abandoning the lower deck immediately.
    `

    document.getElementById("button1").innerText = "Evacuate Deck";
    document.getElementById("button2").innerText = "Open Cargo Bay";

    document.getElementById("button1").onclick = goodEnding;
    document.getElementById("button2").onclick = badEnding;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/sealCargoBay.webp)";
}

function escapeField(){

    document.getElementById("story").innerHTML = `
        Escaping The Field:<br><br>
        You accelerated through the collapsing asteroid field at maximum speed.<br>
        Massive rocks crashed together as explosions lit up the darkness behind you.<br>
        The enemy vessels lost track of your ship during the chaos.<br>
        At last, open space appeared ahead of the damaged spacecraft.
    `

    document.getElementById("button1").innerText = "Continue Journey";
    document.getElementById("button2").innerText = "Search Nearby System";

    document.getElementById("button1").onclick = goodEnding;
    document.getElementById("button2").onclick = secretEnding;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/escapeField.jpg)";
}

function continueHiding(){

    document.getElementById("story").innerHTML = `
        Continuing To Hide:<br><br>
        You remained hidden while the enemy ships slowly surrounded the asteroid field.<br>
        Strange scanning beams moved across nearby rocks searching for survivors.<br>
        One vessel suddenly stopped directly beside your powerless spacecraft.<br>
        Then the cockpit lights shut off completely without explanation.
    `

    document.getElementById("button1").innerText = "Restart Systems";
    document.getElementById("button2").innerText = "Stay Silent";

    document.getElementById("button1").onclick = escapeEnding;
    document.getElementById("button2").onclick = badEnding;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/continueHiding.jpg)";
}

function secretEnding(){

    document.getElementById("story").innerHTML = `
        SECRET ENDING:<br><br>
        The ancient alien systems accepted you as their new commander.<br>
        Hidden gateways across the galaxy awakened one after another.<br>
        Humanity discovered civilizations far beyond the known universe.<br>
        But deep in space, something far older had also begun to awaken.
    `

    document.getElementById("button1").innerText = "Play Again";
    document.getElementById("button2").innerText = "End Game";

    document.getElementById("button1").onclick = function () {
        window.location.reload();
    };
    document.getElementById("button2").onclick = endGame;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/secretEnding.jpg)";
}

function badEnding(){

    document.getElementById("story").innerHTML = `
        BAD ENDING:<br><br>
        Your final decision doomed the mission and the ship was lost in deep space.<br>
        The mysterious alien force consumed everything aboard the spacecraft.<br>
        No rescue signal ever returned to Earth from your expedition.<br>
        The galaxy kept its secrets hidden forever in the darkness.
    `

    document.getElementById("button1").innerText = "Try Again";
    document.getElementById("button2").innerText = "End Game";

    document.getElementById("button1").onclick = function () {
        window.location.reload();
    };
    document.getElementById("button2").onclick = endGame;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/badEnding.webp)";
}

function escapeEnding(){

    document.getElementById("story").innerHTML = `
        ESCAPE ENDING:<br><br>
        Against all odds, you escaped the danger and survived the mission.<br>
        Although many mysteries remained unsolved, your crew made it home safely.<br>
        Scientists across Earth studied the strange data collected during the journey.<br>
        Somewhere in deep space, the unknown signal still continued broadcasting.
    `

    document.getElementById("button1").innerText = "Play Again";
    document.getElementById("button2").innerText = "End Game";

    document.getElementById("button1").onclick = function () {
        window.location.reload();
    };
    document.getElementById("button2").onclick = endGame;

    document.getElementById("img-card").style.backgroundImage = "url(./assets/escapeEnding.jpg)";
}

function endGame(){

    document.getElementById("story").innerHTML = `
        GAME OVER<br><br>
        Thank you for playing Space Adventure.
    `

    document.getElementById("button1").onclick = function () {
        window.location.reload();
    };
    document.getElementById("button2").style.display = "none";

    document.getElementById("img-card").style.backgroundImage = "url(./assets/endGame.jpg)";
}

function goToMenu(){
    window.location.href = "index.html";
}

function goToStory(){
    window.location.href = "story.html";
}