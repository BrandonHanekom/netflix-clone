export interface Movie {
  id: String;
  name: String;
  genre: String;
  comingSoon: boolean;
  availDate: Date;
  thumbnail: String;
  preview: String;
}

export const movieList: Movie[] = [
  {
    id: '1',
    name: 'Batman',
    genre: 'Action',
    comingSoon: false,
    availDate: new Date(2022, 1, 1),
    preview: 'https://youtu.be/mqqft2x_Aa4',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg',
  },
];
