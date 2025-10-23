// Check if not there players
if (!localStorage.player1 || !localStorage.player2)
	location.replace("index.html");

// Class
class UnoPoints
{
	// Private attribute
	#name_player1 = localStorage.player1.split('/')[0].trim();
	#name_player2 = localStorage.player2.split('/')[0].trim();
	#value_player1 = localStorage.player1.split('/')[1].trim();
	#value_player2 = localStorage.player2.split('/')[1].trim();
	#form = document.getElementById("form");
	#player1_result = document.getElementById("player1-result");
	#player2_result = document.getElementById("player2-result");
	#input = document.getElementById("result");
	#delete = document.getElementById("delete");
	#history = document.getElementById("history");
	#edit_1 = document.getElementById("edit_1");
	#edit_2 = document.getElementById("edit_2");
	#link = document.getElementById("download-result");
	// Cards
	#uno_1 = document.getElementById("uno-1");
	#uno_2 = document.getElementById("uno-2");
	#uno_3 = document.getElementById("uno-3");
	#uno_4 = document.getElementById("uno-4");
	#uno_5 = document.getElementById("uno-5");
	#uno_6 = document.getElementById("uno-6");
	#uno_7 = document.getElementById("uno-7");
	#uno_8 = document.getElementById("uno-8");
	#uno_9 = document.getElementById("uno-9");
	#uno_skipEveryone = document.getElementById("uno-skipEveryone");
	#uno_wild = document.getElementById("uno-wild");
	#uno_wildDrawTwo = document.getElementById("uno-wildDrawTwo");
	#uno_wildDrawColor = document.getElementById("uno-wildDrawColor");
	#uno_drawOne = document.getElementById("uno-drawOne");
	#uno_drawFive = document.getElementById("uno-drawFive");
	#uno_reverse = document.getElementById("uno-reverse");
	#uno_skip = document.getElementById("uno-skip");
	#uno_flip = document.getElementById("uno-flip");

