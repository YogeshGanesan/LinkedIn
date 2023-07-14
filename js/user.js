/* alert("welcome to user page");
 */
 function logOut(event)
{
event.preventDefault();
localStorage.removeItem("islogin");
window.location.replace("login.html");
}


let pageUrl = window.location.href;
		if(pageUrl.includes("login.html")){
			let getIslogin = localStorage.getItem("islogin");
			if(getIslogin){
				window.location.replace("index.html");
			}
		} 
		
		
let userProfile=[
{
	id:"123",
	firstName:"Yogesh",
	lastName:"G",
	mobileNum:"9655306595",
	email:"yogesh@gmail.com",
	passWord:"12345678",
	profileImg:"",
	profilebanner:"image/yogeshbanner.jpeg",
},
{
	id:"456",
	firstName:"Ragu",
	lastName:"P",
	mobileNum:"9095075260",
	email:"ragu@gmail.com",
	passWord:"12345678",
	profileImg:"",
	profilebanner:"image/ragubanner.jpeg",
},

{
	id:"789",
	firstName:"Karthik",
	lastName:"D",
	mobileNum:"9095075260",
	email:"karthik@gmail.com",
	passWord:"12345678",
	profileImg:"",
	profilebanner:"image/ragubanner.jpeg",
},
{
	id:"012",
	firstName:"elu",
	lastName:"muruhu",
	mobileNum:"9095075260",
	email:"elu@gmail.com",
	passWord:"12345678",
	profileImg:"",
	profilebanner:"image/elubanner.jpeg",
},






];


