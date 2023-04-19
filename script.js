//your JS code here. If required.
let list = document.getElementsByTagName("ul")[0].children;
console.log(list);
for(let i =0; i < list.length; i++){
	if(list[i].id === "level"){
		console.log(i+1);
		break;
	}
}