console.log('view연결완료');

const ViewList = () => {
  console.log(data);
  for (i = 0; i < data.length; i++) {
    var parent = document.getElementById('List');
    var customElement = createCustomElement(data[i]);
    parent.appendChild(customElement);
  }
};

const ViewDelList = () => {
  console.log(DelData);
  for (i = 0; i < DelData.length; i++) {
    var parent = document.getElementById('List');
    var customElement = createCustomElement(DelData[i]);
    parent.appendChild(customElement);
  }
};
