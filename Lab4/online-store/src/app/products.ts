export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 14 Pro Max 1Tb фиолетовый',
    price: 966323,
    description: 'Front camera: 12 MP, 23 mm (eq.), f/1.9; support 4G and 5G, Wi-Fi 6, Bluetooth 5.0, Lightning; A-GPS, GLONASS, GALILEO, BDS, QZSS; battery 4323 mAh, non-removable, supports fast wired charging 18 W, wireless charging MagSafe 15 watts.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hda/ha0/62948782342174/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-1.jpg',
    kaspi: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-fioletovyi-106363345/?c=750000000',
    rating: 3
  },
  {
    id: 2,
    name: 'Apple MacBook Pro 13 MNEH3 серый',
    price: 698959,
    description: 'The first chip designed specifically for Mac. Amazingly, the system on the Apple M1 chip accommodates 16 billion transistors and combines the central and graphics processors, the Neural Engine system, I/O controllers and many other components.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h37/hd2/51918241038366/apple-macbook-pro-13-mneh3-seryi-105514238-1.jpg',
    kaspi: 'https://kaspi.kz/shop/p/apple-macbook-pro-13-mneh3-seryi-105514238/?c=750000000#!/item',
    rating: 5
  },
  {
    id: 3,
    name: 'Apple AirPods Max розовый',
    price: 369990,
    description: 'The Apple AirPods Max Bluetooth headset will be able to completely change your idea of full-size headphones. This model has been developed using first-class materials and advanced technologies. It is based on the Apple H1 processor and proprietary dynamic drivers, among the advantages of which high operating parameters can be noted.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h3d/he5/33881190039582/apple-airpods-max-rozovyj-101161561-1-Container.jpg',
    kaspi: 'https://kaspi.kz/shop/p/apple-airpods-max-rozovyi-101161561/?c=750000000#!/item',
    rating: 4
  },
  {
    id: 4,
    name: 'Apple iPhone 13 128Gb синий',
    price: 368111,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h4f/h4b/46392661671966/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg',
    kaspi: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000#!/item',
    rating: 5
  },
  {
    id: 5,
    name: 'Marshall Major IV черный',
    price: 113400,
    description: 'Major IV обеспечивает фирменный звук Marshall, который вы привыкли ожидать. Более 55 лет знаний упакованы в Major IV для взрывного звучания. Специально настроенные динамические драйверы воспроизводят ревущие басы, плавные средние частоты и блестящие высокие частоты для богатого, непревзойденного звука, который вам никогда не захочется выключать.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h21/64344048762910.jpg?format=preview-medium',
    kaspi: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000',
    rating: 4
  },
  {
    id: 6,
    name: 'Lenovo Legion 5 17ACH6 82K000ACRK темно-синий',
    price: 609990,
    description: 'Добейтесь успеха в любом соревновании и займите верхние строчки списка лидеров с помощью игровых ноутбуков Legion серии 5. Выберите из множества высокопроизводительных компонентов, скрытых в изящном минималистичном корпусе, который подойдет к вашему образу жизни.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h5f/h3d/63819285757982.jpg?format=preview-medium',
    kaspi: 'https://kaspi.kz/shop/p/lenovo-legion-5-17ach6-82k000acrk-temno-sinii-107130212/?c=750000000',
    rating: 5
  },{
    id: 7,
    name: 'Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 389800,
    description: 'Благодаря высокой четкости IPS-дисплея Full HD с диагональю 17,3 или 15,6" вы не упустите ни одной детали в игре. Частота обновления 144 Гц1 и время отклика 3 мс2 обеспечивают максимально плавный геймплей. Благодаря узкой рамке 7,02 мм1 соотношение размеров экрана и корпуса увеличено до 80%.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h9b/h1b/67236399120414/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    kaspi: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    rating: 5
  },
  {
    id: 8,
    name: 'Samsung Galaxy S23 Ultra 5G 12 ГБ/512 ГБ зеленый',
    price: 749890,
    description: 'Размер экрана: По диагонали размер экрана Galaxy S23 составляет 6,1" в полном прямоугольнике и 5,9" с учетом закругленных углов, размер экрана Galaxy S23+ составляет 6,6" в полном прямоугольнике и 6,4" с учетом закругленных углов и размер экрана Galaxy S23 Ultra составляет 6,8" в полном прямоугольнике и 6,8" с учетом закругленных углов.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h9e/68538744602654.jpg?format=preview-medium',
    kaspi: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-5g-12-gb-512-gb-zelenyi-podarok-108714425/?c=750000000#!/item',
    rating: 5
  },
  {
    id: 9,
    name: 'HP Victus 16-e0008ur 489H1EA темно-серый',
    price: 569900,
    description: 'Ноутбук Victus от HP с диагональю 16.1 дюйма, оснащенный процессором AMD, обладает всеми необходимыми функциями как для игр, так и для решения повседневных задач. Расширь свои возможности с помощью универсальной игровой клавиатуры и наслаждайся качественным изображением на экране с высокой частотой обновления.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/he5/66102705913886.jpg?format=preview-medium',
    kaspi: 'https://kaspi.kz/shop/p/hp-victus-16-e0008ur-489h1ea-temno-seryi-107706136/?c=750000000',
    rating: 5
  },
  {
    id: 10,
    name: 'Apple AirPods Pro 2nd generation белый',
    price: 117990,
    description: 'Удерживайте датчик нажатия, чтобы переключиться с режима активного шумоподавления на Прозрачный режим, и вы будете слышать всё так, словно на вас нет наушников. Силиконовые вкладыши представлены в трёх размерах. Выберите тот, который подходит вам лучше всего. А отверстия во вкладышах позволяют выравнять давление с обеих сторон наушников.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h39/hbd/62281477128222/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg',
    kaspi: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000',
    rating: 5
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/