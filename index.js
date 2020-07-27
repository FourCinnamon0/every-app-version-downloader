/* Instructions:
 * 1. Go to the uptodown version selection page for the app. E.g.: https://brawl-stars.en.uptodown.com/android/versions
 * 2. Open page inspector and press the console button
 * 3. Paste this code and press enter
*/
for(var i = 0;i<document.getElementsByClassName("item").length-1;i++){
    var f = await fetch(document.getElementsByClassName("item")[i].children[0].children[0].onclick.toString().split("\n")[1].split('"')[1])
    var t = await f.text()
    var parser = new DOMParser();
	  var doc = parser.parseFromString(t, 'text/html');
    var dbod = doc.body
    window.open(dbod.getElementsByClassName("btn-download")[0].children[0].href,"_blank")
}
