console.log('Hello World!');
  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });

  searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });

  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
   }
  }

/////////

var navlinks = document.getElementById("navlinks");
      function showmenu(){
        navlinks.style.left = "0";
        navlinks2.style.left="-200px"     
        navlinks3.style.left = "-200px";
        navlinks4.style.left = "-200px";
        navlinks7.style.left = "-500px";
      navlinks6.style.left = "-200px";
      }
      function hidemenu(){
        navlinks.style.left= "-200px";
      }



///////

  var navlinks2 = document.getElementById("navlinks2");
      function showmenu1(){
        navlinks2.style.left = "0";
        navlinks.style.left="-200px"
        navlinks3.style.left = "-200px";
        navlinks7.style.left = "-500px";
       navlinks4.style.left = "-200px";
     navlinks6.style.left = "-200px";
      navlinks5.style.left = "-200px";


      }
      function hidemenu1(){
        navlinks2.style.left= "-200px";
      }




var navlinks3 = document.getElementById("navlinks3");
      function showmenu2(){
          navlinks3.style.left = "0";
        navlinks2.style.left = "-200px";
        navlinks.style.left="-200px"
              navlinks7.style.left = "-500px";
        navlinks3.style.left = "0";
        navlinks4.style.left = "-200px";
       navlinks5.style.left = "-200px";
        navlinks6.style.left = "-200px";
      }
      function hidemenu2(){
        navlinks3.style.left= "-200px";
      }



var navlinks4 = document.getElementById("navlinks4");
      function showmenu3(){
          navlinks3.style.left = "-200px";
        navlinks2.style.left = "-200px";
        navlinks.style.left="-200px"
       navlinks6.style.left = "-200px";
             navlinks7.style.left = "-500px";
      navlinks5.style.left = "-200px";
        navlinks4.style.left = "0";
      }
      function hidemenu3(){
        navlinks4.style.left= "-200px";
      }



var navlinks5 = document.getElementById("navlinks5");
      function showmenu4(){
          navlinks3.style.left = "-200px";
        navlinks2.style.left = "-200px";
        navlinks.style.left="-200px"
              navlinks7.style.left = "-500px";
         navlinks6.style.left = "-200px";
        navlinks4.style.left = "-200px";
       navlinks5.style.left = "0";
      }
      function hidemenu4(){
        navlinks5.style.left= "-200px";
      }




var navlinks6 = document.getElementById("navlinks6");
      function showmenu5(){
          navlinks3.style.left = "-200px";
        navlinks2.style.left = "-200px";
        navlinks.style.left="-200px"
        navlinks4.style.left = "-200px";
       navlinks5.style.left = "-200px";
       navlinks6.style.left = "0";
      navlinks7.style.left = "-500px";

      }
      function hidemenu5(){
        navlinks6.style.left= "-200px";
      }





var navlinks7= document.getElementById("navlinks7");
      function showmenu6(){
          navlinks3.style.left = "-200px";
        navlinks2.style.left = "-200px";
        navlinks.style.left="-200px"
        navlinks4.style.left = "-200px";
       navlinks5.style.left = "-200px";
      navlinks6.style.left = "-200px";
       navlinks7.style.left= "0";
       navlinks7.style.opacity= "1";

      }
      function hidemenu6(){
        navlinks7.style.left= "-500px";
      navlinks7.style.opacity= "0";
      }




var container= document.getElementById("container");
      function showmenu6(){
          navlinks3.style.left = "-200px";
        navlinks2.style.left = "-200px";
        navlinks.style.left="-200px"
        navlinks4.style.left = "-200px";
       navlinks5.style.left = "-200px";
      navlinks6.style.left = "-200px";
       navlinks7.style.left= "-200px";
       container.style.opacity= "1";

      }
      function hidemenu6(){
        navlinks7.style.left= "-500px";
      container.style.opacity= "0";
      }
