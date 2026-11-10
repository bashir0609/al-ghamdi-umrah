(function(){
var d=document.getElementById('qd');
try{d.min=new Date().toISOString().slice(0,10);}catch(e){}
document.getElementById('qs').addEventListener('click',function(){
var n=document.getElementById('qn').value.trim();
var i=document.getElementById('qi').value.replace(/\D/g,'');
if(!n){document.getElementById('qn').focus();return;}
if(i.length!==10){document.getElementById('qi').focus();alert('Please enter your 10-digit Iqama number.');return;}
var t='Assalamu alaikum, I would like to enquire about a trip with Al Ghamdi Umrah Service.\n'+
'Name: '+n+'\n'+
'Passengers: '+document.getElementById('qp').value+'\n'+
'Iqama no: '+i+'\n'+
'Travel date: '+(d.value||'Not decided')+'\n'+
'Details: '+(document.getElementById('qm').value.trim()||'None');
window.open('https://wa.me/966543868605?text='+encodeURIComponent(t),'_blank');
});
})();
