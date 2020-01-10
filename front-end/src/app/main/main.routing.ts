import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent} from './main.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'main', 
        component: MainComponent,
        canActivate: [],
        canActivateChild: [],
        children: [
          {
            path: '**',
            component: HomeComponent
          },
          {
            path: 'home',
            component: HomeComponent
          }
        ]
      }
    ])
  ]
})
export class MainRouting { }