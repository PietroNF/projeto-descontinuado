

function iframeshow(){
    let iframes= document.querySelector('.iframe');{


       if (iframes.classList.contains('abrir')) {
          
         
         
          document.querySelector('iframe').src = "https://sinalpublico.com/player3/ch.php?canal=sportv1"
     

       
} else {
          iframes.classList.add('abrir');
   document.querySelector('iframe').src = "https://sinalpublico.com/player3/ch.php?canal=sportv1";
  
       }    
    }
 
 }
    












 function iframeshow2(){
    let iframes= document.querySelector('.iframe');{


       if (iframes.classList.contains('abrir-2')) {
          
 

       
} else {
          iframes.classList.add('abrir-2');
   document.querySelector('iframe').src = "https://sinalpublico.com/player3/ch.php?canal=sportv2" ;
  

       }    
    }
 
 }
    









 function iframeshow3(){
    let iframes= document.querySelector('.iframe');{
       if (iframes.classList.contains('abrir-3')) {
          document.querySelector('iframe').src= "https://sinalpublico.com/player3/ch.php?canal=sportv1"
    
       
} else {
          iframes.classList.add('abrir-3');
   document.querySelector('iframe').src = "https://sinalpublico.com/player3/ch.php?canal=sportv3"
   
   

       }    
    }
 
 }
    




