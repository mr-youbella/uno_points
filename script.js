if (!localStorage.player1 || !localStorage.player2)
	location.replace("index.html");

let name_p1 = localStorage.player1.split('/')[0].trim();
let name_p2 = localStorage.player2.split('/')[0].trim();
for (let i = 0; i < document.getElementsByTagName("label").length; i += 2)
	document.getElementsByTagName("label")[i].textContent = name_p1;
for (let i = 1; i < document.getElementsByTagName("label").length; i += 2)
	document.getElementsByTagName("label")[i].textContent = name_p2;

let form = document.getElementById("form");
let input = document.getElementById("result");
let reset = document.getElementById("reset");
let result_player1 = document.getElementById("player1-result");
let result_player2 = document.getElementById("player2-result");


if (!localStorage.last_name)
	localStorage.setItem("last_name", "");
function add_points()
{
	let value_cookie;
	let new_value;
	if (form.player.value === "player1")
	{
		localStorage.last_name = name_p1;
		value_cookie = localStorage.player1.split('/')[1].trim();
		new_value = +value_cookie + +input.value;
		localStorage.player1 = name_p1 + " / " + new_value;
	}
	else
	{
		localStorage.last_name = name_p2;
		value_cookie = localStorage.player2.split('/')[1].trim();
		new_value = +value_cookie + +input.value;
		localStorage.player2 = name_p2 + " / " + new_value;
	}
	input.value = 0;
}

result_player1.value = localStorage.player1.split('/')[1].trim();
result_player2.value = localStorage.player2.split('/')[1].trim();

let historyClass = 
{
	uno_1: "uno_null",
	uno_2: "uno_null",
	uno_3: "uno_null",
	uno_4: "uno_null",
	uno_5: "uno_null",
	uno_6: "uno_null",
	uno_7: "uno_null",
	uno_8: "uno_null",
	uno_9: "uno_null",
	uno_skipEveryone: "uno_null",
	uno_wild: "uno_null",
	uno_wildDrawTwo: "uno_null",
	uno_wildDrawColor: "uno_null",
	uno_drawOne: "uno_null",
	uno_drawFive: "uno_null",
	uno_reverse: "uno_null",
	uno_skip: "uno_null",
	uno_flip: "uno_null",
};

function ft_historyClass(card_name, card_value)
{
	let allHistory = [];
	if (card_name === "uno_1")
	{
		allHistory.push(card_name + "=" + card_value);
		historyClass.uno_1 = card_value;
	}
	if (card_name === "uno_2")
		historyClass.uno_2 = card_value;
	if (card_name === "uno_3")
		historyClass.uno_3 = card_value;
	if (card_name === "uno_4")
		historyClass.uno_4 = card_value;
	if (card_name === "uno_5")
		historyClass.uno_5 = card_value;
	if (card_name === "uno_6")
		historyClass.uno_6 = card_value;
	if (card_name === "uno_7")
		historyClass.uno_7 = card_value;
	if (card_name === "uno_8")
		historyClass.uno_8 = card_value;
	if (card_name === "uno_9")
		historyClass.uno_9 = card_value;
	if (card_name === "uno_skipEveryone")
		historyClass.uno_skipEveryone = card_value;
	if (card_name === "uno_wild")
		historyClass.uno_wild = card_value;
	if (card_name === "uno_wild")
		historyClass.uno_wild = card_value;
	if (card_name === "uno_wildDrawColor")
		historyClass.uno_wildDrawColor = card_value;
	if (card_name === "uno_drawOne")
		historyClass.uno_drawOne = card_value;
	if (card_name === "uno_drawFive")
		historyClass.uno_drawFive = card_value;
	if (card_name === "uno_reverse")
		historyClass.uno_reverse = card_value;
	if (card_name === "uno_skip")
		historyClass.uno_skip = card_value;
	if (card_name === "uno_flip")
		historyClass.uno_flip = card_value;
	console.log(allHistory);
	return (card_value);
}

let uno_1 = document.getElementById("uno-1");
let uno_2 = document.getElementById("uno-2");
let uno_3 = document.getElementById("uno-3");
let uno_4 = document.getElementById("uno-4");
let uno_5 = document.getElementById("uno-5");
let uno_6 = document.getElementById("uno-6");
let uno_7 = document.getElementById("uno-7");
let uno_8 = document.getElementById("uno-8");
let uno_9 = document.getElementById("uno-9");
let uno_skipEveryone = document.getElementById("uno-skipEveryone");
let uno_wild = document.getElementById("uno-wild");
let uno_wildDrawTwo = document.getElementById("uno-wildDrawTwo");
let uno_wildDrawColor = document.getElementById("uno-wildDrawColor");

let uno_drawOne = document.getElementById("uno-drawOne");
let uno_drawFive = document.getElementById("uno-drawFive");
let uno_reverse = document.getElementById("uno-reverse");
let uno_skip = document.getElementById("uno-skip");
let uno_flip = document.getElementById("uno-flip");


uno_1.onclick = () => (input.value = +input.value + ft_historyClass("uno_1", 1));
uno_2.onclick = () => (input.value = +input.value + 2);
uno_3.onclick = () => (input.value = +input.value + 3);
uno_4.onclick = () => (input.value = +input.value + 4);
uno_5.onclick = () => (input.value = +input.value + 5);
uno_6.onclick = () => (input.value = +input.value + 6);
uno_7.onclick = () => (input.value = +input.value + 7);
uno_8.onclick = () => (input.value = +input.value + 8);
uno_9.onclick = () => (input.value = +input.value + 9);

uno_skipEveryone.onclick = () => (input.value = +input.value + 30);
uno_wild.onclick = () => (input.value = +input.value + 40);
uno_wildDrawTwo.onclick = () => (input.value = +input.value + 50);
uno_wildDrawColor.onclick = () => (input.value = +input.value + 60);
uno_drawOne.onclick = () => (input.value = +input.value + 10);
uno_drawFive.onclick = () => (input.value = +input.value + 20);
uno_reverse.onclick = () => (input.value = +input.value + 20);
uno_skip.onclick = () => (input.value = +input.value + 20);
uno_flip.onclick = () => (input.value = +input.value + 20);

form.onsubmit = add_points;

function ft_reset()
{
	Swal.fire(
	{
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
				localStorage.player1 = name_p1 + " / 0";
				localStorage.player2 = name_p2 + " / 0";
				Swal.fire(
				{
					title: "Deleted!",
					text: "Your file has been deleted.",
					icon: "success",
				}
				).then(() => {location.reload()});
			}
	  });
}

let value_cookie = localStorage.player1.split('/')[1].trim();
let value_cookie2 = localStorage.player2.split('/')[1].trim();
const content = name_p1 + " / " + +value_cookie + "\n" + name_p2 + " / " + +value_cookie2;
const blob = new Blob([content], { type: "text/plain" });
const link = document.getElementById("d");
link.href = URL.createObjectURL(blob);
link.download = "uno_points.log";

reset.onclick = ft_reset;

let history = document.getElementById("history");

function showHistory()
{
	if (!localStorage.last_name)
		return ;
	Swal.fire
	(
		{
			title: "Last history for " + localStorage.last_name,
			text: "hello",
		}
	);
}

history.addEventListener("click", showHistory);
