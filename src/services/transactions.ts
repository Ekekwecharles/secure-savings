// import { add, format } from "date-fns";
// import { faker } from "@faker-js/faker";
import { getTransactionsMessages } from "../firebase/apiFirebase";

const transactionData = [
  {
    id: "TRANS-4",
    date: "2025-06-13 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "3400.00",
    sender: null,
    receiver: "Roberto Schultz",
    referenceCode: "F3wUcYj9asfcxHYZ",
    accountNumber: "63152752",
    location: "Marshall Islands",
    balanceAfterTransaction: "-50600.00",
  },
  {
    id: "TRANS-8",
    date: "2025-06-13 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "17200.00",
    sender: "William Gutmann",
    receiver: null,
    referenceCode: "EAeOfnp9OLgxkKyt",
    accountNumber: "09039536",
    location: "Norway",
    balanceAfterTransaction: "-84100.00",
  },
  {
    id: "TRANS-34",
    date: "2025-06-13 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "19400.00",
    sender: null,
    receiver: "Volkman, Pfannerstill and Hermiston",
    referenceCode: "ZJ9cIi2yDkpOygPr",
    accountNumber: "53735745",
    location: "Georgia",
    balanceAfterTransaction: "-233300.00",
  },
  {
    id: "TRANS-45",
    date: "2025-06-13 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "2700.00",
    sender: null,
    receiver: "Hills - Breitenberg",
    referenceCode: "DRGsuKg7CQsfIRze",
    accountNumber: "57479671",
    location: "Morocco",
    balanceAfterTransaction: "-218400.00",
  },
  {
    id: "TRANS-61",
    date: "2025-06-13 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "10200.00",
    sender: "Feeney LLC",
    receiver: null,
    referenceCode: "lrwapBmDRQcqV7ZP",
    accountNumber: "73693083",
    location: "Brazil",
    balanceAfterTransaction: "-199200.00",
  },
  {
    id: "TRANS-72",
    date: "2025-06-13 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "12700.00",
    sender: null,
    receiver: "Natalie O'Hara DVM",
    referenceCode: "uLUl4rRomltwvksU",
    accountNumber: "89683524",
    location: "Chile",
    balanceAfterTransaction: "-174000.00",
  },
  {
    id: "TRANS-7",
    date: "2025-06-14 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "20000.00",
    sender: null,
    receiver: "Cindy Marks",
    referenceCode: "YZFdmaxo9RHjMg9n",
    accountNumber: "69908156",
    location: "Croatia",
    balanceAfterTransaction: "-101300.00",
  },
  {
    id: "TRANS-13",
    date: "2025-06-14 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "14900.00",
    sender: null,
    receiver: "Madeline Schmidt",
    referenceCode: "nPRIJ3GUhazZBmXZ",
    accountNumber: "97478071",
    location: "Turkey",
    balanceAfterTransaction: "-73400.00",
  },
  {
    id: "TRANS-43",
    date: "2025-06-14 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "8300.00",
    sender: "Darrel Hudson",
    receiver: null,
    referenceCode: "mdhQONBvHycuQSVv",
    accountNumber: "00936243",
    location: "Belarus",
    balanceAfterTransaction: "-218000.00",
  },
  {
    id: "TRANS-49",
    date: "2025-06-14 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "16500.00",
    sender: null,
    receiver: "Edward Cronin",
    referenceCode: "wKBzBSAlpaiG7wqj",
    accountNumber: "83146361",
    location: "Democratic People's Republic of Korea",
    balanceAfterTransaction: "-241500.00",
  },
  {
    id: "TRANS-52",
    date: "2025-06-14 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "7700.00",
    sender: null,
    receiver: "McLaughlin, Lowe and Funk",
    referenceCode: "x5Miv0BjjwgwtA9k",
    accountNumber: "99437991",
    location: "Bahrain",
    balanceAfterTransaction: "-244000.00",
  },
  {
    id: "TRANS-28",
    date: "2025-06-15 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "9100.00",
    sender: "Greenfelder - Hartmann",
    receiver: null,
    referenceCode: "Tgk8413ViE3Md44x",
    accountNumber: "46839563",
    location: "Turkey",
    balanceAfterTransaction: "-170400.00",
  },
  {
    id: "TRANS-58",
    date: "2025-06-15 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "17900.00",
    sender: null,
    receiver: "Hintz, Treutel and Brakus",
    referenceCode: "fMlIotYkRZKGeG2x",
    accountNumber: "27170338",
    location: "Uruguay",
    balanceAfterTransaction: "-222600.00",
  },
  {
    id: "TRANS-22",
    date: "2025-06-16 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "15500.00",
    sender: null,
    receiver: "Ken Thompson",
    referenceCode: "ehpXndp7idJ8XNEZ",
    accountNumber: "41540842",
    location: "Libyan Arab Jamahiriya",
    balanceAfterTransaction: "-183500.00",
  },
  {
    id: "TRANS-38",
    date: "2025-06-16 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "13700.00",
    sender: null,
    receiver: "Billy Conn",
    referenceCode: "hscnQMtq3Y6Al4Ma",
    accountNumber: "35409652",
    location: "Virgin Islands, British",
    balanceAfterTransaction: "-199800.00",
  },
  {
    id: "TRANS-66",
    date: "2025-06-16 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "8700.00",
    sender: "Suzanne Dietrich",
    receiver: null,
    referenceCode: "2XAznG69MMQCJ1Sy",
    accountNumber: "03454327",
    location: "Japan",
    balanceAfterTransaction: "-182200.00",
  },
  {
    id: "TRANS-75",
    date: "2025-06-16 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "1200.00",
    sender: "Milton Monahan",
    receiver: null,
    referenceCode: "T92TykTNJH4VOpCB",
    accountNumber: "39063354",
    location: "Chile",
    balanceAfterTransaction: "-152200.00",
  },
  {
    id: "TRANS-19",
    date: "2025-06-17 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "14600.00",
    sender: null,
    receiver: "Wintheiser Group",
    referenceCode: "7t0W0XtGpRbByZxj",
    accountNumber: "09404585",
    location: "Finland",
    balanceAfterTransaction: "-139800.00",
  },
  {
    id: "TRANS-24",
    date: "2025-06-17 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "16800.00",
    sender: "Mrs. Alison Pfannerstill",
    receiver: null,
    referenceCode: "DKzsifpjCUZpjfx8",
    accountNumber: "96782467",
    location: "Vanuatu",
    balanceAfterTransaction: "-156400.00",
  },
  {
    id: "TRANS-48",
    date: "2025-06-17 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "13000.00",
    sender: null,
    receiver: "Cesar Wyman",
    referenceCode: "tQAqCwNokoQGTfk2",
    accountNumber: "07803995",
    location: "Palau",
    balanceAfterTransaction: "-225000.00",
  },
  {
    id: "TRANS-63",
    date: "2025-06-17 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "1200.00",
    sender: null,
    receiver: "Viola Witting",
    referenceCode: "03LvxieQiAMNMidf",
    accountNumber: "57533357",
    location: "Italy",
    balanceAfterTransaction: "-193200.00",
  },
  {
    id: "TRANS-74",
    date: "2025-06-17 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "2300.00",
    sender: "Curtis Yost V",
    receiver: null,
    referenceCode: "ZAFVvwqJCAyoYj3b",
    accountNumber: "94509856",
    location: "Jordan",
    balanceAfterTransaction: "-153400.00",
  },
  {
    id: "TRANS-10",
    date: "2025-06-18 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "8400.00",
    sender: null,
    receiver: "Debra Kuhn",
    referenceCode: "LQSFNyZDlz2vcKfH",
    accountNumber: "50995837",
    location: "Virgin Islands, British",
    balanceAfterTransaction: "-82200.00",
  },
  {
    id: "TRANS-14",
    date: "2025-06-18 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "16100.00",
    sender: null,
    receiver: "Cronin - Jast",
    referenceCode: "LegJLeRybqzsP7O8",
    accountNumber: "83544430",
    location: "Serbia",
    balanceAfterTransaction: "-89500.00",
  },
  {
    id: "TRANS-17",
    date: "2025-06-18 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "16100.00",
    sender: null,
    receiver: "Schuster - Denesik",
    referenceCode: "YymRse28dm8Qabcf",
    accountNumber: "89541469",
    location: "Switzerland",
    balanceAfterTransaction: "-126300.00",
  },
  {
    id: "TRANS-29",
    date: "2025-06-18 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "12200.00",
    sender: null,
    receiver: "Sarah Gerlach",
    referenceCode: "E2xY1dmzBgF4xIh8",
    accountNumber: "46719088",
    location: "Bermuda",
    balanceAfterTransaction: "-182600.00",
  },
  {
    id: "TRANS-36",
    date: "2025-06-19 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "19100.00",
    sender: "Ebert - Herzog",
    receiver: null,
    referenceCode: "1KuyQXttaMuEGtyk",
    accountNumber: "22685994",
    location: "Montenegro",
    balanceAfterTransaction: "-197100.00",
  },
  {
    id: "TRANS-37",
    date: "2025-06-19 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "11000.00",
    sender: "Carroll, Collier and DuBuque",
    receiver: null,
    referenceCode: "AFOlfvUAnN2pHZKZ",
    accountNumber: "18493288",
    location: "Brazil",
    balanceAfterTransaction: "-186100.00",
  },
  {
    id: "TRANS-47",
    date: "2025-06-20 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "8400.00",
    sender: null,
    receiver: "Waelchi, Muller and Quitzon",
    referenceCode: "N2Abo170XVRh49bh",
    accountNumber: "32238578",
    location: "Palau",
    balanceAfterTransaction: "-212000.00",
  },
  {
    id: "TRANS-76",
    date: "2025-06-20 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "5700.00",
    sender: null,
    receiver: "Natasha Zulauf",
    referenceCode: "GHmhouRJunomGWXF",
    accountNumber: "10730822",
    location: "United Kingdom",
    balanceAfterTransaction: "-157900.00",
  },
  {
    id: "TRANS-3",
    date: "2025-06-21 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "19000.00",
    sender: null,
    receiver: "Jacobs, Schaden and Ortiz",
    referenceCode: "I1ijIhRJWf8YovvG",
    accountNumber: "91796497",
    location: "Sao Tome and Principe",
    balanceAfterTransaction: "-47200.00",
  },
  {
    id: "TRANS-55",
    date: "2025-06-21 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "3300.00",
    sender: "Heathcote, Cormier and Becker",
    receiver: null,
    referenceCode: "tiYW3Q73aacCVq6Q",
    accountNumber: "34906186",
    location: "Fiji",
    balanceAfterTransaction: "-219800.00",
  },
  {
    id: "TRANS-64",
    date: "2025-06-21 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "12600.00",
    sender: null,
    receiver: "Nienow LLC",
    referenceCode: "gn358wNJQrNXOsZF",
    accountNumber: "18580579",
    location: "El Salvador",
    balanceAfterTransaction: "-205800.00",
  },
  {
    id: "TRANS-9",
    date: "2025-06-22 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "10300.00",
    sender: "Van Wolff",
    receiver: null,
    referenceCode: "BymwgjLhU4JWJ1OJ",
    accountNumber: "70070961",
    location: "Mongolia",
    balanceAfterTransaction: "-73800.00",
  },
  {
    id: "TRANS-46",
    date: "2025-06-22 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "14800.00",
    sender: "Mr. Darin Jones-Metz",
    receiver: null,
    referenceCode: "2gNNUI3Y4R28f3BE",
    accountNumber: "20794819",
    location: "Kyrgyz Republic",
    balanceAfterTransaction: "-203600.00",
  },
  {
    id: "TRANS-51",
    date: "2025-06-22 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "2800.00",
    sender: null,
    receiver: "Stiedemann - Simonis",
    referenceCode: "dau6f1MdslZv1Nx4",
    accountNumber: "43756233",
    location: "Kenya",
    balanceAfterTransaction: "-236300.00",
  },
  {
    id: "TRANS-67",
    date: "2025-06-22 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "1900.00",
    sender: "Rice Group",
    receiver: null,
    referenceCode: "EtVlPzQgoaVHJhWs",
    accountNumber: "38725597",
    location: "Eritrea",
    balanceAfterTransaction: "-180300.00",
  },
  {
    id: "TRANS-21",
    date: "2025-06-23 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "11900.00",
    sender: null,
    receiver: "Dare and Sons",
    referenceCode: "NkFNsUzgV4KPnBcn",
    accountNumber: "56198748",
    location: "Papua New Guinea",
    balanceAfterTransaction: "-168000.00",
  },
  {
    id: "TRANS-32",
    date: "2025-06-23 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "14400.00",
    sender: null,
    receiver: "Medhurst, Heidenreich and Rohan",
    referenceCode: "q2WsE5Gje8tGwsdq",
    accountNumber: "41415630",
    location: "Niue",
    balanceAfterTransaction: "-203900.00",
  },
  {
    id: "TRANS-68",
    date: "2025-06-23 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "19500.00",
    sender: "Jeanette Schmitt",
    receiver: null,
    referenceCode: "1vtscHCpFv5da8Zv",
    accountNumber: "20658758",
    location: "Iceland",
    balanceAfterTransaction: "-160800.00",
  },
  {
    id: "TRANS-12",
    date: "2025-06-24 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "10300.00",
    sender: "Schroeder and Sons",
    receiver: null,
    referenceCode: "kEg2QjqnfcFfrtpc",
    accountNumber: "46038226",
    location: "Turkmenistan",
    balanceAfterTransaction: "-58500.00",
  },
  {
    id: "TRANS-16",
    date: "2025-06-24 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "14800.00",
    sender: null,
    receiver: "Jacqueline Morar",
    referenceCode: "9eKbjSV8fzYNbOot",
    accountNumber: "49009947",
    location: "Kuwait",
    balanceAfterTransaction: "-110200.00",
  },
  {
    id: "TRANS-25",
    date: "2025-06-24 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "10700.00",
    sender: null,
    receiver: "Gulgowski, Lueilwitz and Strosin",
    referenceCode: "ax1Hcb6uT3GqJPUP",
    accountNumber: "11666770",
    location: "Eswatini",
    balanceAfterTransaction: "-167100.00",
  },
  {
    id: "TRANS-62",
    date: "2025-06-24 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "7200.00",
    sender: "White - Walter",
    receiver: null,
    referenceCode: "VPnivpltVjZmrvZ3",
    accountNumber: "94857624",
    location: "Sudan",
    balanceAfterTransaction: "-192000.00",
  },
  {
    id: "TRANS-79",
    date: "2025-06-24 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "4000.00",
    sender: null,
    receiver: "Carroll Ratke",
    referenceCode: "f3fjrgpYcJt6p3JJ",
    accountNumber: "88209910",
    location: "Lao People's Democratic Republic",
    balanceAfterTransaction: "-168000.00",
  },
  {
    id: "TRANS-11",
    date: "2025-06-25 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "13400.00",
    sender: "Stoltenberg - Price",
    receiver: null,
    referenceCode: "QwTYcexqME1LQQOA",
    accountNumber: "48550597",
    location: "Saint Vincent and the Grenadines",
    balanceAfterTransaction: "-68800.00",
  },
  {
    id: "TRANS-77",
    date: "2025-06-25 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "9100.00",
    sender: null,
    receiver: "Hettinger - Willms",
    referenceCode: "ZboNIhzJOumdICvd",
    accountNumber: "24192493",
    location: "Falkland Islands (Malvinas)",
    balanceAfterTransaction: "-167000.00",
  },
  {
    id: "TRANS-59",
    date: "2025-06-26 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "4300.00",
    sender: null,
    receiver: "Windler, Wilkinson and Cole",
    referenceCode: "gDuhID3zcbIL70GZ",
    accountNumber: "81524868",
    location: "Chad",
    balanceAfterTransaction: "-226900.00",
  },
  {
    id: "TRANS-69",
    date: "2025-06-26 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "600.00",
    sender: null,
    receiver: "Dr. Patrick Blick",
    referenceCode: "m5AFpRyBZNwWnGuF",
    accountNumber: "34369602",
    location: "Cambodia",
    balanceAfterTransaction: "-161400.00",
  },
  {
    id: "TRANS-1",
    date: "2025-06-27 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "10900.00",
    sender: null,
    receiver: "Satterfield, O'Kon and Lesch",
    referenceCode: "xX8znlQU5PYWZ2Pg",
    accountNumber: "13089652",
    location: "Oman",
    balanceAfterTransaction: "-10400.00",
  },
  {
    id: "TRANS-26",
    date: "2025-06-27 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "8900.00",
    sender: null,
    receiver: "Waelchi - Sauer",
    referenceCode: "yxRGld0jxenlzmnx",
    accountNumber: "38726283",
    location: "Timor-Leste",
    balanceAfterTransaction: "-176000.00",
  },
  {
    id: "TRANS-42",
    date: "2025-06-27 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "15100.00",
    sender: null,
    receiver: "Jeannette Haley",
    referenceCode: "oAVaZ2Maa1Bfuavc",
    accountNumber: "01103591",
    location: "Fiji",
    balanceAfterTransaction: "-226300.00",
  },
  {
    id: "TRANS-54",
    date: "2025-06-27 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "17200.00",
    sender: "Tommy Mills II",
    receiver: null,
    referenceCode: "R7LcDIk4oAVquaqi",
    accountNumber: "94610944",
    location: "Ukraine",
    balanceAfterTransaction: "-223100.00",
  },
  {
    id: "TRANS-15",
    date: "2025-06-28 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "5900.00",
    sender: null,
    receiver: "Flatley LLC",
    referenceCode: "C7qAX97MSqZ8Bvoz",
    accountNumber: "61840047",
    location: "Greenland",
    balanceAfterTransaction: "-95400.00",
  },
  {
    id: "TRANS-70",
    date: "2025-06-28 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "2900.00",
    sender: null,
    receiver: "Ruby Collier",
    referenceCode: "kFeguEqKMqYRKx0L",
    accountNumber: "87391787",
    location: "Guernsey",
    balanceAfterTransaction: "-164300.00",
  },
  {
    id: "TRANS-71",
    date: "2025-06-28 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "3000.00",
    sender: "Cristina Boehm",
    receiver: null,
    referenceCode: "vdnCemLaAZS8hWWA",
    accountNumber: "24167564",
    location: "Uruguay",
    balanceAfterTransaction: "-161300.00",
  },
  {
    id: "TRANS-23",
    date: "2025-06-29 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "10300.00",
    sender: "Daugherty LLC",
    receiver: null,
    referenceCode: "VmkjqFGgYbUdCxJN",
    accountNumber: "83513125",
    location: "Kiribati",
    balanceAfterTransaction: "-173200.00",
  },
  {
    id: "TRANS-53",
    date: "2025-06-29 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "3700.00",
    sender: "Nathaniel Parisian",
    receiver: null,
    referenceCode: "tKCer3xWzzwOzUGM",
    accountNumber: "02038027",
    location: "Antigua and Barbuda",
    balanceAfterTransaction: "-240300.00",
  },
  {
    id: "TRANS-30",
    date: "2025-07-01 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "2300.00",
    sender: "Dr. Donald Gutkowski",
    receiver: null,
    referenceCode: "qTTsO8xFJFcFhVYU",
    accountNumber: "33482389",
    location: "Guyana",
    balanceAfterTransaction: "-180300.00",
  },
  {
    id: "TRANS-41",
    date: "2025-07-01 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "1300.00",
    sender: null,
    receiver: "Mrs. Beverly Weimann",
    referenceCode: "dl3sPiAA1CS1CwEH",
    accountNumber: "04321764",
    location: "Saint Helena",
    balanceAfterTransaction: "-211200.00",
  },
  {
    id: "TRANS-60",
    date: "2025-07-01 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "17500.00",
    sender: "Walter, Langosh and Raynor",
    receiver: null,
    referenceCode: "SML6SoDwjFSvi6MO",
    accountNumber: "76371493",
    location: "Vietnam",
    balanceAfterTransaction: "-209400.00",
  },
  {
    id: "TRANS-18",
    date: "2025-07-03 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "1100.00",
    sender: "Hudson Inc",
    receiver: null,
    referenceCode: "vaNseJRPZVs3jngf",
    accountNumber: "72948188",
    location: "Brunei Darussalam",
    balanceAfterTransaction: "-125200.00",
  },
  {
    id: "TRANS-2",
    date: "2025-07-04 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "17800.00",
    sender: null,
    receiver: "Hegmann, Carroll and Mohr",
    referenceCode: "dXpiOqsy55w7B6V5",
    accountNumber: "31563447",
    location: "Uganda",
    balanceAfterTransaction: "-28200.00",
  },
  {
    id: "TRANS-78",
    date: "2025-07-04 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "3000.00",
    sender: "Swift Group",
    receiver: null,
    referenceCode: "D4MKIv9eQF01iCbT",
    accountNumber: "12115224",
    location: "Iceland",
    balanceAfterTransaction: "-164000.00",
  },
  {
    id: "TRANS-40",
    date: "2025-07-05 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "2400.00",
    sender: "Mr. Clayton Grant",
    receiver: null,
    referenceCode: "TsbSbHWEr6qSj2k4",
    accountNumber: "05807573",
    location: "Cambodia",
    balanceAfterTransaction: "-209900.00",
  },
  {
    id: "TRANS-50",
    date: "2025-07-05 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "8000.00",
    sender: "Osinski, Considine and Olson",
    receiver: null,
    referenceCode: "g6Kiknjs3ngNhXII",
    accountNumber: "23047138",
    location: "El Salvador",
    balanceAfterTransaction: "-233500.00",
  },
  {
    id: "TRANS-35",
    date: "2025-07-06 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "17100.00",
    sender: "Littel, Aufderhar and Herzog",
    receiver: null,
    referenceCode: "oy2NpzY2rb8mKfdY",
    accountNumber: "99428294",
    location: "Jordan",
    balanceAfterTransaction: "-216200.00",
  },
  {
    id: "TRANS-44",
    date: "2025-07-06 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "2300.00",
    sender: "Karla Bashirian",
    receiver: null,
    referenceCode: "Zgjnv5wBzWa7Jkta",
    accountNumber: "36538431",
    location: "Dominican Republic",
    balanceAfterTransaction: "-215700.00",
  },
  {
    id: "TRANS-5",
    date: "2025-07-07 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "13000.00",
    sender: null,
    receiver: "Otis Nader",
    referenceCode: "Wpaa765HN7aY3zMp",
    accountNumber: "90687404",
    location: "Azerbaijan",
    balanceAfterTransaction: "-63600.00",
  },
  {
    id: "TRANS-20",
    date: "2025-07-07 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "16300.00",
    sender: null,
    receiver: "Josefina Towne",
    referenceCode: "u5uA7uaJnYyTTLPS",
    accountNumber: "66440511",
    location: "Mayotte",
    balanceAfterTransaction: "-156100.00",
  },
  {
    id: "TRANS-33",
    date: "2025-07-07 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "10000.00",
    sender: null,
    receiver: "Predovic Inc",
    referenceCode: "odNjVSV0Lrq0IMjY",
    accountNumber: "35814678",
    location: "El Salvador",
    balanceAfterTransaction: "-213900.00",
  },
  {
    id: "TRANS-27",
    date: "2025-07-08 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "3500.00",
    sender: null,
    receiver: "Dora Simonis Jr.",
    referenceCode: "xxOM9adTEwTJI1mu",
    accountNumber: "11769418",
    location: "Falkland Islands (Malvinas)",
    balanceAfterTransaction: "-179500.00",
  },
  {
    id: "TRANS-56",
    date: "2025-07-08 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "800.00",
    sender: null,
    receiver: "Lorene Rau",
    referenceCode: "dvJ0XFeUXOolKkE3",
    accountNumber: "19618459",
    location: "Cocos (Keeling) Islands",
    balanceAfterTransaction: "-220600.00",
  },
  {
    id: "TRANS-65",
    date: "2025-07-08 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "14900.00",
    sender: "Carroll Von MD",
    receiver: null,
    referenceCode: "1kb2AVcnQIvZjSPB",
    accountNumber: "21829503",
    location: "Afghanistan",
    balanceAfterTransaction: "-190900.00",
  },
  {
    id: "TRANS-57",
    date: "2025-07-09 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "15900.00",
    sender: "Dr. Emily Wilkinson",
    receiver: null,
    referenceCode: "Ys04RIKWAC8mDCwM",
    accountNumber: "65521362",
    location: "United States of America",
    balanceAfterTransaction: "-204700.00",
  },
  {
    id: "TRANS-6",
    date: "2025-07-10 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "17700.00",
    sender: null,
    receiver: "Connelly - Stoltenberg",
    referenceCode: "BcIYGfEhazjnXoa7",
    accountNumber: "72955421",
    location: "United Arab Emirates",
    balanceAfterTransaction: "-81300.00",
  },
  {
    id: "TRANS-31",
    date: "2025-07-10 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "9200.00",
    sender: null,
    receiver: "Armstrong - Dibbert",
    referenceCode: "haLbWTt9LEyr8bH0",
    accountNumber: "21564188",
    location: "Canada",
    balanceAfterTransaction: "-189500.00",
  },
  {
    id: "TRANS-80",
    date: "2025-07-10 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "12000.00",
    sender: "Bashirian - Glover",
    receiver: null,
    referenceCode: "jvbHdYbcC2VAOMyq",
    accountNumber: "07625898",
    location: "Turkey",
    balanceAfterTransaction: "-156000.00",
  },
  {
    id: "TRANS-39",
    date: "2025-07-11 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "12500.00",
    sender: null,
    receiver: "Catherine Weissnat",
    referenceCode: "1W0Wx0OFDnSBMa1D",
    accountNumber: "79802731",
    location: "Niue",
    balanceAfterTransaction: "-212300.00",
  },
  {
    id: "TRANS-73",
    date: "2025-07-11 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "18300.00",
    sender: "Boehm Inc",
    receiver: null,
    referenceCode: "dhJTVtsOECrZI5eR",
    accountNumber: "26870493",
    location: "Palau",
    balanceAfterTransaction: "-155700.00",
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

export const groupedTransactions = transactionData
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
