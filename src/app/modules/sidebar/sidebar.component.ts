import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WidgetsComponent } from './widgets/widgets.component';
import { LayersComponent } from './layers/layers.component';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [FormsModule, CommonModule, WidgetsComponent, LayersComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isWidgetButtonActive: boolean = true;
  isLayerButtonsActive: boolean = false;
  widgetsButtonClicked(){
    this.isWidgetButtonActive = true;
    this.isLayerButtonsActive = false;
    console.log('Widgets button clicked');
  }
  layersButtonClicked(){
    this.isLayerButtonsActive = true;
    this.isWidgetButtonActive = false;
    console.log('Layers button clicked');
  }
}
