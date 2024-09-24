function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function getTitleById(id){
    const textTitle = document.getElementById(id).innerText;
    return textTitle;
}


function showSEctionById(id,btn){
    document.getElementById('campaign').classList.add('hidden');
    document.getElementById('all-history').classList.add('hidden');

    document.getElementById('donation-btn').classList.remove('bg-active');
    document.getElementById('history-btn').classList.remove('bg-active');
    document.getElementById(btn).classList.add('bg-active');
    document.getElementById(id).classList.remove('hidden');
  
  }