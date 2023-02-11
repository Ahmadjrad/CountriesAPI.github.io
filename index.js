fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
        for (let i = 0; i < json.length; i++) {

            var y = document.createElement('li')
            
            var content = `<div class="card" style="width:600px" >
            <img class="card-img-top" src="XXX" alt="Card image">
            <div class="card-body">
              <h4 class="card-title">YYY</h4>
              <p class="card-text">ZZZ</p>
              <a href="#" class="btn btn-primary">Click to see the map</a>
            </div>
          </div>`;

            var test = content.replace("XXX",json[i].flags.png)
            

            test = test.replace("YYY",json[i].name.official)
            test = test.replace("ZZZ",json[i].capital + '  '+' / ' + json[i].population + '  '+ ' / '+ json[i].area + '   '+' /' + json[i].region +' / ' + json[i].timezones )
            test = test.replace("#",json[i].maps.googleMaps)
            
            
            y.innerHTML = test;
            y.className = "row col-lg-3 col-md-4 col-sm-6 col-12 "
             document.getElementById('my-ul').appendChild(y);

            // var x = document.createElement('img')
            // x.src = json[i].flag ;
            //  document.getElementById('my-ul').appendChild(x);


}
      }
      )