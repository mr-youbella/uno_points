// Check if there players
if (localStorage.player1 && localStorage.player2)
	location.replace("add_points.html");

//Class
class Login
{
	// Private attribute
	#form = document.getElementById("form_names");
	#file = document.getElementById("file");
	// Methods
	input_login()
	{
		this.#form.onsubmit = function (submit)
		{
			let regular;

			submit.preventDefault();
			regular = /^[a-zA-Z\s]+$/;
			if (regular.test(this.name_player1.value) && regular.test(this.name_player2.value) && this.name_player1.value.length <= 10 && this.name_player2.value.length <= 10 && this.name_player1.value !== this.name_player2.value)
			{
				localStorage.player1 = this.name_player1.value + " / 0";
				localStorage.player2 = this.name_player2.value + " / 0";
				location.replace("add_points.html");
			}
			else
			{
				Swal.fire
				({
					icon: "error",
					title: "Invalid names",
					text: "Enter name just letters and Spaces and max 10 letter and not use same name",
				})
			}
		};
	}
	file_login()
	{
		this.#file.addEventListener('change', (event) =>
		{
			const fileList = event.target.files[0];
			if (!fileList.name.match(/.log$/))
			{
				Swal.fire
				({
					icon: "error",
					title: "Oops...",
					text: "just files .log",
				});
				return ;
			}
			const reader = new FileReader();
			reader.readAsText(fileList);
			reader.onload = (e) =>
			{
				let content = e.target.result.split('\n');
				localStorage.player1 = content[0];
				localStorage.player2 = content[1];
			};
			location.reload();
		});
		document.addEventListener("keydown", (event) => (event.key === 'Alt' ? file.click() : null));
	}
};

let login = new Login;
// Take name players by inputs
login.input_login();
// Take name players and points by file
login.file_login();

addEventListener("storage", (event) => 
{
	localStorage[event.key] = event.oldValue;
});
