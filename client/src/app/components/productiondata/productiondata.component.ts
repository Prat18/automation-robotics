import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-productiondata',
  templateUrl: './productiondata.component.html',
  styleUrls: ['./productiondata.component.css']
})
export class ProductiondataComponent implements OnInit {

  domain = "http://localhost:8080";
  sensordata;
  solenoidvalue;
  result;

  constructor(
    private http: Http
  ) { }

  mc4Data(){
    console.log('function called');
    this.result = this.http.get(this.domain + '/productiondata/mc4data').map(res => res.json()).subscribe(result => {
      this.sensordata = result.data.sensordata;
      this.solenoidvalue = result.data.solenoidvalue;
    });
    console.log(this.result);
  }

  ngOnInit() {
  }

}
