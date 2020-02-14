function submit() {
  var day=parseInt(document.getElementById("Day").value);

if (day<0 && day>30)
{
    document.getElementById("Day").innerText = "INVALID INPUT";
}




}
