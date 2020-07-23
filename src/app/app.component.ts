import { NgModule, Component, enableProdMode,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
    
    areas = [
      {
        country: "Russia",
        area: 12,
        type_e : 'sfsdfsdfsdf'
      }, {
          country: "Canada",
          area: 7,
          type_e : 'wrwerwerwerwee'
      }, {
          country: "USA",
          area: 7,
          type_e : 'ghghfghfghfg'
      }, {
          country: "China",
          area: 7,
          type_e : '1'
      }, {
          country: "Brazil",
          area: 6,
          type_e : '1'
      }, {
          country: "Australia",
          area: 5,
          type_e : '1'
      }, {
          country: "India",
          area: 2,
          type_e : '2'
      }]
    ;
grossProductData = [{
    state: "Illinois",
    year1998: 423.721,
    year2001: 476.851,
    year2004: 528.904
}, {
    state: "Indiana",
    year1998: 178.719,
    year2001: 195.769,
    year2004: 227.271
}, {
    state: "Michigan",
    year1998: 308.845,
    year2001: 335.793,
    year2004: 372.576
}, {
    state: "Ohio",
    year1998: 348.555,
    year2001: 374.771,
    year2004: 418.258
}, {
    state: "Wisconsin",
    year1998: 160.274,
    year2001: 182.373,
    year2004: 211.727
}];
dataSource = [{
    day: "13-17",
    oranges: 23,
    apple: 5
}, {
    day: "18-24",
    oranges: 32,
    apple: 4
}, {
    day: "25-34",
    oranges: 43,
    apple: 9
}];

userData = [{
    age: "13-17",
    number: 5900000
}, {
    age: "18-24",
    number: 38250000
}, {
    age: "25-34",
    number: 52820000
}, {
    age: "35-44",
    number: 38420000
}, {
    age: "45-54",
    number: 32340000
}, {
    age: "55-64",
    number: 14060000
}, {
    age: "65+",
    number: 20020000
}];
productionData = [{
        year: 1970,
        country: "Saudi Arabia",
        oil: 192.2
    }, {
        year: 1970,
        country: "USA",
        oil: 533.5
    }, {
        year: 1970,
        country: "Iran",
        oil: 192.6
    }, {
        year: 1970,
        country: "Mexico",
        oil: 24.2
    }, {
        year: 1980,
        country: "Saudi Arabia",
        oil: 509.8
    }, {
        year: 1980,
        country: "USA",
        oil: 480.2
    }, {
        year: 1980,
        country: "Iran",
        oil: 74.3
    }, {
        year: 1980,
        country: "Mexico",
        oil: 107.2
    }, {
        year: 1990,
        country: "Saudi Arabia",
        oil: 342.6
    }, {
        year: 1990,
        country: "USA",
        oil: 416.6
    }, {
        year: 1990,
        country: "Iran",
        oil: 162.8
    }, {
        year: 1990,
        country: "Mexico",
        oil: 146.3
    }, {
        year: 1990,
        country: "Russia",
        oil: 515.9
    }, {
        year: 2000,
        country: "Saudi Arabia",
        oil: 456.3
    }, {
        year: 2000,
        country: "USA",
        oil: 352.6
    }, {
        year: 2000,
        country: "Iran",
        oil: 191.3
    }, {
        year: 2000,
        country: "Mexico",
        oil: 171.2
    }, {
        year: 2000,
        country: "Russia",
        oil: 323.3
    }, {
        year: 2008,
        country: "Saudi Arabia",
        oil: 515.3
    }, {
        year: 2008,
        country: "USA",
        oil: 304.9
    }, {
        year: 2008,
        country: "Iran",
        oil: 209.9
    }, {
        year: 2008,
        country: "Mexico",
        oil: 157.7
    }, {
        year: 2008,
        country: "Russia",
        oil: 488.5
    }, {
        year: 2009,
        country: "Saudi Arabia",
        oil: 459.5
    }, {
        year: 2009,
        country: "USA",
        oil: 325.3
    }, {
        year: 2009,
        country: "Iran",
        oil: 202.4
    }, {
        year: 2009,
        country: "Mexico",
        oil: 147.5
    }, {
        year: 2009,
        country: "Russia",
        oil: 494.2
    }
];
palette_cs = ['red', 'blue', 'green', 'pink', 'purple', 'orange', 'brown', 'yellow'];
type = '1';
    constructor() {
        
    }
    ngOnInit(){
      this.type = '1';
    }

    onPointHoverChanged (e) {
      
        const point = e.target;
        console.log(point);
        console.log(this.type);
        if (point.isHovered()) {
            point.value = point.argument;
            point.showTooltip();
        }else{
          point.hideTooltip();
        }

        
    }
    customizaToooltip(this){
      var type = this.point.data['type_e'];
      console.log(type);

      return {'text' : this.value}

    }
    onPointClick (e) {
        const point = e.target;
        var url_key = point.data.link_key;
        var url = point.data[url_key];
        //window.open(url, '_blank');
        window.open('https://zingnews.vn/', '_blank');
    }
    customizeSeries(valueFromNameField: number) {
        return valueFromNameField === 2009 ? 
            { type: "line", label: { visible: true }, color: "#ff3f7a" } : {};
    }

    
}

// [customizeTooltip]="customizaToooltip"


