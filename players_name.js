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

if (getValueCookie("player1") || getValueCookie("player2"))
	location.replace("add_points.html");

let form_names = document.getElementById("form_names");

form_names.onsubmit = function (submit)
{
	let name_p1 = document.getElementById("name_player1").value.split('').map((value) => (value >= 'a' && value <= 'z' || value >= 'A' && value <= 'Z') ? value : '').join("");
	let name_p2 = document.getElementById("name_player2").value.split('').map((value) => (value >= 'a' && value <= 'z' || value >= 'A' && value <= 'Z') ? value : '').join("");
	submit.preventDefault();
	if (!getValueCookie("player1"))
		document.cookie = "player1=" + name_p1 + " / 0; " + "max-age=31536000; path=/";
	if (!getValueCookie("player2"))
		document.cookie = "player2=" + name_p2 + " / 0; " + "max-age=31536000; path=/";
	location.replace("add_points.html");
};
