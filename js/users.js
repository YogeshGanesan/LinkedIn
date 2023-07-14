let pageUr= window.location.href;
let userProfile=[
{
	id:123,
	firstName:"Yogesh",
	lastName:"G",
	mobileNum:"9655306595",
	email:"yogesh@gmail.com",
	passWord:"12345678",
	role:"FrontEnd Trainee",
	address:{state:"TamilNadu",city:"Salem",country:"India"},
	profileImg:"image/yogeshPhoto.jpeg",
	profilebanner:'url("image/yogeshbanner.jpeg")'
},
{
	id:456,
	firstName:"Ragu",
	lastName:"P",
	mobileNum:"9095075260",
	email:"ragu@gmail.com",
	passWord:"87654321",
	role:"FrontEnd Trainee",
	address:{state:"TamilNadu",city:"Coimbatore",country:"India"},
	profileImg:"image/raguPhoto.jpeg",
	profilebanner:'url("image/ragubanner.jpeg")'
},

{
	id:789,
	firstName:"Karthik",
	lastName:"D",
	mobileNum:"9095075260",
	email:"karthik@gmail.com",
	passWord:"12345678",
	role:"FrontEnd Trainee",
	address:{city:"Cheenai",state:"TamilNadu",country:"India"},
	profileImg:"image/user.jpeg",
	profilebanner:'url("image/ragubanner.jpeg")'
},
{
	id:012,
	firstName:"Ela",
	lastName:"Muruhu",
	mobileNum:"9095075260",
	email:"ela@gmail.com",
	passWord:"87654321",
	role:"FrontEnd Trainee",
	address:{state:"TamilNadu",city:"Erode",country:"India"},
	profileImg:"image/trainer-1.jpg",
	profilebanner:'url("image/elubanner.jpeg")'
},
{
	id:034,
	firstName:"Soniya",
	lastName:"V",
	mobileNum:"9095075260",
	email:"soniya@gmail.com",
	passWord:"12345678",
	role:"FrontEnd Trainee",
	address:{state:"TamilNadu",city:"chennai",country:"India"},
	profileImg:"image/trainer-2.jpg",
	profilebanner:'url("image/elubanner.jpeg")'


}
];
 
let userSkills=[

{
id:123,
university:"Anna University",
degree:"Bachelor's degree,Computer Science Engineering",
year:"2018-2022",
mark:"8.35",
school:"K.R.P Matriculation HigherSecondary School",
schoolStudies:"Higher-Secondary",
schoolYear:"2017-2018",
schoolMark:"183.25"
},

{
id:456,
university:"MK University",
degree:"Bachelor's degree,Mechincal Engineering",
year:"2015-2029",
mark:"7.25",
school:"SkV Matriculation Higher Secondary School",
schoolStudies:"Higher-Secondary",
schoolYear:"2014-2015",
schoolMark:"190.25"

},

{
id:789,
university:"Anna University",
degree:"Bachelor's degree,Electrical and Electronics Engineering",
year:"2017-2021",
mark:"8.00",
school:"AVB Matriculation HigherSecondary School",
schoolStudies:"Higher-Secondary",
schoolYear:"2016-2017",
schoolMark:"180.25"
},

{
id:012,
university:"Anna University",
degree:"Bachelor's degree,Electronics and Communication Engineering",
year:"2018-2022",
mark:"8.50",
school:"VNK Matriculation HigherSecondary School",
schoolStudies:"Higher-Secondary",
schoolYear:"2017-2018",
schoolMark:"188.25"
},
{
id:034,
university:"Bharathi University",
degree:"Bachelor's degree,Electronics and Communication Engineering",
year:"2018-2022",
mark:"8.50",
school:"VNK Matriculation HigherSecondary School",
schoolStudies:"Higher-Secondary",
schoolYear:"2017-2018",
schoolMark:"134.25"
}

]; 
 

 
 
 
 
 
 
 

let userId;
	let getId = localStorage.getItem("id");

    userId= parseInt(getId);
	 console.log(userId);
	 
	 
	 let userdetails =userProfile.find(function(event){
	    return event.id === userId;
			 console.log(event.id);
	 }); 
	 
	 	 let userskill = userSkills.find(function(event){
	    return event.id === userId;
			 console.log(event.id);
	 }); 


