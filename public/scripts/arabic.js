(function(){
var d=document.getElementById('qd');
if(d){var now=new Date();now.setMinutes(now.getMinutes()-now.getTimezoneOffset());d.min=now.toISOString().slice(0,10);}
var btn=document.getElementById('qs'); if(!btn)return;
btn.addEventListener('click',function(){
 var n=document.getElementById('qn').value.trim();
 var i=document.getElementById('qi').value.replace(/[٠-٩]/g,c=>String('٠١٢٣٤٥٦٧٨٩'.indexOf(c))).replace(/[۰-۹]/g,c=>String('۰۱۲۳۴۵۶۷۸۹'.indexOf(c))).replace(/\D/g,'');
 if(!n){document.getElementById('qn').focus();return;}
 if(i.length!==10){document.getElementById('qi').focus();alert('يرجى إدخال رقم الإقامة المكوّن من ١٠ أرقام.');return;}
 var t='السلام عليكم، أود الاستفسار عن رحلة مع خدمات الغامدي للعمرة.\n'+
 'الاسم: '+n+'\n'+
 'عدد المسافرين: '+document.getElementById('qp').value+'\n'+
 'رقم الإقامة: '+i+'\n'+
 'تاريخ السفر: '+(d.value||'لم يُحدد بعد')+'\n'+
 'تفاصيل إضافية: '+(document.getElementById('qm').value.trim()||'لا يوجد');
 window.open('https://wa.me/966543868605?text='+encodeURIComponent(t),'_blank','noopener,noreferrer');
});
})();
