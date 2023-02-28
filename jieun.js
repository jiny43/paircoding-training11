const root = document.getElementById('root');
const training = {
    title : "lorem ipsum",
    paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    color : ["#1E1E1E","#FFFFFF"],

}

function maker(tagName, setAttriName, setAttriValue, parent){
    const element = document.createElement(tagName);
    element.setAttribute(setAttriName,setAttriValue);
    parent.appendChild(element);
}

function loop(){
    for(let i =0; i<1; I++){
        maker('main','id',`div-${i}`,'root');
    }
}
