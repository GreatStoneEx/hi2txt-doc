const fs = require("fs")
let data = require("./tmp_metadata/data.json");

for(var j = 0; j < data.length; j++) {
	let item = data[j];
    let cloneof = item.cloneof;
	console.log("item "+item.name);
	if (typeof cloneof != 'undefined') {
	  for(var i = 0; i < data.length; i++) {
		let parentitem = data[i];
		let parentname = parentitem.name;
		if (typeof parentname != 'undefined') {
		  if (parentname === cloneof) {
			console.log("  parent "+parentname);
		    if (typeof parentitem.hi2txt != 'undefined') {
			  if (parentitem.hi2txt === 'yes') {
				console.log("     hi2txt = yes!");
			    item["hi2txtparent"] = "yes";
			  }
		    }
			break;
		  }
		}
	  }
	}
}

let dataStr = JSON.stringify(data);
fs.writeFileSync('./tmp_metadata/data_h2tp.json', dataStr);
