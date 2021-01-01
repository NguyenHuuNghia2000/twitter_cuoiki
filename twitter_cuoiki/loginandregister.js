var table;
var urlUsers = "https://jsonplaceholder.typicode.com/users";
var objPeople = [
	{
		fullname:'nguyen duc nam',
		userid:1,
		username: 'sam',
		password: 'password25',
	},
	{
		fullname:'nguyen duc thang',
		userid:2,
		username: 'matt',
		password: 'password88',
	},
	{
		fullname:'nguyen duc hai',
		userid:3,
		username: 'chris',
		password: 'password3'
	}
]

function validate() {
			var fullname = document.getElementById("fullname").value;
			var userid = document.getElementById("userid").value;
			var email = document.getElementById("email").value;
			var password = document.getElementById("password").value;

  
			if(fullname== "") {
			alert("Vui lòng nhập tên!");
			return false;
			}
			if(userid == "") {
			alert("Vui lòng nhập id !");
			return false;
			}
			if(email == "") {
			alert("Vui lòng nhap email!");
			return false;
			}
			if(password == "") {
			alert("Vui lòng nhap password!");
			return false;
			}
			  
			alert("Xin hãy điền đúng thông tin!")
			  
			return true;
}
function login123() {
	// retreive data from username and store in username variable
	var username = document.getElementById('username').value
	// retreive data from password and store in password variable
	var password = document.getElementById('password').value

	// loop through all the user pbjects and confrim if the username and password are correct
	for(var i = 0; i < objPeople.length; i++) {
		// check to 
		if(username == objPeople[i].username && password == objPeople[i].password) {
			location.href = 'home.html';
			//window.location="file:///C:/Users/Acer/Desktop/twitter/twitter-clone-master/index.html"
			// stop the statement if result is found true - this was a return in the video, break is best practice here
			break
		} else {
			// error if username and password don't match
			alert('incorrect username or password')
		}
	}
}

function registerUser() {
	// store new users username
	var res_fullname = document.getElementById("fullname").value;
	var res_userid = document.getElementById("userid").value;
	var res_email = document.getElementById("email").value;
	var res_password = document.getElementById("password").value;
	// store new user data in an object
	var newUser = {
		username: res_fullname,
		password: res_userid,
		email:res_email,
		password:res_password,
	}
	// loop throught people array to see if the username is taken, or password to short
	for(var i = 0; i < objPeople.length; i++) {
		// check if new username is equal to any already created usernames
		if(res_email == objPeople[i].username) {
			// alert user that the username is take
			alert('That username is alreat in user, please choose another')
			// stop the statement if result is found true
			break
		// check if new password is 8 characters or more
		} else if (res_password.length < 0) {
			// alert user that the password is to short
			alert('That is to short, include 0 or more characters')
			// stop the statement if result is found true
			break
		}else if(res_userid==objPeople[i].userid){
			alert('it is exists, choose another')
		}
	}
	// push new object to the people array
	objPeople.push(newUser)
	// console the updated people array
	console.log(objPeople)
	location.href = 'home.html';
}