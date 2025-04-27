console.log('연결완료');
const data = [1, 2, 3];
const DelList = [11, 22, 33];

const AddViewList = () => {
  console.log(data);
  var parent = document.getElementById('List');
  var length = data.length - 1;
  console.log(length);
  var customElement = createCustomElement(list[length]);
  parent.appendChild(customElement);
};

function createCustomElement(InnerText) {
  var liTag = document.createElement('li');
  liTag.innerHTML = InnerText;

  return liTag;
}
