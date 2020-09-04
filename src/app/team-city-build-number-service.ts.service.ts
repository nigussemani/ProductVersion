import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import xml2js from 'xml2js';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TeamCityBuildNumberServiceTsService {

  public xmlItems: any;

  constructor(private _http: HttpClient) {
    this.loadXML();
  }

  loadXML() {

    this._http.get('http://hprdbld1/guestAuth/app/rest/builds',
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        responseType: 'text'
      })
      .subscribe((data) => {

        this.parseXML(data)
          .then((data) => {
            this.xmlItems = data;
           // var  jsonFormat = JSON.parse(JSON.stringify(data));
           //console.log(jsonFormat);
           var jsonParse = JSON.parse(JSON.stringify(data));
           console.log("count = "+jsonParse.count)
          });
      });
  }

  parseXML(data) {
    return new Promise(resolve => {
      var k: string | number,
        arr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err, result) {
        var obj = result.builds;

        console.log(obj.build[0].id)
        for (k in obj.build) {
          var item = obj.build[k];
          arr.push({
             item
          });
        }
        resolve(arr);
      });
    });
  }

  getVersion(): any {
    var storedVeriosn = localStorage.getItem('version');
    if (storedVeriosn !== null || storedVeriosn !== undefined)
      return storedVeriosn;

    let buildNumber: number;
    let version = `${environment.major}.${environment.minor}.${environment.patch}.` + this.getBuildNumber();
    localStorage.setItem("version", version)
    return version;
  }
  getBuildNumber(){
    return 0;
  }
}
