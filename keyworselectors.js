





const container = document.getElementById('keywordselectors');

// Create the main card structure
const cardHTML = `

  


<div class="flex-container-dropdown">




<input type="button" name="" class="Keywords_Types" value=" Electrical System "></input>

<button id="kwd_selector" type="button" onClick="document.search.text.value+='Undercharging'">Undercharging</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Overcharging'">Overcharging</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Battery Requires Excessive Amounts of Water'">Battery Requires Excessive Amounts of Water</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Battery will not Charge'">Battery will not Charge</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Starter Motor does not Operate'">Starter Motor does not Operate</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Misses Regularly'">Engine Misses Regularly</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Single Cylinder Miss at High Speed'">Single Cylinder Miss at High Speed</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Single Cylinder Miss at Low Speed'">Single Cylinder Miss at Low Speed</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Causes of Pre-Ignition'">Causes of Pre-Ignition</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Magneto Fails to Deliver any Spark'">Magneto Fails to Deliver any Spark</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Faulty Spark'">Faulty Spark</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Won\'t Stop When Switch is Turned Off'">Engine Won't Stop When Switch is Turned Off</button>

<!-- Existing original items would be here -->

<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Will Not Crank (No Starter Operation)'">Engine Will Not Crank (No Starter Operation)</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Cranks Too Slowly to Start'">Engine Cranks Too Slowly to Start</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Starter Spins, But Engine Will Not Crank'">Starter Spins, But Engine Will Not Crank</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Cranks Slowly'">Engine Cranks Slowly</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='No response from starter when key is turned'">No response from starter when key is turned</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Starter Motor Spins But Does Not Crank Engine'">Starter Motor Spins But Does Not Crank Engine</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Starter Motor Spins But Does Not Stop'">Starter Motor Spins But Does Not Stop</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Cranks Slowly, Does Not Start'">Engine Cranks Slowly, Does Not Start</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Does Not Crank'">Engine Does Not Crank</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Starter Motor Does Not Operate'">Starter Motor Does Not Operate</button>



<input type="button" name="" class="Keywords_Types" value=" Fuel System "></input>


<button id="kwd_selector" type="button" onClick="document.search.text.value+='Difficult Starting or Failure to Start'">Difficult Starting or Failure to Start</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='High Fuel Consumption'">High Fuel Consumption</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Failure of Engine to Start'">Failure of Engine to Start</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Carburetor Leaks Fuel'">Carburetor Leaks Fuel</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Spits Back in Carburetor'">Engine 'Spits Back' in Carburetor</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Mixture Analysis by Exhaust Flame'">Mixture Analysis by Exhaust Flame</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='A Too-Rich Mixture is caused by'">A 'Too-Rich Mixture' may be caused by:</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='A Too-Lean Mixture is caused by'">A 'Too-Lean Mixture' may be caused by:</button>

<!-- Existing original items would be here -->

<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Cranks Normally, Does Not Start'">Engine Cranks Normally, Does Not Start</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Starts, Runs Briefly, and Shuts Down'">Engine Starts, Runs Briefly, and Shuts Down</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Starts Normally, Misfires'">Engine Starts Normally, Misfires</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Fails to Develop Normal Power (Lack or Loss of Power)'">Engine Fails to Develop Normal Power (Lack or Loss of Power)</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Cranks but Does Not Start'">Engine Cranks but Does Not Start</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Fuel Rail Pressure Problem'">Fuel Rail Pressure Problem</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Fuel Consumption Is Excessive'">Fuel Consumption Is Excessive</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Will Not Start But Producing Exhaust Smoke'">Engine Will Not Start But Producing Exhaust Smoke</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Will Not Start and Is Not Producing Exhaust Smoke'">Engine Will Not Start and Is Not Producing Exhaust Smoke</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Cranks Normally, Does Not Start (EMS Sensor or Actuator Failure)'">Engine Cranks Normally, Does Not Start (EMS Sensor or Actuator Failure)</button>


<input type="button" name="" class="Keywords_Types" value=" Exhaust System "></input>


<button id="kwd_selector" type="button" onClick="document.search.text.value+='Causes of Excessive Carbon Deposit'">Causes of Excessive Carbon Deposit</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Excessive Carbon Deposits'">Excessive Carbon Deposits</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='White Exhaust Smoke'">White Exhaust Smoke</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Light Blue Exhaust Smoke'">Light Blue Exhaust Smoke</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Heavy Blue Exhaust Smoke'">Heavy Blue Exhaust Smoke</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Black Exhaust Smoke'">Black Exhaust Smoke</button>

<!-- Existing original items would be here -->

<button id="kwd_selector" type="button" onClick="document.search.text.value+='Black or Dark Gray Exhaust Smoke'">Black or Dark Gray Exhaust Smoke</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='White or Blue Exhaust Smoke'">White or Blue Exhaust Smoke</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Exhaust Has Excessive Black Smoke'">Exhaust Has Excessive Black Smoke</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Black Smoke from Exhaust'">Black Smoke from Exhaust</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='White/Blueish Smoke from Exhaust'">White/Blueish Smoke from Exhaust</button>

<!-- Turbocharger items - placed under Exhaust System per instructions -->
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Lack of Power (Turbocharger Related)'">Lack of Power (Turbocharger Related)</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Oil Leak from Turbocharger'">Oil Leak from Turbocharger</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Turbocharger Noise'">Turbocharger Noise</button>



<input type="button" name="" class="Keywords_Types" value=" Cooling System "></input>

<button id="kwd_selector" type="button" onClick="document.search.text.value+='Coolant Temperature Is High (Overheating)'">Coolant Temperature Is High (Overheating)</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Coolant Temperature is Above Normal (Overheating)'">Coolant Temperature is Above Normal (Overheating)</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Overheats'">Engine Overheats</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='High Cylinder Head Temperature'">High Cylinder Head Temperature</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Radiator Main Fan Does Not Rotate'">Radiator Main Fan Does Not Rotate</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Radiator Main Fan Power Supply OK - Ground Circuit Issue'">Radiator Main Fan Power Supply OK - Ground Circuit Issue</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Radiator Main Fan Connector Contact Issue'">Radiator Main Fan Connector Contact Issue</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Radiator Main Fan Motor Failure'">Radiator Main Fan Motor Failure</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Radiator Main Fan Relay Power Supply Issue'">Radiator Main Fan Relay Power Supply Issue</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Radiator Main Fan Blown 20A Fuse'">Radiator Main Fan Blown 20A Fuse</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Radiator Main Fan Open Circuit in Harness (Main Fuse Box)'">Radiator Main Fan Open Circuit in Harness (Main Fuse Box)</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Radiator Main Fan Blown Fuse No. 18'">Radiator Main Fan Blown Fuse No. 18</button>



<input type="button" name="" class="Keywords_Types" value=" Lubrication System "></input>


<button id="kwd_selector" type="button" onClick="document.search.text.value+='High Oil Temperature'">High Oil Temperature</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Excess Oil Consumption'">Excess Oil Consumption</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Low Oil Pressure'">Low Oil Pressure</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='High Oil Pressure'">High Oil Pressure</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Crankcase Fills with Oil (Dry-sump System)'">Crankcase Fills with Oil (Dry-sump System)</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Pumps Oil'">Engine Pumps Oil</button>

<!-- Existing original items would be here -->


<button id="kwd_selector" type="button" onClick="document.search.text.value+='Low Lubricating Oil Pressure'">Low Lubricating Oil Pressure</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Lubricating Oil Pressure Very Low'">Lubricating Oil Pressure Very Low</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Excessive Oil Consumption'">Excessive Oil Consumption</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Oil Consumption Is Excessive'">Oil Consumption Is Excessive</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Mechanical - Excessive Oil Consumption'">Engine Mechanical - Excessive Oil Consumption</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='High Oil Temperature'">High Oil Temperature</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Low Oil Pressure'">Low Oil Pressure</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='High Oil Pressure'">High Oil Pressure</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Crankcase Fills with Oil (Dry-sump System)'">Crankcase Fills with Oil (Dry-sump System)</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Pumps Oil'">Engine Pumps Oil</button>



<input type="button" name="" class="Keywords_Types" value=" Mechanical System "></input>

<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Mechanical - Loss of Compression'">Engine Mechanical - Loss of Compression</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Overspeeds'">Engine Overspeeds</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Shutdown Occurs Intermittently'">Engine Shutdown Occurs Intermittently</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Acceleration Is Poor or Throttle Response Is Poor'">Acceleration Is Poor or Throttle Response Is Poor</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Has Mechanical Noise (Knock)'">Engine Has Mechanical Noise (Knock)</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Vibration Is Excessive'">Engine Vibration Is Excessive</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Valve Lash Is Excessive'">Valve Lash Is Excessive</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Misfires, Runs Rough or Is Unstable'">Engine Misfires, Runs Rough or Is Unstable</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Runs Rough or Misfires'">Engine Runs Rough or Misfires</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Knocks'">Engine Knocks</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Vibrates Excessively'">Engine Vibrates Excessively</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Continually Throws Alternator Belt'">Engine Continually Throws Alternator Belt</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Low Power and Uneven Running'">Low Power and Uneven Running</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Failure of Engine to Develop Full Power'">Failure of Engine to Develop Full Power</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Stops'">Engine Stops</button>



<input type="button" name="" class="Keywords_Types" value=" Intake System "></input>

<button id="kwd_selector" type="button" onClick="document.search.text.value+='Failure of Engine to Idle Properly'">Failure of Engine to Idle Properly</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Improper Engine Acceleration'">Improper Engine Acceleration</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Engine Misses Intermittently'">Engine Misses Intermittently</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Scattering Misfire'">Scattering Misfire</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Air Intake Restriction'">Air Intake Restriction</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Mass Air Flow Sensor Issues'">Mass Air Flow Sensor Issues</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Throttle Body Problems'">Throttle Body Problems</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Intake Manifold Leaks'">Intake Manifold Leaks</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Variable Intake Manifold Problems'">Variable Intake Manifold Problems</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Air Intake Temperature Sensor Issues'">Air Intake Temperature Sensor Issues</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Throttle Position Sensor Problems'">Throttle Position Sensor Problems</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Charge Air Cooler (Intercooler) Issues'">Charge Air Cooler (Intercooler) Issues</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Turbocharger Intake Air Problems'">Turbocharger Intake Air Problems</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Intake System Ambient Air Issues'">Intake System Ambient Air Issues</button>
<button id="kwd_selector" type="button" onClick="document.search.text.value+='Intake System Exhaust Gas Recirculation Issues'">Intake System Exhaust Gas Recirculation Issues</button>



`;

// Append the card content to the container
container.innerHTML = cardHTML;