	// Constructor
	constructor()
	{
		// Protect local Storage for not changed
		addEventListener("storage", (event) => (localStorage[event.key] = event.oldValue));
		// Add localStorage History without value
		if (!localStorage.history)
			localStorage.setItem("history", "");
		// Add names players in labels
		for (let i = 0; i < document.getElementsByTagName("label").length; i += 2)
			document.getElementsByTagName("label")[i].textContent = this.#name_player1;
		for (let i = 1; i < document.getElementsByTagName("label").length; i += 2)
			document.getElementsByTagName("label")[i].textContent = this.#name_player2;
		// Add points in result each players
		this.#player1_result.value = localStorage.player1.split('/')[1].trim();
		this.#player2_result.value = localStorage.player2.split('/')[1].trim();
		// After Enter points to player
		this.#form.onsubmit = this.#add_points_in_player.bind(this);
		// Delete players dataeturn to login
		this.#delete.onclick = this.#delete_players.bind(this);
		// Show history last player win
		this.#history.addEventListener("click", this.#showHistory);
		// Edit name and point player
		this.#edit_1.onclick = () => this.#edit_name_value("player1");
		this.#edit_2.onclick = () => this.#edit_name_value("player2");
		// Add points for each card
		this.#uno_1.onclick = () => (this.#input.value = +this.#input.value + 1);
		this.#uno_2.onclick = () => (this.#input.value = +this.#input.value + 2);
		this.#uno_3.onclick = () => (this.#input.value = +this.#input.value + 3);
		this.#uno_4.onclick = () => (this.#input.value = +this.#input.value + 4);
		this.#uno_5.onclick = () => (this.#input.value = +this.#input.value + 5);
		this.#uno_6.onclick = () => (this.#input.value = +this.#input.value + 6);
		this.#uno_7.onclick = () => (this.#input.value = +this.#input.value + 7);
		this.#uno_8.onclick = () => (this.#input.value = +this.#input.value + 8);
		this.#uno_9.onclick = () => (this.#input.value = +this.#input.value + 9);
		this.#uno_skipEveryone.onclick = () => (this.#input.value = +this.#input.value + 30);
		this.#uno_wild.onclick = () => (this.#input.value = +this.#input.value + 40);
		this.#uno_wildDrawTwo.onclick = () => (this.#input.value = +this.#input.value + 50);
		this.#uno_wildDrawColor.onclick = () => (this.#input.value = +this.#input.value + 60);
		this.#uno_drawOne.onclick = () => (this.#input.value = +this.#input.value + 10);
		this.#uno_drawFive.onclick = () => (this.#input.value = +this.#input.value + 20);
		this.#uno_reverse.onclick = () => (this.#input.value = +this.#input.value + 20);
		this.#uno_skip.onclick = () => (this.#input.value = +this.#input.value + 20);
		this.#uno_flip.onclick = () => (this.#input.value = +this.#input.value + 20);
		// Add points for each card by keydown
		addEventListener("keydown", this.#add_points_by_keydown.bind(this));
		// Download file uno_points.log for logs players [name_player / point_player]
		const content = this.#name_player1 + " / " + +this.#value_player1 + "\n" + this.#name_player2 + " / " + +this.#value_player2;
		const blob = new Blob([content]);
		this.#link.href = URL.createObjectURL(blob);
		this.#link.download = "uno_points.log";
	}

	// Methods
	#add_points_in_player(event)
	{
		let	value_cookie;
		let	new_value;
		let date = new Date;

		if (this.#form.player.value === "player1")
		{
			value_cookie = localStorage.player1.split('/')[1].trim();
			new_value = +value_cookie + +this.#input.value;
			localStorage.history = this.#name_player1 + " / " + new_value + " / " + `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
			localStorage.player1 = this.#name_player1 + " / " + new_value;
		}
		else if (this.#form.player.value === "player2")
		{
			value_cookie = localStorage.player2.split('/')[1].trim();
			new_value = +value_cookie + +this.#input.value;
			localStorage.history = this.#name_player2 + " / " + new_value + " / " + `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
			localStorage.player2 = this.#name_player2 + " / " + new_value;
		}
		else
		{
			event.preventDefault();
			Swal.fire
			({
				icon: "warning",
				title: "No choice",
				text: "Please choice one player atless",
			});
		}
		this.#input.value = 0;
	}

	#delete_players()
	{
		Swal.fire
		({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		}).then((result) =>
		{
			if (result.isConfirmed)
			{
				localStorage.removeItem("player1");
				localStorage.removeItem("player2");
				localStorage.removeItem("history");
				Swal.fire
				({
					title: "Deleted!",
					text: "Your file has been deleted.",
					icon: "success",
				}).then(() => (location.reload()));
			}
		});
	}

	#showHistory()
	{
		if (!localStorage.history)
			return ;
		Swal.fire
		({
			title: "Last history for " + localStorage.history.split(" / ")[0],
			text: localStorage.history.split(" / ")[1] + " point in " + localStorage.history.split(" / ")[2],
		});
	}

	#edit_name_value(player)
	{
		Swal.fire
		({
			title: "Change name",
			input: "text",
			showCancelButton: true,
			confirmButtonText: "Change",
		}).then((result) => 
		{
			if (result.isConfirmed)
				localStorage[player] = result.value + " / " + localStorage[player].split(" / ")[1];
			Swal.fire
			({
				title: "Change point",
				input: "text",
				showCancelButton: true,
				confirmButtonText: "Change",
			}).then((result) => 
			{
				if (result.isConfirmed)
					localStorage[player] = localStorage[player].split(" / ")[0] + " / " + result.value;
				location.reload();
			});
		});
	}
	#add_points_by_keydown(event)
	{
		if (event.key == 1)
			this.#input.value = +this.#input.value + 1;
		else if (event.key == 2)
			this.#input.value = +this.#input.value + 2;
		else if (event.key == 3)
			this.#input.value = +this.#input.value + 3;
		else if (event.key == 4)
			this.#input.value = +this.#input.value + 4;
		else if (event.key == 5)
			this.#input.value = +this.#input.value + 5;
		else if (event.key == 6)
			this.#input.value = +this.#input.value + 6;
		else if (event.key == 7)
			this.#input.value = +this.#input.value + 7;
		else if (event.key == 8)
			this.#input.value = +this.#input.value + 8;
		else if (event.key == 9)
			this.#input.value = +this.#input.value + 9;
	}
};

let uno_points = new UnoPoints;
