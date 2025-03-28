const sv = {
    US: "USA",
    CA: "Kanada",
    RU: "Ryssland",
    GE_AB: "Abchazien",
    GE_OS: "Sydossetien",
    EG: "Egypten",
    ZA: "Sydafrika",
    GR: "Grekland",
    NL: "Nederländerna",
    BE: "Belgien",
    FR: "Frankrike",
    ES: "Spanien",
    HU: "Ungern",
    IT: "Italien",
    RO: "Rumänien",
    CH: "Schweiz",
    AT: "Österrike",
    GB: "Storbritannien",
    DK: "Danmark",
    SE: "Sverige",
    NO: "Norge",
    PL: "Polen",
    DE: "Tyskland",
    PE: "Peru",
    MX: "Mexiko",
    CU: "Kuba",
    AR: "Argentina",
    BR: "Brasilien",
    CL: "Chile",
    CO: "Colombia",
    VE: "Venezuela",
    MY: "Malaysia",
    AU: "Australien",
    ID: "Indonesien",
    PH: "Filippinerna",
    NZ: "Nya Zeeland",
    SG: "Singapore",
    TH: "Thailand",
    JP: "Japan",
    KR: "Sydkorea",
    VN: "Vietnam",
    CN: "Kina",
    TR: "Turkiet",
    TR_NC: "Nordcypern",
    IN: "Indien",
    PK: "Pakistan",
    AF: "Afghanistan",
    LK: "Sri Lanka",
    MM: "Myanmar",
    IR: "Iran",
    MA: "Marocko",
    DZ: "Algeriet",
    TN: "Tunisien",
    LY: "Libyen",
    GM: "Gambia",
    SN: "Senegal",
    MR: "Mauretanien",
    ML: "Mali",
    GN: "Guinea",
    CI: "Elfenbenskusten",
    BF: "Burkina Faso",
    NE: "Niger",
    TG: "Togo",
    BJ: "Benin",
    MU: "Mauritius",
    LR: "Liberia",
    SL: "Sierra Leone",
    GH: "Ghana",
    NG: "Nigeria",
    TD: "Tchad",
    CF: "Centralafrikanska republiken",
    CM: "Kamerun",
    CV: "Kap Verde",
    ST: "São Tomé och Príncipe",
    GQ: "Ekvatorialguinea",
    GA: "Gabon",
    CG: "Kongo",
    CD: "Demokratiska republiken Kongo",
    AO: "Angola",
    GW: "Guinea-Bissau",
    IO: "Brittiska territoriet i Indiska oceanen",
    SC: "Seychellerna",
    SD: "Sudan",
    RW: "Rwanda",
    ET: "Etiopien",
    SO: "Somalia",
    DJ: "Djibouti",
    KE: "Kenya",
    TZ: "Tanzania",
    UG: "Uganda",
    BI: "Burundi",
    MZ: "Moçambique",
    ZM: "Zambia",
    MG: "Madagaskar",
    RE: "Réunion",
    ZW: "Zimbabwe",
    NA: "Namibia",
    MW: "Malawi",
    LS: "Lesotho",
    BW: "Botswana",
    SZ: "Eswatini",
    KM: "Komorerna",
    SH: "Sankta Helena",
    ER: "Eritrea",
    AW: "Aruba",
    FO: "Färöarna",
    GL: "Grönland",
    GI: "Gibraltar",
    PT: "Portugal",
    LU: "Luxemburg",
    IE: "Irland",
    IS: "Island",
    AL: "Albanien",
    MT: "Malta",
    CY: "Cypern",
    FI: "Finland",
    BG: "Bulgarien",
    LT: "Litauen",
    LV: "Lettland",
    EE: "Estland",
    MD: "Moldavien",
    AM: "Armenien",
    BY: "Vitryssland",
    AD: "Andorra",
    MC: "Monaco",
    SM: "San Marino",
    VA: "Vatikanstaten",
    UA: "Ukraina",
    RS: "Serbien",
    ME: "Montenegro",
    XK: "Kosovo",
    HR: "Kroatien",
    SI: "Slovenien",
    BA: "Bosnien och Hercegovina",
    MK: "Nordmakedonien",
    CZ: "Tjeckien",
    SK: "Slovakien",
    LI: "Liechtenstein",
    FK: "Falklandsöarna",
    BZ: "Belize",
    GT: "Guatemala",
    SV: "El Salvador",
    HN: "Honduras",
    NI: "Nicaragua",
    CR: "Costa Rica",
    PA: "Panama",
    PM: "Saint-Pierre och Miquelon",
    HT: "Haiti",
    GP: "Guadeloupe",
    BO: "Bolivia",
    GY: "Guyana",
    EC: "Ecuador",
    GF: "Franska Guyana",
    PY: "Paraguay",
    MQ: "Martinique",
    SR: "Surinam",
    UY: "Uruguay",
    BQ: "Bonaire, Sint Eustatius och Saba",
    TL: "Östtimor",
    BN: "Brunei",
    NR: "Nauru",
    PG: "Papua Nya Guinea",
    TO: "Tonga",
    SB: "Salomonöarna",
    VU: "Vanuatu",
    FJ: "Fiji",
    PW: "Palau",
    WF: "Wallis- och Futunaöarna",
    CK: "Cooköarna",
    NU: "Niue",
    WS: "Samoa",
    KI: "Kiribati",
    NC: "Nya Kaledonien",
    TV: "Tuvalu",
    PF: "Franska Polynesien",
    TK: "Tokelau",
    FM: "Mikronesien",
    MH: "Marshallöarna",
    IntlFreephone: "Internationellt gratisnummer",
    SharedCost: "Delad kostnad",
    KP: "Nordkorea",
    HK: "Hongkong",
    MO: "Macao",
    KH: "Kambodja",
    LA: "Laos",
    BD: "Bangladesh",
    GMSS: "Globalt mobilt satellitsystem",
    TW: "Taiwan",
    QA: "Qatar",
    MV: "Maldiverna",
    LB: "Libanon",
    JO: "Jordanien",
    SY: "Syrien",
    IQ: "Irak",
    KW: "Kuwait",
    SA: "Saudiarabien",
    YE: "Jemen",
    OM: "Oman",
    PS: "Palestinska territoriet",
    AE: "Förenade arabemiraten",
    IL: "Israel",
    BH: "Bahrain",
    BT: "Bhutan",
    MN: "Mongoliet",
    NP: "Nepal",
    TJ: "Tadzjikistan",
    TM: "Turkmenistan",
    AZ: "Azerbajdzjan",
    GE: "Georgien",
    KG: "Kirgizistan",
    UZ: "Uzbekistan",
    BS: "Bahamas",
    BB: "Barbados",
    AI: "Anguilla",
    AG: "Antigua och Barbuda",
    VG: "Brittiska Jungfruöarna",
    VI: "Amerikanska Jungfruöarna",
    KY: "Caymanöarna",
    BM: "Bermuda",
    GD: "Grenada",
    TC: "Turks- och Caicosöarna",
    MS: "Montserrat",
    MP: "Nordmarianerna",
    GU: "Guam",
    AS: "Amerikanska Samoa",
    SX: "Sint Maarten",
    LC: "Saint Lucia",
    DM: "Dominica",
    VC: "Saint Vincent och Grenadinerna",
    PR: "Puerto Rico",
    DO: "Dominikanska republiken",
    TT: "Trinidad och Tobago",
    KN: "Saint Kitts och Nevis",
    CW: "Curaçao",
    AQ: "Antarktis",
    NF: "Norfolkön",
    HM: "Heard- och McDonaldöarna",
    CC: "Kokosöarna",
    CX: "Julön"
};

export default sv; 