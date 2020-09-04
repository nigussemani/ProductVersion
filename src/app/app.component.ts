import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProductVersion';
  version = '1.0.0.0';
  constructor() {
  }

  ngOnInit() {
    this.getVersion();
  }
  getVersion(): any {
    let version = `${environment.major}.${environment.minor}.${environment.patch}.${environment.buildNumber}`;
    this.version = version;
    console.log("version="+version);

    return version;
  }
  getBuildNumber(){
    return 0;
  }
}
