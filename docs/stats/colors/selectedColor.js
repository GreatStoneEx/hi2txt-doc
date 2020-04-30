function colorRows() {
  $("tr").each(function(){
	  
	// hi2txt
    var col_val = $(this).find("td:eq(8)").text();
    if (col_val == "yes"){
      $(this).addClass('hi2txt');
    } else {
      $(this).removeClass('hi2txt');
	  var col_val = $(this).find("td:eq(7)").text();
	  if (col_val == "yes"){
        $(this).addClass('hiscoredat');
      } else {
		$(this).removeClass('hiscoredat');
	  }
    }
	
	// hi2txt parent
	var col = $(this).find("td:eq(9)");
	col_val = col.text();
	if (col_val == "yes"){
      col.addClass('hi2txtparent');
    } else {
	  col.removeClass('hi2txtparent');
	}
  });
};