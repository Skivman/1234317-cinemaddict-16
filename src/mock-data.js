//Утилитарная функция случайного индекса массива
const getRandomIndex = (arr) => arr[(Math.floor(Math.random() * arr.length))];
//Наименование фильмов
const filmTitles = [
  'The Dance of Life',
  'Sagebrush Trail',
  'The Man with the Golden Arm',
  'Santa Claus Conquers the Martians',
  'Popeye the Sailor Meets Sindbad the Sailor',
  'The Great Flamarion'];
//Постеры фильмов
const posters = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg'
];
//Описание фильмов/комментарии
const descriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'
];

//Путь к смайликам
const emojiForMockComments = [
  'angry.png',
  'puke.png',
  'sleeping.png',
  'smile.png'
];
//Функция отрисовки комментария к карточке фильма
const renderMockComment = () => ({
  img: `/public/images/emoji/${getRandomIndex(emojiForMockComments)}`,
  text: getRandomIndex(descriptions),
  author: author,
  date: date,
});
//Моковая карточка фильма
const renderMockFilmCard = () => ({
  title: getRandomIndex(filmTitles),
  poster: `/public/images/posters/${getRandomIndex(posters)}`,
  description: getRandomIndex(descriptions),
  comments: renderMockComment(),
});

