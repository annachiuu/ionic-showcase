import { NgModule } from '@angular/core';
import { ReviewsComponent } from './reviews/reviews';
import { PhotosComponent } from './photos/photos';
@NgModule({
	declarations: [ReviewsComponent,
    PhotosComponent],
	imports: [],
	exports: [ReviewsComponent,
    PhotosComponent]
})
export class ComponentsModule {}
