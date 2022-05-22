let btn = document.querySelector('button');

btn.onclick = function(){
    let input1 = document.createElement('input');
    input1.type = "checkbox";
    input1.id = "ch"
    input1.onclick = function(){
        bigBox.removeChild(box);
        box.removeChild(span);
        box.removeChild(input1)
    }
    let text = document.getElementById('Text').value;
    let span = document.createElement('span');
    let bigBox = document.getElementById('bigBox');
    let box = document.createElement('div');
    box.className = 'box';

    // console.log(span);
    span.innerText = text;
    bigBox.appendChild(box);
    box.appendChild(input1);
    box.appendChild(span);
}
let text = document.getElementById("Text");
text.onfocus = function(){
    if(text.value === "请输入今天的计划")
    {
    text.value = ""
    }
}
text.onblur = function(){
    if(text.value === "")
{
    text.value = "请输入今天的计划"
}
}