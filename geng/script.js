var input = prompt("Masukan Tagar Geng") || "GQ8QRCPP";
// Menanyakan tagar geng. Jika input kosong, maka akan menampilkana tagar default (#GQ8QRCPP) 

var id = input.replace("#", "");
// menghilangkan tagar dengan replace

  $.getJSON('https://cr.is-a.dev/clubs/'+id, function(data) {
	var deskripsi = '<h1 class="fw-normal text-white">' + data.name + '</h1>' + '<p class="fw-light text-light">' + data.description + '</p>';
	var row = "";
	for (n = 0; n < data.members.length; n++) {
		row += '<tr>';
		row += '<td>' + data.members[n].name + '</td>';
		row += '<td>' + data.members[n].role + '</td>';
		row += '<td>' + data.members[n].trophies + '</td>';
		row += '</tr>';
	}
	document.getElementById('data').innerHTML = row;
	$(".deskripsi").html(deskripsi);
});

// fungsi search

function myFunction() {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("form1");
	filter = input.value.toUpperCase();
	table = document.getElementById("daftar");
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}
