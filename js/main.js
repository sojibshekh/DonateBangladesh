document.getElementById('donate-btn-1').addEventListener('click',function(event){
    event.preventDefault();

   const donateAmount =getInputValueById('donate-input-1');
   const campaignAllAmount1 =getTextValueById('campaign-all-amount-1');
   const campaignTitle = getTitleById('campain-title-1');

   const balance = getTextValueById('net-balance');

   if(isNaN(donateAmount)){
    alert('Please Donate a taka');
    return;
  }

   if(balance < donateAmount){
    alert("your balance is insufficient");
    return;
   }

   const campaignNewAmount = donateAmount + campaignAllAmount1;
   const newBalance = balance - donateAmount;
   
   document.getElementById('campaign-all-amount-1').innerText = campaignNewAmount;
   document.getElementById('net-balance').innerText = newBalance;
    const datenow = new Date();
   const div = document.createElement('div');
   div.innerHTML= `<div class="border  border-base-200 rounded-lg p-5 my-3"> 
          <h2 class="text-2xl">${donateAmount} Taka is donate for ${campaignTitle}</h2>
          <p>Date: ${datenow}</p>
   </div> `;
   document.getElementById('all-history').appendChild(div);

   my_modal_5.showModal();


})