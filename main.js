var reasons = [
  "hoy quiero",
    "por lo que me has brindado",
    "y darle gracias a Dios",
    "por darme una madre como tu",    
  ];
  
  var images = [
    "foto.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto5.jpg",
    "foto6.jpg",
    "foto7.jpg",
    "foto8.jpg",
    "foto9.jpg"
   ];
  
  var i = 0;
  function nextslide() {  
      document.getElementById("reasontext").innerHTML = reasons[i];
      document.getElementById("album").src = images[i];
      i++;
      document.getElementById("audio").play();
    
  }
  
  