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