export interface Monument {
  id: string;
  name: string;
  country: string;
  isoCode: string;

  location: string;
  continent: string;
  yearBuilt: string;

  description: string;

  modelPath: string;
  audioFile: string;

  themeColor?: string;
}

export const MONUMENTS: Monument[] = [
  {
    id: "india",
    name: "Taj Mahal",
    country: "India",
    isoCode: "in",

    location: "Agra",
    continent: "Asia",
    yearBuilt: "1632",

    description:
      "Taj Mahal adalah mahakarya arsitektur marmer putih di Agra, India, yang dibangun oleh Kaisar Shah Jahan sebagai simbol cinta abadi untuk Mumtaz Mahal.",

    modelPath: "/models/taj_mahal.glb",
    audioFile: "/audio/taj_mahal.mp3",

    themeColor: "#d6d3d1",
  },

  {
    id: "indonesia",
    name: "Monas",
    country: "Indonesia",
    isoCode: "id",

    location: "Jakarta",
    continent: "Asia",
    yearBuilt: "1961",

    description:
      "Monumen Nasional atau Monas merupakan simbol perjuangan rakyat Indonesia yang berdiri megah di pusat kota Jakarta dengan tinggi 132 meter.",

    modelPath: "/models/monas2.glb",
    audioFile: "/audio/monas.MP3",

    themeColor: "#facc15",
  },

  {
    id: "france",
    name: "Eiffel Tower",
    country: "France",
    isoCode: "fr",

    location: "Paris",
    continent: "Europe",
    yearBuilt: "1889",

    description:
      "Menara Eiffel adalah landmark paling terkenal di Paris yang menjadi simbol romantisme, inovasi, dan kemajuan teknologi modern.",

    modelPath: "/models/eiffel.glb",
    audioFile: "/audio/eiffel.mp4",

    themeColor: "#94a3b8",
  },

  {
    id: "usa",
    name: "Statue of Liberty",
    country: "United States",
    isoCode: "us",

    location: "New York",
    continent: "North America",
    yearBuilt: "1886",

    description:
      "Statue of Liberty atau Patung Liberty merupakan salah satu simbol paling terkenal di Amerika Serikat yang terletak di Pulau Liberty, New York. Patung ini diberikan oleh Prancis kepada Amerika Serikat pada tahun 1886 sebagai lambang persahabatan dan kebebasan. Patung setinggi sekitar 93 meter ini menggambarkan seorang wanita yang memegang obor dan tablet bertuliskan tanggal kemerdekaan Amerika, yaitu 4 Juli 1776. Statue of Liberty menjadi ikon kebebasan dan harapan bagi para imigran yang datang ke Amerika melalui jalur laut.",

    modelPath: "/models/statue_of_liberty.glb",
    audioFile: "/audio/statue_of_liberty.mp3",

    themeColor: "#22c55e",
  },

  {
    id: "china",
    name: "Great Wall",
    country: "China",
    isoCode: "cn",

    location: "Northern China",
    continent: "Asia",
    yearBuilt: "700 BC",

    description:
      "Tembok Besar China adalah struktur pertahanan kuno terbesar di dunia yang membentang ribuan kilometer.",

    modelPath: "/models/great_wall_of_china.glb",
    audioFile: "/audio/great_wall.mp3",

    themeColor: "#b45309",
  },

  {
    id: "brazil",
    name: "Christ the Redeemer",
    country: "Brazil",
    isoCode: "br",

    location: "Rio de Janeiro",
    continent: "South America",
    yearBuilt: "1931",

    description:
      "Patung Cristo Redentor di Brasil melambangkan kedamaian, keterbukaan, dan spiritualitas.",

    modelPath: "/models/christ_the_redeemer_rio_de_janeiro.glb",
    audioFile: "/audio/christ_redeemer.mp3",

    themeColor: "#e5e7eb",
  },

  {
    id: "egypt",
    name: "Pyramids of Giza",
    country: "Egypt",
    isoCode: "eg",

    location: "Giza",
    continent: "Africa",
    yearBuilt: "2560 BC",

    description:
      "Piramida Giza adalah keajaiban dunia kuno yang mencerminkan kecanggihan peradaban Mesir kuno.",

    modelPath: "/models/the_great_pyramid_of_giza.glb",
    audioFile: "/audio/pyramids_of_giza.mp3",

    themeColor: "#ca8a04",
  },

  {
    id: "uk",
    name: "Big Ben",
    country: "United Kingdom",
    isoCode: "gb",

    location: "London",
    continent: "Europe",
    yearBuilt: "1859",

    description:
      "Big Ben adalah menara jam legendaris di London yang menjadi simbol budaya dan sejarah Inggris.",

    modelPath: "/models/big_ben.glb",
    audioFile: "/audio/big_ben.mp3",

    themeColor: "#64748b",
  },

  {
    id: "japan",
    name: "Tokyo Tower",
    country: "Japan",
    isoCode: "jp",

    location: "Tokyo",
    continent: "Asia",
    yearBuilt: "1958",

    description:
      "Tokyo Tower adalah menara komunikasi ikonik Jepang yang melambangkan modernisasi pasca perang.",

    modelPath: "/models/tokyo_tower.glb",
    audioFile: "/audio/tokyo_tower.mp4",

    themeColor: "#ef4444",
  },

  {
    id: "australia",
    name: "Sydney Opera House",
    country: "Australia",
    isoCode: "au",

    location: "Sydney",
    continent: "Australia",
    yearBuilt: "1973",

    description:
      "Sydney Opera House adalah gedung seni pertunjukan paling terkenal di dunia dengan desain futuristik ikonik.",

    modelPath: "/models/sydney_opera_house.glb",
    audioFile: "/audio/sydney_opera_house.mp3",

    themeColor: "#38bdf8",
  },

  {
    id: "uae",
    name: "Burj Khalifa",
    country: "United Arab Emirates",
    isoCode: "ae",

    location: "Dubai",
    continent: "Asia",
    yearBuilt: "2010",

    description:
      "Burj Khalifa merupakan gedung tertinggi di dunia dan simbol kemajuan modern kota Dubai.",

    modelPath: "/models/free__burj_khalifa_dubai.glb",
    audioFile: "/audio/Burj khalifa.mp4",

    themeColor: "#94a3b8",
  },

  {
    id: "spain",
    name: "Sagrada Familia",
    country: "Spain",
    isoCode: "es",

    location: "Barcelona",
    continent: "Europe",
    yearBuilt: "1882",

    description:
      "Sagrada Familia adalah Sebuah basilika Katolik megah di Barcelona yang menjadi ikon arsitektur Modernisme Catalan. Dirancang oleh Antoni Gaudí, bangunan ini memadukan bentuk-bentuk geometris organik yang terinspirasi dari alam dan hutan. Konstruksinya murni didanai oleh donasi publik dan tiket masuk wisatawan, menjadikannya salah satu proyek pembangunan terlama di dunia.",

    modelPath: "/models/barcelona_sagrada_familia_2.glb",
    audioFile: "/audio/sagrada_familia.mp3",

    themeColor: "#f59e0b",
  },

  {
    id: "russia",
    name: "Saint Basil Cathedral",
    country: "Russia",
    isoCode: "ru",

    location: "Moscow",
    continent: "Europe",
    yearBuilt: "1561",

    description:
      "Saint Basil Cathedral adalah Katedral unik yang berdiri di pusat kota Moskow ini aslinya bernama Cathedral of the Intercession. Bangunan ini terkenal karena desain geometrisnya yang asimetris namun harmonis, menampilkan sembilan kapel dengan kubah berbentuk bawang yang dicat dengan pola warna-warni cerah, mencerminkan gaya arsitektur tradisional Rusia yang khas.",

    modelPath: "/models/saint_basils_cathedral_3d_model.glb",
    audioFile: "/audio/saint_basil.mp3",

    themeColor: "#dc2626",
  },

  {
    id: "turkey",
    name: "Hagia Sophia",
    country: "Turkey",
    isoCode: "tr",

    location: "Istanbul",
    continent: "Europe/Asia",
    yearBuilt: "537",

    description:
      "Hagia Sophia adalah Sebuah mahakarya arsitektur yang dibangun di Konstantinopel (sekarang Istanbul) pada abad ke-6 di bawah perintah Kaisar Bizantium, Justinian I. Monumen ini merevolusi sejarah arsitektur dunia melalui teknik pembuatan kubah gantung raksasanya yang sangat besar, menjadikannya simbol keagamaan dan politik yang penting lintas zaman.",

    modelPath: "/models/mosque.glb",
    audioFile: "/audio/hagia_sophia.mp3",

    themeColor: "#c084fc",
  },

  {
    id: "greece",
    name: "Parthenon",
    country: "Greece",
    isoCode: "gr",

    location: "Athens",
    continent: "Europe",
    yearBuilt: "432 BC",

    description:
      "Parthenon merupakan Kuil kuno yang mendominasi bukit Akropolis di Athena, dibangun antara tahun 447 dan 432 SM. Dirancang oleh arsitek Ictinus dan Callicrates di bawah pengawasan pemahat Phidias, kuil ini merupakan pencapaian tertinggi arsitektur klasik ordo Dorik yang awalnya dibangun untuk menyimpan patung emas dan gading raksasa dewi Athena Parthenos.",

    modelPath: "/models/parthenon_athenes.glb",
    audioFile: "/audio/parthenon.mp3",

    themeColor: "#d4d4d8",
  },

  {
    id: "mexico",
    name: "Chichen Itza",
    country: "Mexico",
    isoCode: "mx",

    location: "Yucatán",
    continent: "North America",
    yearBuilt: "600 AD",

    description:
      "Chichen Itza adalah situs bersejarah peradaban Maya yang terkenal dengan piramida El Castillo.",

    modelPath: "/models/chichen_itza_pyramid_3d_reconstruction.glb",
    audioFile: "/audio/chichen_itza.mp3",

    themeColor: "#f97316",
  },
];
