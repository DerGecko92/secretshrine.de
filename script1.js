function checkSelection() {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]');
	let selected = [];
	checkboxes.forEach((checkbox, index) => {
		if (checkbox.checked) {
			selected.push(index + 1);
		}
	});
	if (selected.includes(2) && selected.includes(4) && selected.includes(6) && selected.includes(8) && selected.length === 4) {
		window.location.href = 'https://dergecko92.github.io/secretshrine.de/key1';
	} else if (selected.includes(1) && selected.includes(3) && selected.includes(5) && selected.includes(7) && selected.includes(9) && selected.length === 5) {
		window.location.href = 'https://dergecko92.github.io/secretshrine.de/hint1';
	} else {
		document.getElementById("message").style.display = "none";
	}
}
