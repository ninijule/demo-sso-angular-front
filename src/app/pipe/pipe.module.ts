import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EnumToArrayPipe} from './EnumToArray/enum-to-array.pipe';


@NgModule({
  declarations: [EnumToArrayPipe],
  imports: [
    CommonModule
  ],
  exports: [EnumToArrayPipe]
})
export class PipeModule {
}
