/**
 * Check if input date is brazilian holiday.
 *
 * @param {Date} input The value to check.
 * @return boolean.
 * @customfunction
 */


function ISFERIADO(input) {
  
  input.setHours(0,0,0,0);
  
  var url = 'http://dadosbr.github.io/feriados/nacionais.json';
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());
  
  for(var i = 0; i < data.length; i++){
    
    var feriadoObj = data[i];
    var feriadoObjDateSplit;
    var feriadoDate;
    
    feriadoObjDateSplit = feriadoObj.date !== '' ? feriadoObj.date.split('/') : (feriadoObj.variableDates[input.getFullYear()]).split('/');
        
    feriadoDate = new Date(input.getFullYear(), parseInt(feriadoObjDateSplit[1], 10) - 1, parseInt(feriadoObjDateSplit[0], 10) - 1);
    feriadoDate.setHours(0,0,0,0);
    
    if(input.getTime() === feriadoDate.getTime())
      break;
  
  }
  
  return input.getTime() === feriadoDate.getTime();
  
}
