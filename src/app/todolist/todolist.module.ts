import {NgModule} from '@angular/core';

import {TableModule} from 'primeng/table';
import {TodolistComponent} from './todolist.component';
import {CommonModule} from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReversePipe} from '../shared/pipes/reverse.pipe';


@NgModule({
  declarations: [
    TodolistComponent,
    ReversePipe
  ],
  exports: [
    TodolistComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule
  ]
})
export class TodolistModule{

}
