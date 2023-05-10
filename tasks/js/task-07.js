//01
/*let newWin;
btnWin.onclick = () => {
  newWin = window.open(
    "https://developer.mozilla.org/en-US/docs/Web/API/Window/open",
    "newWin",
    "resizable"
  );
  newWin.resizeTo(300, 300);

  function timeSize() {
    newWin.resizeBy(500, 500);
  }
  window.setTimeout(timeSize, 2000);

  function timeCoordinates() {
    if (newWin) {
      newWin.moveTo(200, 200);
    }
  }
  window.setTimeout(timeCoordinates, 4000);

  function timeClose() {
    if (newWin) {
      newWin.close();
    }
  }
  window.setTimeout(timeClose, 6000);
};

btnWin.onclick = function() {
    const newWin = window.open("https://developer.mozilla.org/en-US/docs/Web/API/Window/open", "newWin", "resizable,width=300,height=300");
    setTimeout(function() {
      newWin.resizeTo(500, 500);
      newWin.moveTo(200, 200);
      setTimeout(function() {
        newWin.close();
      }, 2000);
    }, 2000);
  }*/

//02
/*function changeCSS() {
    const changeStyle = document.querySelector('button');

    changeStyle.onclick = () => {   
        const text = document.querySelector('#text'); 
        text.style.color = 'orange';
        text.style.fontSize = '20px'; 
        text.style.fontFamily = 'Comic Sans MS';
    }
}

changeCSS(); 

//03
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const link = document.getElementById('link');

button1.addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});

button2.addEventListener('dblclick', function() {
    document.body.style.backgroundColor = 'pink';
});

button3.addEventListener('mousedown', function() {
    document.body.style.backgroundColor = 'brown';
});

button3.addEventListener('mouseup', function() {
    document.body.style.backgroundColor = 'white';
});

link.addEventListener('mouseover', function() {
    document.body.style.backgroundColor = 'yellow';
});

link.addEventListener('mouseout', function() {
    document.body.style.backgroundColor = 'white';
});


//04
const deleteButton = document.getElementById("deleteButton");
const mySelect = document.getElementById("mySelect");

deleteButton.onclick = () => {
    const selectedIndex = mySelect.selectedIndex;
    mySelect.options[selectedIndex].remove();
  };

//05
const message = document.getElementById('message');
const myButton = document.getElementById('myButton');

myButton.onclick = () => {
  message.innerText = "I was pressed!";
}

myButton.onmouseover = () => {
  message.innerText = "Mouse on me!";
}

myButton.onmouseout = () => {
  message.innerText = "Mouse is not on me!";
}


//06
const sizesElement = document.getElementById('sizes');

function updateSizes() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  sizesElement.innerText = `Width: ${width}, Height: ${height}`;
}

updateSizes();
window.addEventListener('resize', updateSizes);*/

//07
var cities = {
    jpn: ["Tokio", "Kyoto", "Osaka"],
    usa: ["New York", "Los Angeles", "Chicago"],
    ukr: ["Kyiv", "Lviv", "Dnipro"]
  };
  
  var countrySelect = document.getElementById("country");
  var citySelect = document.getElementById("cities");
  var countryName = document.getElementById("countryName");
  var cityName = document.getElementById("cityName");
  
  countrySelect.addEventListener("change", function() {
    var selectedCountry = countrySelect.value;
    var selectedCities = cities[selectedCountry];

    citySelect.innerHTML = "";

    for (var i = 0; i < selectedCities.length; i++) {
      var option = document.createElement("option");
      option.value = selectedCities[i];
      option.text = selectedCities[i];
      citySelect.appendChild(option);
    }

    countryName.innerHTML = countrySelect.options[countrySelect.selectedIndex].text;
  });
  
  citySelect.addEventListener("change", function() {
    cityName.innerHTML = citySelect.options[citySelect.selectedIndex].text;
  });
  



