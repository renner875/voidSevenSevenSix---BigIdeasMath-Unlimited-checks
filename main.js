javascript:var url = window.location.href;
var len = url.length;var sub = len-98;
var num = 98;var id = "";
n = 1;var x = 0;while(x < sub){
  id = id + url[num];num++;x++;}var c = id;
var xhttp = new XMLHttpRequest();
var questions = [];var sjson = "{";xhttp.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    console.log("Parsing JSON.");
    var json = xhttp.responseText;var decoded = JSON.parse(json);
    for(var i in decoded){for(var j in decoded[i]){
      if(typeof decoded[i][j] == "object"){
        for(var t in decoded[i][j]){questions.push(decoded[i][j][t]);}}}}
    for(var e in questions){sjson = sjson + '"' + questions[e] + '":-10000,';}sjson = sjson.replace(/,\s*$/, "");
    sjson = sjson + "}";
    var xhttp1 = new XMLHttpRequest();xhttp1.open("GET", "https://www.bigideasmath.com/MRL/rest/student-assignments/update-checked-answers?assignmentId=" + c + "&checkAnswerCounts=" + sjson, true);
    xhttp1.send();console.log("Sending XHTTP request to update answers with parsed JSON.");
    setTimeout(function(){alert("Success! Click OK to reload.");location.reload();
                         }, 250);}};xhttp.open("GET", "https://www.bigideasmath.com/MRL/rest/assignment/student-report/skills?id=" + c + "&isActivityId=false", true);
xhttp.send();
console.log("Getting assignment problem list.");
