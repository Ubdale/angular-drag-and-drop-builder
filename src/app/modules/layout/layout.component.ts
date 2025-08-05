import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { WidgetsSettingsComponent } from '../widgets-settings/widgets-settings.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-layout',
  imports: [SidebarComponent, WidgetsSettingsComponent,HeaderComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
