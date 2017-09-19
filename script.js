var app = {
  
  
  
  sumup: function(num) {
    var result = 0;
    for (i = 0; i <= num; i++) {
      result += i;
    }
    return result;
  },
  
};


var handlers = {
  sendNum: function() {
    var usernumber = document.getElementById('userInput').valueAsNumber;
    var result = app.sumup(usernumber);
    view.showResult(usernumber,result);
  }
};


var view = {
  showResult :  function(usernumber,result) {
    var grabDiv = document.getElementById('resultbox');
    grabDiv.innerHTML = '';
    var writeResult = document.createTextNode("La suma de todos los números de 0 a " + usernumber + " es: " + result);
    grabDiv.appendChild(writeResult);
    
  }
}