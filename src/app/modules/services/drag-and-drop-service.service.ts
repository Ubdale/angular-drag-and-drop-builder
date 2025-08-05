import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragAndDropServiceService {

  constructor() { }
  widgets = [
    {
      title: 'Text',
name: 'Text',
icon: 'text_fields',
    },
        {
name: 'Heading',
icon: 'title',
    },
    {
      name: 'Paragraph',
      icon: 'description',
    },

    {
title: 'Interactive',
name: 'Button',
icon: 'drag_click',
    },
    {
      name: 'Link',
      icon: 'link',
    },
    {
      name:'toggle',
      icon: 'toggle_on',
    },
  {
name: 'Checkbox',
icon: 'check_box',
  }
  ,
  {
name: 'Radio',
icon: 'radio_button_checked',
  },
  {
    title: 'Media',
    name: 'Image',
    icon: 'image',
  },
  {
    name: 'Video',
    icon: 'video_library',
  },
  {
name: 'Audio',
icon: 'audiotrack',
  },
  {
    title: 'Forms',
    name: 'Form',
    icon: 'web_asset',
  },
  {
    name: 'Input',
    icon: 'input',
  },
  {
    name: 'Select',
    icon: 'arrow_drop_down_circle',
  },
  {
    title: 'Containers',
    name: 'Container',
    icon: 'view_module',
  },
  {
    name: 'Grid',
    icon: 'grid_view',
  },
  {
    name:'Columns',
    icon: 'view_column',
  },
  {
    name: 'Table',
    icon: 'table_chart',
  },
  {
    title: 'Cards',
    name: 'Card',
    icon: 'credit_card',
  },
  {
    name: 'Card List',
    icon: 'view_list',
  },
  {
    title: 'Charts',
    name: 'Chart',
    icon: 'insert_chart_outlined',
  },
  {
    title: 'Maps',
    name: 'Map',
    icon: 'map'
  }
  ]
    preview: any[] = [];
    
    logState() {
      console.log('Widgets:', this.widgets);
      console.log('Preview:', this.preview);
    }
}
