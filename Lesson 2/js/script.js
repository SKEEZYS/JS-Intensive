let receiveBtn = document.getElementById("receive"),
	modal = document.querySelector(".modal"),
	close = document.getElementsByClassName("close")[0],
	nameInput = document.getElementsByClassName("contactform_name")[0],
	text = document.getElementsByName("message")[0];

receiveBtn.addEventListener('click', function() {
	modal.style.display = "block";
});

close.addEventListener('click', function() {
	modal.style.display = "none"
});

nameInput.addEventListener('input', function() {
	text.value = "Здравствуйте " + nameInput.value + ". Я - диалоговое окно, если у вас есть вопросы, то напишите их ниже";
	if (nameInput.value == "") {
		text.value = "";
	}
});