function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name + " и это моя первая программа!", "");

	function showSkills() {
		let skills = ['HTML', 'HTML 5', 'CSS', 'CSS3', 'Photoshop', 'Bootstrap', 'Less', 'Avacode'];

		for(let i = 0; i < skills.length; i++) {
			skills[i] = document.write("Я владею " + skills[i] + " на базовом уровне <br>", "");
		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			alert("Добро пожаловать!", "");
		} else {
			alert("К сожалению, данный сайт разрешено посещать с 18 лет", "");
		}
	}

	checkAge();

	function calcPow(num) {
		console.log(num *= num);
	}

	calcPow(4);

}

myFirstApp("Роман", 19);