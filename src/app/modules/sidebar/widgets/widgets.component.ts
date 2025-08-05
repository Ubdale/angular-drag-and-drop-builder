import { Component, Input, OnInit } from '@angular/core';
import { DragAndDropServiceService } from '../../services/drag-and-drop-service.service';
import { CdkDrag, CdkDragDrop, CdkDropList, DragDropModule, transferArrayItem, copyArrayItem, CdkDragStart, CdkDragEnd } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-widgets',
  imports: [FormsModule, CdkDropList, CdkDrag, DragDropModule],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.scss'
})
export class WidgetsComponent implements OnInit {
  @Input() connectedTo: string[] = [];
  private draggedWidget: any = null;

  constructor(public dragDropService: DragAndDropServiceService) { }
  
  ngOnInit(): void {
    console.log('Widgets component initialized');
    console.log('Widgets container element:', document.querySelector('[cdkDropListId="widgets-list"]'));
    console.log('Available drop lists:', document.querySelectorAll('[cdkDropListId]'));
  }
  
  onDragStarted(event: CdkDragStart, widget: any) {
    console.log('Drag started for widget:', widget);
    this.draggedWidget = widget;
  }
  
  onDragEnded(event: CdkDragEnd) {
    console.log('Drag ended:', event);
    console.log('Drop point:', event.dropPoint);
    
    // Check if the drop point is within the preview container
    const previewElement = document.querySelector('.preview-container');
    if (previewElement && this.draggedWidget) {
      const rect = previewElement.getBoundingClientRect();
      const dropPoint = event.dropPoint;
      
      if (dropPoint.x >= rect.left && dropPoint.x <= rect.right &&
          dropPoint.y >= rect.top && dropPoint.y <= rect.bottom) {
        console.log('Widget dropped in preview area!');
        this.dragDropService.preview.push({...this.draggedWidget});
        this.dragDropService.logState();
      }
    }
    
    this.draggedWidget = null;
  }
  
  onDrop(event: CdkDragDrop<any[]>) {
    console.log('Widgets drop event:', event);
    console.log('Previous container:', event.previousContainer);
    console.log('Current container:', event.container);
    console.log('Is pointer over container:', event.isPointerOverContainer);
    
    if (event.previousContainer === event.container) return;

    // Manually copy the widget to preview
    const widgetToCopy = event.previousContainer.data[event.previousIndex];
    this.dragDropService.preview.push({...widgetToCopy});
    
    console.log('Copied widget:', widgetToCopy);
    this.dragDropService.logState();
  }
}
