import { add, format } from "date-fns";
import { faker } from "@faker-js/faker";
import { getTransactionsMessages } from "../firebase/apiFirebase";

const transactionData = [
  {
    id: "TRANS-18",
    date: "2024-12-24 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "600.00",
    sender: "Brenda Thiel",
    receiver: null,
    referenceCode: "aH8z5EN4zExTe7uF",
    accountNumber: "66186126",
    location: "Costa Rica",
    balanceAfterTransaction: "37500.00",
  },
  {
    id: "TRANS-37",
    date: "2024-12-24 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "11500.00",
    sender: null,
    receiver: "Torphy, Torp and Windler",
    referenceCode: "4XihZ9TOYVwWiY0E",
    accountNumber: "93613341",
    location: "Brunei Darussalam",
    balanceAfterTransaction: "-24100.00",
  },
  {
    id: "TRANS-40",
    date: "2024-12-24 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "18400.00",
    sender: null,
    receiver: "Mr. Mario Veum Sr.",
    referenceCode: "CzRY7ggI97qQPTGj",
    accountNumber: "78060584",
    location: "Germany",
    balanceAfterTransaction: "-56100.00",
  },
  {
    id: "TRANS-54",
    date: "2024-12-24 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "18600.00",
    sender: null,
    receiver: "Ullrich LLC",
    referenceCode: "U5n8hu915Lovxfd8",
    accountNumber: "40935932",
    location: "Isle of Man",
    balanceAfterTransaction: "-48800.00",
  },
  {
    id: "TRANS-36",
    date: "2024-12-26 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "2300.00",
    sender: "Dietrich LLC",
    receiver: null,
    referenceCode: "tbNsaJOcoRcWoC0Q",
    accountNumber: "76340266",
    location: "Bangladesh",
    balanceAfterTransaction: "-12600.00",
  },
  {
    id: "TRANS-46",
    date: "2024-12-26 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "1700.00",
    sender: null,
    receiver: "Becky Towne",
    referenceCode: "fQxycTdd7yUmxydc",
    accountNumber: "11094700",
    location: "French Southern Territories",
    balanceAfterTransaction: "-44900.00",
  },
  {
    id: "TRANS-65",
    date: "2024-12-26 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "10600.00",
    sender: null,
    receiver: "Crist Group",
    referenceCode: "80ARusFZn8STYPDn",
    accountNumber: "26257070",
    location: "Antigua and Barbuda",
    balanceAfterTransaction: "-26700.00",
  },
  {
    id: "TRANS-74",
    date: "2024-12-26 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "16300.00",
    sender: "Felicia Heller",
    receiver: null,
    referenceCode: "ulFmxY53LZ4qWJw6",
    accountNumber: "04913588",
    location: "Thailand",
    balanceAfterTransaction: "4700.00",
  },
  {
    id: "TRANS-2",
    date: "2024-12-28 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "13400.00",
    sender: "Johnston - Johns",
    receiver: null,
    referenceCode: "Zo7CA1I287W7BDMk",
    accountNumber: "38518664",
    location: "Chad",
    balanceAfterTransaction: "12300.00",
  },
  {
    id: "TRANS-4",
    date: "2024-12-28 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "12400.00",
    sender: null,
    receiver: "Skiles - Glover",
    referenceCode: "GpKRETfBLLH0bdU2",
    accountNumber: "33428212",
    location: "American Samoa",
    balanceAfterTransaction: "-17600.00",
  },
  {
    id: "TRANS-15",
    date: "2024-12-28 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "13000.00",
    sender: "Marvin Inc",
    receiver: null,
    referenceCode: "SjNFhtpCzftor8Br",
    accountNumber: "11012691",
    location: "Bermuda",
    balanceAfterTransaction: "25600.00",
  },
  {
    id: "TRANS-57",
    date: "2024-12-28 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "4300.00",
    sender: null,
    receiver: "Ebert, Ledner and Koepp",
    referenceCode: "QwTGg8dXdAgumy6B",
    accountNumber: "45105244",
    location: "Hong Kong",
    balanceAfterTransaction: "-43900.00",
  },
  {
    id: "TRANS-13",
    date: "2024-12-29 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "10600.00",
    sender: null,
    receiver: "Domingo Dare",
    referenceCode: "VgYSxwRuAcUOQnvR",
    accountNumber: "55300504",
    location: "Dominican Republic",
    balanceAfterTransaction: "10700.00",
  },
  {
    id: "TRANS-29",
    date: "2024-12-29 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "2300.00",
    sender: null,
    receiver: "Sean Powlowski PhD",
    referenceCode: "eFk4Y0yviiyeJvpA",
    accountNumber: "38716669",
    location: "Rwanda",
    balanceAfterTransaction: "-63100.00",
  },
  {
    id: "TRANS-44",
    date: "2024-12-29 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "16200.00",
    sender: "Grace Schmeler",
    receiver: null,
    referenceCode: "O0urLIfgkMDiX32e",
    accountNumber: "27175070",
    location: "Cayman Islands",
    balanceAfterTransaction: "-38400.00",
  },
  {
    id: "TRANS-56",
    date: "2024-12-29 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "5800.00",
    sender: null,
    receiver: "Waters and Sons",
    referenceCode: "mPoGdQzstpyqqnc8",
    accountNumber: "16037920",
    location: "Western Sahara",
    balanceAfterTransaction: "-39600.00",
  },
  {
    id: "TRANS-1",
    date: "2024-12-30 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "1600.00",
    sender: null,
    receiver: "Kiehn - Gottlieb",
    referenceCode: "ZDKkj7RP0G0b8Ki4",
    accountNumber: "69698427",
    location: "Congo",
    balanceAfterTransaction: "-1100.00",
  },
  {
    id: "TRANS-12",
    date: "2024-12-30 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "17000.00",
    sender: "Conroy - Conroy",
    receiver: null,
    referenceCode: "KDFYl3ONILY37d0J",
    accountNumber: "83604792",
    location: "Japan",
    balanceAfterTransaction: "21300.00",
  },
  {
    id: "TRANS-20",
    date: "2024-12-30 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "18800.00",
    sender: null,
    receiver: "Ismael Jerde",
    referenceCode: "2MjJlETWa6DPNmnC",
    accountNumber: "10216230",
    location: "Somalia",
    balanceAfterTransaction: "1300.00",
  },
  {
    id: "TRANS-52",
    date: "2024-12-30 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "8900.00",
    sender: "Stoltenberg Inc",
    receiver: null,
    referenceCode: "0hWs5n2CKA9DcgcR",
    accountNumber: "32929408",
    location: "Isle of Man",
    balanceAfterTransaction: "-31500.00",
  },
  {
    id: "TRANS-67",
    date: "2024-12-30 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "2400.00",
    sender: null,
    receiver: "Douglas - Feeney",
    referenceCode: "UlSAGhn48QyK2lGC",
    accountNumber: "95791566",
    location: "Cuba",
    balanceAfterTransaction: "-9500.00",
  },
  {
    id: "TRANS-75",
    date: "2024-12-30 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "7300.00",
    sender: "Dr. Billie Schulist",
    receiver: null,
    referenceCode: "aX9geBi4fY9wi0CK",
    accountNumber: "08338902",
    location: "Holy See (Vatican City State)",
    balanceAfterTransaction: "12000.00",
  },
  {
    id: "TRANS-76",
    date: "2024-12-30 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "2400.00",
    sender: null,
    receiver: "Cormier - Crona",
    referenceCode: "QAagFOyLELazogcO",
    accountNumber: "94509325",
    location: "Ukraine",
    balanceAfterTransaction: "9600.00",
  },
  {
    id: "TRANS-17",
    date: "2024-12-31 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "2000.00",
    sender: "Marian Walsh",
    receiver: null,
    referenceCode: "mflIeydobg7QIPUQ",
    accountNumber: "95658936",
    location: "Monaco",
    balanceAfterTransaction: "36900.00",
  },
  {
    id: "TRANS-27",
    date: "2024-12-31 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "18400.00",
    sender: "Herman - Williamson",
    receiver: null,
    referenceCode: "WN3osdZCZhhcMech",
    accountNumber: "65107463",
    location: "Chad",
    balanceAfterTransaction: "-64200.00",
  },
  {
    id: "TRANS-8",
    date: "2025-01-01 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "19400.00",
    sender: "Mabel Schuster",
    receiver: null,
    referenceCode: "j5cH943sWMqwdkzr",
    accountNumber: "89065687",
    location: "Tokelau",
    balanceAfterTransaction: "-8800.00",
  },
  {
    id: "TRANS-24",
    date: "2025-01-01 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "19800.00",
    sender: null,
    receiver: "Waters - Zieme",
    referenceCode: "OTHgdjIxAd2lPukq",
    accountNumber: "82487579",
    location: "Wallis and Futuna",
    balanceAfterTransaction: "-73700.00",
  },
  {
    id: "TRANS-26",
    date: "2025-01-01 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "11300.00",
    sender: null,
    receiver: "Brendan MacGyver III",
    referenceCode: "7Rg7wHMOhpbr65WS",
    accountNumber: "49485868",
    location: "Jordan",
    balanceAfterTransaction: "-82600.00",
  },
  {
    id: "TRANS-48",
    date: "2025-01-01 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "17100.00",
    sender: null,
    receiver: "Spinka and Sons",
    referenceCode: "pkWFfbV4VC8OmiRj",
    accountNumber: "01372958",
    location: "Barbados",
    balanceAfterTransaction: "-59500.00",
  },
  {
    id: "TRANS-7",
    date: "2025-01-02 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "19100.00",
    sender: "Cruickshank Group",
    receiver: null,
    referenceCode: "M57LgkhGHl2j395N",
    accountNumber: "62800513",
    location: "Luxembourg",
    balanceAfterTransaction: "-28200.00",
  },
  {
    id: "TRANS-14",
    date: "2025-01-02 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "1900.00",
    sender: "Emard - Torphy",
    receiver: null,
    referenceCode: "nJF3J5ljlyxf6xTD",
    accountNumber: "48165120",
    location: "New Zealand",
    balanceAfterTransaction: "12600.00",
  },
  {
    id: "TRANS-34",
    date: "2025-01-02 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "15500.00",
    sender: "Hermann - Rempel",
    receiver: null,
    referenceCode: "Nfs67atj4N2oLppM",
    accountNumber: "52780813",
    location: "Andorra",
    balanceAfterTransaction: "-22800.00",
  },
  {
    id: "TRANS-47",
    date: "2025-01-02 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "2500.00",
    sender: "Bob Hauck",
    receiver: null,
    referenceCode: "m3EyCslzHLg6i4mU",
    accountNumber: "81204589",
    location: "French Polynesia",
    balanceAfterTransaction: "-42400.00",
  },
  {
    id: "TRANS-58",
    date: "2025-01-02 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "10900.00",
    sender: "Borer Inc",
    receiver: null,
    referenceCode: "dpgo4kIbt7BQ8jvn",
    accountNumber: "62652670",
    location: "Jamaica",
    balanceAfterTransaction: "-33000.00",
  },
  {
    id: "TRANS-77",
    date: "2025-01-02 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "10800.00",
    sender: "Keeling Inc",
    receiver: null,
    referenceCode: "GSc3lXc6sY0OvM9d",
    accountNumber: "87121188",
    location: "French Southern Territories",
    balanceAfterTransaction: "20400.00",
  },
  {
    id: "TRANS-33",
    date: "2025-01-03 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "14400.00",
    sender: "Clyde Kris",
    receiver: null,
    referenceCode: "Fzk2DROiMTitjgYe",
    accountNumber: "35361491",
    location: "Ireland",
    balanceAfterTransaction: "-38300.00",
  },
  {
    id: "TRANS-64",
    date: "2025-01-03 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "7200.00",
    sender: null,
    receiver: "Murray - Oberbrunner",
    referenceCode: "xZuJCc5UjLK4N7YS",
    accountNumber: "37873051",
    location: "Iran",
    balanceAfterTransaction: "-16100.00",
  },
  {
    id: "TRANS-3",
    date: "2025-01-04 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "17500.00",
    sender: null,
    receiver: "Leonard Keebler",
    referenceCode: "PWOrcqxBcyiisuLW",
    accountNumber: "64647237",
    location: "Ireland",
    balanceAfterTransaction: "-5200.00",
  },
  {
    id: "TRANS-50",
    date: "2025-01-04 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "19800.00",
    sender: "Pam Feeney",
    receiver: null,
    referenceCode: "cKWNMGGIUirNkl2p",
    accountNumber: "85169202",
    location: "Uruguay",
    balanceAfterTransaction: "-59000.00",
  },
  {
    id: "TRANS-30",
    date: "2025-01-07 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "9700.00",
    sender: "Taylor Rice",
    receiver: null,
    referenceCode: "akjnQlczaSGB8WsT",
    accountNumber: "45519007",
    location: "Tuvalu",
    balanceAfterTransaction: "-53400.00",
  },
  {
    id: "TRANS-35",
    date: "2025-01-07 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "7900.00",
    sender: "Stephanie Toy",
    receiver: null,
    referenceCode: "2etvqAgPgsYnLG7I",
    accountNumber: "38523183",
    location: "Romania",
    balanceAfterTransaction: "-14900.00",
  },
  {
    id: "TRANS-73",
    date: "2025-01-07 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "7600.00",
    sender: null,
    receiver: "Schiller, Kautzer and Wisozk",
    referenceCode: "uMAHUCUu2MHTRqtf",
    accountNumber: "86815634",
    location: "Bahrain",
    balanceAfterTransaction: "-11600.00",
  },
  {
    id: "TRANS-28",
    date: "2025-01-08 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "3400.00",
    sender: "Wilderman and Sons",
    receiver: null,
    referenceCode: "tvOO3TiDEOzwHxmu",
    accountNumber: "09191882",
    location: "Vanuatu",
    balanceAfterTransaction: "-60800.00",
  },
  {
    id: "TRANS-19",
    date: "2025-01-09 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "17400.00",
    sender: null,
    receiver: "Keeling LLC",
    referenceCode: "YQ6QYt9lHWGTBk1y",
    accountNumber: "89960840",
    location: "Georgia",
    balanceAfterTransaction: "20100.00",
  },
  {
    id: "TRANS-11",
    date: "2025-01-10 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "17000.00",
    sender: "Mayert, Wintheiser and Bode",
    receiver: null,
    referenceCode: "wUnif7Hbt76jbcgu",
    accountNumber: "85301086",
    location: "Cape Verde",
    balanceAfterTransaction: "4300.00",
  },
  {
    id: "TRANS-21",
    date: "2025-01-10 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "18500.00",
    sender: null,
    receiver: "Debbie Satterfield",
    referenceCode: "8fP4hWcTV98vmfxd",
    accountNumber: "53966997",
    location: "Pitcairn Islands",
    balanceAfterTransaction: "-17200.00",
  },
  {
    id: "TRANS-25",
    date: "2025-01-10 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "2400.00",
    sender: "Dr. Dwight Koelpin",
    receiver: null,
    referenceCode: "cnZ1qUMn9LMeITff",
    accountNumber: "03472422",
    location: "Italy",
    balanceAfterTransaction: "-71300.00",
  },
  {
    id: "TRANS-45",
    date: "2025-01-10 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "4800.00",
    sender: null,
    receiver: "Veum Inc",
    referenceCode: "0WJk6IPj6du2Hr8s",
    accountNumber: "07027907",
    location: "Togo",
    balanceAfterTransaction: "-43200.00",
  },
  {
    id: "TRANS-71",
    date: "2025-01-10 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "5500.00",
    sender: "Mable Sauer",
    receiver: null,
    referenceCode: "bMdCfnSWU8XyW7zo",
    accountNumber: "67833053",
    location: "Aland Islands",
    balanceAfterTransaction: "-10500.00",
  },
  {
    id: "TRANS-78",
    date: "2025-01-10 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "1100.00",
    sender: null,
    receiver: "Miss Brandy Thompson",
    referenceCode: "fYEd81yvtVNQaZyk",
    accountNumber: "72582138",
    location: "Tunisia",
    balanceAfterTransaction: "19300.00",
  },
  {
    id: "TRANS-5",
    date: "2025-01-12 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "10000.00",
    sender: null,
    receiver: "Bechtelar Group",
    referenceCode: "HSCqawPjGnM8JH3G",
    accountNumber: "68599357",
    location: "Taiwan",
    balanceAfterTransaction: "-27600.00",
  },
  {
    id: "TRANS-38",
    date: "2025-01-12 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "1100.00",
    sender: "Kohler - Lemke",
    receiver: null,
    referenceCode: "qxfJgXCrfCydXG0P",
    accountNumber: "75006076",
    location: "Argentina",
    balanceAfterTransaction: "-23000.00",
  },
  {
    id: "TRANS-43",
    date: "2025-01-12 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "6400.00",
    sender: "Ed Rippin",
    receiver: null,
    referenceCode: "x30uxbD80WD2pzEM",
    accountNumber: "91794725",
    location: "Honduras",
    balanceAfterTransaction: "-54600.00",
  },
  {
    id: "TRANS-42",
    date: "2025-01-13 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "2900.00",
    sender: null,
    receiver: "Kathy Mann",
    referenceCode: "HansDWoxNHxoyV3p",
    accountNumber: "20105441",
    location: "Somalia",
    balanceAfterTransaction: "-61000.00",
  },
  {
    id: "TRANS-62",
    date: "2025-01-13 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "18000.00",
    sender: "Jones LLC",
    receiver: null,
    referenceCode: "AFHKqw2LeaE85mUK",
    accountNumber: "93160314",
    location: "Central African Republic",
    balanceAfterTransaction: "-26700.00",
  },
  {
    id: "TRANS-41",
    date: "2025-01-14 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "2000.00",
    sender: null,
    receiver: "Fernando Becker",
    referenceCode: "UlFhszruj5eqqarl",
    accountNumber: "07269569",
    location: "Saint Martin",
    balanceAfterTransaction: "-58100.00",
  },
  {
    id: "TRANS-49",
    date: "2025-01-14 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "19300.00",
    sender: null,
    receiver: "Larkin - Marquardt",
    referenceCode: "T2E5WcfK7gud2ib4",
    accountNumber: "81873720",
    location: "Saint Lucia",
    balanceAfterTransaction: "-78800.00",
  },
  {
    id: "TRANS-63",
    date: "2025-01-14 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "17800.00",
    sender: "Schulist, Zemlak and Hayes",
    receiver: null,
    referenceCode: "1zMDbTexnmTKXJx6",
    accountNumber: "47780890",
    location: "New Caledonia",
    balanceAfterTransaction: "-8900.00",
  },
  {
    id: "TRANS-66",
    date: "2025-01-14 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "19600.00",
    sender: "Devin Kessler",
    receiver: null,
    referenceCode: "HK7op56kPtpGNvaJ",
    accountNumber: "03532718",
    location: "Albania",
    balanceAfterTransaction: "-7100.00",
  },
  {
    id: "TRANS-68",
    date: "2025-01-14 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "12100.00",
    sender: null,
    receiver: "Marion Macejkovic",
    referenceCode: "tPfArtbGBLe6VJRF",
    accountNumber: "23154404",
    location: "Monaco",
    balanceAfterTransaction: "-21600.00",
  },
  {
    id: "TRANS-16",
    date: "2025-01-15 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "9300.00",
    sender: "Ora Reichel",
    receiver: null,
    referenceCode: "rxJjydipSrda6uwE",
    accountNumber: "93470989",
    location: "Qatar",
    balanceAfterTransaction: "34900.00",
  },
  {
    id: "TRANS-59",
    date: "2025-01-15 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "5000.00",
    sender: null,
    receiver: "Osinski - Okuneva",
    referenceCode: "JZgfjpaBQV1Clkqt",
    accountNumber: "24033830",
    location: "Guyana",
    balanceAfterTransaction: "-38000.00",
  },
  {
    id: "TRANS-69",
    date: "2025-01-15 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "10900.00",
    sender: "Miss Lydia Ledner",
    receiver: null,
    referenceCode: "QhYo3SeqfNKp169H",
    accountNumber: "38642296",
    location: "Turkmenistan",
    balanceAfterTransaction: "-10700.00",
  },
  {
    id: "TRANS-70",
    date: "2025-01-16 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "5300.00",
    sender: null,
    receiver: "Luther Mueller",
    referenceCode: "oJdvhu9c5bRqejAJ",
    accountNumber: "97047832",
    location: "Martinique",
    balanceAfterTransaction: "-16000.00",
  },
  {
    id: "TRANS-79",
    date: "2025-01-16 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "18600.00",
    sender: null,
    receiver: "Harold Greenholt",
    referenceCode: "AYqbTtqtZypXN3Pq",
    accountNumber: "97470931",
    location: "United States of America",
    balanceAfterTransaction: "700.00",
  },
  {
    id: "TRANS-80",
    date: "2025-01-16 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "7800.00",
    sender: null,
    receiver: "Watsica Group",
    referenceCode: "OV7BtzWjOM01KWwK",
    accountNumber: "34324623",
    location: "Cayman Islands",
    balanceAfterTransaction: "-7100.00",
  },
  {
    id: "TRANS-10",
    date: "2025-01-17 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "3500.00",
    sender: "Kreiger - Farrell",
    receiver: null,
    referenceCode: "qMvv5kuFYfwsuhzT",
    accountNumber: "45906330",
    location: "France",
    balanceAfterTransaction: "-12700.00",
  },
  {
    id: "TRANS-22",
    date: "2025-01-18 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "16900.00",
    sender: null,
    receiver: "Meredith Conn II",
    referenceCode: "9H7Geceij4HTwJVI",
    accountNumber: "58926788",
    location: "Bonaire, Sint Eustatius and Saba",
    balanceAfterTransaction: "-34100.00",
  },
  {
    id: "TRANS-32",
    date: "2025-01-18 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "17600.00",
    sender: "Willis Towne",
    receiver: null,
    referenceCode: "Ta88m3tSdMASNdnJ",
    accountNumber: "63294512",
    location: "Antigua and Barbuda",
    balanceAfterTransaction: "-52700.00",
  },
  {
    id: "TRANS-53",
    date: "2025-01-18 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "1300.00",
    sender: "Josephine Crona",
    receiver: null,
    referenceCode: "O7os8keGGFsbVFvZ",
    accountNumber: "70603954",
    location: "Holy See (Vatican City State)",
    balanceAfterTransaction: "-30200.00",
  },
  {
    id: "TRANS-60",
    date: "2025-01-18 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "18800.00",
    sender: null,
    receiver: "Mack Moen",
    referenceCode: "CcykeajCYEVHhXdO",
    accountNumber: "07640561",
    location: "Maldives",
    balanceAfterTransaction: "-56800.00",
  },
  {
    id: "TRANS-23",
    date: "2025-01-19 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "19800.00",
    sender: null,
    receiver: "Leuschke, O'Keefe and Mayert",
    referenceCode: "h6BvTY7NykPNlwSG",
    accountNumber: "94771409",
    location: "Panama",
    balanceAfterTransaction: "-53900.00",
  },
  {
    id: "TRANS-55",
    date: "2025-01-19 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "15000.00",
    sender: "Jared Sipes",
    receiver: null,
    referenceCode: "x5pBy6Gys4IWcmup",
    accountNumber: "47960010",
    location: "Morocco",
    balanceAfterTransaction: "-33800.00",
  },
  {
    id: "TRANS-9",
    date: "2025-01-20 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "7400.00",
    sender: null,
    receiver: "Rowe LLC",
    referenceCode: "FV92CII89LkB7ttS",
    accountNumber: "34829218",
    location: "Anguilla",
    balanceAfterTransaction: "-16200.00",
  },
  {
    id: "TRANS-31",
    date: "2025-01-20 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "16900.00",
    sender: null,
    receiver: "Larkin, Torphy and Carroll",
    referenceCode: "kuGcL9SLXrmqnZ44",
    accountNumber: "91935239",
    location: "Nauru",
    balanceAfterTransaction: "-70300.00",
  },
  {
    id: "TRANS-6",
    date: "2025-01-21 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "19700.00",
    sender: null,
    receiver: "Eduardo O'Reilly",
    referenceCode: "acSPHEZMzvYmqnmC",
    accountNumber: "28796536",
    location: "Aland Islands",
    balanceAfterTransaction: "-47300.00",
  },
  {
    id: "TRANS-51",
    date: "2025-01-21 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "18600.00",
    sender: "Tracey Spencer",
    receiver: null,
    referenceCode: "fGjVUs2w5ADHdBA9",
    accountNumber: "26301506",
    location: "South Sudan",
    balanceAfterTransaction: "-40400.00",
  },
  {
    id: "TRANS-72",
    date: "2025-01-21 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "6500.00",
    sender: "Mr. Ernesto Gusikowski",
    receiver: null,
    referenceCode: "zFKLoCkBA4Lzrkum",
    accountNumber: "79709450",
    location: "United States Minor Outlying Islands",
    balanceAfterTransaction: "-4000.00",
  },
  {
    id: "TRANS-39",
    date: "2025-01-22 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "14700.00",
    sender: null,
    receiver: "Wilderman, Schaden and Witting",
    referenceCode: "0ExB8WjGPCtU1SE2",
    accountNumber: "39101982",
    location: "Northern Mariana Islands",
    balanceAfterTransaction: "-37700.00",
  },
  {
    id: "TRANS-61",
    date: "2025-01-22 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "12100.00",
    sender: "Hansen - Treutel",
    receiver: null,
    referenceCode: "kFG0Kk21nOxemMOs",
    accountNumber: "79931279",
    location: "Uzbekistan",
    balanceAfterTransaction: "-44700.00",
  },
];

