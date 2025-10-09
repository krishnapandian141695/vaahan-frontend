export const infoData = {
  baseApi: "https://api.vaahansafety.org/api",
};

const tempCompanies = [
  "ASHOK LEYLAND",
  "DAIMLER INDIA",
  "ASIA MOTORS",
  "BAJAJ",
  "FORCE MOTORS",
  "FORD",
  "GENERAL MOTORS",
  "HINDUSTAN MOTORS",
  "HONDA",
  "HYUNDAI",
  "MAN",
  "MARUTI SUZUKI",
  "RENAULT",
  "KIA",
  "TOYOTA KIRLOSKAR",
  "NISSAN",
  "SWARAJ MAZDA",
  "VE COMMERCIAL",
  "TATA MOTORS",
  "MAHINDRA & MAHINDRA",
  "PIAGGIO",
  "AMW",
  "ISUZU MOTORS",
  "Tvs",
  "DAIMLER INDIA COMMERCIAL VEHICLE",
  "BAJAJ TEMPO",
  "TAFE",
  "VOLVO",
  "JCB INDIA LIMITED",
  "FORCE TRAVELLER",
  "HINDUSTAN MOTORS LTD",
  "ESCORTS LTD",
  "Gujarath Tractor Corp LTD.",
  "SCOOTERS INDIA LTD",
  "SML ISUZU",
  "ASHOK LEYLAND LTD",
  "MERCEDES-BENZ INDIA",
  "OMEGA SEIKI EV",
  "MASKTRO MOTORS",
  "FORCE MOTORS LIMTED, A FIRODI TATA",
  "TATA",
  "THIRUMALA AGROINDUSTRY",
  "ATUL AUTO LTD",
  "ISUZU MOTORS INDIA PVT LTD",
  "VE Commercials",
  "TATA MOTORS LTD",
  "VSL Industries Ltd",
  "MAHINDRA $ MAHINDRA LIMITED",
  "SML ISUZU LTD",
  "ISUZU",
  "V E Commercials",
  "VOLOVO INDIA PVT LTD",
  "FIRE EICHER",
  "MAHINDRA & MAHINDRA LTD",
  "BMW",
  "REEP INDUSTRIES PVT LTD",
  "SAME DEVTZ FAHRI PVT LTD",
  "PREMIER",
  "Vikram Auto",
  "John Deer India Pvt LEg",
  "Kirloskar Pneumatic co Itd",
  "DCM TOYOTA LTD",
  "New Holland Tractor",
  "EICHER •",
  "EICHER MOTORS LTD",
  "HMT",
  "BHARAT BENZ",
  "BOBCAT COMPANY",
  "KINETIC GREEN ENERGY",
  "BAJAJ TEMPO LTD",
  "FORCE MOTORS LIMTED,",
  "Bharath Benz",
  "SUNDARAM MOTORS",
  "DAIMMLER 1 COMM VEH P LTD",
  "SWARAJ MAZDA LTD",
  "MAHINDRA MAHINDRA LIMITED",
  "BAJAJ AUTO",
  "ASHOK LEYLAND",
  "DAIMI FR INDIA COMMERCIAL",
  "AMW",
  "ISUZU MOTORS",
  "Tvs",
  "DAIMLER INDIA COMMERCIAL VEHICLE",
  "BAJAJ TEMPO",
  "TAFE",
  "VOLVO",
  "JCB INDIA LIMITED",
  "FORCE TRAVELLER",
  "HINDUSTAN MOTORS LTD",
  "ESCORTS LTD",
  "Gujarath Tractor Corp LTD.",
  "SCOOTERS INDIA LTD",
  "SML ISUZU",
  "ASHOK LEYLAND LTD",
  "MERCEDES-BENZ INDIA",
  "OMEGA SEIKI EV",
  "MASKTRO MOTORS",
  "FORCE MOTORS LIMTED, A FIRODI TATA",
  "THIRUMALA AGROINDUSTRY",
  "ATUL AUTO LTD",
  "ISUZU MOTORS INDIA PVT LTD",
  "VE Commercials",
  "TATA MOTORS LTD",
  "VSL Industries Ltd",
  "MAHINDRA $ MAHINDRA LIMITED",
  "SML ISUZU LTD",
  "ISUZU",
  "VE Commercials",
  "VOLOVO INDIA PVT LTD",
  "FIRE EICHER",
  "MAHINDRA & MAHINDRA LTD",
  "BMW",
  "REEP INDUSTRIES PVT LTD",
  "Toyota",
  "SAME DEVTZ FAHRI PVT LTD",
  "PREMIER",
  "Vikram Auto",
  "John Deer India Pvt LEg",
  "Kirloskar Pneumatic co Itd",
  "DCM TOYOTA LTD",
  "New Holland Tractor",
  "EICHER •",
  "EICHER MOTORS LTD",
  "HMT",
  "BHARAT BENZ",
  "BOBCAT COMPANY",
  "KINETIC GREEN ENERGY",
  "BAJAJ TEMPO LTD",
  "FORCE MOTORS LIMTED,",
  "Bharath Benz",
  "SUNDARAM MOTORS",
  "DAIMMLER 1 COMM VEH P LTD",
  "SWARAJ MAZDA LTD",
  "MAHINDRA MAHINDRA LIMITED",
  "BAJAJ AUTO",
  "ASHOK LEYLAND",
  "DAIMI FR INDIA COMMERCIAL",
  "BHARAT BENZ",
  "BOBCAT COMPANY",
  "KINETIC GREEN ENERGY.",
  "BAJAJ TEMPO LTD",
  "FORCE MOTORS LIMTED,",
  "Bharath Benz",
  "SUNDARAM MOTORS",
  "DAIMMLER 1 COMM VEH P LTD",
  "SWARAJ MAZDA LTD",
  "МАН",
  "MAHINDRA MAHINDRA LIMITED",
  "BAJAJ AUTO",
  "ASHOK LEYLAND",
  "ASHOK LAYLAND",
  "DAIMLER INDIA COMMERCIAL",
  "VE COMMERICAL VEHICLE LTD",
  "TATA MOTOR LTD",
  "VE COMMERICAL VEHICLE LTD"
];

export const companies = [
  ...tempCompanies.map((company) => ({
    [company]: company,
  })),
];

