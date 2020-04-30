function stats() {
  //               mame hiscore.dat hi2txt
  // games         nb   nb (%)      nb (%)
  // games parents nb   nb (%)      nb (%)
  // games cloneof nb   nb (%)      nb (%)
  $('#stats').append(''
    +'<table>'
	+'<thead><tr><th></th><th>mame*</th><th class="stats_hiscoredat">hiscore.dat</th><th class="stats_hi2txt">hi2txt</th></tr></thead>'
	+'<tbody>'
	  +'<tr class="stats_all">   <td>games</td>  <td>'+stats_GetGamesNbr()       +'</td><td class="stats_hiscoredat">'+stats_GetGamesWithHiscoreNbr()       +' (<span class="stats_percent">'+stats_GetPercentString(stats_GetGamesWithHiscoreNbr(),       stats_GetGamesNbr())       +'</span>)</td><td class="stats_hi2txt">'+stats_GetGamesWithHi2txtNbr()       +' (<span class="stats_percent">'+stats_GetPercentString(stats_GetGamesWithHi2txtNbr(),       stats_GetGamesNbr())       +'</span>)</td></tr>'
	  +'<tr class="stats_parent"><td>parents</td><td>'+stats_GetGamesNbrParents()+'</td><td class="stats_hiscoredat">'+stats_GetGamesWithHiscoreNbrParents()+' (<span class="stats_percent">'+stats_GetPercentString(stats_GetGamesWithHiscoreNbrParents(),stats_GetGamesNbrParents())+'</span>)</td><td class="stats_hi2txt">'+stats_GetGamesWithHi2txtNbrParents()+' (<span class="stats_percent">'+stats_GetPercentString(stats_GetGamesWithHi2txtNbrParents(),stats_GetGamesNbrParents())+'</span>)</td></tr>'
	  +'<tr class="stats_clone"> <td>clones</td> <td>'+stats_GetGamesNbrClones() +'</td><td class="stats_hiscoredat">'+stats_GetGamesWithHiscoreNbrClones() +' (<span class="stats_percent">'+stats_GetPercentString(stats_GetGamesWithHiscoreNbrClones(), stats_GetGamesNbrClones()) +'</span>)</td><td class="stats_hi2txt">'+stats_GetGamesWithHi2txtNbrClones() +' (<span class="stats_percent">'+stats_GetPercentString(stats_GetGamesWithHi2txtNbrClones(), stats_GetGamesNbrClones()) +'</span>)</td></tr>'
	  +'<tr class="stats_note"><td></td><td colspan="3">*: no preliminary driverstatus / no mechanical / has displaytype<br/> / has coins / no device / no bios / has label /<br/>genre different than casino|electromechanical|handheld<br/>|medal game|misc.|multiplay|quiz|tabletop|utilities</td></tr>');
	+'</tbody>'
    +'</table>'
	
};

function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

function stats_GetGamesNbr()                   { return data.length; }
function stats_GetGamesNbrParents()            { return stats_GetGamesNbr()-stats_GetGamesNbrClones(); }
function stats_GetGamesNbrClones()             { let nb = 0; $.each(data, function(i,v) { if (typeof v.cloneof !== 'undefined') { nb++; } }); return nb; }
function stats_GetGamesWithHiscoreNbr()        { let nb = 0; $.each(data, function(i,v) { if (v.hiscoredat === "yes") { nb++; } }); return nb; }
function stats_GetGamesWithHiscoreNbrParents() { return stats_GetGamesWithHiscoreNbr()-stats_GetGamesWithHiscoreNbrClones(); }
function stats_GetGamesWithHiscoreNbrClones()  { let nb = 0; $.each(data, function(i,v) { if (typeof v.cloneof !== 'undefined' && v.hiscoredat === "yes") { nb++; } }); return nb; }
function stats_GetGamesWithHi2txtNbr()         { let nb = 0; $.each(data, function(i,v) { if (v.hi2txt === "yes") { nb++; } }); return nb; }
function stats_GetGamesWithHi2txtNbrParents()  { return stats_GetGamesWithHi2txtNbr()-stats_GetGamesWithHi2txtNbrClones(); }
function stats_GetGamesWithHi2txtNbrClones()   { let nb = 0; $.each(data, function(i,v) { if (typeof v.cloneof !== 'undefined' && v.hi2txt === "yes") { nb++; } }); return nb; }
function stats_GetPercentString(items, total)  { return ""+round((items * 100 / total), 1)+"%"; }

$(stats());