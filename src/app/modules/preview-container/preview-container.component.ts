import { Component, Input, OnInit } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { moveItemInArray, transferArrayItem, CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { DragAndDropServiceService } from '../services/drag-and-drop-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preview-container',
  imports: [FormsModule, DragDropModule],
  templateUrl: './preview-container.component.html',
  styleUrl: './preview-container.component.scss'
})
export class PreviewContainerComponent implements OnInit {
  @Input() connectedTo: string[] = [];
  
  constructor(public dragDropService: DragAndDropServiceService){}
  
  ngOnInit(): void {
    console.log('Preview container initialized:', this.dragDropService.preview);
    console.log('Preview container element:', document.querySelector('[cdkDropListId="preview-list"]'));
  }
  
  onDrop(event: CdkDragDrop<any[]>) {
    console.log('Preview drop event:', event);
    console.log('Previous container:', event.previousContainer);
    console.log('Current container:', event.container);
    
    if (event.previousContainer === event.container) {
      // Reorder within the same container
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // This shouldn't happen with our current setup, but handle it just in case
      console.log('Unexpected drop from different container');
    }
    
    this.dragDropService.logState();
  }
}
