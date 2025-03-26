const ar = {
    US: "الولايات المتحدة",
    CA: "كندا",
    RU: "روسيا",
    GE_AB: "أبخازيا",
    GE_OS: "أوسيتيا الجنوبية",
    EG: "مصر",
    ZA: "جنوب أفريقيا",
    GR: "اليونان",
    NL: "هولندا",
    BE: "بلجيكا",
    FR: "فرنسا",
    ES: "إسبانيا",
    HU: "المجر",
    IT: "إيطاليا",
    RO: "رومانيا",
    CH: "سويسرا",
    AT: "النمسا",
    GB: "المملكة المتحدة",
    DK: "الدنمارك",
    SE: "السويد",
    NO: "النرويج",
    PL: "بولندا",
    DE: "ألمانيا",
    PE: "بيرو",
    MX: "المكسيك",
    CU: "كوبا",
    AR: "الأرجنتين",
    BR: "البرازيل",
    CL: "تشيلي",
    CO: "كولومبيا",
    VE: "فنزويلا",
    MY: "ماليزيا",
    AU: "أستراليا",
    ID: "إندونيسيا",
    PH: "الفلبين",
    NZ: "نيوزيلندا",
    SG: "سنغافورة",
    TH: "تايلاند",
    JP: "اليابان",
    KR: "كوريا الجنوبية",
    VN: "فيتنام",
    CN: "الصين",
    TR: "تركيا",
    TR_NC: "قبرص الشمالية",
    IN: "الهند",
    PK: "باكستان",
    AF: "أفغانستان",
    LK: "سريلانكا",
    MM: "ميانمار",
    IR: "إيران",
    MA: "المغرب",
    DZ: "الجزائر",
    TN: "تونس",
    LY: "ليبيا",
    GM: "غامبيا",
    SN: "السنغال",
    MR: "موريتانيا",
    ML: "مالي",
    GN: "غينيا",
    CI: "ساحل العاج",
    BF: "بوركينا فاسو",
    NE: "النيجر",
    TG: "توغو",
    BJ: "بنين",
    MU: "موريشيوس",
    LR: "ليبيريا",
    SL: "سيراليون",
    GH: "غانا",
    NG: "نيجيريا",
    TD: "تشاد",
    CF: "جمهورية أفريقيا الوسطى",
    CM: "الكاميرون",
    CV: "الرأس الأخضر",
    ST: "ساو تومي وبرينسيبي",
    GQ: "غينيا الاستوائية",
    GA: "الغابون",
    CG: "الكونغو",
    CD: "جمهورية الكونغو الديمقراطية",
    AO: "أنغولا",
    GW: "غينيا بيساو",
    IO: "إقليم المحيط الهندي البريطاني",
    SC: "سيشل",
    SD: "السودان",
    RW: "رواندا",
    ET: "إثيوبيا",
    SO: "الصومال",
    DJ: "جيبوتي",
    KE: "كينيا",
    TZ: "تنزانيا",
    UG: "أوغندا",
    BI: "بوروندي",
    MZ: "موزمبيق",
    ZM: "زامبيا",
    MG: "مدغشقر",
    RE: "ريونيون",
    ZW: "زيمبابوي",
    NA: "ناميبيا",
    MW: "ملاوي",
    LS: "ليسوتو",
    BW: "بوتسوانا",
    SZ: "إسواتيني",
    KM: "جزر القمر",
    SH: "سانت هيلينا",
    ER: "إريتريا",
    AW: "أروبا",
    FO: "جزر فارو",
    GL: "غرينلاند",
    GI: "جبل طارق",
    PT: "البرتغال",
    LU: "لوكسمبورغ",
    IE: "أيرلندا",
    IS: "آيسلندا",
    AL: "ألبانيا",
    MT: "مالطا",
    CY: "قبرص",
    FI: "فنلندا",
    BG: "بلغاريا",
    LT: "ليتوانيا",
    LV: "لاتفيا",
    EE: "إستونيا",
    MD: "مولدوفا",
    AM: "أرمينيا",
    BY: "روسيا البيضاء",
    AD: "أندورا",
    MC: "موناكو",
    SM: "سان مارينو",
    VA: "الفاتيكان",
    UA: "أوكرانيا",
    RS: "صربيا",
    ME: "الجبل الأسود",
    XK: "كوسوفو",
    HR: "كرواتيا",
    SI: "سلوفينيا",
    BA: "البوسنة والهرسك",
    MK: "مقدونيا الشمالية",
    CZ: "جمهورية التشيك",
    SK: "سلوفاكيا",
    LI: "ليختنشتاين",
    FK: "جزر فوكلاند",
    BZ: "بليز",
    GT: "غواتيمالا",
    SV: "السلفادور",
    HN: "هندوراس",
    NI: "نيكاراغوا",
    CR: "كوستاريكا",
    PA: "بنما",
    PM: "سان بيير وميكلون",
    HT: "هايتي",
    GP: "غوادلوب",
    BO: "بوليفيا",
    GY: "غيانا",
    EC: "الإكوادور",
    GF: "غويانا الفرنسية",
    PY: "باراغواي",
    MQ: "مارتينيك",
    SR: "سورينام",
    UY: "الأوروغواي",
    BQ: "بونير وسينت أوستاتيوس وسابا",
    TL: "تيمور الشرقية",
    BN: "بروناي",
    NR: "ناورو",
    PG: "بابوا غينيا الجديدة",
    TO: "تونغا",
    SB: "جزر سليمان",
    VU: "فانواتو",
    FJ: "فيجي",
    PW: "بالاو",
    WF: "واليس وفوتونا",
    CK: "جزر كوك",
    NU: "نيوي",
    WS: "ساموا",
    KI: "كيريباتي",
    NC: "كاليدونيا الجديدة",
    TV: "توفالو",
    PF: "بولينيزيا الفرنسية",
    TK: "توكيلاو",
    FM: "ميكرونيزيا",
    MH: "جزر مارشال",
    IntlFreephone: "رقم مجاني دولي",
    SharedCost: "تكلفة مشتركة",
    KP: "كوريا الشمالية",
    HK: "هونغ كونغ",
    MO: "ماكاو",
    KH: "كمبوديا",
    LA: "لاوس",
    BD: "بنغلاديش",
    GMSS: "نظام الأقمار الصناعية المتنقلة العالمي",
    TW: "تايوان",
    QA: "قطر",
    MV: "جزر المالديف",
    LB: "لبنان",
    JO: "الأردن",
    SY: "سوريا",
    IQ: "العراق",
    KW: "الكويت",
    SA: "المملكة العربية السعودية",
    YE: "اليمن",
    OM: "عمان",
    PS: "الأراضي الفلسطينية",
    AE: "الإمارات العربية المتحدة",
    IL: "إسرائيل",
    BH: "البحرين",
    BT: "بوتان",
    MN: "منغوليا",
    NP: "نيبال",
    TJ: "طاجيكستان",
    TM: "تركمانستان",
    AZ: "أذربيجان",
    GE: "جورجيا",
    KG: "قيرغيزستان",
    UZ: "أوزبكستان",
    BS: "جزر البهاما",
    BB: "بربادوس",
    AI: "أنغويلا",
    AG: "أنتيغوا وبربودا",
    VG: "جزر العذراء البريطانية",
    VI: "جزر العذراء الأمريكية",
    KY: "جزر كايمان",
    BM: "برمودا",
    GD: "غرينادا",
    TC: "جزر تركس وكايكوس",
    MS: "مونتسرات",
    MP: "جزر ماريانا الشمالية",
    GU: "غوام",
    AS: "ساموا الأمريكية",
    SX: "سينت مارتن",
    LC: "سانت لوسيا",
    DM: "دومينيكا",
    VC: "سانت فينسنت والغرينادين",
    PR: "بورتوريكو",
    DO: "جمهورية الدومينيكان",
    TT: "ترينيداد وتوباغو",
    KN: "سانت كيتس ونيفيس",
    CW: "كوراساو",
    AQ: "القارة القطبية الجنوبية",
    NF: "جزيرة نورفولك",
    HM: "جزيرة هيرد وجزر ماكدونالد",
    CC: "جزر كوكوس",
    CX: "جزيرة عيد الميلاد"
};

export default ar; 