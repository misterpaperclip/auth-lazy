import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'auth-lazy';
  ngOnInit(): void {
    let expanderScript = document.createElement('script');
    expanderScript.type = 'text/javascript';
    expanderScript.async = true;
    expanderScript.src = 'scripts.js';
    document.body.appendChild(expanderScript);
  }
}
