module.exports = {
  places: [
    { id: 100, titulo: "Mexico", imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Mexico_%281934%E2%80%931968%29.png' },
    { id: 101, titulo: "Mexico", imagen: 'https://cdn.pixabay.com/photo/2017/01/25/10/04/usa-2007460_960_720.jpg' },
    { id: 102, titulo: "Italia", imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png' }
  ],
  photos: [
    {
      id: 200,
      place_id: 100,
      images: [
        'https://picsum.photos/200/300.jpg',
        'https://picsum.photos/200/300.jpg',
        'https://picsum.photos/200/300.jpg',
        'https://picsum.photos/200/300.jpg',
        'https://picsum.photos/200/300.jpg',
        'https://picsum.photos/200/300.jpg',
      ]
    },
    {
      id: 201,
      place_id: 101,
      images: [
        'https://picsum.photos/200/300.jpg',
        'https://picsum.photos/200/300.jpg',
        'https://picsum.photos/200/300.jpg',
        'https://picsum.photos/200/300.jpg',
        'https://picsum.photos/200/300.jpg',
        'https://picsum.photos/200/300.jpg',
      ]
    },
    {
      id: 203,
      place_id: 102,
      images: [
        'https://picsum.photos/200/300.jpg',
        'https://picsum.photos/200/300.jpg',
        'https://picsum.photos/200/300.jpg',
        'https://picsum.photos/200/300.jpg',
        'https://picsum.photos/200/300.jpg',
        'https://picsum.photos/200/300.jpg',
      ]
    },
  ]
}
