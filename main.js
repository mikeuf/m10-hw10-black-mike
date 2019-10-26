// It is always helpful to use comments in your code!

const Temperatures = {
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


getBoilingTemp(Temperatures.BOILING_POINT);
getFreezingTemp(Temperatures.FREEZING_POINT);

