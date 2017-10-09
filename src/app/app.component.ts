import { Component, OnInit } from '@angular/core';
import * as loan from '@modules/loan';
import * as user from '@modules/user';
import * as hr from '@modules/hr';
import { Observable } from 'rxjs/Rx';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app';

	items$: Observable<any>;

	constructor(
		private userStore: user.Store,
		private hrStore: hr.Store,
	) { }

	ngOnInit() {
		this.items$ = this.hrStore.select(x => x.list23232);

		this.userStore.dispatch({
			type: user.ActionType.LoadList,
			filterName: '',
			filterSurname: ''
		});

		this.hrStore.dispatch({
			type: hr.ActionType.LoadList,
			filterName: '',
			filterSurname: ''
		});
	}
}
