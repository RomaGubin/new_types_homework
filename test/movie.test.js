import Movie from "../dist/movie.js";

test('true Move', () => {
  const myMovie = new Movie(2022, 'USA', 'Exciting Movie', 'Action', '2 hours 30 minutes');
  const correct = {
    year: 2022,
    country: 'USA',
    tagline: 'Exciting Movie',
    genre: 'Action',
    time: '2 hours 30 minutes'
  };
  expect(myMovie).toEqual(correct);
});