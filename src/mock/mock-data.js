import dayjs from 'dayjs';

//Утилитарная функция случайного индекса массива
const getRandomIndex = (arr) => arr[(Math.floor(Math.random() * arr.length))];
//Генерация случайного заданного числа
const TIMES = (times) => Math.floor(Math.random() * times);
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

const names = [
  'Bob',
  'Arthur',
  'John',
  'Nigel',
  'Amanda',
  'Prakash',
  'Howard'
];

const surnames = [
  'Johnson',
  'O\'Bryen',
  'Aard',
  'Pickwickston',
  'Patil',
  'Merryweather',
  'Snipperson'
];

const generateName = () => `${getRandomIndex(names)} ${getRandomIndex(surnames)}`;

//Рейтинг
const generateRating = () => (Math.random() * 10).toFixed(1);
//Случайная генерация года
const generateYear = () => {
  const randNum = Math.floor(Math.random() * 90);
  const digits = randNum > 10
    ? `19${randNum}`
    : `190${randNum}`;
  return digits;
};
//Случайная генерация продолжительности
const generateDuration = () => `0${Math.floor(Math.random() * 3)} h ${Math.floor(Math.random() * 59)} min`;
//Жанры
const genres = ['Comedy', 'Musical', 'Horror', 'Western'];

//Генерация комментария
export const generateComment = () => ({
  img: `${getRandomIndex(emojiForMockComments)}`,
  text: getRandomIndex(descriptions),
  author: generateName(),
  date: dayjs().format('DD/MM/YYYY'),
});

// Генерация массива комментариев
export const generateComments = (comment) => Array.from({length: TIMES(5)}, comment(generateComment));


//Моковая карточка фильма
export const renderMockFilmCard = () => ({
  title: getRandomIndex(filmTitles),
  rating: generateRating(),
  year: generateYear(),
  duration: generateDuration(),
  genre: getRandomIndex(genres),
  poster: `${getRandomIndex(posters)}`,
  description: getRandomIndex(descriptions),
  comments: `${Math.floor(Math.random() * 10)} comments`,
});

//Описание структуры данных для попапа
export const renderPopupMockData = (filmCard) => ({
  poster: filmCard.poster,
  age: `1${Math.floor(Math.random() * 10)}+`,
  title: filmCard.title,
  rating: filmCard.rating,
  director: generateName(),
  writers: Array.from({length: TIMES(3)}, generateName),
  actors: Array.from({length: TIMES(4)}, generateName),
  release: filmCard.year,
  runtime: filmCard.duration,
  country: 'The United Regions of the Middle-East South Africa',
  genres: 'genres',
  description: filmCard.description,
});
