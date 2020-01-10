import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRouting } from './main.routing';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatButtonModule, MatCardModule, MatProgressBarModule, MatTooltipModule, MatDialogModule, MatTableModule } from '@angular/material';
import { ServicesModule } from './services/services.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatDialogModule,
    ServicesModule,
    MatTableModule
  ],
  declarations: [MainComponent, HomeComponent],
  providers: []
})
export class MainModule { }