export interface Transaction {
  id: string;
  date: string;
  transactionType: string;
  status: string;
  amount: string;
  sender: string | null;
  receiver: string | null;
  referenceCode: string;
  accountNumber: string;
  location: string;
  balanceAfterTransaction: string;
}

async function gettransactionmessges() {
  const data = (await getTransactionsMessages()) ?? [];
  const newTransactionData = [
    ...transactionData,
    ...(data as typeof transactionData),
  ];
  return newTransactionData;
}

// gettransactionmessges();

export type TransactionByDate = {
  [date: string]: Transaction[];
};

// Transform the data into an array of objects grouped by dates, where each key is a date and the value is an array of transactions for that date
export async function getGroupedTransactions() {
  const newTransactionData = await gettransactionmessges();
  const groupedTransactions = newTransactionData
    .reverse()
    .reduce((acc: TransactionByDate, transaction) => {
      const { date } = transaction;
      const dateKey = date.split(" ")[0];

      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }

      acc[dateKey].push(transaction);

      return acc;
    }, {} as TransactionByDate);

  return groupedTransactions;
}

// export const groupedTransactions = transactionData
//   .reverse()
//   .reduce((acc: TransactionByDate, transaction) => {
//     const { date } = transaction;
//     const dateKey = date.split(" ")[0];

