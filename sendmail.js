const btn = document.querySelector('button');
const inputs = document.querySelector('form');
btn.addEventListener('click',() => {
	Email.send({
		Host:"smtp.mailtrap.io",
		Username:"80e227090e8dd7",
		Password:"d1a6495165d8d4",
		To:"stephangeorges981@gmail.com",
		From:inputs.elements["email"].value,
		Subject:"Contact use query",
		Body:inputs.elements["message"].value + "</br>" + inputs.elements["name"].value + "</br>" + inputs.elements["phone"].value,
	}).then(msg=>alert("The email successful send"))
})