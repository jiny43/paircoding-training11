const Training = {
  title : "lorem ipsum",
  paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  color : ["#1E1E1E","#FFFFFF"],
  }

function elementMaker(tagName, setAttriName, setAttriValue, parent){
  const elementMake = document.createElement(tagName);
  elementMake.setAttribute(setAttriName,setAttriValue);
  parent.appendChild(elementMake);
}


for(let i = 0; i < 2; i++){
  elementMaker("main","id", `section-${i+1}`,root);
}

const sec1 = document.getElementById('section-1');
const sec2 = document.getElementById('section-2');
elementMaker("div", "id","box", sec1);
elementMaker("p", "id","paragraph", sec1);
elementMaker("div", "id","cycle", sec2);

const box = document.getElementById('box');
const paragraph = document.getElementById('paragraph');
const cycle = document.getElementById('cycle');

const title = document.createElement('p');
box.appendChild(title);

cycle.addEventListener('click', whiteMode);
function whiteMode(){
  function maker(tagName,textNode){
    const element = document.createElement(tagName);
    element.innerText=textNode;
    return element;
    }

let headerDiv =root.appendChild(maker("div",Texts.title));
let mainDiv=root.appendChild(maker("div",Texts.paragraph));
let footDiv=root.appendChild(maker("div",""));

root.style.cssText='width:430px;height:932px;'
headerDiv.style.cssText='position: absolute;width: 147px;height: 29px;left:141px; top:301px; font-style: normal;font-weight: 400;font-size: 24px;line-height: 29px;color: #000000;'
mainDiv.style.cssText='position: absolute;width: 295px;height: 186px;left: 67px;top: 364px;font-style: normal;font-weight: 400;font-size: 12px;line-height: 15px;text-align: justify;color: #000000;'
footDiv.style.cssText='position: absolute;width: 82px;height: 82px;left: 174px;top: 673px;background: #5A5A5A;border-radius: 41px;'
  console.log(":)");
};

//엘리먼트들 스타일 지정//
title.textContent = Training.title;
paragraph.textContent = Training.paragraph;

root.style.width = "430px";
root.style.height = "932px";
root.style.backgroundColor = "#383838";
root.style.display = "flex";
root.style.flexDirection = "column";
root.style.justifyContent = "center";
root.style.alignItems = "center";


sec1.style.width = "295px";
sec1.style.height = "450px";
sec1.style.textAlign = "center";
sec1.style.display = "flex";
sec1.style.flexDirection = "column";
sec1.style.justifyContent = "center";
sec1.style.alignItems = "center";

sec2.style.width = "295px";
sec2.style.height = "382px";
sec2.style.display = "flex";
sec2.style.justifyContent = "center";
// sec2.style.alignItems = "center";

box.style.width = "199px";
box.style.borderBottom = "2px solid white"
box.style.marginBottom = "22px";

title.style.color="white";
title.style.fontSize = "24px"
title.style.marginBottom = "10px";

paragraph.style.color = "white";
paragraph.style.fontWeight = "400";
paragraph.style.width = "100%"
paragraph.style.height = "186px"
paragraph.style.lineHeight = "14.5px";
paragraph.style.fontSize = "12px";

cycle.style.width = "82px";
cycle.style.height = "82px";
cycle.style.borderRadius = "42px";
cycle.style.backgroundColor = "white";
//------------------------------------------
