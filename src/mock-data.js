const getRandomIndex = (arr) => arr[(Math.floor(Math.random() * arr.length))];

const filmNames = [
'The Dance of Life', 
'Sagebrush Trail',
'The Man with the Golden Arm',
'Santa Claus Conquers the Martians',
'Popeye the Sailor Meets Sindbad the Sailor',
'The Great Flamarion'];

const posters = [
    'made-for-each-other.png',
    'popeye-meets-sinbad.png',
    'sagebrush-trail.jpg',
    'santa-claus-conquers-the-martians.jpg',
    'the-dance-of-life.jpg',
    'the-great-flamarion.jpg',
    'the-man-with-the-golden-arm.jpg'
]

const getMockFilmCard = () => ({
    name: getRandomIndex(filmNames),
    poster: `/piblic/images/posters/${getRandomIndex(posters)}`,
    description: description,
    comments: comments,
});
