import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Slides } from 'ionic-angular';

import { LecturesService } from '../../../../../modules';

@Component({
  selector: 'schedule-page',
  templateUrl: './schedule.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchedulePage {
	private weekdays = [
		'Sonntag',
		'Montag',
		'Dienstag',
		'Mittwoch',
		'Donnerstag',
		'Freitag',
		'Samstag',
	];
	public weekday: number = 1;

	public get weekdayName() {
		return this.weekdays[this.weekday];
	}

	public get schedule$() {
		return this.lectureService.schedule$;
	}

	constructor(private lectureService: LecturesService) { }

	public onTabChanged(slides: Slides) {
		this.weekday = slides.getActiveIndex();
	}
}