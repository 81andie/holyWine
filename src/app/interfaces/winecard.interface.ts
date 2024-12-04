export interface Wine {
  points:                number;
  title:                 string;
  description:           string;
  taster_name:           TasterName | null;
  taster_twitter_handle: TasterTwitterHandle | null;
  price:                 number | null;
  designation:           null | string;
  variety:               string;
  region_1:              null | string;
  region_2:              Region2 | null;
  province:              null | string;
  country:               Country | null;
  winery:                string;
}

export enum Country {
  Argentina = "Argentina",
  Australia = "Australia",
  Austria = "Austria",
  Brazil = "Brazil",
  Bulgaria = "Bulgaria",
  Canada = "Canada",
  Chile = "Chile",
  China = "China",
  Croatia = "Croatia",
  CzechRepublic = "Czech Republic",
  England = "England",
  France = "France",
  Georgia = "Georgia",
  Germany = "Germany",
  Greece = "Greece",
  Hungary = "Hungary",
  India = "India",
  Israel = "Israel",
  Italy = "Italy",
  Lebanon = "Lebanon",
  Mexico = "Mexico",
  Moldova = "Moldova",
  NewZealand = "New Zealand",
  Portugal = "Portugal",
  Romania = "Romania",
  Serbia = "Serbia",
  Slovenia = "Slovenia",
  SouthAfrica = "South Africa",
  Spain = "Spain",
  Turkey = "Turkey",
  Ukraine = "Ukraine",
  Uruguay = "Uruguay",
  Us = "US",
}

export enum Region2 {
  CaliforniaOther = "California Other",
  CentralCoast = "Central Coast",
  CentralValley = "Central Valley",
  ColumbiaValley = "Columbia Valley",
  FingerLakes = "Finger Lakes",
  LongIsland = "Long Island",
  Napa = "Napa",
  NapaSonoma = "Napa-Sonoma",
  NewYorkOther = "New York Other",
  NorthCoast = "North Coast",
  OregonOther = "Oregon Other",
  SierraFoothills = "Sierra Foothills",
  Sonoma = "Sonoma",
  SouthCoast = "South Coast",
  SouthernOregon = "Southern Oregon",
  WashingtonOther = "Washington Other",
  WillametteValley = "Willamette Valley",
}

export enum TasterName {
  AlexanderPeartree = "Alexander Peartree",
  AnnaLeeCIijima = "Anna Lee C. Iijima",
  AnneKrebiehlMW = "Anne Krebiehl MW",
  CarrieDykes = "Carrie Dykes",
  FionaAdams = "Fiona Adams",
  JeffJenssen = "Jeff Jenssen",
  JimGordon = "Jim Gordon",
  JoeCzerwinski = "Joe Czerwinski",
  KerinOKeefe = "Kerin O’Keefe",
  LaurenBuzzeo = "Lauren Buzzeo",
  MattKettmann = "Matt Kettmann",
  MichaelSchachner = "Michael Schachner",
  MikeDeSimone = "Mike DeSimone",
  PaulGregutt = "Paul Gregutt",
  RogerVoss = "Roger Voss",
  SeanPSullivan = "Sean P. Sullivan",
  SusanKostrzewa = "Susan Kostrzewa",
  VirginieBoone = "Virginie Boone",
}

export enum TasterTwitterHandle {
  AnneInVino = "@AnneInVino",
  Bkfiona = "@bkfiona",
  GordoneCellars = "@gordone_cellars",
  JoeCz = "@JoeCz",
  Kerinokeefe = "@kerinokeefe",
  Laurbuzz = "@laurbuzz",
  Mattkettmann = "@mattkettmann",
  Paulgwine = "@paulgwine ",
  Suskostrzewa = "@suskostrzewa",
  Vboone = "@vboone",
  Vossroger = "@vossroger",
  Wawinereport = "@wawinereport",
  Wineschach = "@wineschach",
  Worldwineguys = "@worldwineguys",
}
