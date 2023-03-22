//form validation function
function validateForm(){
	let name = document.forms["Feedbackform"]["name"].value; 
	let email = document.forms["Feedbackform"]["email"].value;
    let comment = document.forms["Feedbackform"]["comments"].value;
	let rating = document.forms["Feedbackform"]["rate"].value;

	if(name==""){	
		if(email==""){
			if(comment==""){
				alert("Please fill out the form!!");
				return true;
			}
		}
	}

	if(name==""){
		alert("Name must be filled out");
		return false;
	}
	if(email==""){
		alert("Email must be filled out");
		return false;

	}
	if(comment==""){
		alert("Comments must be filled out");
		return false;
	}
	if(rating=="select"){
		alert("Please rate our site")
		return false;
	}
	alert("Dear "+name+", Thank you very much for your feedback. You have rated our site as "+rating+" and your comment was "+comment);
	
}
//Quiz fucntion
function promptQuiz(){
	let total=0;
	let ans1=prompt("Who is the richest man in the world?");
	if (ans1.toLowerCase()=="elon musk"){
		alert("Correct Answer! You received 2 points.")
		total=total+2;
	}
	else{
		alert("Wrong Answer! Reduced 1 point.")
		total=total-1;
	}	
	let ans2=prompt("What is the most profitable company in the world?");
	if (ans2.toLowerCase()=="apple"){
		alert("Correct Answer! You received 2 points.")
		total=total+2;
	}
	else{
		alert("Wrong Answer! Reduced 1 point.")
		total=total-1;
	}
	let ans3=prompt("Which industry will grow in future?");
	if (ans3.toLowerCase()=="information technology"){
		alert("Correct Answer! You received 2 points.")
		total=total+2;
	}
	else{
		alert("Wrong Answer! Reduced 1 point.")
		total=total-1;
	}
	let ans4=prompt("What is the most important job in the world?");
	if (ans4.toLowerCase()=="teaching"){
		alert("Correct Answer! You received 2 points.")
		total=total+2;
	}
	else{
		alert("Wrong Answer! Reduced 1 point.")
		total=total-1;
	}
	let ans5=prompt("What is the most posperous country in the world?");
	if (ans5.toLowerCase()=="norway"){
		alert("Correct Answer! You received 2 points.")
		total=total+2;
	}
	else{
		alert("Wrong Answer! Reduced 1 point.")
		total=total-1;
	}
	let badge="";
	if (total>=6){
		badge="Gold";
	}
	if (total>=3 && total<6){
		badge="Silver";
	}
	if (total>=1 && total<3){
		badge="Bronze";
	}
	alert("Congratulations! You have earned "+total+" points with "+badge+" badge.");
}