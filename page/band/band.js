

function iframeshow(){
    let iframes= document.querySelector('.iframe');{


       if (iframes.classList.contains('abrir')) {
          
         document.querySelector('iframe').src = "https://sinalpublico.com/player3/ch.php?canal=band";
         document.querySelector('iframe').src ="https://sinalpublico.com/player3/ch.php?canal=bandsports" 
      
     

       
} else {
          iframes.classList.add('abrir');
   document.querySelector('iframe').src = "https://sinalpublico.com/player3/ch.php?canal=band";
  
       }    
    }
 
 }
    












 function iframeshow2(){
    let iframes= document.querySelector('.iframe');{


       if (iframes.classList.contains('abrir-2')) {
          
 

       
} else {
          iframes.classList.add('abrir-2');
   document.querySelector('iframe').src ="https://sinalpublico.com/player3/ch.php?canal=bandsports" ;
  

       }    
    }
 
 }
    









    




