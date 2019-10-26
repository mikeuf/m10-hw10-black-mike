// It is always helpful to use comments in your code!

const TemperatureStandards = {
  BOILING_POINT: '212',
  FREEZING_POINT: '32'
}

const getBoilingTemp = (temp) => {
  const spanBoilingTemp = document.getElementById('boiling-temp');
  const textNode = document.createTextNode(temp);  
  spanBoilingTemp.appendChild(textNode);
}

const getFreezingTemp = (temp) => {
  const spanFreezingTemp = document.getElementById('freezing-temp');
  const textNode = document.createTextNode(temp);  
  spanFreezingTemp.appendChild(textNode);
}

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

const showStatus = (status) => {
  resetStatus();
  const sectionStatus = document.getElementById(status);
  sectionStatus.classList.remove('hide');
  sectionStatus.classList.add('show');
}

function resetStatus () {
  sectionStatusList = document.getElementsByTagName('footer')[0].childNodes;

  for (var i = 0, len = sectionStatusList.Length; i < len; ++i) {
    if (sectionStatusList[i].classList.contains('show')) {
      sectionStatusList[i].classList.remove('show');
    }
  }
}

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

