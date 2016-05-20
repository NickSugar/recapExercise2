
onclick()

function pop() {
	var x = document.getElementById("city").value;
    document.getElementById("cityTo").innerHTML = x;

    var y = document.getElementById("state").value;
    document.getElementById("stateTo").innerHTML = y;

    var z = document.getElementById("coun").value;
    document.getElementById("counTo").innerHTML = z;

    var a = document.getElementById("con").value;
    document.getElementById("conTo").innerHTML = a;

    var b = document.getElementById("pop").value;
    document.getElementById("popTo").innerHTML = b;
}