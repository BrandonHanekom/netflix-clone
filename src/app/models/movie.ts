export interface Movie {
  id: String;
  name: String;
  genre: String;
  comingSoon: boolean;
  availDate: Date;
  thumbnail: String;
  preview: String;
  // banner: String;
}

export const movieList: Movie[] = [
  {
    id: '1',
    name: 'The Batman',
    genre: 'Action',
    comingSoon: false,
    availDate: new Date(2022, 1, 1),
    // banner: 'https://www.hollywoodreporter.com/wp-content/uploads/2022/01/The-Batman-Catwoman-Still-2-Warner-Publicity-H-2022.jpg?w=1296',
    preview: 'https://youtu.be/mqqft2x_Aa4',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg',
  },
  {
    id: '2',
    name: 'Her',
    genre: 'Romance',
    comingSoon: false,
    availDate: new Date(2022, 1, 1),
    preview: 'https://youtu.be/ne6p6MfLBxc',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: '3',
    name: 'Everything Everywhere All at Once',
    genre: 'Sci-fi',
    comingSoon: true,
    availDate: new Date(2022, 11, 11),
    preview: 'https://youtu.be/wxN1T1uxQ2g',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: '4',
    name: 'Mother!',
    genre: 'Thriller',
    comingSoon: false,
    availDate: new Date(2022, 1, 1),
    preview: 'https://youtu.be/XpICoc65uh0',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMzc5ODExODE0MV5BMl5BanBnXkFtZTgwNDkzNDUxMzI@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: '5',
    name: 'Jojo Rabbit',
    genre: 'Comedy',
    comingSoon: false,
    availDate: new Date(2022, 1, 1),
    preview: 'https://youtu.be/tL4McUzXfFI',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg',
  },
  {
    id: '6',
    name: 'Bodies Bodies Bodies',
    genre: 'Horror',
    comingSoon: true,
    availDate: new Date(2022, 11, 11),
    preview: 'https://youtu.be/cTzGKsZjBOY',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BYTA2ODg5ZjgtOTU2My00MzFkLWI0NzMtZmQ5MmRhMWU1NzhlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: '7',
    name: 'Dragonball Super: Broly',
    genre: 'Fantasy',
    comingSoon: false,
    availDate: new Date(2022, 1, 1),
    preview: 'https://youtu.be/nv5FD7NLHCc',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
  },
  {
    id: '8',
    name: 'Arrival',
    genre: 'Sci-fi',
    comingSoon: false,
    availDate: new Date(2022, 1, 1),
    preview: 'https://youtu.be/tFMo3UJ4B4g',
    thumbnail:
      'https://external-preview.redd.it/zceAEjEhXc8XeEKd1d0D_wcSYSVpGc9qctMWdzBrNJk.jpg?auto=webp&s=902a5e3efeb70292713aaaa48f494fe0f8eae824',
  },
  {
    id: '9',
    name: 'The Northman',
    genre: 'Adventure',
    comingSoon: true,
    availDate: new Date(2022, 11, 11),
    preview: 'https://youtu.be/oMSdFM12hOw',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg',
  },
  {
    id: '10',
    name: 'Dune',
    genre: 'Sci-fi',
    comingSoon: false,
    availDate: new Date(2022, 1, 1),
    preview: 'https://youtu.be/8g18jFHCLXk',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: '11',
    name: 'Akira',
    genre: 'Sci-fi',
    comingSoon: false,
    availDate: new Date(2022, 1, 1),
    preview: 'https://youtu.be/nA8KmHC2Z-g',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_.jpg',
  },
  {
    id: '12',
    name: 'X',
    genre: 'Horror',
    comingSoon: true,
    availDate: new Date(2022, 11, 11),
    preview: 'https://youtu.be/Awg3cWuHfoc',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMTJiMmE5YWItOWZjYS00YTg0LWE0MTYtMzg2ZTY4YjNkNDEzXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg',
  },
  {
    id: '13',
    name: 'Pearl',
    genre: 'Horror',
    comingSoon: true,
    availDate: new Date(2022, 11, 11),
    preview: 'https://youtu.be/L5PW5r3pEOg',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BZTFkNmE5MjUtZDE1Yi00ZmQyLTk2YWUtN2EwODA1ZmNlOTA5XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: '14',
    name: 'Scott Pilgrim vs. the World',
    genre: 'Action',
    comingSoon: true,
    availDate: new Date(2022, 1, 1),
    preview: 'https://youtu.be/7wd5KEaOtm4',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMTkwNTczNTMyOF5BMl5BanBnXkFtZTcwNzUxOTUyMw@@._V1_.jpg',
  },
  {
    id: '15',
    name: 'Eternal Sunshine of the Spotless Mind',
    genre: 'Romance',
    comingSoon: false,
    availDate: new Date(2022, 1, 1),
    preview: 'https://youtu.be/07-QBnEkgXU',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg',
  },
  {
    id: '16',
    name: 'Perfect Blue',
    genre: 'Thriller',
    comingSoon: true,
    availDate: new Date(2022, 11, 11),
    preview: 'https://youtu.be/Olsdzqe2y9Y',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMmMzOWNhNTYtYmY0My00OGJiLWIzNDUtZWRhNGY0NWFjNzFmXkEyXkFqcGdeQXVyNjUxMDQ0MTg@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: '17',
    name: 'The Breakfast Club',
    genre: 'Drama',
    comingSoon: true,
    availDate: new Date(2022, 11, 11),
    preview: 'https://youtu.be/BSXBvor47Zs',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BOTM5N2ZmZTMtNjlmOS00YzlkLTk3YjEtNTU1ZmQ5OTdhODZhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
  },
  {
    id: '18',
    name: 'Lamb',
    genre: 'Horror',
    comingSoon: true,
    availDate: new Date(2022, 1, 1),
    preview: 'https://youtu.be/hnEwJKVWjFM',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BZTdhMmZhNGEtODA5My00NzhiLWJiN2YtMjIxNDc2Y2U1OGZlXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_.jpg',
  },
  {
    id: '19',
    name: 'Possession',
    genre: 'Horror',
    comingSoon: false,
    availDate: new Date(2022, 1, 1),
    preview: 'https://youtu.be/uDpFpzbwfiw',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BYWZlNmUwMjUtMzM2MC00MDkxLWIwYWEtMGIyMjUxZDRkYTNiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: '20',
    name: ' Isle of Dogs',
    genre: 'Animation',
    comingSoon: true,
    availDate: new Date(2022, 11, 11),
    preview: 'https://youtu.be/dt__kig8PVU',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BZDQwOWQ2NmUtZThjZi00MGM0LTkzNDctMzcyMjcyOGI1OGRkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
  },
];
