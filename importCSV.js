function csvJSON(csv) {
  return fetch(csv)
    .then((response) => response.text())
    .then(function (text) {
      // from http://techslides.com/convert-csv-to-json-in-javascript
      var lines = text.split("\n");
      var result = [];
      var headers = lines[0].split(",").map(function(item) {
        return item.trim();
      });;
      for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",").map(function(item) {
            if(isNaN(item)){
                return item.trim();
            } else {
                return Number(item)
            }
            
          });;

        for (var j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
        }
        result.push(obj);
      }

      return result; //JSON
    });
}

export default csvJSON;
