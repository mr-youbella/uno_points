if (localStorage.player1 && localStorage.player2)
	location.replace("add_points.html");

let form_names = document.getElementById("form_names");

let name_p1 = document.getElementById("name_player1");
let name_p2 = document.getElementById("name_player2");

form_names.onsubmit = function (submit)
{
	submit.preventDefault();
	localStorage.player1 = name_p1.value.split('').map((value) => (value >= 'a' && value <= 'z' || value >= 'A' && value <= 'Z') ? value : '').join("") + " / 0";
	localStorage.player2 = name_p2.value.split('').map((value) => (value >= 'a' && value <= 'z' || value >= 'A' && value <= 'Z') ? value : '').join("") + " / 0";
	location.replace("add_points.html");
};

let file = document.getElementById("file");
file.addEventListener('change', (event) =>
{
	const fileList = event.target.files[0];
	if (!fileList.name.match(/.log/))
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

let div = document.getElementById("main_div");

function inputs(input)
{
	input.onfocus = function ()
	{
		if (div.classList.contains("bg-gray-200"))
		{
			div.classList.remove("bg-gray-200");
			div.classList.add("bg-green-200");
		}
	}
	input.onblur = function ()
	{
		if (div.classList.contains("bg-green-200"))
		{
			div.classList.add("bg-gray-200");
			div.classList.remove("bg-green-200");
		}
	}
}

function add_file(e)
{
	if (e.key === 'Alt')
		file.click();
}

document.addEventListener("keydown", add_file);

inputs(name_p1);
inputs(name_p2);

addEventListener("storage", (event) => 
{
	localStorage[event.key] = event.oldValue;
});
