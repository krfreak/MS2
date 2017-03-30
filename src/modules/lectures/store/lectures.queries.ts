import { createSelector } from 'reselect';

import { Lecture } from '../core';

import { Selectors } from './lectures.selectors';

export module Queries {
	export const getEntities = Selectors.getEntities;
	export const getSelectedEntities = Selectors.getSelectedEntities;

	export const getLectures = createSelector(getEntities, entities => Object.keys(entities).map(id => entities[id]))
	export const getSelectedLectures = createSelector(getSelectedEntities, entities => Object.keys(entities).map(id => entities[id]))

	export const getMasterLectures = createSelector(getLectures, lectures => lectures.filter(lecture => lecture.isMaster));
	export const getBachelorLectures = createSelector(getLectures, lectures => lectures.filter(lecture => !lecture.isMaster));

	function transformEntities(entities: Lecture[]): Lecture[][] {
		return entities.reduce((terms, entity) => {
			let semesterIndex = entity.semester - 1;
			terms[semesterIndex] = (terms[semesterIndex] || []).concat(entity);
			return <Lecture[][]>terms;
		}, []);
	}

	export const getMasterSemesters = createSelector(getMasterLectures, transformEntities);
	export const getBachelorSemesters = createSelector(getBachelorLectures, transformEntities);
}