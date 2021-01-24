$("#choice").change(function(){
  $("#table tbody tr").hide();
  $("#table tbody tr."+$(this).val()).show('fast');
});

$("#table").tablesorter( {sortList: [[0,0]]} );