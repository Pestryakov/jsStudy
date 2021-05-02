'use strict';

const numberOfFilms = +prompt('Сколько фильмоы вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
	  b = +prompt('На сколько вы оцените его?',''),
	  a1 = prompt('Один из последних просмотренных фильмов?',''),
	  b1 = +prompt('На сколько вы оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[a1] = b1;

console.log(personalMovieDB);