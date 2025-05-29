import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stcOverseas';
  constructor(private route: Router){
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if(navigation && navigation.type === 'reload'){
      this.route.navigate(['/home']);
    }
  }
}
