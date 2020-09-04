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
  version = '1.0.0.0';
  constructor(private buildService: TeamCityBuildNumberServiceTsService) {
  }

  ngOnInit() {
    this.getVersion();
  }
  getVersion(): any {
    var storedVeriosn = localStorage.getItem('version');
    if (storedVeriosn !== null || storedVeriosn !== undefined)
      return storedVeriosn;

    let buildNumber: number;
    let version = `${environment.major}.${environment.minor}.${environment.patch}.${environment.buildNumber}`;
    this.version = version;
    console.log("version="+version);
    localStorage.setItem("version", version)
    return version;
  }
  getBuildNumber(){
    return 0;
  }
}
