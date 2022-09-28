const light = document.querySelectorAll(".light")
const start = document.querySelector("#start")

let delay = 7000


const startTrafic =()=>{
	light[0].style.background = "red"
	light[1].style.background = "black"
	light[2].style.background = "black"

	setTimeout(function(){
		light[1].style.background = "yellow"}, 3000)
	

	setTimeout(function(){
		light[2].style.background = "green";
		light[0].style.background = "black";
		light[1].style.background = "black"
      }, 4000)
  }
  

start.addEventListener("click", function(){
	startTrafic()
	for (let i =0; i<10;i++){
        setTimeout(startTrafic,delay)
        delay+= 7000
    }
    })


