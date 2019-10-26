// It is always helpful to use comments in your code!

const TemperatureStandards = {
  BOILING_POINT: '212',
  FREEZING_POINT:'32'
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


function setTemp() { 
  console.log('setTemp()');
const inputTemp = document.getElementById('input-temp').value;
  const spanWaterTemp = document.getElementById('water-temp');
  const textNode = document.createTextNode(inputTemp);
  spanWaterTemp.appendChild(textNode);
}


function addEventClick(element) {
element.addEventListener('click', setTemp);
}

getBoilingTemp(TemperatureStandards.BOILING_POINT);
getFreezingTemp(TemperatureStandards.FREEZING_POINT);

addEventClick(document.getElementById('button-submit-input-temp'));