//     if (!acc[dateKey]) {
//       acc[dateKey] = [];
//     }

//     acc[dateKey].push(transaction);

//     return acc;
//   }, {} as TransactionByDate);

// // Custom function to get a date `numDays` ago from today, and optionally include time
// function fromToday(numDays: number, withTime = false) {
//   const date = add(new Date(), { days: numDays });
//   if (!withTime) date.setUTCHours(0, 0, 0, 0); // Reset hours if not with time
//   return date.toISOString().slice(0, -1); // Format date as ISO string
// }

// // Function to generate fresh transaction data if previous data become very old
// function generateTransactionData() {
//   let totalAmount = 20000; // Aim for around $100 million in total
//   const transactions = [];
//   const numTransactions = 80;
//   let balance = 500; // Starting balance for the account

//   const transactionTypes = [
//     "Bank Deposit",
//     "Bank Withdrawal",
//     "Mobile Transfer",
//   ];

//   // for (let i = 0; i < numTransactions; i++) {
//   //   // Generate the transaction amount (a random amount based on remaining budget)
//   //   const amount =
//   //     Math.floor(Math.random() * (totalAmount / numTransactions)) + 5000;

//   //   // Decide if it's a credit or debit
//   //   const isCredit = Math.random() > 0.5;
//   //   const transactionType =
//   //     transactionTypes[Math.floor(Math.random() * transactionTypes.length)];

