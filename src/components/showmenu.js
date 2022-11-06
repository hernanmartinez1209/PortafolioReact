const showMenu = () =>{
    const iconMenu = document.querySelector("#iconMenu")
   const menu = document.querySelector("#menu")
   
   
   iconMenu.addEventListener("click",function (){
      menu.classList.toggle('mune__show');
   });
}
   export default  showMenu