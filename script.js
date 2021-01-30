var i = 0;

var txt = "Developer Engineer Translator Designer Freelancer ";

function typeWriter() {
    

    if (i < txt.length) {
    	if(txt.charAt(i)!=' '){
      		document.getElementById("pro").innerHTML += txt.charAt(i);
            
        }
        else {
        	document.getElementById("pro").innerHTML = '';
            
        }
        i++;
        setTimeout(typeWriter, 200);
		if (i == txt.length)
        	i=0;
    }
  
}

function openNav() {
   
    document.getElementById("menu").classList.toggle("active");
    
}
  

