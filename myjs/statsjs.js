'use strict';

(async () => {

  var getQueryString = function (field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
  };
  var searchin = getQueryString('search');

  document.getElementById("thead").innerHTML='Search results for "'+searchin+'"';
  var response = await fetch('https://coronavirus-19-api.herokuapp.com/countries/'+searchin);
  var text = await response.text(); // read response body as text
  console.log(text);
  var y = JSON.parse(text);
  // console.log(y);
  var p = "<thead><tr><th>Country</th><th>Total cases</th><th>Currently infected</th><th>Total recovered</th><th>Deaths</th></tr></thead><tfoot><tr><th>Country</th><th>Total cases</th><th>Currently infected</th><th>Total recovered</th><th>Deaths</th></tr></tfoot><tbody>";

  
    var m = y;
    p += "<tr>" + "<td>" +m.country + "</td>";
    p += "<td>" + value_to_indian_format(m.cases) + "</td>";
    p += "<td>" + value_to_indian_format(m.active) + "</td>";
    p += "<td>" + value_to_indian_format(m.recovered) + "</td>";
    p += "<td>" + value_to_indian_format(m.deaths) + "</td></tr>";
  p += "</tbody";
  document.getElementById("dataTable").innerHTML = p;
  document.getElementById("hide").style.display="none";

})()

function value_to_indian_format(x)
        {
            x=x.toString();
            var lastThree = x.substring(x.length-3);
            var otherNumbers = x.substring(0,x.length-3);
            if(otherNumbers != '')
                lastThree = ',' + lastThree;
            var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
            return res;
        } 