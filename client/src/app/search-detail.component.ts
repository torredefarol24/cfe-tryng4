import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
	selector: 'search-detail',
	templateUrl: './search-detail.component.html',
	styleUrls: ['./search-detail.component.css']
})

export class SearchDetailComponent implements OnInit, OnDestroy{
	private routeSub: any;
	query: string;

	constructor(private route: ActivatedRoute) {}

	ngOnInit(){
		this.routeSub = this.route.params.subscribe(params => {
			console.log(params);
			this.query = params['query']
		})
	}

	ngOnDestroy(){
		this.routeSub.unsubscribe();
	}
}