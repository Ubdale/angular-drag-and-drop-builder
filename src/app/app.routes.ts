import { Routes } from '@angular/router';
import { PreviewContainerComponent } from './modules/preview-container/preview-container.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { WidgetsSettingsComponent } from './modules/widgets-settings/widgets-settings.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'preview-container', component: PreviewContainerComponent },
      { path: 'sidebar', component: SidebarComponent },
      { path: 'widget-settings', component: WidgetsSettingsComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];
