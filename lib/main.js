'use strict';

// It is always helpful to use comments in your code!

var TemperatureStandards = {
  BOILING_POINT: '212',
  FREEZING_POINT: '32'

  // Update page with constant boiling temp
};var getBoilingTemp = function getBoilingTemp(temp) {
  var spanBoilingTemp = document.getElementById('boiling-temp');
  var textNode = document.createTextNode(temp);
  spanBoilingTemp.appendChild(textNode);
};

// Update page with constant freezing temp
var getFreezingTemp = function getFreezingTemp(temp) {
  var spanFreezingTemp = document.getElementById('freezing-temp');
  var textNode = document.createTextNode(temp);
  spanFreezingTemp.appendChild(textNode);
};

// Determine if user temp is boiling, frozen, or good
var evaluateTemp = function evaluateTemp(inputTemp) {
  var status = null;
  if (inputTemp > 212) {
    status = 'boiling';
  } else if (inputTemp < 32) {
    status = 'frozen';
  } else {
    status = 'good-temp';
  }
  showStatus(status);
};

// Display status by adding the .show class for the corresponding section
var showStatus = function showStatus(status) {
  resetStatus();
  var sectionStatus = document.getElementById(status);
  sectionStatus.classList.remove('hide');
  sectionStatus.classList.add('show');
};

// Reset all sections to hidden, so only the correct one appears at a time 
function resetStatus() {
  var sectionStatusList = document.getElementsByTagName('footer')[0].childNodes;
  for (var i = 0, len = sectionStatusList.Length; i < len; ++i) {
    if (sectionStatusList[i].classList.contains('show')) {
      sectionStatusList[i].classList.remove('show');
      sectionStatusList[i].classList.add('hide');
    }
  }
}

// Set temp based on user input and then pass it to be evaluated
function setTemp() {
  var inputTemp = document.getElementById('input-temp').value;
  var spanWaterTemp = document.getElementById('water-temp');
  var textNode = document.createTextNode(inputTemp);
  spanWaterTemp.appendChild(textNode);

  setTimeout(function () {
    evaluateTemp(inputTemp);
  }, 3000);
}

function addEventClick(element) {
  element.addEventListener('click', setTemp);
}

getBoilingTemp(TemperatureStandards.BOILING_POINT);
getFreezingTemp(TemperatureStandards.FREEZING_POINT);

addEventClick(document.getElementById('button-submit-input-temp'));
