import { Lecture, LectureDay } from './lectures.models';

export module Serializer {
	export function deserialize(data: any): Lecture[] {
		if(!data) return [];
		return data.lectures.map(deserializeLecture).filter(Boolean);
	}

	export function deserializeLecture(data: any): Lecture {
		if(!data) return null;
		return {
			id:					data.id,
			name: 				data.name,
			shortName: 			data.shortName,
			lecturer: 			data.lecturer,
			lectureDays: 		Array.isArray(data.lectureDays)? data.lectureDays.map(deserializeLectureDay): [],
			excerciseDays: 		Array.isArray(data.excerciseDays)?data.excerciseDays.map(deserializeLectureDay): [],
			try: 				data.try || 0,
			semester: 			data.semester,
			credits: 			data.credits,
			onSchedule: 		data.onSchedule,
			isMaster: 			data.isMaster,
			inSchedule: 		data.isSchedule || false,
			isDone: 			data.isDone || false
		}
	}

	export function deserializeLectureDay(data: any): LectureDay {
		return {
			begin:				data.begin,
			end:				data.end,
			location:			data.location,
			weekday:			data.weekday
		}
	}
}