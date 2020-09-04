import {Component, OnInit} from '@angular/core';
import {TeamCityBuildNumberServiceTsService} from "./team-city-build-number-service.ts.service";
import {environment} from "../environments/environment";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProductVersion';

  constructor(private buildService: TeamCityBuildNumberServiceTsService) {
  }

  ngOnInit() {
    // this.buildService.loadXML();
  }
  getVersion(): any {
    var storedVeriosn = localStorage.getItem('version');
    if (storedVeriosn !== null || storedVeriosn !== undefined)
      return storedVeriosn;

    let buildNumber: number;
    let version = `${environment.major}.${environment.minor}.${environment.patch}.${environment.buildNumber}`;
    console.log("version="+version);
    localStorage.setItem("version", version)
    return version;
  }
  getBuildNumber(){
    return 0;
  }
}