export const modalTypes = {
  "ASHOK LEYLAND": {
    "Ashok Leyland 2513": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland Taurus 2516": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13.5,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland Comet 1611": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12.5,
      "C3": 1,
      "C4": 0
    },
    "ALPSV 4/38": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland DOST": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland ALPSV 4/161": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "ALFSV3/46-LYNX": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "ALFSV3/46-LYNX": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland Lynx": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland 3116": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 15.5,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland Ecomet 1012": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland 1212": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland ALPSV 4/186": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland 1214 SMART": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland Viking ALPSV 4/247": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland ALPSV 4/88": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland Tusker Super 2214": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland ALPSV Viking 4/83": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland ECOMET 1112": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland CT 1613": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland Ecomet 912": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland 3718": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland U 2523": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland Viking Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland 3516 Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland 3517 Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 22,
      "C3": 0,
      "C4": 1
    },
    "Ashok Leyland 3518 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 1
    },
    "Ashok Leyland 3518 Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "Ashok Leyland 3518 Bulker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "Ashok Leyland 4019 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 1
    },
    "Ashok Leyland 4019 Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "Ashok Leyland 4019 Bulker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "Ashok Leyland 4018 Bulker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "Ashok Leyland U-3123 T": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "AL 2518 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland ALPSV 4/89": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland 1214 CONTAINER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland 3118": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 15.5,
      "C3": 1,
      "C4": 0
    },
    "AL 1611 CONTAINER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland BOSS 1212": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 3,
      "White 50MM": 3,
      "Yellow 50MM": 21,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland BOSS 1212 LE": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland COMMET TIPPER 1616XL": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.8,
      "Yellow 50MM": 10.5,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland 2516 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland TUSKER TURBO TRACTOR 3516": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 1
    },
    "Ashok Leyland 1613 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland ECOMET 1109": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland ALPEV 1/38": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland BOSS 1412 CONTAINER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 7,
      "White 50MM": 2.5,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland BOSS 1115 CONTAINER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 9,
      "White 50MM": 2.25,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "AL 4123 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland STILE": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland GA 1920/43 H CO": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland Boss 1413": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland GURU 1111": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland 4923TT BULKER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "AL 1618 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland 4923 Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "Ashok Leyland UE5525/39 TTCC": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 23,
      "C3": 0,
      "C4": 1
    },
    "Ashok Leyland PARTNER MLS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    },
    "AL 3516 Bulker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "Ashok Leyland 3518": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland PA 1215/52 HCC": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland ALPSV 4/56": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 19,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland 4921 WB": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 28,
      "C3": 0,
      "C4": 1
    },
    "Ashok Leyland 709": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland Cargo 709": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland VK 1811": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland UE5525-39 TTCC": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 23,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland 4218": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland 4018": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 20,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland U 2512": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland 2514": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "AL 4023 Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 8,
      "White 50MM": 2.5,
      "Yellow 50MM": 30,
      "C3": 0,
      "C4": 1
    },
    "ECOMET 1015": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "ALCO 3/16-3600MM": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "ALPSV 1/40": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "AL 3516": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 1
    },
    "AL 1918": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "PARTNER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    },
    "AL STAG 3/26": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 1.7,
      "Yellow 50MM": 13,
      "C3": 3,
      "C4": 516
    },
    "3516 - canter - c3": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "CARGO 100.12": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 1,
      "C4": 0
    },
    "ALPSV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 20,
      "C3": 1,
      "C4": 0
    },
    "BOSS 913": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "GF3520/66HCO": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "MINI BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 15,
      "C3": 0,
      "C4": 0
    },
    "SCHOOL BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 11,
      "C3": 0,
      "C4": 0
    },
    "ASHOK LEYLAND TAURUS MK II 150WB": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 3,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "AL 4018-C4": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 28,
      "C3": 0,
      "C4": 1
    },
    "SS1008": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 0,
      "C4": 0
    },
    "CA1615/52 H FBL": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.1,
      "White 50MM": 2.1,
      "Yellow 50MM": 14.8,
      "C3": 1,
      "C4": 0
    },
    "AL 1615": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.25,
      "White 50MM": 2.25,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "EA19020/43H": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 15,
      "C3": 0,
      "C4": 1
    },
    "Dost ( New Vehicle)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "1612L Goods Chasiss Cabin N3": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.1,
      "White 50MM": 2.2,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland 3611 - IL": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 14.5,
      "C3": 1,
      "C4": 0
    },
    "207DI EX4SPCR10 CCD1 L3150 W": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "1616 XL Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.2,
      "Yellow 50MM": 9,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland 1612 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland U2523 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "CHEOTOH ALPS 1/30": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.6,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "AL 4921/4923 Cement Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 1
    },
    "AL 3118 Bulker 12Wheel": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "ASHOK LEYLAND CRUSHER COMET": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 6,
      "C3": 1,
      "C4": 0
    },
    "CRUSHER 2516": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "CRUSHER 2516 YEL": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 8,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland 1611/2-142 WB": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 8.5,
      "C3": 1,
      "C4": 2
    },
    "2214/19 180WB TUSKER 6X2": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 13.5,
      "C3": 1,
      "C4": 0
    },
    "AL 1618 LPG Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "GURU 1010 E4": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6.5,
      "White 50MM": 1.4,
      "Yellow 50MM": 12.5,
      "C3": 1,
      "C4": 0
    },
    "Ashok leyland 3121 205 WB": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "AL 1613": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland Boss 1113": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13.4,
      "C3": 1,
      "C4": 0
    },
    "Ashok Leyland 4023": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "AL 2214 Tusker Super Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "AL 1616 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 12.5,
      "C3": 1,
      "C4": 0
    },
    "GM4220/66 HCO": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "AL TF1812 Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "AL ECOMET 1214/42 E4": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "AL CA1415/39": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12.5,
      "C3": 1,
      "C4": 0
    },
    "AL 4921 CEMENT TRAILER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 1
    },
    "AL 3516 BULKER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "Ashok Leyland Comet 912": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 8.5,
      "C3": 1,
      "C4": 0
    },
    "Ecomet 1212 E4/1": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 8,
      "C3": 1,
      "C4": 0
    },
    "AL 4/157 Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland 4018 Cement Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 1
    },
    "ALPSV 3/41": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland DOST - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland ALPSV 4/28": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "Ashok Leyland ALPSV 4/188": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 0,
      "C4": 0
    },
    "AL TUSKER SUPER 2214": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "AL 3116": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "AL 3118": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "AL 3718 Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "AL 4/157 MiniBus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 17,
      "C3": 0,
      "C4": 0
    },
    "AL CO 1510": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "AL 2516 Tusker Super": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "AL 1616 222 WB": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18.5,
      "C3": 1,
      "C4": 0
    },
    "AL 2614 Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "AL 2516 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "AL 2614 Trailer C3": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 22,
      "C3": 1,
      "C4": 0
    },
    "AL 1614 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "AL Boss 912": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 1,
      "C4": 0
    },
    "AL 4921 Bulker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "ALPSV 3/4 Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 17.5,
      "C3": 0,
      "C4": 0
    },
    "AL 2818": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.25,
      "White 50MM": 2.25,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "AL 2516 TANKER 10Wheel": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "AL 2518 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "ALH 1/9 18 Wheel": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 28,
      "C3": 0,
      "C4": 1
    },
    "AL 2516 30FT Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 8,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "AL COMET 1510": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "AL CARGO 909": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "HMV HEAVY GOODS CARRIER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 11,
      "C3": 1,
      "C4": 0
    },
    "AL 2518 Concrete Mixture": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2,
      "Yellow 50MM": 11,
      "C3": 1,
      "C4": 0
    },
    "AL CA1015/39 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "AL 1618 CONTAINER (27FT)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "AL 1616 Container (27FT)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 8,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "ALPSV 4/38 - MiniBus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 13,
      "C3": 0,
      "C4": 0
    },
    "AL 3116 12 Wheel": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 1,
      "C4": 0
    },
    "AL Tipper 6 Wheel": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.25,
      "White 50MM": 2.25,
      "Yellow 50MM": 11,
      "C3": 1,
      "C4": 0
    },
    "ALCO 3/1": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "ECOMET 1412": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "AL 1512 Cargo": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.25,
      "White 50MM": 2.25,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "AL 2518": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "AL 3116 12Wheel Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 15.5,
      "C3": 1,
      "C4": 0
    },
    "AL 3718 Tanker 14Wheel": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "GP4825/66 H CO": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.2,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "2516T 198WB TUSKER SUPER 6X2": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "AL VK1611 Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 0,
      "C4": 0
    },
    "AL 2818 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "AL Boss 1112": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "AL 4188 210(WB)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 23,
      "C3": 1,
      "C4": 0
    },
    "AL 4/157": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 23,
      "C3": 1,
      "C4": 0
    },
    "AL 4019 Cement Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 1
    },
    "AL LS1310 Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 0,
      "C4": 0
    },
    "AL 4019 Trailer (22 FT)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 17,
      "C3": 0,
      "C4": 1
    },
    "DOST - New Vehicle": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "AL COMET 415": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.25,
      "White 50MM": 2.25,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "AL 3718 BS IV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "AL 4/19": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 1,
      "C4": 0
    },
    "AL Boss 1412": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "AL HMV BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.25,
      "White 50MM": 2.25,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "AL CARGO 1312": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "AL TF1812 BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "AL 3611 Bulker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 26,
      "C3": 0,
      "C4": 1
    },
    "AL 2214 Container (22 FT)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "AL 4023 Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "AL 1616 IL": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "AL 1618 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.25,
      "White 50MM": 2.25,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "AL Boss 1113 Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "AL 4/38 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "AL 1616 Container (32FT)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 8,
      "White 50MM": 2.5,
      "Yellow 50MM": 22,
      "C3": 1,
      "C4": 0
    },
    "AL ALPSV 3/106": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "AL Ecomet 1110": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "AL 1616 Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "ALPSV 3/106 BSIII": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 0,
      "C4": 0
    },
    "AL MITR LES": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 0,
      "C4": 0
    },
    "AL 1613 Container (20FT)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "AL 4123": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "AL COMET 910": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "AL 139.3D4R Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 0,
      "C4": 0
    },
    "BOSS 1213": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "AL U2518 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "AL Boss 1415": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "Tata Lop 7.5 T Star Bus Ultra": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 14,
      "C3": 0,
      "C4": 0
    },
    "AL FV2518 Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 0,
      "C4": 1
    },
    "AL 4018": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 24,
      "C3": 0,
      "C4": 1
    },
    "AL 3520/63": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 15.5,
      "C3": 1,
      "C4": 0
    },
    "AL 1612 Container (18FT)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "AL Educational Institution Vehicle": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 17,
      "C3": 0,
      "C4": 0
    },
    "AL 3118 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 15.5,
      "C3": 1,
      "C4": 0
    },
    "AL CT1613H": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "AL 415/5 Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "AL 1256": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "AL 2214 Tusker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12.5,
      "C3": 1,
      "C4": 0
    },
    "AL UE2825/39 TIPPER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12.5,
      "C3": 1,
      "C4": 0
    },
    "AL 1612": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "AL 3118 IL Tanker (27FT)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 19,
      "C3": 1,
      "C4": 0
    },
    "AL 3123 Tipper 12W": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "AL 4825 16W": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 1,
      "C4": 0
    },
    "AL LS1308 Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 0,
      "C4": 0
    },
    "AL 4188": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "AL 3718 Bulker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 4,
      "White 50MM": 2.25,
      "Yellow 50MM": 19,
      "C3": 1,
      "C4": 0
    },
    "AL 1215 Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "AL 1/38 Container (32FT)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 7,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "AL 2518 Container (24FT)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 8,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "AL 1616 Fire Service Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "AL 2516 Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 24,
      "C3": 1,
      "C4": 0
    },
    "AL 1618": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.25,
      "White 50MM": 2.25,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "AL 1616 Closed Body": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 1,
      "C4": 0
    },
    "1214 ECOMET": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 4,
      "White 50MM": 4,
      "Yellow 50MM": 18,
      "C3": 0,
      "C4": 0
    },
    "AL 3718": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "GA4020/34 TT CO": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    }
  },
  "DAIMLER INDIA": {
    "Bharath Benz 4928 TT 6X4": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 1
    }
  },
  "ASIA MOTORS": {
    "AMW 2518": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "ASIA 2523": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "AMW 2516": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    }
  },
  BAJAJ: {
    "Bajaj Tempo Traveller Cruisier": {
      "RED 20MM": 2,
      "White 20MM": 2,
      "RED 50MM": 9,
      "White 50MM": 0,
      "Yellow 50MM": 0,
      "C3": 0,
      "C4": 0
    },
    "Bajaj Tempo": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Bajaj Auto": {
      "RED 20MM": 1.25,
      "White 20MM": 1.4,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 0,
      "C3": 0,
      "C4": 0
    },
    "Bajaj Auto - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 0,
      "C3": 0,
      "C4": 0
    },
    "Bajaj Auto - Yellow": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.4,
      "Yellow 50MM": 1.5,
      "C3": 0,
      "C4": 0
    },
    "Bajaj Matador 307": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 8.5,
      "C3": 0,
      "C4": 0
    },
    "Bajaj Maxima Load Auto": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    },
    "Bajaj Minidoor": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.3,
      "White 50MM": 1.2,
      "Yellow 50MM": 5.6,
      "C3": 0,
      "C4": 0
    },
    "Bajaj Maxima Auto": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    }
  },
  "FORCE MOTORS": {
    "Force Traveller": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    },
    "Tempo Traveller": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 0,
      "C4": 0
    },
    "TRUMP 40 PICKUP": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Minidor": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 4.5,
      "C3": 0,
      "C4": 0
    },
    "MINIDOR - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 4.5,
      "C3": 0,
      "C4": 0
    },
    "TEMPO EXCELA": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 11,
      "C3": 0,
      "C4": 0
    },
    "Force Cruiser": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "Trax": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Force Citiline": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10.5,
      "C3": 0,
      "C4": 0
    }
  },
  FORD: {
    "Ford Figo": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Ford Figo Aspire": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Ford Figo - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    }
  },
  "GENERAL MOTORS": {
    "Cheverolet Tavera - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    },
    "Cheverolet Enjoy": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Chevrolet Beat": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Chevrolet Sail": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Cheverolet Tavera": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    },
    "Cheverolet Enjoy - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    }
  },
  "HINDUSTAN MOTORS": {
    "Ambassdor": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Ambassador - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    }
  },
  HONDA: {
    "Honda Amaze": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Honda City": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Honda Mobilio": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Honda Amaze - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    }
  },
  HYUNDAI: {
    "Hyundai Xcent - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 3.5,
      "C3": 0,
      "C4": 0
    },
    "Hyundai SANTRO": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Hyundai Grand": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Hyundai I10": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Hyundai EON": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Hyundai Xcent": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Hyundai i10 - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Hyundai Verna": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Hyundai Verna 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Hyundai Creta": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Hyundai Creta 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Hyundai Venue": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Hyundai Venue 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Hyundai EV": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Hyundai Exter": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    }
  },
  MAN: {
    "MAN 25.250 TRUCK": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "MAN CLA Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 4,
      "Yellow 50MM": 23,
      "C3": 0,
      "C4": 1
    },
    "MAN CLA Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 28,
      "C3": 0,
      "C4": 1
    },
    "MAN CLA Bulker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 8,
      "White 50MM": 2.5,
      "Yellow 50MM": 30,
      "C3": 0,
      "C4": 1
    },
    "MAN CLA 16.220": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "MAN CLA 49.290": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 23.5,
      "C3": 0,
      "C4": 1
    },
    "MAN CLA 25.80": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.25,
      "White 50MM": 2.25,
      "Yellow 50MM": 12.5,
      "C3": 1,
      "C4": 0
    },
    "MAN CLA 40.280": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2,
      "Yellow 50MM": 21,
      "C3": 1,
      "C4": 0
    },
    "CLA 25.280 Concrete Mixure": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "CLA 25.280": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12.5,
      "C3": 1,
      "C4": 0
    },
    "MAN 40.220": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 1,
      "C4": 0
    },
    "MAN 25.180 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    }
  },
  "MARUTI SUZUKI": {
    "Maruti Suzuki Wagon R": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Maruti Suzuki Ritz": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3.5,
      "C3": 0,
      "C4": 0
    },
    "Maruti Celerio": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Maruti Suzuki Alto K10": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Maruti Gypsy": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Maruti Suzuki Esteem": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Maruti Versa": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Maruti Omni": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 5.5,
      "C3": 0,
      "C4": 0
    },
    "Maruti Swift": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.4,
      "White 50MM": 1.4,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Maruti Suzuki EECO": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 7.5,
      "C3": 0,
      "C4": 0
    },
    "Swift Dzire Tour": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    },
    "Maruti Suzuki Ertiga": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Maruti Brezza": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Maruti Suzuki Fronx": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Maruti Grand Vitaara": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3.5,
      "C3": 0,
      "C4": 0
    },
    "MARUTI SUPER CARRY": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Swift Dzire - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    },
    "MARUTI SUPER CARRY - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Maruti Omni - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 5.5,
      "C3": 0,
      "C4": 0
    },
    "Maruti Suzuki Baleno": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Maruti Super Carry - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Maruti Suzuki EECO - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Maruti Celerio - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Swift Dzire Tour - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    },
    "MARUTI SUZUKI TOUR H1": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    }
  },
  RENAULT: {
    "Renault Lodgy - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Renault kiger": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Renault Triber": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Renault kiger 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Renault Triber 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Renault Kwid": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "RENAULT LODGY": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Renault Duster": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    }
  },
  KIA: {
    "Kia Carens": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Kia Sonet": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Kia Seltos": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Kia Syros": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Kia Carnival": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Kia Ev9": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Kia Ev6": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Kia Carens 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Kia Sonet 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Kia Seltos 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Kia Syros 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Kia Carnival 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Kia Ev9 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Kia Ev6 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    }
  },
  "TOYOTA KIRLOSKAR": {
    "Toyota Vellfire": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    },
    "Toyota Fortuner": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    },
    "Toyota Innova Hycross": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    },
    "Toyota Innova Crysta": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Glanza": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Hyryder": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Taisor": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Rumion": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Urbancruiser": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Yaris": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Camry": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Vellfire 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    },
    "Toyota Fortuner 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    },
    "Toyota Innova Hycross 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    },
    "Toyota Innova Crysta 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Glanza 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Hyryder 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Taisor 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Rumion 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Urbancruiser 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Yaris 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Camry 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Etios": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Etios LIVA": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Toyota Innova": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    },
    "TOYOTA INNOVA - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 5,
      "C3": 0,
      "C4": 0
    },
    "Toyota Etios - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    }
  },
  NISSAN: {
    "Nissan Sunny": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Nissan Micra": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Nissan Datsun GO": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "ALLWYN Nissan": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.8,
      "White 50MM": 1.8,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "Nissan Sunny - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Nissan Evalia": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Nissan magnite": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Nissan micra": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Nissan magnite 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Nissan micra 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    }
  },
  "SWARAJ MAZDA": {
    "Nissan Sunny": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Nissan Micra": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Nissan Datsun GO": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "ALLWYN Nissan": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.8,
      "White 50MM": 1.8,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "Nissan Sunny - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Nissan Evalia": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Nissan magnite": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Nissan micra": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Nissan magnite 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Nissan micra 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    }
  },
  "VE COMMERCIAL": {
    "Eicher 10.75": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Eicher 10.50": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Eicher 30.25": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 13.5,
      "C3": 1,
      "C4": 0
    },
    "Eicher 20.15": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Eicher 20.16": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Eicher 11.10": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Eicher 10.59 / Pro 1059": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 11.5,
      "C3": 1,
      "C4": 0
    },
    "Eicher 10.90": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "Eicher 10.95": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12.5,
      "C3": 1,
      "C4": 0
    },
    "Eicher 10.80": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 1,
      "C4": 0
    },
    "Eicher 11.12": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Eicher 10.70": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Eicher Pro 11.10 container (20FT)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Eicher Terra 16": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 20,
      "C3": 1,
      "C4": 0
    },
    "Eicher Mitsubishi Canter": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Eicher 10.60": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "EICHER PRO 5016": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12.5,
      "C3": 1,
      "C4": 0
    },
    "EICHER 10.50 D BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 0,
      "C4": 0
    },
    "EICHER LGV (OLD)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    },
    "Eicher MAXI CAB": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10.5,
      "C3": 0,
      "C4": 0
    },
    "Eicher Pro 1049": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "EICHER 10.50 C BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "MOTOR D VAN 150 HP": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Eicher PRO 6025 T G CAB TIPPER 16 CUM": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 11,
      "C3": 1,
      "C4": 0
    },
    "EICHER 10.75 BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12.5,
      "C3": 0,
      "C4": 0
    },
    "EICHER PRO 3016": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "EICHER 10.70": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "EICHER PRO 6031 P CWC": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "EICHER 242 PREMIUM": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "EICHER PRO": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "EICHER 10.90 BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 17,
      "C3": 0,
      "C4": 0
    },
    "EICHER BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 0,
      "C4": 0
    },
    "EICHER 35.31": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "EICHER PRO 1095": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 0,
      "C4": 1
    },
    "Tractor": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 21,
      "C3": 1,
      "C4": 0
    },
    "EICHER PRO 5028": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 8,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 1,
      "C4": 0
    },
    "EICHER PRO 2095XPT": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 1,
      "C4": 0
    },
    "EICHER pro5035 D": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 0,
      "C4": 0
    },
    "EICHER -11.10 PRO(LBC -24 FEET)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "EICHER -11.50(14- FEET)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 11,
      "C3": 1,
      "C4": 0
    },
    "EICHER 10.90 (17 FEET)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10.5,
      "C3": 1,
      "C4": 0
    },
    "EICHER -10.50 (3 IN ALL)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9.6,
      "C3": 1,
      "C4": 0
    },
    "EICHER -10.90(CAB & FSD)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.7,
      "White 50MM": 1.7,
      "Yellow 50MM": 8.5,
      "C3": 1,
      "C4": 0
    },
    "EICHER CRUISER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 6.5,
      "C3": 0,
      "C4": 1
    },
    "EICHER 11.12 G DSD BS III": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Eicher Pro 1055C": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 5,
      "C3": 0,
      "C4": 0
    },
    "Eicher Pro 5019": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "EICHER 10.50 E HSD": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Eicher Pro 2049": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 8.5,
      "C3": 0,
      "C4": 0
    },
    "Eicher Pro 1114XP": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12.5,
      "C3": 1,
      "C4": 0
    },
    "Eicher 10.50 Van": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    },
    "Eicher 5016 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 11,
      "C3": 1,
      "C4": 0
    },
    "Eicher 20.15 Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 7.5,
      "C3": 0,
      "C4": 0
    },
    "Eicher Pro 10.50E": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    },
    "Eicher 10.70 Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 0,
      "C4": 0
    },
    "Eicher Pro 1080XPT": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.8,
      "White 50MM": 1.8,
      "Yellow 50MM": 9,
      "C3": 1,
      "C4": 0
    },
    "EICHER -20.50D BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    },
    "Eicher 50.16 Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 1,
      "C4": 0
    },
    "Eicher Pro 8049": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 24,
      "C3": 1,
      "C4": 0
    },
    "Eicher Pro 5040 Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 0,
      "C4": 0
    },
    "EICHER 10.55 C BSIII": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 4,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    },
    "Eicher 30.15": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 0,
      "C4": 0
    },
    "Eicher Pro 6048": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 1,
      "C4": 0
    },
    "Eicher 10.50 27S StarBus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 11,
      "C3": 0,
      "C4": 0
    },
    "Eicher Pro 3009 Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 17,
      "C3": 0,
      "C4": 0
    },
    "Eicher PRO 2080XP F HSD": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Eicher 3350": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Eicher Pro21.10": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "Eicher Canter LCV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    },
    "Eicher Terra 25G": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 12.5,
      "C3": 1,
      "C4": 0
    },
    "Eicher pro 6025 s cowl": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Eicher Pro 1110": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "Eicher 10.59 LGV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 11,
      "C3": 0,
      "C4": 0
    },
    "PRO 6037S": {
      "RED 20MM": 2,
      "White 20MM": 2,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Eicher Pro 3012": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "Eicher 10.75 Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 15,
      "C3": 0,
      "C4": 0
    },
    "Eicher Pro 1095XP": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "EICHER 10.90 Container (20 FT)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Eicher Pro 2110 Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "Eicher Pro 2095 XP": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "Eicher 11.10 LCV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 11,
      "C3": 0,
      "C4": 0
    },
    "EICHER Pro 1090 15 Feet Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "EICHER RHD E CAB AND HSD": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 4,
      "White 50MM": 4,
      "Yellow 50MM": 17,
      "C3": 0,
      "C4": 0
    },
    "Eicher Pro 6041": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 19,
      "C3": 1,
      "C4": 0
    },
    "PRO 6037S SLEEPER BS3": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 4,
      "White 50MM": 2.2,
      "Yellow 50MM": 21,
      "C3": 1,
      "C4": 0
    },
    "Eicher 20.16 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "EICHER 20 16RHD R FACE COWL": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 1,
      "C4": 0
    },
    "Eicher Pro 1095X": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "EICHER PRO 1110H CAB HSD BSIII": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.4,
      "White 50MM": 1.4,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    }
  },
  "TATA MOTORS": {
    "TATA Magic": {
      "RED 20MM": 2,
      "White 20MM": 2,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "TATA ACE": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "TATA Indica": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "TATA Winger": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "TATA 4018": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 1,
      "C4": 0
    },
    "TATA Indigo": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "TATA 709 STARBUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    },
    "TATA 909": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "TATA 1615": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "TATA Magic Iris": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "TATA 3516": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 0,
      "C4": 1
    },
    "TATA 2515": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "TATA 1210 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "TATA 1613": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "TATA 1616": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "TATA Marcopolo STARBUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    },
    "TATA 709 - C3": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "TATA Indigo Manza": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "TATA Indica - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "TATA 2515 Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.75,
      "Yellow 50MM": 19,
      "C3": 0,
      "C4": 1
    },
    "TATA 410": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "TATA 2518": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 13.5,
      "C3": 1,
      "C4": 0
    },
    "TATA 1109": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "TATA 3118": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 15.5,
      "C3": 1,
      "C4": 0
    },
    "TATA 407": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 8,
      "C3": 1,
      "C4": 0
    },
    "TATA 1510": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "TATA 3718": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 20,
      "C3": 1,
      "C4": 0
    },
    "TATA 712": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 14,
      "C3": 0,
      "C4": 0
    },
    "TATA 712 STAR BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 0,
      "C4": 0
    },
    "TATA Bolt": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "TATA Cityride Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 0,
      "C4": 0
    },
    "TATA LPT 1512": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "TATA LPK 1612": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "TATA Sumo Gold": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "TATA SUMO VICTA": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "TATA Super Ace": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "TATA Tiago": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "TATA Ultra 912": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "TATA Ultra 1012": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "TATA Xenon Pick Up": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "TATA Zest": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Tata 3516 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 1
    },
    "TATA 3516 Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "TATA 3516 Bulker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 8,
      "White 50MM": 2.5,
      "Yellow 50MM": 30,
      "C3": 0,
      "C4": 1
    },
    "TATA 3518 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 1
    },
    "TATA 3518 Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "TATA 3518 Bulker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 8,
      "White 50MM": 2.5,
      "Yellow 50MM": 30,
      "C3": 0,
      "C4": 1
    },
    "TATA 4018 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 1
    },
    "TATA 4018 Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 28,
      "C3": 0,
      "C4": 1
    },
    "TATA 218": {
      "RED 20MM": 1.3,
      "White 20MM": 1.3,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "TATA Spacio Gold": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "TATA 2516": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 13.5,
      "C3": 1,
      "C4": 0
    },
    "TATA SFC 407/31": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2,
      "Yellow 50MM": 10.5,
      "C3": 0,
      "C4": 0
    },
    "TATA LPT 1412": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "TATA LPT 1010 CR X /38WB BSIV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "TATA 912": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 1,
      "C4": 0
    },
    "TATA PRIMA LX4923S 6 X 4": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 1,
      "C4": 0
    },
    "TATA LPO 1515 BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "TATA LPT 1112": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "TATA LPT 1212": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Prima LX 2525": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "TATA INTRA": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6.5,
      "C3": 0,
      "C4": 0
    },
    "TATA 4225": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "LPK 1618/36": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.2,
      "White 50MM": 1.2,
      "Yellow 50MM": 5.5,
      "C3": 1,
      "C4": 0
    },
    "Tata 709": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    },
    "LPC 4923": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 1
    },
    "1109 BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.3,
      "White 50MM": 2.3,
      "Yellow 50MM": 12,
      "C3": 0,
      "C4": 0
    },
    "TATA SIGNA 5523": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 0,
      "C4": 1
    },
    "TATA 3118 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "SFC 410/31 EX": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    },
    "LPT 4223": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.1,
      "White 50MM": 2.2,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "ULTRA 1518.T": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.8,
      "White 50MM": 1.4,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "TATA LP 1512 TC/59": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "LPK 2518 TIPPER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2,
      "Yellow 50MM": 11,
      "C3": 1,
      "C4": 0
    },
    "LPK 1613 697TC - Short": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 8,
      "C3": 1,
      "C4": 0
    },
    "TATA LPT 1010 CRX/38WB BSIV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "TATA 1613 HEAVY GOODS VEHICLE": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "TATA ACE ZIP BSIII": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.3,
      "White 50MM": 1.3,
      "Yellow 50MM": 3.5,
      "C3": 0,
      "C4": 0
    },
    "TATA CRUISER 912": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 6,
      "C3": 1,
      "C4": 0
    },
    "TATA SIGNA 4923.S CRE BSIV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 4,
      "White 50MM": 2,
      "Yellow 50MM": 23,
      "C3": 0,
      "C4": 1
    },
    "TATA LPS 4923": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 1,
      "C4": 0
    },
    "Tata 1613 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "TATA 407 Tourist Van": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 0,
      "C4": 0
    },
    "TATA LPT 3118": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "Tata LPT 1618": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "LPT 909 Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 11,
      "C3": 1,
      "C4": 0
    },
    "TATA SA 1212 T TC BS- IV 4X4": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "TATA SA 1212": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2,
      "Yellow 50MM": 13.5,
      "C3": 1,
      "C4": 0
    },
    "LPT 2416": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "TATA LPK 912EX/27 BSIV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.8,
      "White 50MM": 1.7,
      "Yellow 50MM": 5,
      "C3": 0,
      "C4": 0
    },
    "TATA ACE - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "TATA Winger - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "LPK 1616": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Tata SUMO - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Tata 407/27 City Ride School Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    },
    "Tata Intra V20 - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Tata Prima LX3125 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "Tata Ultra T7": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    },
    "Tata Signa 2823": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 11,
      "C3": 1,
      "C4": 0
    },
    "Tata 3118 Bulker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "Tata 3118 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "LPK 2523": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "Tata Zest - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 13,
      "C3": 0,
      "C4": 0
    },
    "MAGIC MAXI CAB": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Tata Bolt - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 3.5,
      "C3": 0,
      "C4": 0
    },
    "Tata LPT 1913": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.25,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "Tata 609": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    },
    "Tata LT410 StarBus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 0,
      "C4": 0
    },
    "LPT 1109 Container (18FT)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "LPK 1212 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.25,
      "White 50MM": 2,
      "Yellow 50MM": 9.25,
      "C3": 1,
      "C4": 0
    },
    "SFC 909 BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 14,
      "C3": 0,
      "C4": 0
    },
    "TATA DP 1313 TO 55": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 10,
      "White 50MM": 2,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 0
    },
    "ULTRA 1014/39WB": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Tata Super Ace Mint": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "TATA 207 - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "LPT 1109": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "TATA 1210": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12.5,
      "C3": 1,
      "C4": 0
    },
    "TATA Ace Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 4,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Tata 3015 cement trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 19,
      "C3": 0,
      "C4": 1
    },
    "LPK 1613 - Long": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 22,
      "C3": 1,
      "C4": 0
    },
    "Tata LPT 407EX2/38 BSIV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13.5,
      "C3": 1,
      "C4": 0
    },
    "Tata LPT 909 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 11.5,
      "C3": 1,
      "C4": 0
    },
    "Tata 712 Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    },
    "Tata Ultra 1012/33": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "LPT 1615 Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 26,
      "C3": 1,
      "C4": 0
    },
    "TATA Indigo - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "TATA LPO1512 Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "LPT 1212 Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Tata ARIA - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 4.5,
      "C3": 0,
      "C4": 0
    },
    "Tata lpt-810": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Tata Ultra 1518": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "TATA LPT 3723 TC": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 20,
      "C3": 1,
      "C4": 0
    },
    "TATA LPT 3712": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 20,
      "C3": 1,
      "C4": 0
    },
    "TATA 2518 Concrete Mixture": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "TATA Xenon Pick Up - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "TATA Signa 4223": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 1
    },
    "LPT 1109 - LCV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "TATA LPT 3518 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "Tata Ace Mega XL": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Tata LPT 912": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.7,
      "White 50MM": 1.7,
      "Yellow 50MM": 12.3,
      "C3": 0,
      "C4": 0
    },
    "Tata Lop 7.5 T Star Bus Ultra": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 14,
      "C3": 0,
      "C4": 0
    },
    "TATA LP 912 Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 17,
      "C3": 0,
      "C4": 0
    },
    "TATA 2518 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "TATA PRIMA 2525 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 11,
      "C3": 1,
      "C4": 0
    },
    "Lpo 1613 school Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "TATA 2818 Container (18FT)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "LPK 1616 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "Tata LP 309/38 Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 0,
      "C4": 0
    },
    "Tata Venture": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "3 CUM TIPPER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "Tata Maxi Cab": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    },
    "Tata Signa 4223": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "TATA INTRA V30 BS-VI": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Tatra-IND T815": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.25,
      "White 50MM": 2.25,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "PRIMA 3525": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2,
      "Yellow 50MM": 13.5,
      "C3": 1,
      "C4": 0
    },
    "TATA LPS 4018": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 1
    },
    "TATA MARCOPOLO LP810 FBV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 15.5,
      "C3": 0,
      "C4": 0
    },
    "TATA INTRA V50 BS-VI": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "TATA INTRA V20": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    }
  },
  "MAHINDRA & MAHINDRA": {
    "Mahindra Bolero": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Mahindra TUV 300": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Voyger": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Marshall 2000": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 5,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Bolero Pick-up": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Maxx Maxi Truck": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Loadking": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Tourister": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Bolero Maxi truck": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Mahindra DI3200": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Logan": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Mahindra KUV 100": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Maxi Cab": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Navistar": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Mahindra Maxximo Mini VAN": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Scorpio": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Torro 25": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "Mahindra Supro Mini Van": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Truxo": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "Mahindra Traco": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 7,
      "C3": 1,
      "C4": 0
    },
    "Mahindra Xylo": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Verito": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Bolero camper": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "Mahindra XUV500": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Loadking Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Genio": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "Mahindra ALFA": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 0,
      "C3": 0,
      "C4": 0
    },
    "Mahindra SUPRO MAXI TRUCK": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Mahindra TRACTOR": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Mahindra TRACTOR WITH TRAILER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 16,
      "C3": 0,
      "C4": 0
    },
    "MAHINDRA SINGLE CAB": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Mahindra TRACTOR WITH SHORT TRAILER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.8,
      "White 50MM": 1,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Mahindra BLAZO": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "MAHINDRA CHAMPION CONTAINER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 4.7,
      "White 50MM": 1.2,
      "Yellow 50MM": 3.5,
      "C3": 0,
      "C4": 0
    },
    "Mahindra MARAZZO": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3.5,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Champion": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 5,
      "C3": 0,
      "C4": 0
    },
    "MAHINDRA LOADKING-C3": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "MN 25 TANKAR": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 13.5,
      "C3": 1,
      "C4": 0
    },
    "M BLAZO": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 30,
      "C3": 0,
      "C4": 1
    },
    "MTB T25 BS4": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    },
    "Mahindra MN40X": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 24.5,
      "C3": 0,
      "C4": 1
    },
    "Mahindra 575 Tractor": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 4,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "Mahindra Jeep - Load": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 4,
      "White 50MM": 1.25,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "Mahindra MN31 cement body": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 0,
      "C4": 1
    },
    "Mahindra Bolero Pick-up - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Jeeto - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 5,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Xylo - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 5,
      "C3": 0,
      "C4": 0
    },
    "Mahindra ALFA - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 0,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Maxximo": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Maxximo - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Bolero camper - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "Bolero ( New Vehicle)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Mahindra EJ470": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    },
    "BLAZO TRAILER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 24,
      "C3": 0,
      "C4": 1
    },
    "Mahindra ALFA - Yellow": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.3,
      "White 50MM": 1.3,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "MTB T40 Bus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Jeeto": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 5,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Champion - 20mm": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 5,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Blanzo 45.5": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 4,
      "White 50MM": 4,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 1
    },
    "Mahindra MARAZZO - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 3.5,
      "C3": 0,
      "C4": 0
    },
    "MTB T20 Maxi Cab": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Bolero Maxi truck - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Mahindra ALFA - Passenger": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.3,
      "White 50MM": 1.3,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Furio 12 / 14": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "Mahindra Alwyn Cab": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Jeeto - New Vehicle": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 5,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Ambulance": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.8,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    },
    "Cosmo Tourister": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10.5,
      "C3": 0,
      "C4": 0
    },
    "COMMANDER 750": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Maxximo Mini VAN - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "Mahindra 475-D1 Tractor": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "Mahindra LGV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    },
    "Mahindra cosmo": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 0,
      "C4": 0
    },
    "Bolero City Pickup Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 1.4,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Bolero Power": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Blazo 49HL": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 20,
      "C3": 1,
      "C4": 0
    },
    "Mahindra Imperio": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.6,
      "White 50MM": 1.9,
      "Yellow 50MM": 7.5,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Navistar MN 25 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "Mahindra Gio": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "Mahidra Tourister 25 seat": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    },
    "Mahindra open body van": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.75,
      "White 50MM": 1.75,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Verito - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Maxximo Load Container Auto": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 4,
      "White 50MM": 1.5,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Truxo Container - 28FT": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 1,
      "C4": 0
    },
    "Mahindra CabKing 3150": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Jeep": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    },
    "Mahindra Torro 25 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Mahindra Maxx": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 5,
      "C3": 0,
      "C4": 0
    },
    "MN Tourister 4800": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 0,
      "C4": 0
    },
    "MAHINDRA XYLO D4VDICW": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 5,
      "C3": 0,
      "C4": 0
    }
  },
  PIAGGIO: {
    "Ape Auto": {
      "RED 20MM": 1.25,
      "White 20MM": 1.25,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 0,
      "C3": 0,
      "C4": 0
    },
    "PIAGGIO PORTER 600": {
      "RED 20MM": 1.3,
      "White 20MM": 1.3,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    },
    "APE CARGO": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3.5,
      "C3": 0,
      "C4": 0
    },
    "APE XTRA LD": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Ape Auto - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 0,
      "C3": 0,
      "C4": 0
    },
    "Ape Cargo - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 3.5,
      "C3": 0,
      "C4": 0
    },
    "Ape Auto - Yellow": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 1.5,
      "C3": 0,
      "C4": 0
    },
    "Ape Auto - 3Yellow": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "Ape 4 wheel Auto": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    },
    "APE XTRA LD - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    }
  },
  AMW: {
    "AMW Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 6,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 1
    },
    "AMW Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 28,
      "C3": 0,
      "C4": 1
    },
    "AMW Bulker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 8,
      "White 50MM": 7,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 1
    },
    "AMW TRUCK 2518": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "AMW 2523 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "AMW 2528 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 11,
      "C3": 1,
      "C4": 0
    },
    "AMW 3116": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    }
  },
  "ISUZU MOTORS": {
    "Isuzu D-max Flat Deck": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    }
  },
  Tvs: {
    "TVS Auto": {
      "RED 20MM": 1.1,
      "White 20MM": 1.4,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 0,
      "C3": 0,
      "C4": 0
    },
    "Tvs Auto - Yellow": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.1,
      "White 50MM": 1.25,
      "Yellow 50MM": 1.5,
      "C3": 0,
      "C4": 0
    }
  },
  "DAIMLER INDIA COMMERCIAL VEHICLE": {
    "BHARAT BENZ 1214R": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "BHARATBENZ 2523": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "BHARATBENZ 914R": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.15,
      "White 50MM": 2.15,
      "Yellow 50MM": 12.3,
      "C3": 1,
      "C4": 0
    },
    "BHARATH BENZ 1617 TANKER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "BHARATBENZ 2528": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "BHARAT BENZ 14 R BS IV 10": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.13,
      "White 50MM": 2.13,
      "Yellow 50MM": 9.75,
      "C3": 1,
      "C4": 0
    },
    "BHARATBENZ 2523 6X2 BSIV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "Bharat Benz 3723R": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 3,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 1,
      "C4": 0
    },
    "BHARAT BENZ 1617R": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "BHARAT BENZ 3723": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 21,
      "C3": 1,
      "C4": 0
    },
    "Bharath Benz 1014R BSIV 3": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 3123R container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 8,
      "White 50MM": 2.25,
      "Yellow 50MM": 21,
      "C3": 1,
      "C4": 0
    },
    "Bharatbenz 1015R BSVI": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "BHARATBENZ 1923C": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 11,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 2823": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 3,
      "White 50MM": 2,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 1623C Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.25,
      "White 50MM": 2.5,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 4228R": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 5528TT": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.3,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 1
    },
    "BharatBenz 2523 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 13.5,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 1215R": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 2823 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 25.23": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 11,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 4023 LPG Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 1
    },
    "BharatBenz 4023 Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "BharatBenz 3128C": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.25,
      "White 50MM": 2.25,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 2523 Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 1617 container (32FT)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 8,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 3123R": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 1214 Container (20FT)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 2523 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.25,
      "White 50MM": 2.25,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 1617 Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 1217 Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 3123": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 15.5,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 1014R Container": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 3123 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 1214 Road Sweeper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "BharatBenz 4928 Bulker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "BharatBenz 1214 Tanker": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    }
  },
  "BAJAJ TEMPO": {
    "TEMPO TRAX JUDO /GAMA": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6.5,
      "C3": 0,
      "C4": 0
    },
    "Bajaj Tempo Traveller": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 1.5,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    }
  },
  TAFE: {
    "MF TAFE TRACTOR WITH TRAILER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "TAFE MM TRACKTOR": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 1.5,
      "C3": 0,
      "C4": 0
    },
    "Tafe Tractor (Trailer Only)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 0,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    }
  },
  VOLVO: {
    "VOLVO 9400 B8R": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 22,
      "C3": 0,
      "C4": 0
    },
    "VOLVO": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "Volvo B7R": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 25,
      "C3": 0,
      "C4": 1
    },
    "Volvo Fire Service": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 0,
      "C4": 0
    }
  },
  "JCB INDIA LIMITED": {
    "JCB": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 4,
      "C3": 1,
      "C4": 0
    }
  },
  "FORCE TRAVELLER": {
    "FORCE TRUMP": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 7.5,
      "C3": 0,
      "C4": 0
    },
    "TRAX CRUISER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    }
  },
  "HINDUSTAN MOTORS LTD": {
    "RTV DSL": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    }
  },
  "ESCORTS LTD": {
    "POWERTRAR 434 TRACTOR": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 1.5,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "Escorts 340 Tractor": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    }
  },
  "Gujarath Tractor Corp LTD.": {
    "[NO CONTENT FOUND]": {
      "2 MV Tractor": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 1,
        "White 50MM": 1,
        "Yellow 50MM": 13,
        "C3": 0,
        "C4": 1
      }
    }
  },
  "SCOOTERS INDIA LTD": {
    "Vikram 750cc Auto": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 5,
      "C3": 0,
      "C4": 0
    }
  },
  "SML ISUZU": {
    "SAMRAT 2815": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 1,
      "C4": 0
    }
  },
  "ASHOK LEYLAND LTD": {
    "3120 8 2 GOODS CHASSIS WCWW": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "AL 3518": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "AL 4218": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.2,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "AL GF 3520/66HCO": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.2,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "AL GF 4220/66HCO": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.2,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "FV4923": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 20,
      "C3": 1,
      "C4": 0
    },
    "ASHOK LEYKAND DOST": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6.5,
      "C3": 2,
      "C4": 0
    },
    "HGV 3118XL TANKER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    },
    "HAULAGE CHASSIS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 16,
      "C3": 1,
      "C4": 0
    },
    "1614 .1 TIPPER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "3116IL GOODS CHASI W COWLWWB": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "2516t 198 wb tusker sup": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 5,
      "Yellow 50MM": 2.5,
      "C3": 16,
      "C4": 1
    },
    "VK1611.0D4R": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 17,
      "C3": 0,
      "C4": 0
    },
    "ALPSV 4/170": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 0,
      "White 50MM": 3,
      "Yellow 50MM": 3,
      "C3": 17,
      "C4": 0
    },
    "TAURUS 2516/2": {
      "RED 20MM": 0,
      "White 20MM": 2.5,
      "RED 50MM": 2.5,
      "White 50MM": 19,
      "Yellow 50MM": 1,
      "C3": 0,
      "C4": 0
    },
    "AL 3518 TANKAR": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 0,
      "C4": 1
    },
    "SS1008 .1D4RB(39+) SHCOOL BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 15,
      "C3": 0,
      "C4": 0
    },
    "AL GB2820": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 24,
      "C3": 1,
      "C4": 0
    },
    "AL 4118": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "2214": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "3015": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "E 2820 6X4 CONCRETE MIXER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 3,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 1,
      "C4": 0
    },
    "AL 1611": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 13,
      "C3": 1,
      "C4": 0
    },
    "LT1300.3D4RB/C": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 17,
      "C3": 0,
      "C4": 0
    },
    "LPO 1616 TC BUS BS 2": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 0,
      "C4": 0
    },
    "HEAVY GOODS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.4,
      "White 50MM": 2.4,
      "Yellow 50MM": 9.5,
      "C3": 1,
      "C4": 0
    },
    "ALPSV 4/186": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 14,
      "C3": 0,
      "C4": 0
    },
    "AL BOSS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "1616-185TUSKER SUPER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 20,
      "C3": 1,
      "C4": 0
    },
    "GURU 1111 GOOD CWC N2 BS IV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 8.7,
      "C3": 1,
      "C4": 0
    },
    "1612 170 5WB G": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 8.2,
      "C3": 1,
      "C4": 0
    },
    "AL CT 1613H/1": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 8,
      "C3": 1,
      "C4": 0
    },
    "2518T IL TIP CHAS CABIN TIP B": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "AL BEARER ALB 1/1 HAULOGO": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 16.5,
      "C3": 1,
      "C4": 0
    },
    "DOST LS BS III": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "HIPPO TRUALAR": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 28,
      "C3": 1,
      "C4": 0
    },
    "ASHOK LEYKAND 3118 BSIV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.2,
      "White 50MM": 2.7,
      "Yellow 50MM": 12.6,
      "C3": 0,
      "C4": 0
    },
    "3718 T BSIV TIP CWC WO L": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 17,
      "C3": 1,
      "C4": 0
    },
    "2214/2S 198 (CWB) GOODS CHAS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10.5,
      "C3": 1,
      "C4": 0
    },
    "AL 3116 DIESEL TANKAR": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.2,
      "Yellow 50MM": 18,
      "C3": 0,
      "C4": 1
    },
    "COMET SUPER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 14,
      "C3": 1,
      "C4": 0
    },
    "Cheetah ALPSV 1/30": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 3,
      "Yellow 50MM": 17.5,
      "C3": 1,
      "C4": 0
    },
    "3118IL AL": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.4,
      "Yellow 50MM": 17,
      "C3": 0,
      "C4": 0
    },
    "GURU 1111 GOOD CWC N2 BSIV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 1,
      "C4": 0
    },
    "TUSKER SUPER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    },
    "AL4923 BULKER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 6,
      "C3": 1,
      "C4": 0
    },
    "AL 4923 BULKER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 1,
      "C4": 0
    },
    "1616 L4 GOOD N3 BSIII": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "FV.4923.BSIII": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 26,
      "C3": 1,
      "C4": 0
    },
    "CA1015/28T TIP 285": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 8,
      "C3": 1,
      "C4": 0
    },
    "1612": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "CS 42/166": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 14.5,
      "C3": 1,
      "C4": 0
    },
    "UJ3525/52T TIP 525": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 3,
      "White 50MM": 2.5,
      "Yellow 50MM": 15,
      "C3": 1,
      "C4": 0
    },
    "2516 IL 193 WB": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 1,
      "C4": 0
    },
    "1616 XL/3 BSIII": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "ASHOK LEYLAND LTD 3118IL BSIII": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "2214/2S 198 ( CWB ) GOODS CHAS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "VK1811.0D4R": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "LT 1309 .3D4R": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 20,
      "C3": 0,
      "C4": 0
    },
    "AL3 116IL": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    },
    "OTHERS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.3,
      "White 50MM": 1.3,
      "Yellow 50MM": 2.5,
      "C3": 0,
      "C4": 0
    },
    "DOST RLS BSIV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    },
    "PARTNER LES": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 2.5,
      "C3": 1,
      "C4": 0
    }
  },
  "MERCEDES-BENZ INDIA": {
    "E220 D": {
      "RED 20MM": 1.75,
      "White 20MM": 1.75,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 0,
      "C3": 0,
      "C4": 0
    }
  },
  "OMEGA SEIKI EV": {
    "Rage plus": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.3,
      "White 50MM": 1.3,
      "Yellow 50MM": 5,
      "C3": 0,
      "C4": 0
    }
  },
  "MASKTRO MOTORS": {
    "ARJUN 500 SHARE AUTO": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 5,
      "C3": 0,
      "C4": 0
    }
  },
  "FORCE MOTORS LIMTED, A FIRODI TATA": {
    "TRAVELLER 11 AMBULANCE": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    },
    "TRAVELLER T2 SCHOOL BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 0,
      "C4": 0
    },
    "TRAVELLER T1 SCHOOL BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 11,
      "C3": 0,
      "C4": 0
    }
  },
  "TATA": {
    "207 Closed Body 50MM": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    }
  },
  "THIRUMALA AGROINDUSTRY": {
    "TEMPO TRAVELLER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 0,
      "C4": 0
    }
  },
  "ATUL AUTO LTD": {
    "Atul Auto - 50mm": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    }
  },
  "ISUZU MOTORS INDIA PVT LTD": {
    "ISUZU D MAX CAB": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    }
  },
  "VE Commercials": {
    "Eicher Pro 3009 H BS IV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 16,
      "C3": 0,
      "C4": 0
    }
  },
  "TATA MOTORS LTD": {
    "TATA": {
      "TATA 1212": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2,
        "White 50MM": 2.5,
        "Yellow 50MM": 13,
        "C3": 1,
        "C4": 0
      },
      "LPO 1512/55": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2.5,
        "White 50MM": 2.5,
        "Yellow 50MM": 20,
        "C3": 0,
        "C4": 0
      },
      "TANKER": {
        "RED 20MM": 2.5,
        "White 20MM": 2,
        "RED 50MM": 0,
        "White 50MM": 0,
        "Yellow 50MM": 13,
        "C3": 1,
        "C4": 0
      },
      "school Bus Lpo 1613": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2.5,
        "White 50MM": 2.5,
        "Yellow 50MM": 20,
        "C3": 0,
        "C4": 0
      },
      "TATA LPT 1109 HEX 2 36 WB CR TANCKER": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2,
        "White 50MM": 2,
        "Yellow 50MM": 12,
        "C3": 1,
        "C4": 0
      },
      "TATA LPT 3118 TC/56": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2,
        "White 50MM": 2,
        "Yellow 50MM": 13.5,
        "C3": 1,
        "C4": 0
      },
      "TATA SIGNA 4018 CRE BS IV": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2,
        "White 50MM": 2.5,
        "Yellow 50MM": 18,
        "C3": 1,
        "C4": 0
      },
      "TATA ACE MAGIC BS 3": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2.5,
        "White 50MM": 2.5,
        "Yellow 50MM": 20,
        "C3": 0,
        "C4": 0
      },
      "TATA LPT 2518 CONTAINER": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2,
        "White 50MM": 2.2,
        "Yellow 50MM": 21,
        "C3": 1,
        "C4": 0
      },
      "LPL 909 TIPPER": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2,
        "White 50MM": 2,
        "Yellow 50MM": 9,
        "C3": 1,
        "C4": 0
      },
      "LPO 1616 TC BUS BS 2": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 1.75,
        "White 50MM": 2.25,
        "Yellow 50MM": 14.7,
        "C3": 0,
        "C4": 0
      },
      "LPO 1624 63 RE LE D BSIV STAR": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 1.75,
        "White 50MM": 2.25,
        "Yellow 50MM": 10.7,
        "C3": 0,
        "C4": 0
      },
      "CLOSED": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 1.7,
        "White 50MM": 1.5,
        "Yellow 50MM": 5.3,
        "C3": 0,
        "C4": 0
      },
      "SUMO VICTA EX": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 1.5,
        "White 50MM": 1.5,
        "Yellow 50MM": 6,
        "C3": 0,
        "C4": 0
      },
      "TATACITYRIDEEX50SK LP909/49BS4": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2.75,
        "White 50MM": 2.75,
        "Yellow 50MM": 18,
        "C3": 0,
        "C4": 0
      },
      "LPK2518TC": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2.1,
        "White 50MM": 2.3,
        "Yellow 50MM": 6,
        "C3": 0,
        "C4": 0
      },
      "TATACITYRIDEEX40 SKL 709/42 BS4": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 1.2,
        "White 50MM": 2.5,
        "Yellow 50MM": 13.2,
        "C3": 0,
        "C4": 0
      },
      "TATA CITYRIDEEX50SK LP909/49BS4": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 1.2,
        "White 50MM": 2.5,
        "Yellow 50MM": 15.6,
        "C3": 0,
        "C4": 0
      },
      "TATA CITYRIDE 47+A+D SKOOL LP909/49": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 1.5,
        "White 50MM": 2.4,
        "Yellow 50MM": 16.8,
        "C3": 0,
        "C4": 0
      },
      "TATA LPK 909 EX/27": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2,
        "White 50MM": 2,
        "Yellow 50MM": 10,
        "C3": 1,
        "C4": 0
      },
      "TATAMOTORS SA 1212": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2.5,
        "White 50MM": 2.5,
        "Yellow 50MM": 12.5,
        "C3": 1,
        "C4": 0
      },
      "SA1212": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2.5,
        "White 50MM": 2.5,
        "Yellow 50MM": 14,
        "C3": 1,
        "C4": 0
      },
      "TATA ALPT 1618 5L TRBOTRONN BS IV": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2.5,
        "White 50MM": 2.5,
        "Yellow 50MM": 22,
        "C3": 1,
        "C4": 0
      },
      "1.PT 1109/36 EX CLB BS III": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2,
        "White 50MM": 2,
        "Yellow 50MM": 12,
        "C3": 1,
        "C4": 0
      },
      "LPT 1613/42": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2.5,
        "White 50MM": 2.5,
        "Yellow 50MM": 14,
        "C3": 1,
        "C4": 0
      },
      "SCHOOL BUS": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2,
        "White 50MM": 2.5,
        "Yellow 50MM": 8,
        "C3": 0,
        "C4": 0
      },
      "INDICA VIST AUA QJET": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2.5,
        "White 50MM": 2.5,
        "Yellow 50MM": 20,
        "C3": 0,
        "C4": 0
      },
      "INDICA DLS": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2.5,
        "White 50MM": 2.5,
        "Yellow 50MM": 20,
        "C3": 0,
        "C4": 0
      },
      "TATA LPT 1109HEX2/36 WB BSIV": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2,
        "White 50MM": 2,
        "Yellow 50MM": 8,
        "C3": 1,
        "C4": 0
      },
      "LPT 2518 TC": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2.5,
        "White 50MM": 2.5,
        "Yellow 50MM": 20,
        "C3": 0,
        "C4": 1
      }
    }
  },
  "VSL Industries Ltd": {
    "VSL Dot & Dot Mini": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    }
  },
  "MAHINDRA $ MAHINDRA LIMITED": {
    "BOLERO CITY PIX UP 14 PS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "BOLERO CITY PIX UP 1.4 PS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.9,
      "White 50MM": 1.4,
      "Yellow 50MM": 2.6,
      "C3": 0,
      "C4": 0
    },
    "BOLERO CITY PIX UP 1.25T BSIV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.6,
      "White 50MM": 1,
      "Yellow 50MM": 6.6,
      "C3": 0,
      "C4": 0
    },
    "BOLERO PICK UP FB PS MH 2WD BS3": {
      "RED 20MM": 0,
      "White 20MM": 1.4,
      "RED 50MM": 1.4,
      "White 50MM": 0,
      "Yellow 50MM": 5.8,
      "C3": 0,
      "C4": 0
    },
    "BMT PLUS PS12": {
      "RED 20MM": 7,
      "White 20MM": 1.1,
      "RED 50MM": 1.5,
      "White 50MM": 0,
      "Yellow 50MM": 7,
      "C3": 1,
      "C4": 0
    },
    "SUPRO TRUCK VX": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.3,
      "White 50MM": 1.5,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    },
    "BOLERO MAXI TRUCK": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    },
    "MAHINDRA XUV700": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    },
    "MAHINDRA XUV 300": {
      "RED 20MM": 1.5,
      "White 20MM": 1.5,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 4,
      "C3": 0,
      "C4": 0
    }
  },
  "SML ISUZU LTD": {
    "EXECUTIVE TC 1110": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 0,
      "C4": 0
    },
    "SAMRAT 4760 CONTAINER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2.5,
      "Yellow 50MM": 14.5,
      "C3": 1,
      "C4": 0
    },
    "BSIV ZT 54E BSIV LWO": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 14,
      "C3": 0,
      "C4": 0
    },
    "WV26SOTNSCHOOL BUS 21 SEAT": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 0,
      "C4": 0
    },
    "SARTAJGSHG72STEELHIGHDECKSHD1": {
      "RED 20MM": 2,
      "White 20MM": 2,
      "RED 50MM": 9,
      "White 50MM": 0,
      "Yellow 50MM": 0,
      "C3": 0,
      "C4": 0
    },
    "S7 SCHOOL BUS BS IV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 0,
      "C4": 0
    },
    "T3500 WT50L WB DELUXE": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 3,
      "White 50MM": 3,
      "Yellow 50MM": 13,
      "C3": 0,
      "C4": 0
    },
    "PRESTIGE 3940 LWB BUS STD": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 0,
      "C4": 0
    }
  },
  ISUZU: {
    "EXCECUTIVE TC III WV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 6,
      "White 50MM": 6.5,
      "Yellow 50MM": 34,
      "C3": 0,
      "C4": 0
    }
  },
  "V E Commercials": {
    "Eicher 10.70": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    }
  },
  "VOLOVO INDIA PVT LTD": {
    "OPEN PLW": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    }
  },
  "FIRE EICHER": {
    "FIRETENDER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 18,
      "C3": 0,
      "C4": 0
    }
  },
  "MAHINDRA & MAHINDRA LTD": {
    "Marshl FT/4WD/5DR": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    }
  },
  BMW: {
    "BMW 520D": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 3.5,
      "C3": 0,
      "C4": 0
    },
    "BMW 730LD": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 3.5,
      "C3": 0,
      "C4": 0
    }
  },
  "REEP INDUSTRIES PVT LTD": {
    "3WT (Electric)": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 2.5,
      "C3": 0,
      "C4": 0
    }
  },
  Toyota: {
    "Toyota Qualis": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 3.5,
      "C3": 0,
      "C4": 0
    }
  },
  "SAME DEVTZ FAHRI PVT LTD": {
    "SAME603": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 1.5,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    }
  },
  PREMIER: {
    "Premier Ferguson HMV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    },
    "Premier Tipper": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    }
  },
  "Vikram Auto": {
    "Vikram Auto": {
      "RED 20MM": 1.25,
      "White 20MM": 1.25,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 1.25,
      "C3": 0,
      "C4": 0
    }
  },
  "John Deer India Pvt LEg": {
    "John Deer 5045 V2": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    }
  },
  "Kirloskar Pneumatic co Itd": {
    "Road Ropar semi Trailer": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1,
      "White 50MM": 1,
      "Yellow 50MM": 7,
      "C3": 0,
      "C4": 0
    }
  },
  "DCM TOYOTA LTD": {
    "LGV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    },
    "DCM TOYOTA MGV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 1,
      "C4": 0
    }
  },
  "New Holland Tractor": {
    "3600 Tractor": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 8,
      "C3": 0,
      "C4": 0
    }
  },
  "EICHER •": {
    "Eicher 6035 p cwc tankar": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 5,
      "White 50MM": 2,
      "Yellow 50MM": 18,
      "C3": 1,
      "C4": 0
    }
  },
  "EICHER MOTORS LTD": {
    "Eicher": {
      "EICHER TERRA 16": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2,
        "White 50MM": 2,
        "Yellow 50MM": 10.5,
        "C3": 1,
        "C4": 0
      },
      "Eicher Pro 1059": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2,
        "White 50MM": 2,
        "Yellow 50MM": 11,
        "C3": 1,
        "C4": 0
      },
      "10.75 H BUS NS BSIII": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 2,
        "White 50MM": 2,
        "Yellow 50MM": 14,
        "C3": 0,
        "C4": 0
      },
      "TONGA DIESEL 24 SOFT TOP": {
        "RED 20MM": 0,
        "White 20MM": 0,
        "RED 50MM": 1.3,
        "White 50MM": 1.3,
        "Yellow 50MM": 15,
        "C3": 1,
        "C4": 0
      }
    }
  },
  HMT: {
    "HMT 212 TRACTOR": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 1,
      "Yellow 50MM": 6,
      "C3": 0,
      "C4": 0
    }
  },
  "BHARAT BENZ": {
    "BHARAT BENZ 2523C BS 4": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.5,
      "Yellow 50MM": 11.5,
      "C3": 1,
      "C4": 0
    }
  },
  "BOBCAT COMPANY": {
    "AUTO RICKSHAW": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 0,
      "C3": 0,
      "C4": 0
    }
  },
  "KINETIC GREEN ENERGY": {
    "JUMBO PICKUP": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    },
    "JUMBO PICK UP": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.25,
      "White 50MM": 1.25,
      "Yellow 50MM": 3,
      "C3": 0,
      "C4": 0
    }
  },
  "BAJAJ TEMPO LTD": {
    "Force Minidor Delivery Van": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 4,
      "White 50MM": 1.3,
      "Yellow 50MM": 5,
      "C3": 0,
      "C4": 0
    }
  },
  "FORCE MOTORS LIMTED,": {
    "TRAVELLER T2 SCHOOL BUS": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 0,
      "C4": 0
    },
    "TRUMP 40BS III PICK UP HSD": {
      "RED 20MM": 1.4,
      "White 20MM": 1.3,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 6.4,
      "C3": 0,
      "C4": 0
    }
  },
  "Bharath Benz": {
    "BHARAT BENZ 914 BS3": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12.5,
      "C3": 1,
      "C4": 0
    }
  },
  "SUNDARAM MOTORS": {
    "AL 1612/4210WB": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 10,
      "C3": 0,
      "C4": 0
    }
  },
  "DAIMMLER 1 COMM VEH P LTD": {
    "TIPPER": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.2,
      "White 50MM": 2.1,
      "Yellow 50MM": 9.4,
      "C3": 0,
      "C4": 0
    }
  },
  "SWARAJ MAZDA LTD": {
    "SEMI SALLON": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 1.9,
      "Yellow 50MM": 13.8,
      "C3": 0,
      "C4": 0
    },
    "WT 50 1. WB": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 13,
      "C3": 0,
      "C4": 0
    }
  },
  МАН: {
    "3118IL AL": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2.4,
      "Yellow 50MM": 14,
      "C3": 0,
      "C4": 0
    }
  },
  "MAHINDRA MAHINDRA LIMITED": {
    "MAHINDRA MAX TRUCK": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 9,
      "C3": 0,
      "C4": 0
    }
  },
  "BAJAJ AUTO": {
    "BAJAJ 3 WHEELER AUTORICKSHAW": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 1.5,
      "White 50MM": 1.5,
      "Yellow 50MM": 2,
      "C3": 0,
      "C4": 0
    }
  },
  "DAIMLER INDIA COMMERCIAL": {
    "Bharath benz 1215R BSVI": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 1.5,
      "C3": 1,
      "C4": 0
    },
    "Bharath benz 1215R BSVI-WHITE": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12.5,
      "C3": 1,
      "C4": 0
    }
  },
  "ASHOK LYLAND": {
    "ALPSV 4/185": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 3,
      "Yellow 50MM": 8.5,
      "C3": 1,
      "C4": 0
    }
  },
  "ASHOK LAYLAND": {
    "AL 1616 IL DIESEL TANKAR": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.2,
      "Yellow 50MM": 14,
      "C3": 0,
      "C4": 1
    }
  },
  "VE COMMERCIAL VEHICLES LTD": {
    "EICHER PRO 1090 F HSD BSIII": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2,
      "White 50MM": 2,
      "Yellow 50MM": 12,
      "C3": 1,
      "C4": 0
    }
  },
  "TATA MOTOR LTD": {
    "TATA INFRA V30 NON AC BSVI": {
      "RED 20MM": 2,
      "White 20MM": 2,
      "RED 50MM": 0,
      "White 50MM": 0,
      "Yellow 50MM": 0,
      "C3": 0,
      "C4": 0
    }
  },
  "VE COMMERICAL VEHICLE LTD": {
    "EICHER 1090 L 40/P D BSIV": {
      "RED 20MM": 0,
      "White 20MM": 0,
      "RED 50MM": 2.5,
      "White 50MM": 2.5,
      "Yellow 50MM": 21,
      "C3": 0,
      "C4": 0
    }
  }
};

