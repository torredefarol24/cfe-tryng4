import { RouterModule, Routes} from '@angular/router';
import { NgModule} from '@angular/core';

import { SearchDetailComponent } from './search-detail.component';
import { VideoListComponent} from './video-list/video-list.component';
import { VideoDetailComponent} from './video-detail/video-detail.component';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: "videos",
		component: VideoListComponent
	},
	{
		path: "videos/:slug",
		component: VideoDetailComponent
	},
	{
		path: 'search',
		component: SearchDetailComponent
	}
]

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ], 
	exports: [ RouterModule	]
})

export class AppRoutingModule{}