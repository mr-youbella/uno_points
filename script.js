function getValueCookie(name_cookie)
{
	let i = 0;
	let cookies = document.cookie.split(';');

	while (i < cookies.length)
	{
		if (cookies[i].length > 0)
		{
			let name = cookies[i].split('=')[0].trim();
			let value = cookies[i].split('=')[1].trim();
			if (name === name_cookie)
				return (value);
		}
		i++;
	}
	return (null);
}

if (!getValueCookie("player1") || !getValueCookie("player2"))
	location.replace("index.html");

let name_p1 = getValueCookie("player1").split('/')[0].trim();
let name_p2 = getValueCookie("player2").split('/')[0].trim();
for (let i = 0; i < document.getElementsByTagName("label").length; i += 2)
	document.getElementsByTagName("label")[i].textContent = name_p1;
for (let i = 1; i < document.getElementsByTagName("label").length; i += 2)
	document.getElementsByTagName("label")[i].textContent = name_p2;

let form = document.getElementById("form");
let input = document.getElementById("result");
let reset = document.getElementById("reset");
let result_player1 = document.getElementById("player1-result");
let result_player2 = document.getElementById("player2-result");

function add_points()
{
	let value_cookie;
	let new_value;
	if (form.player.value === "player1")
	{
		value_cookie = getValueCookie("player1").split('/')[1].trim();
		new_value = +value_cookie + +input.value;
		document.cookie = "player1=" + name_p1 + " / " + new_value + "; max-age=31536000; path=/";
	}
	else
	{
		value_cookie = getValueCookie("player2").split('/')[1].trim();
		new_value = +value_cookie + +input.value;
		document.cookie = "player2=" + name_p2 + " / " + new_value + "; max-age=31536000; path=/";
	}
	input.value = 0;
}

result_player1.value = getValueCookie("player1").split('/')[1].trim();
result_player2.value = getValueCookie("player2").split('/')[1].trim();

let uno_1 = document.getElementById("uno-1");
let uno_2 = document.getElementById("uno-2");
let uno_3 = document.getElementById("uno-3");
let uno_4 = document.getElementById("uno-4");
let uno_5 = document.getElementById("uno-5");
let uno_6 = document.getElementById("uno-6");
let uno_7 = document.getElementById("uno-7");
let uno_8 = document.getElementById("uno-8");
let uno_9 = document.getElementById("uno-9");

uno_1.onclick = () => (input.value = +input.value + 1);
uno_2.onclick = () => (input.value = +input.value + 2);
uno_3.onclick = () => (input.value = +input.value + 3);
uno_4.onclick = () => (input.value = +input.value + 4);
uno_5.onclick = () => (input.value = +input.value + 5);
uno_6.onclick = () => (input.value = +input.value + 6);
uno_7.onclick = () => (input.value = +input.value + 7);
uno_8.onclick = () => (input.value = +input.value + 8);
uno_9.onclick = () => (input.value = +input.value + 9);

form.onsubmit = add_points;

function ft_reset()
{
	if (confirm("Do you continu?"))
	{
		document.cookie = "player1=" + name_p1 + " / 0" + "; max-age=31536000; path=/";
		document.cookie = "player2=" + name_p2 + " / 0" + "; max-age=31536000; path=/";
		location.reload();
	}
}

reset.onclick = ft_reset;