//   //   // Update balance based on the transaction type
//   //   if (isCredit) {
//   //     balance += amount;
//   //   } else {
//   //     balance -= amount;
//   //   }

//   //   // Randomly decide if the name is a company or individual
//   //   const isCompany = Math.random() > 0.5;
//   //   const name = isCompany ? faker.company.name() : faker.person.fullName();

//   //   // Generate the name, account number, and reference code
//   //   const accountNumber = faker.finance.accountNumber();
//   //   const referenceCode = faker.string.alphanumeric(16);

//   //   // Transaction date within the last 30 days
//   //   const transactionDate = format(
//   //     new Date(fromToday(-Math.floor(Math.random() * 30))), // Get random date within 30 days
//   //     "yyyy-MM-dd HH:mm:ss"
//   //   );

//   //   // Define transaction data
//   //   const transaction = {
//   //     id: `TRANS-${i + 1}`,
//   //     date: transactionDate,
//   //     transactionType,
//   //     status: isCredit ? "Credit" : "Debit",
//   //     amount: amount.toFixed(2),
//   //     sender: isCredit ? name : null,
//   //     receiver: isCredit ? null : name,
//   //     referenceCode,
//   //     accountNumber,
//   //     location: faker.location.country(),
//   //     balanceAfterTransaction: balance.toFixed(2),
//   //   };

