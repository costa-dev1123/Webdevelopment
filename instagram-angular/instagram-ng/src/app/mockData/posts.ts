import { Post } from "../models/post";

export const asyncPost:Promise<Post[]> = new Promise((res, err) => {
    setTimeout(() => {
        res( [
        {
          id: 1,
          username: 'Gaetano35',
          caption: 'una giornata al mare',
          imageUrl:
            'https://fastly.picsum.photos/id/867/300/300.jpg?hmac=TL2swloTIX5lSTOeY-d2pw4XeXf1IZUIcnxm_BTMQN4',
          likes: 4,
        },
        {
          id: 2,
          username: 'Claudio',
          caption: 'La stella polare',
          imageUrl:
            'https://fastly.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw',
          likes: 14
        },
        {
          id: 3,
          username: 'Bea.md',
          caption: 'La cena con gli amici',
          imageUrl:
            'https://fastly.picsum.photos/id/715/300/300.jpg?hmac=UFdEVTCSZrnJwNSzuBNEm3GEgXECpgVbT7yI0G5B3FI',
          likes: 19,
        },
        {
          id: 4,
          username: 'Stella123',
          caption: 'La lezione di Angular',
          imageUrl:
            'https://fastly.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw',
          likes: 28,
        },
        {
          id: 5,
          username: 'Caterina23',
          caption: 'Giornata di trekking',
          imageUrl:
            'https://fastly.picsum.photos/id/349/300/300.jpg?hmac=uvPLM0kbbr6_7o2w9DcN9U7p_ya-ULS4nk2TsqMC_Yg',
          likes: 37,
        },
        {
          id: 6,
          username: 'BigBomb',
          caption: 'Colazione salata',
          imageUrl:
            'https://fastly.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw',
          likes: 55,
        },
        {
          id: 7,
          username: 'theKing',
          caption: 'Passeggiando con il cane',
          imageUrl:
            'https://fastly.picsum.photos/id/255/300/300.jpg?hmac=QxfsIiykfTsjB8MvnRnreWtxjaljFdMoZEmQ8Qz0ao0',
          likes: 37,
        },
      ]);
    }, 1000); 
})

export const posts:Post[] = [
    {
      id: 1,
      username: 'Gaetano35',
      caption: 'una giornata al mare',
      imageUrl:
        'https://fastly.picsum.photos/id/867/300/300.jpg?hmac=TL2swloTIX5lSTOeY-d2pw4XeXf1IZUIcnxm_BTMQN4',
      likes: 4,
    },
    {
      id: 2,
      username: 'Claudio',
      caption: 'La stella polare',
      imageUrl:
        'https://fastly.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw',
      likes: 14
    },
    {
      id: 3,
      username: 'Bea.md',
      caption: 'La cena con gli amici',
      imageUrl:
        'https://fastly.picsum.photos/id/715/300/300.jpg?hmac=UFdEVTCSZrnJwNSzuBNEm3GEgXECpgVbT7yI0G5B3FI',
      likes: 19,
    },
    {
      id: 4,
      username: 'Stella123',
      caption: 'La lezione di Angular',
      imageUrl:
        'https://fastly.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw',
      likes: 28,
    },
    {
      id: 5,
      username: 'Caterina23',
      caption: 'Giornata di trekking',
      imageUrl:
        'https://fastly.picsum.photos/id/349/300/300.jpg?hmac=uvPLM0kbbr6_7o2w9DcN9U7p_ya-ULS4nk2TsqMC_Yg',
      likes: 37,
    },
    {
      id: 6,
      username: 'BigBomb',
      caption: 'Colazione salata',
      imageUrl:
        'https://fastly.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw',
      likes: 55,
    },
    {
      id: 7,
      username: 'theKing',
      caption: 'Passeggiando con il cane',
      imageUrl:
        'https://fastly.picsum.photos/id/255/300/300.jpg?hmac=QxfsIiykfTsjB8MvnRnreWtxjaljFdMoZEmQ8Qz0ao0',
      likes: 37,
    },
  ];