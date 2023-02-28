
const root = document.getElementById('root');
const Texts = {
title : "lorem ipsum",
paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
color : ["#1E1E1E","#FFFFFF"],
}
function maker(tagName,textNode){
    const element = document.createElement(tagName);
    element.innerText=textNode;
    return element;
    }
//maker 로 div 3개 만듦
let headerDiv =root.appendChild(maker("div",Texts.title));
let mainDiv=root.appendChild(maker("div",Texts.paragraph));
let footDiv=root.appendChild(maker("div",""));
//각 css 작성
root.style.cssText='width:430px;height:932px;'
headerDiv.style.cssText='position: absolute;width: 147px;height: 29px;left:141px; top:301px; font-style: normal;font-weight: 400;font-size: 24px;line-height: 29px;color: #000000;'
mainDiv.style.cssText='position: absolute;width: 295px;height: 186px;left: 67px;top: 364px;font-style: normal;font-weight: 400;font-size: 12px;line-height: 15px;text-align: justify;color: #000000;'
footDiv.style.cssText='position: absolute;width: 82px;height: 82px;left: 174px;top: 673px;background: #5A5A5A;border-radius: 41px;'

//root 글자색 바꾸는 함수
function rootSetColor(color){
    document.getElementById('root').style.color = color;
    }

//root 배경색 바꾸는 함수
function BodySetBackgroundColor(color){
    document.querySelector('root').style.backgroundColor = color;
    }
//핸들러
function day_night_handler(self) {
    var target = document.querySelector('body');
        if (self.value == 'day') {
            BodySetBackgroundColor('#1E1E1E');
            BodySetColor('white');
            self.value = 'night';
        }
        else {
            BodySetBackgroundColor('white');
            BodySetColor('black');
            self.value = 'day';
            }
        }

footDiv.addEventListener("click", function(){
    BodySetBackgroundColor('#1E1E1E');
            BodySetColor('white');
    });

