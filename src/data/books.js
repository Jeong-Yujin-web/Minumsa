const bookData = [
  {
    id: 1,
    title: "라쇼몬, 아쿠타가와 류노스케 단편선",
    images: [
      "/images/books/book01.jpg",
      "/images/books/book01_02.jpg",
      "/images/books/book01_03.jpg"
    ],
    author: "아쿠타가와 류노스케",
    publisher: "민음사",
    publishDate: "2014-10-10",
    price: 14000,
    category: "세계문학전집",
    isNew: false,
    isBest: false,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 12,
    rating: 4.3
  },

  {
    id: 2,
    title: "데미안",
    image: "/images/books/book02.jpg",
    images: [
      "/images/books/book02.jpg",
      "/images/books/book02_02.jpg",
      "/images/books/book02_03.jpg"
    ],
    author: "헤르만 헤세",
    publisher: "민음사",
    publishDate: "2000-12-02",
    price: 8000,
    category: "세계문학전집",
    isNew: false,
    isBest: true,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 38,
    rating: 4.8
  },

  {
    id: 3,
    title: "패싱",
    image: "/images/books/book03.jpg",
    images: [
      "/images/books/book03.jpg",
      "/images/books/book03_02.jpg",
      "/images/books/book03_03.jpg"
    ],
    author: "넬라 라슨",
    publisher: "민음사",
    publishDate: "2026-06-09",
    price: 12000,
    category: "외국문학",
    isNew: true,
    isBest: false,
    isSecond: false,
    isRecommend: true,
    isElectron: true,
    reviewCount: 10,
    rating: 4.2
  },

  {
    id: 4,
    title: "지상의 양식",
    image: "/images/books/book04.jpg",
    images: [
      "/images/books/book04.jpg",
      "/images/books/book04_02.jpg",
      "/images/books/book04_03.jpg"
    ],
    author: "앙드레 지드",
    publisher: "민음사",
    publishDate: "2007-10-10",
    price: 12000,
    category: "세계문학전집",
    isNew: false,
    isBest: false,
    isSecond: true,
    isRecommend: true,
    isElectron: false,
    reviewCount: 9,
    rating: 4.1
  },

  {
    id: 5,
    title: "동물농장",
    image: "/images/books/book05.jpg",
    images: [
      "/images/books/book05.jpg",
      "/images/books/book05_02.jpg",
      "/images/books/book05_03.jpg"
    ],
    author: "조지 오웰",
    publisher: "민음사",
    publishDate: "1998-08-05",
    price: 8000,
    category: "세계문학전집",
    isNew: false,
    isBest: true,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 49,
    rating: 4.9
  },

  {
    id: 6,
    title: "그 입에서 나오는 것",
    image: "/images/books/book06.jpg",
    images: [
      "/images/books/book06.jpg",
      "/images/books/book06_02.jpg",
      "/images/books/book06_03.jpg"
    ],
    author: "박문영",
    publisher: "민음사",
    publishDate: "2026-09-04",
    price: 15000,
    category: "한국문학",
    isNew: true,
    isBest: false,
    isSecond: false,
    isRecommend: false,
    isElectron: false,
    reviewCount: 7,
    rating: 4.0
  },

  {
    id: 7,
    title: "참을 수 없는 존재의 가벼움",
    image: "/images/books/book07.jpg",
    images: [
      "/images/books/book07.jpg",
      "/images/books/book07_02.jpg",
      "/images/books/book07_03.jpg"
    ],
    author: "밀란 쿤데라",
    publisher: "민음사",
    publishDate: "2010-01-04",
    price: 13000,
    category: "세계문학전집",
    isNew: false,
    isBest: true,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 39,
    rating: 4.7
  },

  {
    id: 8,
    title: "스토리북 엔딩",
    image: "/images/books/book08.jpg",
    images: [
      "/images/books/book08.jpg",
      "/images/books/book08_02.jpg",
      "/images/books/book08_03.jpg"
    ],
    author: "모이라 맥도널드",
    publisher: "민음사",
    publishDate: "2026-08-26",
    price: 19500,
    category: "외국문학",
    isNew: true,
    isBest: false,
    isSecond: false,
    isRecommend: true,
    isElectron: false,
    reviewCount: 10,
    rating: 4.3
  },

  {
    id: 9,
    title: "가치의 모든 것",
    image: "/images/books/book09.jpg",
    images: [
      "/images/books/book09.jpg",
      "/images/books/book09_02.jpg",
      "/images/books/book09_03.jpg"
    ],
    author: "마리아나 마추카토",
    publisher: "민음사",
    publishDate: "2020-07-20",
    price: 23000,
    category: "정치/사회/경제",
    isNew: false,
    isBest: false,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 16,
    rating: 4.4
  },

  {
    id: 10,
    title: "글로벌 그린 뉴딜",
    image: "/images/books/book10.jpg",
    images: [
      "/images/books/book10.jpg",
      "/images/books/book10_02.jpg",
      "/images/books/book10_03.jpg"
    ],
    author: "제러미 리프킨",
    publisher: "민음사",
    publishDate: "2020-01-31",
    price: 18000,
    category: "정치/사회/경제",
    isNew: false,
    isBest: false,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 19,
    rating: 4.5
  },

  {
    id: 11,
    title: "1984",
    image: "/images/books/book11.jpg",
    images: [
      "/images/books/book11.jpg",
      "/images/books/book11_02.jpg",
      "/images/books/book11_03.jpg"
    ],
    author: "조지 오웰",
    publisher: "민음사",
    publishDate: "2003-06-16",
    price: 11000,
    category: "세계문학전집",
    isNew: false,
    isBest: true,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 43,
    rating: 4.8
  },

  {
    id: 12,
    title: "색채론",
    image: "/images/books/book12.jpg",
    images: [
      "/images/books/book12.jpg",
      "/images/books/book12_02.jpg",
      "/images/books/book12_03.jpg"
    ],
    author: "요한 볼프강 폰 괴테",
    publisher: "민음사",
    publishDate: "2026-08-30",
    price: 19000,
    category: "인문/역사/문화",
    isNew: true,
    isBest: false,
    isSecond: false,
    isRecommend: false,
    isElectron: true,
    reviewCount: 6,
    rating: 4.1
  },

  {
    id: 13,
    title: "밀회",
    image: "/images/books/book13.jpg",
    images: [
      "/images/books/book13.jpg",
      "/images/books/book13_02.jpg",
      "/images/books/book13_03.jpg"
    ],
    author: "아베 코보",
    publisher: "민음사",
    publishDate: "2026-08-18",
    price: 15000,
    category: "외국문학",
    isNew: true,
    isBest: false,
    isSecond: false,
    isRecommend: true,
    isElectron: false,
    reviewCount: 8,
    rating: 4.2
  },

  {
    id: 14,
    title: "한국이 싫어서",
    image: "/images/books/book14.jpg",
    images: [
      "/images/books/book14.jpg",
      "/images/books/book14_02.jpg",
      "/images/books/book14_03.jpg"
    ],
    author: "장강명",
    publisher: "민음사",
    publishDate: "2015-05-08",
    price: 14000,
    category: "한국문학",
    isNew: false,
    isBest: true,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 29,
    rating: 4.7
  },

  {
    id: 15,
    title: "허클베리 핀의 모험",
    image: "/images/books/book15.jpg",
    images: [
      "/images/books/book15.jpg",
      "/images/books/book15_02.jpg",
      "/images/books/book15_03.jpg"
    ],
    author: "마크 트웨인",
    publisher: "민음사",
    publishDate: "1998-08-05",
    price: 13000,
    category: "세계문학전집",
    isNew: false,
    isBest: false,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 19,
    rating: 4.6
  },

  {
    id: 16,
    title: "릿터 61호(2026.8.-2026.9.)",
    image: "/images/books/book16.jpg",
    images: [
      "/images/books/book16.jpg",
      "/images/books/book16_02.jpg",
      "/images/books/book16_03.jpg"
    ],
    author: "민음사 편집부",
    publisher: "민음사",
    publishDate: "2026-08-05",
    price: 15000,
    category: "격월간 문학잡지",
    isNew: true,
    isBest: false,
    isSecond: false,
    isRecommend: false,
    isElectron: true,
    reviewCount: 6,
    rating: 4.0
  },

  {
    id: 17,
    title: "호밀밭의 파수꾼",
    image: "/images/books/book17.jpg",
    images: [
      "/images/books/book17.jpg",
      "/images/books/book17_02.jpg",
      "/images/books/book17_03.jpg"
    ],
    author: "제롬 데이비드 샐린저",
    publisher: "민음사",
    publishDate: "2023-01-17",
    price: 12000,
    category: "세계문학전집",
    isNew: false,
    isBest: true,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 35,
    rating: 4.6
  },

  {
    id: 18,
    title: "길 위에서 1",
    image: "/images/books/book18.jpg",
    images: [
      "/images/books/book18.jpg",
      "/images/books/book18_02.jpg",
      "/images/books/book18_03.jpg"
    ],
    author: "잭 케루악",
    publisher: "민음사",
    publishDate: "2009-10-23",
    price: 11000,
    category: "세계문학전집",
    isNew: false,
    isBest: false,
    isSecond: true,
    isRecommend: true,
    isElectron: false,
    reviewCount: 17,
    rating: 4.2
  },

  {
    id: 19,
    title: "호아",
    image: "/images/books/book19.jpg",
    images: [
      "/images/books/book19.jpg",
      "/images/books/book19_02.jpg",
      "/images/books/book19_03.jpg"
    ],
    author: "강진아",
    publisher: "민음사",
    publishDate: "2026-07-27",
    price: 17000,
    category: "한국문학",
    isNew: true,
    isBest: false,
    isSecond: false,
    isRecommend: true,
    isElectron: false,
    reviewCount: 9,
    rating: 4.1
  },

  {
    id: 20,
    title: "이방인",
    image: "/images/books/book20.jpg",
    images: [
      "/images/books/book20.jpg",
      "/images/books/book20_02.jpg",
      "/images/books/book20_03.jpg"
    ],
    author: "알베르 카뮈",
    publisher: "민음사",
    publishDate: "2011-03-18",
    price: 10000,
    category: "세계문학전집",
    isNew: false,
    isBest: true,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 39,
    rating: 4.8
  },

  {
    id: 21,
    title: "체호프 단편선",
    image: "/images/books/book21.jpg",
    images: [
      "/images/books/book21.jpg",
      "/images/books/book21_02.jpg",
      "/images/books/book21_03.jpg"
    ],
    author: "안톤 체호프",
    publisher: "민음사",
    publishDate: "2002-11-20",
    price: 9000,
    category: "세계문학전집",
    isNew: false,
    isBest: false,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 26,
    rating: 4.5
  },

  {
    id: 22,
    title: "징후와 형식",
    image: "/images/books/book22.jpg",
    images: [
      "/images/books/book22.jpg",
      "/images/books/book22_02.jpg",
      "/images/books/book22_03.jpg"
    ],
    author: "오형엽",
    publisher: "민음사",
    publishDate: "2026-07-10",
    price: 28000,
    category: "한국문학",
    isNew: true,
    isBest: false,
    isSecond: false,
    isRecommend: false,
    isElectron: false,
    reviewCount: 5,
    rating: 3.9
  },

  {
    id: 23,
    title: "설국",
    image: "/images/books/book23.jpg",
    images: [
      "/images/books/book23.jpg",
      "/images/books/book23_02.jpg",
      "/images/books/book23_03.jpg"
    ],
    author: "가와바타 야스나리",
    publisher: "민음사",
    publishDate: "2002-01-28",
    price: 8000,
    category: "세계문학전집",
    isNew: false,
    isBest: true,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 24,
    rating: 4.9
  },

  {
    id: 24,
    title: "페스트",
    image: "/images/books/book24.jpg",
    images: [
      "/images/books/book24.jpg",
      "/images/books/book24_02.jpg",
      "/images/books/book24_03.jpg"
    ],
    author: "알베르 카뮈",
    publisher: "민음사",
    publishDate: "2011-03-18",
    price: 14000,
    category: "세계문학전집",
    isNew: false,
    isBest: false,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 28,
    rating: 4.8
  },

  {
    id: 25,
    title: "우리는 사랑하기 좋은 팔을 가졌구나",
    image: "/images/books/book25.jpg",
    images: [
      "/images/books/book25.jpg",
      "/images/books/book25_02.jpg",
      "/images/books/book25_03.jpg"
    ],
    author: "강보원 외 9인",
    publisher: "민음사",
    publishDate: "2026-06-19",
    price: 17000,
    category: "한국문학",
    isNew: true,
    isBest: false,
    isSecond: false,
    isRecommend: true,
    isElectron: false,
    reviewCount: 7,
    rating: 4.2
  },

  {
    id: 26,
    title: "오만과 편견",
    image: "/images/books/book26.jpg",
    images: [
      "/images/books/book26.jpg",
      "/images/books/book26_02.jpg",
      "/images/books/book26_03.jpg"
    ],
    author: "제인 오스틴",
    publisher: "민음사",
    publishDate: "2003-09-20",
    price: 13000,
    category: "세계문학전집",
    isNew: false,
    isBest: true,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 32,
    rating: 4.9
  },

  {
    id: 27,
    title: "오뒷세이아, 어떻게 읽을 것인가",
    image: "/images/books/book27.jpg",
    images: [
      "/images/books/book27.jpg",
      "/images/books/book27_02.jpg",
      "/images/books/book27_03.jpg"
    ],
    author: "김태진",
    publisher: "민음사",
    publishDate: "2026-07-30",
    price: 22000,
    category: "인문/역사/문화",
    isNew: true,
    isBest: false,
    isSecond: false,
    isRecommend: true,
    isElectron: true,
    reviewCount: 8,
    rating: 4.3
  },

  {
    id: 28,
    title: "시지프 신화",
    image: "/images/books/book28.jpg",
    images: [
      "/images/books/book28.jpg",
      "/images/books/book28_02.jpg",
      "/images/books/book28_03.jpg"
    ],
    author: "알베르 카뮈",
    publisher: "민음사",
    publishDate: "2016-06-17",
    price: 12000,
    category: "세계문학전집",
    isNew: false,
    isBest: false,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 20,
    rating: 4.4
  },

  {
    id: 29,
    title: "색채가 없는 다자키 쓰쿠루와 그가 순례를 떠난 해",
    image: "/images/books/book29.jpg",
    images: [
      "/images/books/book29.jpg",
      "/images/books/book29_02.jpg",
      "/images/books/book29_03.jpg"
    ],
    author: "무라카미 하루키",
    publisher: "민음사",
    publishDate: "2013-07-01",
    price: 14800,
    category: "외국문학",
    isNew: false,
    isBest: true,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 40,
    rating: 4.5
  },

  {
    id: 30,
    title: "악마는 열심히 산다",
    image: "/images/books/book30.jpg",
    images: [
      "/images/books/book30.jpg",
      "/images/books/book30_02.jpg",
      "/images/books/book30_03.jpg"
    ],
    author: "김화진",
    publisher: "민음사",
    publishDate: "2026-08-28",
    price: 15000,
    category: "한국문학",
    isNew: true,
    isBest: false,
    isSecond: false,
    isRecommend: true,
    isElectron: false,
    reviewCount: 8,
    rating: 4.3
  },

  {
    id: 31,
    title: "압록강은 흐른다",
    image: "/images/books/book31.jpg",
    images: [
      "/images/books/book31.jpg",
      "/images/books/book31_02.jpg",
      "/images/books/book31_03.jpg"
    ],
    author: "이미륵",
    publisher: "민음사",
    publishDate: "2026-00-00",
    price: 14000,
    category: "한국문학",
    isNew: false,
    isBest: false,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 14,
    rating: 4.5
  },

  {
    id: 32,
    title: "백치 1",
    image: "/images/books/book32.jpg",
    images: [
      "/images/books/book32.jpg",
      "/images/books/book32_02.jpg",
      "/images/books/book32_03.jpg"
    ],
    author: "표도르 도스토예프스키",
    publisher: "민음사",
    publishDate: "2026-06-18",
    price: 17000,
    category: "세계문학전집",
    isNew: true,
    isBest: true,
    isSecond: false,
    isRecommend: true,
    isElectron: true,
    reviewCount: 6,
    rating: 4.2
  },

  {
    id: 33,
    title: "백치 2",
    image: "/images/books/book33.jpg",
    images: [
      "/images/books/book33.jpg",
      "/images/books/book33_02.jpg",
      "/images/books/book33_03.jpg"
    ],
    author: "표도르 도스토예프스키",
    publisher: "민음사",
    publishDate: "2026-06-18",
    price: 17000,
    category: "세계문학전집",
    isNew: true,
    isBest: true,
    isSecond: false,
    isRecommend: true,
    isElectron: true,
    reviewCount: 5,
    rating: 4.4
  },

  {
    id: 34,
    title: "지킬 박사와 하이드 씨의 기이한 사건",
    image: "/images/books/book34.jpg",
    images: [
      "/images/books/book34.jpg",
      "/images/books/book34_02.jpg",
      "/images/books/book34_03.jpg"
    ],
    author: "로버트 루이스 스티븐슨",
    publisher: "민음사",
    publishDate: "2025-02-20",
    price: 12000,
    category: "세계문학전집",
    isNew: false,
    isBest: true,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 24,
    rating: 4.7
  },

  {
    id: 35,
    title: "클라라와 태양",
    image: "/images/books/book35.jpg",
    images: [
      "/images/books/book35.jpg",
      "/images/books/book35_02.jpg",
      "/images/books/book35_03.jpg"
    ],
    author: "가즈오 이시구로",
    publisher: "민음사",
    publishDate: "2021-03-29",
    price: 17000,
    category: "외국문학",
    isNew: false,
    isBest: true,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 30,
    rating: 4.8
  },

  {
    id: 36,
    title: "사람은 무엇으로 사는가",
    image: "/images/books/book36.jpg",
    images: [
      "/images/books/book36.jpg",
      "/images/books/book36_02.jpg",
      "/images/books/book36_03.jpg"
    ],
    author: "레프 톨스토이",
    publisher: "민음사",
    publishDate: "2026-00-00",
    price: 15000,
    category: "세계문학전집",
    isNew: false,
    isBest: false,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 14,
    rating: 4.6
  },

  {
    id: 37,
    title: "악수도 없이 헤어졌다",
    image: "/images/books/book37.jpg",
    images: [
      "/images/books/book37.jpg",
      "/images/books/book37_02.jpg",
      "/images/books/book37_03.jpg"
    ],
    author: "미상",
    publisher: "민음사",
    publishDate: "2026-00-00",
    price: 15000,
    category: "한국문학",
    isNew: true,
    isBest: false,
    isSecond: false,
    isRecommend: false,
    isElectron: false,
    reviewCount: 9,
    rating: 4.1
  },

  {
    id: 38,
    title: "세계문학전집 이야기",
    image: "/images/books/book38.jpg",
    images: [
      "/images/books/book38.jpg",
      "/images/books/book38_02.jpg",
      "/images/books/book38_03.jpg"
    ],
    author: "민음사 편집부",
    publisher: "민음사",
    publishDate: "2026-00-00",
    price: 12000,
    category: "인문/역사/문화",
    isNew: false,
    isBest: false,
    isSecond: false,
    isRecommend: true,
    isElectron: true,
    reviewCount: 5,
    rating: 4.0
  },

  {
    id: 39,
    title: "침입자",
    image: "/images/books/book39.jpg",
    images: [
      "/images/books/book39.jpg",
      "/images/books/book39_02.jpg",
      "/images/books/book39_03.jpg"
    ],
    author: "이레네 푸자다스",
    publisher: "민음사",
    publishDate: "2026-06-23",
    price: 17000,
    category: "외국문학",
    isNew: true,
    isBest: false,
    isSecond: false,
    isRecommend: true,
    isElectron: true,
    reviewCount: 7,
    rating: 4.3
  },

  {
    id: 40,
    title: "쓰가루",
    image: "/images/books/book40.jpg",
    images: [
      "/images/books/book40.jpg",
      "/images/books/book40_02.jpg",
      "/images/books/book40_03.jpg"
    ],
    author: "다자이 오사무",
    publisher: "민음사",
    publishDate: "2026-00-00",
    price: 13000,
    category: "세계문학전집",
    isNew: false,
    isBest: true,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 10,
    rating: 4.5
  },

  {
    id: 41,
    title: "유령의 마음으로",
    image: "/images/books/book41.jpg",
    images: [
      "/images/books/book41.jpg",
      "/images/books/book41_02.jpg",
      "/images/books/book41_03.jpg"
    ],
    author: "미상",
    publisher: "민음사",
    publishDate: "2026-00-00",
    price: 14000,
    category: "한국문학",
    isNew: false,
    isBest: false,
    isSecond: false,
    isRecommend: true,
    isElectron: false,
    reviewCount: 7,
    rating: 3.9
  },

  {
    id: 42,
    title: "샤라드라",
    image: "/images/books/book42.jpg",
    images: [
      "/images/books/book42.jpg",
      "/images/books/book42_02.jpg",
      "/images/books/book42_03.jpg"
    ],
    author: "미상",
    publisher: "민음사",
    publishDate: "2026-00-00",
    price: 8000,
    category: "세계문학전집",
    isNew: false,
    isBest: false,
    isSecond: true,
    isRecommend: false,
    isElectron: true,
    reviewCount: 5,
    rating: 4.1
  },

  {
    id: 43,
    title: "다나",
    image: "/images/books/book43.jpg",
    images: [
      "/images/books/book43.jpg",
      "/images/books/book43_02.jpg",
      "/images/books/book43_03.jpg"
    ],
    author: "최규석",
    publisher: "민음사",
    publishDate: "2026-00-00",
    price: 3000,
    category: "한국문학",
    isNew: false,
    isBest: false,
    isSecond: true,
    isRecommend: false,
    isElectron: false,
    reviewCount: 28,
    rating: 4.7
  },

  {
    id: 44,
    title: "당신의 세계는 아직도 바다와",
    image: "/images/books/book44.jpg",
    images: [
      "/images/books/book44.jpg",
      "/images/books/book44_02.jpg",
      "/images/books/book44_03.jpg"
    ],
    author: "미상",
    publisher: "민음사",
    publishDate: "2026-00-00",
    price: 13000,
    category: "한국문학",
    isNew: false,
    isBest: false,
    isSecond: false,
    isRecommend: true,
    isElectron: false,
    reviewCount: 11,
    rating: 4.2
  },

  {
    id: 45,
    title: "아무것도 건전하지 않은 날의 기록",
    image: "/images/books/book45.jpg",
    images: [
      "/images/books/book45.jpg",
      "/images/books/book45_02.jpg",
      "/images/books/book45_03.jpg"
    ],
    author: "미상",
    publisher: "민음사",
    publishDate: "2026-00-00",
    price: 18000,
    category: "한국문학",
    isNew: false,
    isBest: false,
    isSecond: false,
    isRecommend: true,
    isElectron: false,
    reviewCount: 20,
    rating: 3.8
  },

  {
    id: 46,
    title: "[2026 워터프루프북] 푸른 물속의 시",
    image: "/images/books/book46.jpg",
    images: [
      "/images/books/book46.jpg",
      "/images/books/book46_02.jpg",
      "/images/books/book46_03.jpg"
    ],
    author: "안태운 외",
    publisher: "민음사",
    publishDate: "2026-06-19",
    price: 15000,
    category: "한국문학",
    isNew: true,
    isBest: false,
    isSecond: false,
    isRecommend: true,
    isElectron: false,
    reviewCount: 24,
    rating: 4.4
  },

  {
    id: 47,
    title: "사랑에 대하여",
    image: "/images/books/book47.jpg",
    images: [
      "/images/books/book47.jpg",
      "/images/books/book47_02.jpg",
      "/images/books/book47_03.jpg"
    ],
    author: "안톤 체호프",
    publisher: "민음사",
    publishDate: "2025-01-20",
    price: 15000,
    category: "세계문학전집",
    isNew: false,
    isBest: true,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 24,
    rating: 4.6
  },

  {
    id: 48,
    title: "무진기행",
    image: "/images/books/book48.jpg",
    images: [
      "/images/books/book48.jpg",
      "/images/books/book48_02.jpg",
      "/images/books/book48_03.jpg"
    ],
    author: "김승옥",
    publisher: "민음사",
    publishDate: "2007-08-03",
    price: 11000,
    category: "세계문학전집",
    isNew: false,
    isBest: true,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 18,
    rating: 4.8
  },

  {
    id: 49,
    title: "브람스를 좋아하세요...",
    image: "/images/books/book49.jpg",
    images: [
      "/images/books/book49.jpg",
      "/images/books/book49_02.jpg",
      "/images/books/book49_03.jpg"
    ],
    author: "프랑수아즈 사강",
    publisher: "민음사",
    publishDate: "2026-00-00",
    price: 20000,
    category: "세계문학전집",
    isNew: false,
    isBest: true,
    isSecond: true,
    isRecommend: true,
    isElectron: true,
    reviewCount: 14,
    rating: 4.9
  },

  {
    id: 50,
    title: "딸기 이론",
    image: "/images/books/book50.jpg",
    images: [
      "/images/books/book50.jpg",
      "/images/books/book50_02.jpg",
      "/images/books/book50_03.jpg"
    ],
    author: "김숨",
    publisher: "민음사",
    publishDate: "2026-05-29",
    price: 18000,
    category: "한국문학",
    isNew: true,
    isBest: false,
    isSecond: false,
    isRecommend: true,
    isElectron: false,
    reviewCount: 15,
    rating: 4.3
  }
];

export default bookData;