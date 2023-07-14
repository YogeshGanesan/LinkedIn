let use_input = document.getElementById("mail");
let use_password = document.getElementById("password");
let inputs = document.getElementsByClassName("form_control");
let inputs_check= document.getElementsByClassName("error");


let users = [
  {
    id: 123,
    email_id: "yogesh@gmail.com",
    passWord: "12345678"
  },
  {
    id: 456,
    email_id: "ragu@gmail.com",
    passWord: "87654321"
  },
  {
	id: 789,
    email_id: "karthik@gmail.com",
    passWord: "12345678"  
  },
  {
	id: 012,
    email_id: "ela@gmail.com",
    passWord: "87654321"  
  },  
   {
	id: 034,
    email_id: "soniya@gmail.com",
    passWord: "12345678"  
  },
];


function onSignUp(){
		let isValid;
		console.log(isValid); 
	for(let x=0;x < inputs.length;x++ ){
		isValid=0;
		if(inputs[x].value === ""){
			inputs[x].parentNode.getElementsByTagName("p")[0].classList.add("invalid-input");
			isValid++;
		}
		else{
			inputs[x].parentNode.getElementsByTagName("p")[0].classList.remove("invalid-input");
		}	
	}
		
	  let user;
		if(isValid === 0){
			user = users.find(function(e) {
			return e.email_id === use_input.value;
			});
			console.log(user);
		
			if ( user && user.passWord === use_password.value ) {
			return logIn(event);
			} else {
			console.log("login failed");
			} 
			
			if(use_input.value === user.email_id ){
				inputs_check[0].classList.remove("error2");	
			}
			else{
				inputs_check[0].classList.add("error2");
			}
			if(use_password.value === user.passWord){
				inputs_check[0].classList.remove("error2");	
					
					
			}
			else{
				inputs_check[0].classList.add("error2");
			}
		}
	let pageUrl = window.location.href;
		if(pageUrl.includes("index.html")){
			let getIslogin = localStorage.getItem("islogin");
			if(!getIslogin){
				window.location.replace("login.html");
			}
		}
		//login function
	function logIn(event){
		event.preventDefault();
		localStorage.setItem("islogin",true);
		window.location.replace("index.html");
        localStorage.setItem("id",user.id);
	}

}


function show(){
  let showButton=document.getElementById("pass_show");
  showButton.addEventListener("click",function(event)
  {
  	event.preventDefault();
	if(use_password.type === "password")
	{
	   use_password.type = "text"; 
	}
   else if(use_password.type === "text")
   {
      use_password.type = "password"; 
   }
  });
  
  
}