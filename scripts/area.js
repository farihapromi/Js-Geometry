function calculateTriangleArea(){
    const baseField=document.getElementById('triangle-base');
    const baseValueString=baseField.value;
    const basevalue=parseFloat(baseValueString)

    const heightField=document.getElementById('triangle-height');
    const heightValueString=heightField.value ;
    const heightValue=parseFloat(heightValueString);
    const area=0.5*basevalue*heightValue;
    console.log(area);

    //show traingle area
    const areaSpan=document.getElementById('triangle-area');
    areaSpan.innerText=area;
    // console.log(areaSpan)
}

function calculateParallelArea(){
    const base=getInputValue('para-width');
    console.log(base)
  
    const length=getInputValue('para-length')
    console.log(length)
    if(isNaN(length)){
        console.log('not a num');
        return;
    }
  const area=base*length
    console.log(area)
    setElementInnerext('parallelogram-area',area)

    addToCalculationEntry('Parallelogram',area);
}
function getInputValue(fieldId){
    const inputField=document.getElementById(fieldId);
    const inputValueText=inputField.value;
    const myvalue=parseFloat(inputValueText);
    return myvalue;
}


// for area er text
function setElementInnerext(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;

}

//add to calualtaion entry
// 1.get the eleemtn where u want to dynamuc html


function addToCalculationEntry(areaType,area){
    const calculationEntry=document.getElementById('calculation-entry');
    const p=document.createElement('p');
    p.innerText= `${areaType} ${area} cm<sup>2</sup> 
    <button class='btn btn-success'>Convert</button>`
    calculationEntry.appendChild(p);

}