export const rtoList = {
  TN01: "CHENNAI (CENTRAL) RTO",
  TN02: "CHENNAI (NORTH WEST) RTO",
  TN03: "CHENNAI (NORTH EAST) RTO",
  TN04: "CHENNAI (EAST) RTO",
  TN05: "CHENNAI (NORTH) RTO",
  TN06: "CHENNAI (SOUTH-EAST) RTO",
  TN07: "CHENNAI(SOUTH) RTO",
  TN09: "CHENNAI WEST. RTO",
  TN10: "CHENNAI (SOUTH-WEST) RTO",
  TN11: "TAMBARAM RTO",
  TN12: "POONAMALLEE RTO",
  TN13: "AMBATTUR RTO",
  TN14: "SHOLINGANALLUR RTO",
  TN15: "ULUNDURPET RTO",
  TN15M: "KALAKURICHI RTO",
  TN16: "TINDIVANAM RTO",
  TN18: "REDHILLS RTO",
  TN19: "CHENGALPET RTO",
  TN20: "THIRUVALLUR RTO",
  TN21: "KANCHEEPURAM RTO",
  TN22: "MEENAMBAKKAM RTO",
  TN23: "VELLORE RTO",
  TN24: "KRISHNAGIRI RTO",
  TN25: "TIRUVANNAMALAI RTO",
  TN28: "NAMAKKKAL (NORTH) RTO",
  TN29: "DHARMAPURI RTO",
  TN30: "SALEM(WEST) RTO",
  TN31: "CUDDALORE RTO",
  TN32: "VILUPPURAM RTO",
  TN33: "ERODE EAST RTO",
  TN34: "TIRUCHENGODE RTO",
  TN36: "GOBI RTO",
  TN37: "COIMBATORE (SOUTH) RTO",
  TN38: "COIMBATORE NORTH RTO",
  TN39: "TIRUPUR NORTH RTO",
  TN40: "METTUPALAYAM RTO",
  TN41: "POLLACHI RTO",
  TN42: "TIRUPUR SOUTH RTO",
  TN43: "OOTY RTO",
  TN45: "TRICHY WEST RTO",
  TN46: "PERAMBALUR RTO",
  TN47: "KARUR RTO",
  TN48: "SRIRANGAM RTO",
  TN49: "THANJAVUR RTO",
  TN50: "TIRUVARUR RTO",
  TN51: "NAGAPATTINAM RTO",
  TN52: "SANKAGIRI RTO",
  TN54: "SALEM(EAST) RTO",
  TN55: "PUDUKKOTTAI RTO",
  TN56: "PERUNDURAI RTO",
  TN57: "DINDIGUL RTO",
  TN58: "MADURAI(SOUTH) RTO",
  TN59: "MADURAI (NORTH) RTO",
  TN60: "THENI RTO",
  TN61: "ARIYALUR RTO",
  TN63: "SIVAGANGAI RTO",
  TN64: "MADURAI (CENTRAL) RTO",
  TN65: "RAMANATHAPURAM RTO",
  TN66: "COIMBATORE (CENTRAL) RTO",
  TN67: "VIRUDHUNAGAR RTO",
  TN68: "KUMBAKONAM RTO",
  TN69: "TUTICORIN RTO",
  TN70: "HOSUR RTO",
  TN72: "TIRUNELVELI RTO",
  TN73: "RANIPET RTO",
  TN74: "NAGERCOIL RTO",
  TN75: "MARTHANDAM RTO",
  TN76: "TENKASI RTO",
  TN77: "ATTUR RTO",
  TN78: "DHARAPURAM RTO",
  TN79: "SANKARANKOVIL RTO",
  TN81: "TRICHY(EAST) RTO",
  TN82: "MAYILADUTHURAI RTO",
  TN83: "VANIYAMBADI RTO",
  TN83M: "TIRUPATTUR RTO",
  TN84: "SRIVILLIPUTTUR RTO",
  TN85: "KUNDRATHUR RTO",
  TN86: "ERODE WEST RTO",
  TN87: "SRIPERUMBUDUR RTO",
  TN88: "NAMAKKAL SOUTH RTO",
  TN90: "SALEM(SOUTH) RTO",
  TN91: "CHIDHAMBRAM RTO",
  TN92: "THIRUCHENDUR RTO",
  TN93: "METTUR RTO",
  TN94: "PALANI RTO",
  TN95: "SIVAKASI RTO",
  TN96: "KOVILPATTI RTO",
  TN97: "ARANI RTO",
  TN99: "COIMBATORE (WEST) RTO",
  TN18Y: "Gummidipoondi UO",
  TN20X: " Thiruthani UO",
  TN19Y: " Thirukalukundram UO",
  TN19Z: " Madhuranthagam UO",
  TN23T: " Gudiyatham UO",
  TN73z: " Arakkonam UO",
  TN83Y: " Ambur UO",
  TN36W: " Bhavani UO",
  TN36Z: " SATHYAMANGALAM UO",
  TN28Z: " RASIPURAM UO",
  TN88Z: " Paramathi velur UO",
  TN31Z: " Panruti UO",
  TN91Y: " Neyveli UO",
  TN91Z: " Viruthachalam UO",
  TN16Z: "Gingee UO",
  TN97Z: " Cheyyar UO",
  TN45Z: " Manaparai UO",
  TN81Z: " Tiruverambur UO",
  TN48Z: " Thuraiyur UO",
  TN48Y: " MUSIRI UO",
  TN48X: " LALGUDI UO",
  TN47Z: " KULITHALAI UO",
  TN47Y: " Aravakurichi UO",
  TN47X: " Manmangalam UO",
  TN29W: " OMALUR UO",
  TN77Z: " VAZHAPADY UO",
  TN29Z: " HARUR UO",
  TN59W: " Melur UO",
  TN59V: " Vadipatti UO",
  TN58Z: " Thirumangalam UO",
  TN58Y: " Usilampatti UO",
  TN57Y: " Batlagundu UO",
  TN57V: " Vaedasandur UO",
  TN57S: " Natham UO",
  TN94Z: " Oddanchattram UO",
  TN60Z: " Uthamapalayam UO",
  TN49Y: " Pattukottai UO",
  TN50Z: " Mannargudi UO",
  TN50Y: " Thiruthuraipoondi UO",
  TN82Z: " Sirkali UO",
  TN55Z: " Aranthangi UO",
  TN55Y: " Illuppur UO",
  TN55X: " Alangudi UO",
  TN72U: " AMBASAMUDRAM UO",
  TN72V: " VALLIYOOR UO",
  TN37Z: " SULUR UO",
  TN39Z: " AVINASHI UO",
  TN42Y: " KANGEYAM UO",
  TN41W: " VALPARAI UO",
  TN67W: " GUDALUR UO",
  TN84U: " RAJAPALAYAM UO",
  TN63Z: " KARAIKUDI UO",
  TN65Z: " PARAMAKUDI UO",
  AP221: "Adoni RTO",
  AP205: "Amalapuram RTA",
  AP131: "Anakapalli RTA",
  AP2: "Anantapur RTA",
  AP126: "Atmakur MVI Office",
  AP321: "Atmakur-Kurnool MVI Office",
  AP207: "BAPATLA RTO OFFICE",
  AP104: "Badvel MVI Office",
  AP137: "Bhimavaram RTA",
  AP307: "Chilakaluripeta MVI Office",
  AP905: "Chintoor",
  AP127: "Chirala UO",
  AP3: "Chittoor RTA",
  AP4: "Cuddapah RTA",
  AP427: "Darsi UO",
  AP602: "Dharamavaram unit office",
  AP421: "Dhone MVI Office",
  AP231: "Gajuwaka RTA",
  AP116: "Gudiwada RTA",
  AP226: "Gudur RTA",
  AP202: "Guntakal UO",
  AP7: "Guntur RTA",
  AP102: "Hindupur RTA",
  AP130: "Itchapuram MVI Office",
  AP237: "JANGAREDDYGUDEM RTA",
  AP616: "Jaggayyapet UO",
  AP702: "Kalyandurg RTO office",
  AP227: "Kandukur MVI Office",
  AP326: "Kavali UO",
  AP337: "Kovvuru UO",
  AP21: "Kurnool RTA",
  AP407: "Macherla MVI Office",
  AP405: "Mandapeta UO",
  AP507: "Mangalagiri MVI Office",
  AP327: "Markapur UO",
  AP114: "Nagari MVI office",
  AP316: "Nandigama RTA",
  AP121: "Nandyal RTA",
  AP107: "Narasaraopet RTA",
  AP331: "Narsipatnam MVI Office",
  AP26: "Nellore RTA",
  AP416: "Nuzvid UO",
  AP230: "PALAKONDA RTA",
  AP135: "PARVATHIPURAM RTO OFFICE",
  AP41: "Paderu RTA",
  AP637: "Palakole UO",
  AP303: "Palamaner MVI Office",
  AP330: "Palasa MVI Office",
  AP505: "Peddapuram MVI Office",
  AP607: "Piduguralla UO",
  AP403: "Piler MVI Office",
  AP27: "Prakasam RTA",
  AP204: "Proddutur RTA",
  AP304: "Pulivendula MVI Office",
  AP113: "Punganur UO",
  AP503: "Puttur MVI Office",
  AP141: "REGIONAL TRANSPORT OFFICE RAMPACHODAVARAM",
  AP37: "RTA Eluru",
  AP5: "RTA Kakinada",
  AP216: "RTA MACHILIPATNAM",
  AP302: "RTO KADIRI",
  AP203: "RTO MADANAPALLE",
  AP105: "Rajahmundry RTA",
  AP404: "Rajampet MVI Office",
  AP605: "Ramachandrapuram UO",
  AP705: "Ravulapalem UO",
  AP504: "Rayachoti MVI Office",
  AP235: "Salur MVI Office",
  AP30: "Srikakulam RTA",
  AP603: "Srikalahasthi MVI Office",
  AP426: "Sullurpet UO",
  AP707: "TENALI RTA",
  AP437: "Tadepalli Gudem UO",
  AP402: "Tadipatri UO",
  AP537: "Tanuku UO",
  AP430: "Tekkali MVI Office",
  AP103: "Tirupati RTA",
  AP305: "UNIT OFFICE KATHIPUDI",
  AP502: "UNIT OFFICE RAYADURG",
  AP16: "Vijayawada RTA",
  AP31: "Vishakapatnam RTA",
  AP35: "Vizianagaram RTA",
  AP516: "Vuyyuru UO",
  AN201: "Baratang",
  AN212: "Campbell Bay",
  AN211: "Car Nicobar",
  AN207: "Little Andaman",
  AN1: "Port Blair DTO",
  KA29: "BAGALKOT RTO",
  KA24: "BAILHONGAL RTO",
  KA70: "BANTWALA ARTO",
  KA56: "BASAVAKALYAN ARTO",
  KA34: "BELLARY RTO",
  KA1: "BENGALURU CENTRAL RTO",
  KA3: "BENGALURU EAST RTO",
  KA4: "BENGALURU NORTH RTO",
  KA5: "BENGALURU SOUTH RTO",
  KA2: "BENGALURU WEST RTO",
  KA39: "BHALKI ARTO",
  KA38: "BIDAR RTO",
  KA28: "BIJAPUR RTO",
  KA10: "CHAMARAJANAGAR RTO",
  KA59: "CHANDAPURA, BENGALURU RTO",
  KA40: "CHICKABALLAPUR RTO",
  KA18: "CHIKAMANGLUR RTO",
  KA23: "CHIKKODI RTO",
  KA67: "CHINTAMANI ARTO",
  KA16: "CHITRADURGA RTO",
  KA65: "DANDELI ARTO",
  KA17: "DAVANAGERE RTO",
  KA43: "DEVANAHALLI ARTO",
  KA63: "DHARWAD EAST RTO",
  KA25: "DHARWAD WEST RTO",
  KA51: "ELECTRONIC CITY RTO",
  KA26: "GADAG RTO",
  KA49: "GOKAK ARTO",
  KA13: "HASSAN RTO",
  KA27: "HAVERI RTO",
  KA47: "HONNAVAR ARTO",
  KA35: "HOSPET RTO",
  KA45: "HUNSUR ARTO",
  KA48: "JAMKHANDI ARTO",
  KA41: "JNANABHARATHI RTO",
  KA8: "K G F ARTO",
  KA32: "KALABURAGI RTO",
  KA30: "KARWAR RTO",
  KA7: "KOLAR RTO",
  KA37: "KOPPAL RTO",
  KA53: "KRISHNARAJAPURAM RTO",
  KA64: "MADHUGIRI, TUMAKURU ARTO",
  KA12: "MADIKERI RTO",
  KA11: "MANDYA RTO",
  KA19: "MANGALORE RTO",
  KA55: "MYSURU EAST RTO",
  KA9: "MYSURU WEST RTO",
  KA54: "NAGAMANGALA RTO",
  KA52: "NELAMANGALA RTO",
  KA21: "PUTTUR RTO",
  KA36: "RAICHUR RTO",
  KA42: "RAMANAGAR RTO",
  KA69: "RAMDURGA ARTO",
  KA68: "RANIBENNUR ARTO",
  KA22: "REGIONAL TRANSPORT OFFICE BELAGAVI",
  KA15: "SAGAR ARTO",
  KA46: "SAKALESHPURA ARTO",
  KA14: "SHIMOGA RTO",
  KA31: "SIRSI RTO",
  KA99: "STATE TRANSPORT AUTHORITY",
  KA57: "STU AND AUTORIKSHAW, SHANTHINAGAR RTO",
  KA66: "TARIKERE, CHIKKAMAGALURU ARTO",
  KA44: "TIPTUR ARTO",
  KA6: "TUMKUR RTO",
  KA20: "UDUPI RTO",
  KA33: "YADGIRI RTO",
  KA50: "YALAHANKA RTO",
  KL28: "ADOOR SRTO",
  KL4: "ALAPPUZHA RTO",
  KL50: "ALATHUR SRTO",
  KL42: "ALUVA SRTO",
  KL41: "ANGAMALI SRTO",
  KL16: "ATTINGAL RTO",
  KL25: "CHADAYAMANGALA SRTO",
  KL43: "CHALAKKUDY SRTO",
  KL5: "CHANGANACHERRY SRTO",
  KL27: "CHENGANNUR SRTO",
  KL32: "CHERTHALA SRTO",
  KL51: "CHITTUR SRTO",
  KL6: "DEVIKULAM SRTO",
  KL7: "ERNAKULAM RTO",
  KL8: "GURUVAYUR SRTO",
  KL47: "IDUKKI RTO",
  KL45: "IRINJALAKUDA SRTO",
  KL58: "IRITTY SRTO",
  KL59: "KANHANGAD SRTO",
  KL24: "KANJIRAPPALLY SRTO",
  KL13: "KANNUR RTO",
  KL23: "KARUNAGAPPALLY SRTO",
  KL14: "KASARGODE RTO",
  KL20: "KATTAKADA SRTO",
  KL29: "KAYAMKULAM SRTO",
  KL15: "KAZHAKUTTOM SRTO",
  KL65: "KODUNGALLUR SRTO",
  KL11: "KODUVALLY SRTO",
  KL12: "KOILANDY SRTO",
  KL2: "KOLLAM RTO",
  KL67: "KONDOTTY SRTO",
  KL61: "KONNI SRTO",
  KL68: "KOTHAMANGALAM SRTO",
  KL21: "KOTTARAKKARA SRTO",
  KL66: "KUNNATHUR SRTO",
  KL10: "MALAPPURAM RTO",
  KL72: "MANANTHAVADY SRTO",
  KL54: "MANNARGHAT SRTO",
  KL57: "NANMANDA SRTO",
  KL22: "NEDUMANGADU SRTO",
  KL19: "NEYYATTINKARA SRTO",
  KL62: "NILAMBUR SRTO",
  KL52: "OTTAPPALAM SRTO",
  KL35: "PALAI SRTO",
  KL9: "PALAKKAD RTO",
  KL38: "PARASSALA SRTO",
  KL39: "PATHANAPURAM SRTO",
  KL53: "PATTAMBI SRTO",
  KL56: "PAYYANNUR SRTO",
  KL63: "PERUMBAVUR SRTO",
  KL71: "PONNANI SRTO",
  KL64: "PUNALUR SRTO",
  KL60: "RANNI SRTO",
  KL69: "THIRUR SRTO",
  KL48: "THODUPUZHA SRTO",
  KL46: "THRIPRAYAR SRTO",
  KL1: "TRIVANDRUM RTO",
  KL36: "VAIKOM SRTO",
  KL30: "VANDIPERIYAR SRTO",
  KL73: "WAYANAD RTO",
  AR17: "ANJAW",
  AR28: "Bichom",
  AR12: "CHANGLANG",
  AR10: "DIBANG VALLEY",
  AR5: "EAST KAMENG",
  AR9: "EAST SIANG",
  AR1: "ITANAGAR CAPITAL REGION",
  AR23: "KAMLE",
  AR19: "KRA-DAADI",
  AR15: "KURUNG KUMEY",
  AR27: "Keyi Panyor",
  AR25: "LEPARADA",
  AR11: "LOHIT",
  AR18: "LONGDING",
  AR16: "LOWER DIBANG VALLEY",
  AR22: "LOWER SIANG",
  AR6: "LOWER SUBANSIRI",
  AR20: "NAMSAI",
  AR24: "PAKKE-KESANG",
  AR26: "SHI-YOMI",
  AR21: "SIANG",
  AR3: "TAWANG",
  AR13: "TIRAP",
  AR14: "UPPER SIANG",
  AR7: "UPPER SUBANSIRI",
  AR4: "WEST KAMENG",
  AR8: "WEST SIANG",
  AR2: "YUPIA",
  GA4: "BICHOLIM RTO",
  GA10: "CANACONA RTO",
  GA12: "DHARBANDORA RTO",
  GA3: "MAPUSA RTO",
  GA8: "MARGAO RTO",
  GA7: "PANAJI RTO",
  GA11: "PERNEM RTO",
  GA5: "PONDA RTO",
  GA9: "QUEPEM RTO",
  GA6: "VASCO RTO",
  MH45: "AKLUJ",
  MH44: "AMBEJOGAI",
  MH27: "AMRAWATI",
  MH42: "BARAMATI",
  MH23: "BEED",
  MH54: "BHADGAON",
  MH36: "BHANDARA",
  MH28: "BULDHANA",
  MH52: "CHALISGAON",
  MH20: "CHHATRAPATI SAMBHAJINAGAR",
  MH25: "DHARASHIV",
  MH18: "DHULE",
  MH38: "DY REGIONAL TRANSPORT OFFICE, HINGOLI",
  MH8: "DY RTO RATNAGIRI",
  MH33: "GADCHIROLI",
  MH35: "GONDHIA",
  MH51: "ICHALKARANJI",
  MH21: "JALANA",
  MH5: "KALYAN",
  MH50: "KARAD",
  MH9: "KOLHAPUR",
  MH56: "Khamgaon",
  MH41: "MALEGAON",
  MH1: "MUMBAI (CENTRAL)",
  MH3: "MUMBAI (EAST)",
  MH2: "MUMBAI (WEST)",
  MH49: "NAGPUR (EAST)",
  MH40: "NAGPUR (RURAL)",
  MH31: "NAGPUR (U)",
  MH26: "NANDED",
  MH39: "NANDURBAR",
  MH15: "NASHIK",
  MH46: "PANVEL",
  MH22: "PARBHANI",
  MH6: "PEN (RAIGAD)",
  MH53: "PHALTAN",
  MH12: "PUNE",
  MH47: "R.T.O.BORIVALI",
  MH16: "RTO AHEMEDNAGAR",
  MH30: "RTO AKOLA",
  MH34: "RTO CHANDRAPUR",
  MH19: "RTO JALGAON",
  MH24: "RTO LATUR",
  MH14: "RTO PIMPRI CHINCHWAD",
  MH11: "RTO SATARA",
  MH13: "RTO SOLAPUR",
  MH10: "SANGLI",
  MH7: "SINDHUDURG(KUDAL)",
  MH17: "SRIRAMPUR",
  MH99: "TC OFFICE",
  MH4: "THANE",
  MH55: "UDGIR",
  MH48: "VASAI",
  MH43: "VASHI (NEW MUMBAI)",
  MH32: "WARDHA",
  MH37: "WASHIM",
  MH29: "YAWATMAL",
  PY11: "BAHOUR RTO",
  PY99: "CHECK POST",
  PY2: "KARAIKAL RTO",
  PY3: "MAHE RTO",
  PY5: "OULGARET RTO",
  PY1: "PUDUCHERRY RTO",
  PY51: "VILLIANUR RTO",
  PY4: "YANAM RTO",
  TG1: "Adilabad RTO",
  TG2: "Karimnagar RTO",
  TG3: "Warangal Urban RTO",
  TG4: "Khammam RTO",
  TG5: "Nalgonda RTO",
  TG6: "Mahbubnagar RTO",
  TG7: "Ranga Reddy RTO",
  TG8: "Medchal-Malkajgiri RTO",
  TG9: "Hyderabad Central RTO",
  TG10: "Hyderabad North RTO",
  TG11: "Hyderabad East RTO",
  TG12: "Hyderabad South RTO",
  TG13: "Hyderabad West RTO",
  TG14: "Reserved for Hyderabad RTO",
  TG15: "Sangareddy RTO",
  TG16: "Nizamabad RTO",
  TG17: "Kamareddy RTO",
  TG18: "Nirmal RTO",
  TG37: "Mulugu RTO",
  TG19: "Mancherial RTO",
  TG20: "Kumaram Bheem Asifabad RTO",
  TG21: "Jagtial RTO",
  TG22: "Peddapalli RTO",
  TG23: "Sircilla RTO",
  TG24: "Warangal (rural) RTO",
  TG25: "Jayashankar Bhupalpally RTO",
  TG26: "Mahabubabad RTO",
  TG27: "Jangaon RTO",
  TG28: "Bhadradri Kothagudem RTO",
  TG29: "Suryapet RTO",
  TG30: "Yadadri Bhuvanagiri RTO",
  TG31: "Nagarkurnool RTO",
  TG32: "Wanaparthy RTO",
  TG33: "Jogulamba Gadwal RTO",
  TG34: "Vikarabad RTO",
  TG35: "Medak RTO",
  TG36: "Siddipet RTO",
  TG38: "Narayanpet RTO",
};

export const formatDateTime = (timestamp) => {
  // Convert timestamp string to Date object
  const dt_object = new Date(timestamp);

  // Extract day, month, year, hours, minutes, and seconds
  const day = dt_object.getDate();
  const month = dt_object.getMonth() + 1; // Months are zero-indexed, so we add 1
  const year = dt_object.getFullYear();
  const hours = dt_object.getHours();
  const minutes = dt_object.getMinutes();
  const seconds = dt_object.getSeconds();

  // Format day, month, and year with leading zeros if needed
  const formatted_date = `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;

  // Format time with AM/PM indication
  const period = hours >= 12 ? "PM" : "AM";
  const formatted_hours = hours % 12 === 0 ? 12 : hours % 12;
  const formatted_time = `${formatted_hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")} ${period}`;

  return `${formatted_date} ${formatted_time}`;
};

export function formatDate(date) {
  const day = String(date?.getDate()).padStart(2, '0');
  const month = String(date?.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
  const year = date?.getFullYear();
  return `${day}/${month}/${year}`;
}