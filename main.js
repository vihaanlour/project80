var names_of_people = [];
function submit() {
  var guestName = document.getElementById("name1").value;
  document.getElementById("name1").value = "";
  names_of_people.push(guestName);
  document.getElementById("display_name").innerHTML = names_of_people.toString();
}
function sorting() {
  names_of_people.sort();
  var displayName = names_of_people.join("<br>");
  document.getElementById("sorted").innerHTML = displayName.toString();
}
function show() {
  var displayName = names_of_people.join("<br>");
  document.getElementById("p1").innerHTML = displayName.toString();
  document.getElementById("sort_button").style.display = "block";
}
function searching() {
  var search = document.getElementById("s1").value;
  var found = 0;
  for (var j = 0; j < names_of_people.length; j++) {
    if (search == names_of_people[j]) {
      found = found + 1;
    }
  }
  document.getElementById("p2").innerHTML = "name found " + found + " time/s";
}
