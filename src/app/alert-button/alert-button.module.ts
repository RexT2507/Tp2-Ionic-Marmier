import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertButtonComponent } from './alert-button.component';


@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule],
    declarations: [AlertButtonComponent],
    exports: [AlertButtonComponent]
})
export class AlertButtonComponentModule {}
