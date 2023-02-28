import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ControlsComponent } from './controls.component';

@NgModule({
  declarations: [ControlsComponent],
  exports: [ControlsComponent],
  imports: [CommonModule, MaterialModule],
})
export class ControlsModule {}
