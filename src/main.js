// It is always helpful to use comments in your code!

const TemperatureStandards = {
  BOILING_POINT: '212',
  FREEZING_POINT: '32'
}

// Update page with constant boiling temp
const getBoilingTemp = (temp) => {
  const spanBoilingTemp = document.getElementById('boiling-temp');
  const textNode = document.createTextNode(temp);  
  spanBoilingTemp.appendChild(textNode);
}

// Update page with constant freezing temp
const getFreezingTemp = (temp) => {
  const spanFreezingTemp = document.getElementById('freezing-temp');
  const textNode = document.createTextNode(temp);  
  spanFreezingTemp.appendChild(textNode);
}

// Determine if user temp is boiling, frozen, or good
const evaluateTemp = (inputTemp) => {
  let status = null;
  if (inputTemp > 212) {
    status = 'boiling';
  } else if (inputTemp < 32) {
    status = 'frozen';
  } else {
    status = 'good-temp';
  }
  showStatus(status);
}

// Display status by adding the .show class for the corresponding section
const showStatus = (status) => {
  resetStatus();
  const sectionStatus = document.getElementById(status);
  sectionStatus.classList.remove('hide');
  sectionStatus.classList.add('show');
}

// Reset all sections to hidden, so only the correct one appears at a time 
function resetStatus () {
  const sectionStatusList = document.getElementsByTagName('footer')[0].childNodes;
  for (var i = 0, len = sectionStatusList.Length; i < len; ++i) {
    if (sectionStatusList[i].classList.contains('show')) {
      sectionStatusList[i].classList.remove('show');
      sectionStatusList[i].classList.add('hide');
    }
  }
}

// Set temp based on user input and then pass it to be evaluated
function setTemp() { 
  const inputTemp = document.getElementById('input-temp').value;
  const spanWaterTemp = document.getElementById('water-temp');
  const textNode = document.createTextNode(inputTemp);
  spanWaterTemp.appendChild(textNode);

  setTimeout(() => {
    evaluateTemp(inputTemp);
  }, 3000);
}

function addEventClick(element) {
  element.addEventListener('click', setTemp);
}

getBoilingTemp(TemperatureStandards.BOILING_POINT);
getFreezingTemp(TemperatureStandards.FREEZING_POINT);

addEventClick(document.getElementById('button-submit-input-temp'));

