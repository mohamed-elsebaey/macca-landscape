export const store = {
  title: "متجر النباتات",
  subtitle: "تصفح مجموعتنا المميزة من نباتات الزينة ومستلزمات تنسيق الحدائق",
  addToCart: "أضف للسلة",
  allPlants: "جميع النباتات",
  floweringPlants: "النباتات المزهرة",
  herbs: "الأعشاب والتوابل",
  indoorPlants: "النباتات الداخلية",
  allLightConditions: "جميع ظروف الإضاءة",
  fullSun: "شمس كاملة",
  partialSun: "شمس جزئية",
  shade: "ظل",
};

export type ProductProps = {
  id: number;
  name: string;
  category: string;
  sunlight: string;
  price: number;
  image: string;
  description: string;
};

export const products: ProductProps[] = [
  {
    id: 1,
    name: "جاردينيا (Gardenia)",
    category: "داخلي",
    sunlight: "شمس جزئية", 
    price: 120, 
    image: "https://cdn.pixabay.com/photo/2020/04/27/02/41/gardenia-5097886_1280.jpg",
    description:
      "نبات دائم الخضرة بأوراق خضراء داكنة لامعة وزهورٍ شمعيةٍ بيضاءٍ عطرة",
  },
  {
    id: 2,
    name: "جاردينيا (Gardenia)",
    category: "خارجي",
    sunlight: "شمس جزئية",
    price: 420,
    image: "https://cdn.pixabay.com/photo/2018/07/06/12/29/gardenia-3520314_1280.jpg",
    description:
      "شجيرة معمرة دائمية الخضرة بأوراق لامعة خضراء داكنة وزهور بيضاء عطرة",
  },
  {
    id: 3,
    name: "نعناع (نعناع)",
    category: "أعشاب",
    sunlight: "شمس كاملة", 
    price: 45,
    image: "https://cdn.pixabay.com/photo/2017/06/12/19/23/moroccan-mint-2396530_1280.jpg",
    description:
      "عشبة عطرية بأوراق خضراء منعشة ذات نكهة حادة، تُستخدم في الشاي والأطعمة وتُعد من أسهل الأعشاب في الزراعة",
  },
  {
    id: 4,
    name: "ريحان (Basil)",
    category: "أعشاب",
    sunlight: "شمس كاملة", 
    price: 50,
    image: "https://cdn.pixabay.com/photo/2017/09/17/18/43/basil-total-2759319_1280.jpg",
    description:
      "عشبة حولية عطريّة بأوراق ورائحة ليمونية، يُستخدم في المطبخ لإضفاء نكهة طازجة على الطعام.",
  },
  {
    id: 7,
    name: "ياسمين بلدي (Common Jasmine)",
    category: "خارجي",
    sunlight: "شمس كاملة",
    price: 185,
    image: "https://cdn.pixabay.com/photo/2022/09/22/17/38/flower-7472794_1280.jpg",
    description:
      "نبات متسلق عطري مزهر بأزهارٍ بيضاءٍ معطرة، يُزرع حول الأسوار والأقواس لتزيينها بفضل رائحته القوية.",
  },
  {
    id: 8,
    name: "لافندر (Lavender)",
    category: "أعشاب",
    sunlight: "شمس كاملة", // أفضل تحت ضوء الشمس المباشر
    price: 60,
    image: "https://cdn.pixabay.com/photo/2016/04/10/02/38/nature-1319325_1280.jpg",
    description:
      "نبات معمر عطري بزهور أرجوانية جميلة ورائحة زكية، يستخدم في الزينة وصناعة العطور نظرًا لعطريته.",
  },
  {
    id: 10,
    name: "بردقوش (Marjoram)",
    category: "أعشاب",
    sunlight: "شمس كاملة",
    price: 45,
    image: "https://cdn.pixabay.com/photo/2013/06/01/03/48/marjoram-115383_1280.jpg",
    description:
      "عشبة معمرة عطريّة ذات نكهة خفيفة، تُستخدم أوراقها الطازجة في تتبيل السلطات والشوربات واللحوم.",
  },
  {
    id: 12,
    name: "جلد النمر (سانسفيريا)",
    category: "داخلي",
    sunlight: "ظل",
    price: 150,
    image: "https://cdn.pixabay.com/photo/2023/07/09/14/26/sanseviera-8116265_1280.jpg",
    description:
      "نبات عصاري منزلي بأوراقٍ طويلة سميكة، يتكيف مع الإضاءة المنخفضة ويُعرف بقدرته على تنقية الهواء وإطلاق الأكسجين أثناء الليل.",
  },
  {
    id: 13,
    name: "الأقحوان الأفريقي",
    category: "زهور",
    sunlight: "شمس كاملة", // ينمو أفضل تحت أشعة الشمس الكاملة
    price: 75,
    image:
      "https://cdn.pixabay.com/photo/2016/08/15/14/35/lavender-1595581_1280.jpg",
    description:
      "نبات زينة معمر بأزهارٍ زاهيةٍ ملونة، تنمو بشكل أفضل في ضوء الشمس الكامل مما يجعله مناسبًا للحدائق المشمسة.",
  },
  {
    id: 14,
    name: "جهنمية (Bougainvillea)",
    category: "خارجي",
    sunlight: "شمس كاملة", // تفضل الضوء الساطع
    price: 220,
    image:
      "https://cdn.pixabay.com/photo/2023/03/11/12/46/flowers-7844421_1280.jpg",
    description:
      "شجيرة متسلقة مقاومة للجفاف تزهر بأوراق غلاف ملونة طوال السنة، وتفضل الضوء الساطع برغم قدرتها على تحمل ظل جزئي.",
  },
  {
    id: 15,
    name: "جارونيا (Pelargonium)",
    category: "زهور",
    sunlight: "شمس كاملة",
    price: 60,
    image:
      "https://cdn.pixabay.com/photo/2023/05/01/12/33/flower-7962930_640.jpg",
    description:
      "نبات زينة عطري ذو أزهارٍ براقة غالبًا ما يُزرع في الأصص، كما تتميز أوراقه بعطر قوي.",
  },
  {
    id: 16,
    name: "الغار (Bay Laurel)",
    category: "أعشاب",
    sunlight: "شمس كاملة",
    price: 240,
    image:
      "https://cdn.pixabay.com/photo/2014/07/05/03/10/laurel-fruits-384515_1280.jpg",
    description:
      "شجيرة معمرة عطريّة الأوراق، تُستخدم أوراقها كتوابل لإضفاء نكهة مميزة على الأطعمة.",
  },
  {
    id: 17,
    name: "أنثوريوم (Anthurium)",
    category: "داخلي",
    sunlight: "ظل",
    price: 450,
    image:
      "https://cdn.pixabay.com/photo/2023/01/11/14/52/anthurium-flower-7711869_1280.jpg",
    description:
      "نبات منزلي شهير بأزهاره الحمراء الشمعية، إلى جانب جماله فإنه يعد من أفضل النباتات في تنقية الهواء.",
  },
  {
    id: 18,
    name: "إيبيونتيا (إبونات سامة)",
    category: "داخلي",
    sunlight: "شمس كاملة",
    price: 95,
    image:
      "https://cdn.pixabay.com/photo/2022/10/04/03/07/euphorbia-milii-7497245_640.jpg",
    description:
      "نبات عصاري ذو أوراقٍ خضراء وأزهارٍ قرمزية شمعية، ينمو جيدًا في الأصص ويعتبر نبات زينة مقاومًا للجفاف.",
  },
  {
    id: 19,
    name: "زعتر (Thymus)",
    category: "أعشاب",
    sunlight: "شمس كاملة",
    price: 45,
    image: "https://cdn.pixabay.com/photo/2013/06/01/03/07/thyme-115348_1280.jpg",
    description:
      "نبات معمّر عطري بأوراقٍ صغيرة عطرية، تُستخدم في الطهي والعلاج العطري. يُزرع عادة في الشمس الكاملة.",
  },
];

export const categories = [
  { value: "all", label: store.allPlants },
  { value: "زهور", label: store.floweringPlants },
  { value: "أعشاب", label: store.herbs },
  { value: "داخلي", label: store.indoorPlants },
];

export const sunlightOptions = [
  { value: "all", label: store.allLightConditions },
  { value: "شمس كاملة", label: store.fullSun },
  { value: "شمس جزئية", label: store.partialSun },
  { value: "ظل", label: store.shade },
];