function editinformation(event) {
	event.preventDefault();
	let fname = document.getElementById("user-firstName-edit").value;
	let lname = document.getElementById("user-lastName-edit").value;
	let headrole = document.getElementById("user-position-edit").value;
	let pCourentry=document.getElementById("user-country-edit").value;
	let pstate= document.getElementById("user-state-edit").value;
	let pcity= document.getElementById("user-city-edit").value;
	// create a new object with the edited fields only
	
	const usereditinput = {};
	if (fname !== ''){ usereditinput['firstName'] = fname;}
	if (lname !== ''){ usereditinput['lastname'] = lname;}
	if (headrole !== ''){ usereditinput['role'] = headrole;}
	if (pCourentry !== ''){ usereditinput['pCourentry'] = pCourentry;}
	if (pstate !== ''){ usereditinput['pstate'] = pstate;}
	if (pcity !== ''){ usereditinput['pcity'] = pcity;}
	
	console.log(usereditinput);
	localStorage.setItem("usereditinputs", JSON.stringify(usereditinput));
}

const myObject = JSON.parse(localStorage.getItem('usereditinputs'));
if (myObject) {
	// update the corresponding properties of userdetails object with the edited values
	// userdetails['firstName'] = myObject['firstName'] || userdetails['firstName'];
	// userdetails['lastname'] = myObject['lastname'] || userdetails['lastname'];
	// userdetails['role'] = myObject['role'] || userdetails['role'];
	// userdetails.address.city = myObject['pcity'] || userdetails.address.city;
	// userdetails.address.state = myObject['pstate'] || userdetails.address.state;
	// userdetails.address.country = myObject['pCourentry'] || userdetails.address.country;
	if (myObject['firstName']) {
		userdetails['firstName'] = myObject['firstName'];
	}
	if (myObject['lastname']) {
		userdetails['lastname'] = myObject['lastname'];
	}
	if (myObject['role']) {
		userdetails['role'] = myObject['role'];
	}
	if (myObject['pcity']) {
		userdetails.address.city = myObject['pcity'];
	}
	if (myObject['pstate']) {
		userdetails.address.state = myObject['pstate'];
	}
	if (myObject['pCourentry']) {
		userdetails.address.country = myObject['pCourentry'];
	}

}
	
	 
if(pageUr.includes("profile.html")){
if(userdetails)
{
	console.log(userdetails);
	
  let dps=document.getElementsByClassName("profile-dp");
	dps[0].src=userdetails.profileImg;
let userName=document.getElementsByClassName("user-profile-name");
   userName[0].innerText=userdetails.firstName + " "+userdetails.lastName;
let userRole=document.getElementsByClassName("user-role");
   userRole[0].innerText=userdetails.role;  
   
let usercity=document.getElementsByClassName("place-city");
   usercity[0].innerText= userdetails.address.city;  
 
let usercountry=document.getElementsByClassName("place-country");
   usercountry[0].innerText = userdetails.address.country; 

let userstat=document.getElementsByClassName("place-state");
    userstat[0].innerText = userdetails.address.state;   
   /* Profile edit button starts */
   
    
  
     /* Profile edit button ends */ 


let profileBanner=document.getElementsByClassName("background-image");
   profileBanner[0].style.backgroundImage= userdetails.profilebanner;



let navdp=document.getElementsByClassName("nav-dp");
   navdp[0].src=userdetails.profileImg;



let dropDowndp=document.getElementsByClassName("drop-down-profile-img");
   dropDowndp[0].src=userdetails.profileImg;
let dropDownUserName=document.getElementsByClassName("drop-user-name");
   dropDownUserName[0].innerText=userdetails.firstName + " "+userdetails.lastName;
let dropDownUserRole=document.getElementsByClassName("drop-user-role");
   dropDownUserRole[0].innerText=userdetails.role;


console.log(dps);
}

if(userskill){

 console.log(userskill);
 
 let university=document.getElementsByClassName("university");
 
   university[0].innerText = userskill.university;
 
 let degree=document.getElementsByClassName("degree");
 
   degree[0].innerText = userskill.degree;
 
 let year=document.getElementsByClassName("year-complete");
 
   year[0].innerText = userskill.year;
 
 let overallMark=document.getElementsByClassName("mark-socred");
 
   overallMark[0].innerText = userskill.mark;

 let highSchool=document.getElementsByClassName("user-school");
 
   highSchool[0].innerText = userskill.school;

 let highstudy=document.getElementsByClassName("school-study");
 
   highstudy[0].innerText = userskill.schoolStudies;
   
 let highSchoolYear=document.getElementsByClassName("school-year");
 
   highSchoolYear[0].innerText = userskill.schoolYear;
   
  let highSchoolMark=document.getElementsByClassName("school-mark");
 
   highSchoolMark[0].innerText = userskill.schoolMark;
   
   /* Edit Education starts */
   
   
   let userUniversityName = document.getElementById("user-School-Name");
       userUniversityName.value = userskill.university;
	   
   let userDegreeName = document.getElementById("user-Degree-Name");
       userDegreeName.value = userskill.degree;	   

   let userGradeName = document.getElementById("user-Grade-Name");
       userGradeName.value = userskill.mark;
  
   
   /* Edit Education Ends */
  
   
   /*  */
   
/*    function editinformation(event){
	event.preventDefault();
	let fname= document.getElementById("user-firstName-edit").value;
	let lname= document.getElementById("user-lastName-edit").value;
	let editheadline= document.getElementById("user-position-edit").value;
	let editcountry= document.getElementById("user-country-edit").value;
	let editcity= document.getElementById("user-city-edit").value;
	let editstate= document.getElementById("user-state-edit").value;
	
	let obj = {
		fname,
		lname,
		editheadline,
		editcountry,
		editcity,
		editstate
	}
	//console.log(fname,lname);
	localStorage.setItem("editedobject",JSON.stringify(obj))
	
}
let myObject = JSON.parse(localStorage.getItem('editedobject'));
if(myObject){
 console.log(myObject);
document.getElementById("editFname").innerHTML=myObject.fname + ' ' + myObject.lname;
document.getElementById("headline").innerHTML=myObject.editheadline;
document.getElementById("placeCoureg").innerHTML=myObject.editcountry;
document.getElementById("placeity").innerHTML=myObject.editcity;
document.getElementById("placestate").innerHTML=myObject.editstate;

} */






}








/* inputDisplay starts */
let editName=document.getElementById("user-firstName-edit");
  editName.value = userdetails.firstName;
 
   let editLastName=document.getElementById("user-lastName-edit");
  editLastName.value = userdetails.lastName; 
  
     let editPosition = document.getElementById("user-position-edit");
  editPosition.value = userdetails.role;
   
     let editCountry = document.getElementById("user-country-edit");
  editCountry.value = userdetails.address.country; 

     let editState = document.getElementById("user-state-edit");
  editState.value = userdetails.address.state; 
  
     let editCity = document.getElementById("user-city-edit");
  editCity.value = userdetails.address.city; 
  

  /* inputDisplay ends */
  
  /* New starts */
  
  
    

  
  
  
  
  
  
  
  
  
  
  
  
  
  /* New Ends */
  
  
  
  
  
  
let editProfile=document.getElementsByClassName("edit-icon-js");
 console.log(editProfile);
for(let i=0;i<editProfile.length;i++){
 editProfile[i].addEventListener("click",add); 
}
function add(event){

let cElement=this.parentNode.getElementsByTagName("div")[0];

  console.log(cElement);
  
cElement.style.display="block";

let backgroundBlur=document.getElementsByClassName("blur")[0];
   backgroundBlur.setAttribute("id","setblurEffect");

}

	

let modelboxfirstIcon = document.getElementsByClassName("modelBox-edit-icon");
   
  for(let j=0;j<modelboxfirstIcon.length;j++){ 
   modelboxfirstIcon[j].addEventListener("click",remove);
  }
function remove(event){
 
 let currentEl=this.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("div")[0];
  
  console.log(currentEl);
  
 currentEl.style.display="none";
 
let removebackgroundBlur=document.getElementsByClassName("blur")[0];
   removebackgroundBlur.removeAttribute("id");   
 
}

 /* skill add */
  const myButton = document.getElementById("addskillbtn");
myButton.addEventListener("click", function (e) {
	e.preventDefault();
	const input = document.createElement("input");
	input.setAttribute("type", "text");
	input.classList.add("addinputs");
	myButton.parentNode.replaceChild(input, myButton);
	let dispalySkill=document.getElementsByClassName("select_btn")[0];
	dispalySkill.style.display="block";
	input.addEventListener("keydown", function (event) {
		if (event.keyCode === 13) {
			event.preventDefault()
			
			
			let elename = document.getElementsByClassName("addinputs")[0];
			console.log(elename.value);
			
			
			let ele = document.createElement("span");
			ele.setAttribute("class", 'skillset');
			ele.innerText = elename.value;
			
			
			let ids = document.getElementById("skillitems");
			ids.appendChild(ele);
			document.getElementById("myFormId").reset();
			
			
			ele.addEventListener("click", function(){
				ele.remove("skillset");	
			  });
		
		
		}
		
		
		
	});
});





let skillsArr =[];
let btns= document.getElementsByClassName("btn")
for(i=0;i<btns.length;i++){
	btns[i].addEventListener("click",function(e){
  	e.preventDefault();
	this.remove();
	skillsArr.push(this.innerText);
	  addSkills(skillsArr);
	});
}


 
 function addSkills(arrSkill){
	let setDefault= document.getElementById("skillitems");
	setDefault.innerHTML = "";
	let skillBtns = arrSkill.map((item)=>{
		return `<span class="skillset">${item}</span>`;
	}).join("");
	setDefault.innerHTML = skillBtns;
	let skillBtnsDom = document.getElementsByClassName("skillset");
	for(let i = 0; i <skillBtnsDom.length; i++){
	 skillBtnsDom[i].addEventListener("click", removeSkills);
	}
 }
 
 function removeSkills(e){
	 let updateSkills = skillsArr;
	 let findSkill = updateSkills.filter(item => item !== this.innerText);
	 skillsArr = findSkill;
	 addSkills(skillsArr);
 }
 
 /* skill end */
}
	




	
if(pageUr.includes("index.html")){	 
	 

if(userdetails)
{
  console.log(userdetails);

 let userImg=document.getElementsByClassName("user-img-logo");
  userImg[0].src=userdetails.profileImg;
 
 let userName=document.getElementsByClassName("user-profile-name");
  userName[0].innerText=userdetails.firstName + " "+userdetails.lastName;
  
 let userRole=document.getElementsByClassName("user-profile-role");
  userRole[0].innerText=userdetails.role;

 let userCenterImg=document.getElementsByClassName("centerside-user-img");
  userCenterImg[0].src=userdetails.profileImg;

 let userdropDownImg=document.getElementsByClassName("drop-down-mini-user-img");
  userdropDownImg[0].src=userdetails.profileImg;

 let userDropdownName=document.getElementsByClassName("drop-User-Name");
  userDropdownName[0].innerText=userdetails.firstName + " "+userdetails.lastName;

  let userDropdownRole=document.getElementsByClassName("drop-User-role");
   userDropdownRole[0].innerText=userdetails.role;
   
  let userNavImg=document.getElementsByClassName("user-img-nav");
   userNavImg[0].src=userdetails.profileImg;  
   
    
 
}



}



 
 
 function logOut(event)
{
event.preventDefault();
localStorage.removeItem("islogin");
window.location.replace("login.html");
}


let pageUrl = window.location.href;

if(pageUrl.includes("login.html"))
{
			let getIslogin = localStorage.getItem("islogin");
			if(getIslogin){
				window.location.replace("index.html");
			}
   } 

if(pageUrl.includes("profile.html"))
{
	let getIslogin = localStorage.getItem("islogin");
	if(!getIslogin){
		window.location.replace("login.html");
	}
}