import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {NgModule} from "@angular/core";
import {NewsPage} from "./customPage";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: NewsPage
            }
        ])
    ],
    declarations: [NewsPage]
})
export class NewsPageModule {}
