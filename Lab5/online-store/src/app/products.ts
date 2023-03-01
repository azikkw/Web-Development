export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  kaspi: string;
  rating: number;
  category: string;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 14 Pro Max 1Tb фиолетовый',
    price: 966323,
    description: 'Front camera: 12 MP, 23 mm (eq.), f/1.9; support 4G and 5G, Wi-Fi 6, Bluetooth 5.0, Lightning; A-GPS, GLONASS, GALILEO, BDS, QZSS; battery 4323 mAh, non-removable, supports fast wired charging 18 W, wireless charging MagSafe 15 watts.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hda/ha0/62948782342174/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-1.jpg',
    kaspi: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-fioletovyi-106363345/?c=750000000',
    rating: 3,
    category: 'smartphone',
    likes: 204
  },
  {
    id: 2,
    name: 'Apple MacBook Pro 13 MNEH3 серый',
    price: 698959,
    description: 'The first chip designed specifically for Mac. Amazingly, the system on the Apple M1 chip accommodates 16 billion transistors and combines the central and graphics processors, the Neural Engine system, I/O controllers and many other components.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h37/hd2/51918241038366/apple-macbook-pro-13-mneh3-seryi-105514238-1.jpg',
    kaspi: 'https://kaspi.kz/shop/p/apple-macbook-pro-13-mneh3-seryi-105514238/?c=750000000#!/item',
    rating: 5,
    category: 'laptop',
    likes: 57
  },
  {
    id: 3,
    name: 'Apple AirPods Max розовый',
    price: 369990,
    description: 'The Apple AirPods Max Bluetooth headset will be able to completely change your idea of full-size headphones. This model has been developed using first-class materials and advanced technologies. It is based on the Apple H1 processor and proprietary dynamic drivers, among the advantages of which high operating parameters can be noted.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h3d/he5/33881190039582/apple-airpods-max-rozovyj-101161561-1-Container.jpg',
    kaspi: 'https://kaspi.kz/shop/p/apple-airpods-max-rozovyi-101161561/?c=750000000#!/item',
    rating: 4,
    category: 'headphones',
    likes: 51
  },
  {
    id: 4,
    name: 'Apple iPhone 13 128Gb синий',
    price: 368111,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.   Apple разработали совершенно новую схему расположения камер и развернули объективы на 45 градусов. Благодаря этому внутри корпуса поместилась лучшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, освободилось место для системы оптической стабилизации изображения со сдвигом матрицы, и увеличилась скорость работы матрицы на сверхширокоугольной камере. Новая сверхширокоугольная камера видит больше деталей в темных областях снимка. Сверхширокоугольная камера также обеспечивает большое поле обзора, даже когда вы находитесь очень близко к объекту съемки. Поэтому вам не придется отступать назад, чтобы в кадр попало все, что нужно.   Просто начните запись видео. Режим «Киноэффект» будет удерживать фокус на объекте съемки, создавая красивый эффект размытия вокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в кадре. Теперь ваши видео будут смотреться как настоящее кино. Ночной режим автоматически регулирует параметры съемки. Даже при слабом освещении получаются яркие, четкие фотографии с невероятно насыщенными цветами. Режим «Портрет» художественно размывает фон, чтобы привлечь больше внимания к объекту съемки. Шесть эффектов освещения откроют широкий простор для творчества. Теперь режим Smart HDR 4 распознает до четырех людей в кадре и оптимизирует контрастность, освещение и даже тон кожи индивидуально. С ним каждый будет выглядеть наилучшим образом. Технология Deep Fusion помогает при среднем и низком уровне освещения. Она анализирует каждый пиксель на нескольких снимках, сделанных с различной экспозицией, чтобы на итоговом фото были видны едва различимые текстуры, тончайшие узоры и мельчайшие детали. Фотографические стили позволяют сделать ваши фото более выразительными. Но, в отличие от фильтров, стили применяются индивидуально для каждой области фотографии, не изменяя тон кожи людей. Процессор A15 Bionic и камера TrueDepth также обеспечивают работу Face ID, невероятно надежной технологии аутентификации. Объем встроенной памяти iPhone 13 составляет 128 ГБ — места хватит для всех важных фото и видео. Apple iPhone 13 работает от аккумулятора на 2.5 часа дольше предыдущих версий.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h4f/h4b/46392661671966/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg',
    kaspi: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000#!/item',
    rating: 5,
    category: 'smartphone',
    likes: 191
  },
  {
    id: 5,
    name: 'Marshall Major IV черный',
    price: 113400,
    description: 'Major IV обеспечивает фирменный звук Marshall, который вы привыкли ожидать. Более 55 лет знаний упакованы в Major IV для взрывного звучания. Специально настроенные динамические драйверы воспроизводят ревущие басы, плавные средние частоты и блестящие высокие частоты для богатого, непревзойденного звука, который вам никогда не захочется выключать.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h21/64344048762910.jpg?format=preview-medium',
    kaspi: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000',
    rating: 4,
    category: 'headphones',
    likes: 37
  },
  {
    id: 6,
    name: 'Lenovo Legion 5 17ACH6 82K000ACRK темно-синий',
    price: 609990,
    description: 'Добейтесь успеха в любом соревновании и займите верхние строчки списка лидеров с помощью игровых ноутбуков Legion серии 5. Выберите из множества высокопроизводительных компонентов, скрытых в изящном минималистичном корпусе, который подойдет к вашему образу жизни.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h5f/h3d/63819285757982.jpg?format=preview-medium',
    kaspi: 'https://kaspi.kz/shop/p/lenovo-legion-5-17ach6-82k000acrk-temno-sinii-107130212/?c=750000000',
    rating: 5,
    category: 'laptop',
    likes: 61
  },
  {
    id: 7,
    name: 'Электрогриль Delonghi CGH1130DP',
    price: 233790,
    description: 'DeLonghi CGH1130DP — кухонный электрогриль, мощность которого достигает 2200 Вт, а максимальная температура рабочей поверхности — 265°. Теплоотдача плавно регулируется, а управление производится при помощи поворотных шайб на корпусе. Для автоматического поддержания температуры нагрева предусмотрен термостат. Гриль поддерживает три автоматических рабочих режима готовки. Для удобства использования есть таймер. Предусмотрена возможность управления грилем со смартфона.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h26/hce/50784184336414/delonghi-cgh1130dp-104879802-1.jpg',
    kaspi: 'https://kaspi.kz/shop/p/elektrogril-delonghi-cgh1130dp-104879802/?c=750000000',
    rating: 4,
    category: 'appliances',
    likes: 39
  },
  {
    id: 8,
    name: 'Hansa FCCX 680009 серебристый',
    price: 209990,
    description: 'Электрическая плита Hansa FCCX68203 поможет готовить с комфортом. Варочная поверхность имеет двойное поле, позволяющее готовить в большой посуде. В электрической духовке с 8 программами нагрева, грилем и конвекцией можно экспериментировать с любыми ингредиентами. Противни ProCook удобно вынимать благодаря хромированным держателям, а цифровой таймер проконтролирует время готовки. Выдвижной ящик на роликах для предназначен для хранения посуды.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hb7/hbe/49487585247262/hansa-fccx-680009-silver-2601800-1-Container.jpg',
    kaspi: 'https://kaspi.kz/shop/p/hansa-fccx-680009-serebristyi-2601800/?c=750000000',
    rating: 5,
    category: 'appliances',
    likes: 47
  },
  {
    id: 9,
    name: 'Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 389800,
    description: 'Благодаря высокой четкости IPS-дисплея Full HD с диагональю 17,3 или 15,6" вы не упустите ни одной детали в игре. Частота обновления 144 Гц1 и время отклика 3 мс2 обеспечивают максимально плавный геймплей. Благодаря узкой рамке 7,02 мм1 соотношение размеров экрана и корпуса увеличено до 80%, а цветовой охват 72% NTSC и яркость 300 нит1 делают игры еще реалистичнее.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h9b/h1b/67236399120414/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    kaspi: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    rating: 5,
    category: 'laptop',
    likes: 146
  },
  {
    id: 10,
    name: 'Samsung Galaxy S23 Ultra 5G 12 ГБ/512 ГБ зеленый',
    price: 749890,
    description: 'Размер экрана: По диагонали размер экрана Galaxy S23 составляет 6,1" в полном прямоугольнике и 5,9" с учетом закругленных углов, размер экрана Galaxy S23+ составляет 6,6" в полном прямоугольнике и 6,4" с учетом закругленных углов и размер экрана Galaxy S23 Ultra составляет 6,8" в полном прямоугольнике и 6,8" с учетом закругленных углов; фактическая видимая область может быть меньше из-за закругленных углов и камеры. Ёмкость аккумулятора (типичное значение): Типичное значение проверено в условиях сторонней лаборатории. Типичное значение — расчетное среднее значение с учетом отклонения емкости батареи среди образцов батарей, испытанных в соответствии со стандартом IEC 61960. Номинальная (минимальная) емкость составляет 3785 мАч для Galaxy S23, 4565 мАч для Galaxy S23+ и 4855 мАч для Galaxy S23 Ultra. Фактическое время работы от батареи может варьироваться в зависимости от сетевой среды, характера использования и других факторов.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h9e/68538744602654.jpg?format=preview-medium',
    kaspi: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-5g-12-gb-512-gb-zelenyi-podarok-108714425/?c=750000000#!/item',
    rating: 5,
    category: 'smartphone',
    likes: 103
  },
  {
    id: 11,
    name: 'HP Victus 16-e0008ur 489H1EA темно-серый',
    price: 569900,
    description: 'Ноутбук Victus от HP с диагональю 16.1 дюйма, оснащенный процессором AMD, обладает всеми необходимыми функциями как для игр, так и для решения повседневных задач. Расширь свои возможности с помощью универсальной игровой клавиатуры и наслаждайся качественным изображением на экране с высокой частотой обновления.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/he5/66102705913886.jpg?format=preview-medium',
    kaspi: 'https://kaspi.kz/shop/p/hp-victus-16-e0008ur-489h1ea-temno-seryi-107706136/?c=750000000',
    rating: 5,
    category: 'laptop',
    likes: 41
  },
  {
    id: 12,
    name: 'Apple AirPods Pro 2nd generation белый',
    price: 117990,
    description: 'Удерживайте датчик нажатия, чтобы переключиться с режима активного шумоподавления на Прозрачный режим, и вы будете слышать всё так, словно на вас нет наушников. Силиконовые вкладыши представлены в трёх размерах. Выберите тот, который подходит вам лучше всего. А отверстия во вкладышах позволяют выравнять давление с обеих сторон наушников.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h39/hbd/62281477128222/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg',
    kaspi: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000',
    rating: 5,
    category: 'headphones',
    likes: 278
  },
  {
    id: 13,
    name: 'OPPO Reno 7 8 ГБ/128 ГБ оранжевый',
    price: 154975,
    description: 'OPPO Reno7 – лучший для контента. Без ограничений! Множество опытов и экспериментов позволили создать первую в отрасли текстуру кожи из стекловолокна. Потрясающе смотрится, потрясающая наощупь. При этом, после множества тестов можно смело говорить о гарантии долговечности. Рамка с плоскими краями и модуль камеры соответствуют классической эстетике. Но должное внимание уделяется и требованиям современной жизни: ультратонкий дизайн позволяет с комфортом держать смартфон в руках по несколько часов.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h59/hd8/50455778066462/orro-reno7-8-128gb-oranzevyj-104705825-1.jpg',
    kaspi: 'https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-oranzhevyi-104705825/?c=750000000#!/item',
    rating: 4,
    category: 'smartphone',
    likes: 172
  },
  {
    id: 14,
    name: 'Apple MacBook Air 13 Z160000KQ черный',
    price: 799990,
    description: 'MacBook Air, переработанный на базе чипа M2 нового поколения, поразительно тонкий и обеспечивает исключительную скорость и энергоэффективность в прочном полностью алюминиевом корпусе. Это сверхбыстрый и сверхмощный ноутбук, который позволяет вам работать, играть или создавать что угодно — где угодно.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h96/ha3/62957129400350/noutbuk-apple-macbook-air-13-6-a2681-m2-chip-16gb-ssd-256gb-midnight-ios-z160000kq-106722638-1.jpg',
    kaspi: 'https://kaspi.kz/shop/p/apple-macbook-air-13-z160000kq-chernyi-106722638/?c=750000000',
    rating: 5,
    category: 'laptop',
    likes: 96
  },
  {
    id: 15,
    name: 'Samsung RB30A30N0SA/WT серый',
    price: 236366,
    description: 'Насладитесь новым уровнем организации полезного пространства в холодильниках серии RB3000A. Технология All-Around cooling. Технология позволяет равномерно охлаждать уголки рабочей камеры. Охлажденный воздух циркулирует через вентиляционные отверстия, имеющие выходы на каждую полку, благодаря чему в холодильнике поддерживается постоянная температура и продукты остаются свежими.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/ha3/hed/50360893898782/samsung-rb30a30n0sa-wt-seryj-101185237-1-Container.jpg',
    kaspi: 'https://kaspi.kz/shop/p/samsung-rb30a30n0sa-wt-seryi-101185237/?c=750000000',
    rating: 5,
    category: 'appliances',
    likes: 58
  },
  {
    id: 16,
    name: 'JBL Tune 510BT черный',
    price: 24297,
    description: 'JBL Tune 510BT одна из простых и, в то же время, продуманных моделей наушников подарит вам комфорт взаимодействия с аудио. Эргономично продуманное оголовье и амбушюры обеспечат длительное время ношения без дискомфорта. Технология подачи басовых частот усилят каждый звук низкого диапазона, не давая тому теряться. Автономность на 40 часов сделает сеансы зарядки редкими. Для взаимодействия с телефоном выделены отдельные кнопки. При помощи технологии Bluetooth можно быстро переключаться между несколькими устройствами.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h94/h2d/33957523587102/jbl-tune-510bt-cernyj-101420081-1-Container.jpg',
    kaspi: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h94/h2d/33957523587102/jbl-tune-510bt-cernyj-101420081-1-Container.jpg',
    rating: 4,
    category: 'headphones',
    likes: 128
  },
  {
    id: 17,
    name: 'DAUSCHER WMD-1280NDV-DG серый',
    price: 183321,
    description: 'Это модель-автомат в которой вы сможете постирать до 8 кг белья за один цикл. Устройство станет идеальным приобретением для любой квартиры или частного дома. Машина с фронтальной загрузкой управляется при помощи поворотного регулятора и сенсорной панели управления. Стиральная машина способна отжимать белье со скоростью до 1200 об/мин, благодаря чему вы получите практически сухое белье.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h07/h65/51534544994334/dauscher-wmd-1280ndv-dg-seryi-103536142-1.jpg',
    kaspi: 'https://kaspi.kz/shop/p/dauscher-wmd-1280ndv-dg-seryi-103536142/?c=750000000',
    rating: 4,
    category: 'appliances',
    likes: 51
  },
  {
    id: 18,
    name: 'Sony WH-CH510 синий',
    price: 30794,
    description: 'С беспроводными легкими наушниками WH-CH510, которые могут достаточно долго работать от аккумулятора, можно наслаждаться прослушиванием музыки весь день напролет. Эти легкие наушники имеют поворотные чашки, поэтому их удобно перевозить в сумке. А благодаря мягким амбушюрам и тонкой регулируемой головной стяжке они не только комфортные, но еще и отлично выглядят.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h63/h22/50174042832926/sony-whch510l-e-sinij-100040045-1-Container.jpg',
    kaspi: 'https://resources.cdn-kaspi.kz/img/m/p/h2f/h99/63791036366878.jpg?format=preview-medium',
    rating: 5,
    category: 'headphones',
    likes: 69
  },
  {
    id: 19,
    name: 'Samsung Galaxy A13 4 ГБ/128 ГБ черный',
    price: 89690,
    description: 'Благодаря 6.6-дюймовому экрану Infinity-V на смартфоне Galaxy A13 вы сможете увидеть все, что было скрыто от вашего взгляда. Наслаждайтесь живым четким изображением с технологией FHD+. Galaxy A13 сочетает деликатные цвета и приятную на ощупь текстуру. Благодаря изящным изгибам его удобно держать при работе с экраном. Galaxy A13 оснащен восьмиядерным процессором и оперативной памятью до 4 ГБ для быстрой и эффективной работы. А со встроенной памятью 128 ГБ и картой памяти microSD до 1 ТБ у вас появится еще больше места для хранения. Запечатлейте ценные моменты во всех деталях с основной камерой 50 Мп. Расширьте угол обзора с 5 Мп ультраширокоугольной камерой. 2 Мп камера с датчиком глубины поможет настроить фокус, а 2 Мп макрообъектив — снять все до мельчайших деталей. Снимайте изумительные селфи с помощью фронтальной камеры 8 Мп на Galaxy A13 и эффекта боке — меньше фона, больше вас! Будьте на шаг впереди с надежным аккумулятором. Делайте что угодно, не беспокоясь о заряде, с аккумулятором 5000 мАч, который способен держать заряд 2 дня.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h26/h48/49613711835166/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg',
    kaspi: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000',
    rating: 3,
    category: 'smartphone',
    likes: 85
  },
  {
    id: 20,
    name: 'Atlantic ASAFA-12HRN8-S',
    price: 169990,
    description: 'Сплит-система Atlantic ASAFA-12HRN8-S представляет собой многофункциональное устройство, которое с легкостью справится не только с охлаждением, но также с обогревом, осушением и вентиляцией воздушного потока.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd7/h1c/31671047880734/atlantic-asafa-12hrn1-s-serebristyj-montaznyj-komplekt-4201112-1-Container.jpg',
    kaspi: 'https://kaspi.kz/shop/p/atlantic-asafa-12hrn8-s-montazhnyi-komplekt-4201112/?c=750000000',
    rating: 5,
    category: 'appliances',
    likes: 30
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/