//   //   // Add to transactions array and adjust remaining budget
//   //   transactions.push(transaction);
//   //   totalAmount -= amount;
//   // }

//   // Sort transactions by date (ascending) and return the JSON data

//   for (let i = 0; i < numTransactions; i++) {
//     // Generate a random amount within a range and round it to the nearest 100 or 500
//     // const rawAmount = Math.random() * (totalAmount / numTransactions) + 5000;
//     const rawAmount =
//       Math.round((Math.random() * (20000 - 500) + 500) / 100) * 100;

//     // Round to the nearest 100
//     const amount = Math.round(rawAmount / 100) * 100;

//     // OR round to the nearest 500 (choose one)
//     // const amount = Math.round(rawAmount / 500) * 500;

//     // Decide if it's a credit or debit
//     const isCredit = Math.random() > 0.5;
//     const transactionType =
//       transactionTypes[Math.floor(Math.random() * transactionTypes.length)];

//     // Update balance based on the transaction type
//     if (isCredit) {
//       balance += amount;
//     } else {
//       balance -= amount;
//     }

//     // Randomly decide if the name is a company or individual
//     const isCompany = Math.random() > 0.5;
//     const name = isCompany ? faker.company.name() : faker.person.fullName();

//     // Generate the name, account number, and reference code
//     const accountNumber = faker.finance.accountNumber();
//     const referenceCode = faker.string.alphanumeric(16);

//     // Transaction date within the last 30 days
//     const transactionDate = format(
//       new Date(fromToday(-Math.floor(Math.random() * 30))),
//       "yyyy-MM-dd HH:mm:ss"
//     );

//     // Define transaction data
//     const transaction = {
//       id: `TRANS-${i + 1}`,
//       date: transactionDate,
//       transactionType,
//       status: isCredit ? "Credit" : "Debit",
//       amount: amount.toFixed(2),
//       sender: isCredit ? name : null,
//       receiver: isCredit ? null : name,
//       referenceCode,
//       accountNumber,
//       location: faker.location.country(),
//       balanceAfterTransaction: balance.toFixed(2),
//     };

//     // Add to transactions array and adjust remaining budget
//     transactions.push(transaction);
//     totalAmount -= amount;
//   }

//   transactions.sort((a, b) => +new Date(a.date) - +new Date(b.date));

//   // Return the JSON string of transactions
//   return JSON.stringify(transactions, null, 2);
// }

// // Generate the transaction data and print to console
// console.log(generateTransactionData());
