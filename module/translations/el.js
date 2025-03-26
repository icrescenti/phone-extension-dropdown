const el = {
    US: "Ηνωμένες Πολιτείες",
    CA: "Καναδάς",
    RU: "Ρωσία",
    GE_AB: "Αμπχαζία",
    GE_OS: "Νότια Οσετία",
    EG: "Αίγυπτος",
    ZA: "Νότια Αφρική",
    GR: "Ελλάδα",
    NL: "Ολλανδία",
    BE: "Βέλγιο",
    FR: "Γαλλία",
    ES: "Ισπανία",
    HU: "Ουγγαρία",
    IT: "Ιταλία",
    RO: "Ρουμανία",
    CH: "Ελβετία",
    AT: "Αυστρία",
    GB: "Ηνωμένο Βασίλειο",
    DK: "Δανία",
    SE: "Σουηδία",
    NO: "Νορβηγία",
    PL: "Πολωνία",
    DE: "Γερμανία",
    PE: "Περού",
    MX: "Μεξικό",
    CU: "Κούβα",
    AR: "Αργεντινή",
    BR: "Βραζιλία",
    CL: "Χιλή",
    CO: "Κολομβία",
    VE: "Βενεζουέλα",
    MY: "Μαλαισία",
    AU: "Αυστραλία",
    ID: "Ινδονησία",
    PH: "Φιλιππίνες",
    NZ: "Νέα Ζηλανδία",
    SG: "Σιγκαπούρη",
    TH: "Ταϊλάνδη",
    JP: "Ιαπωνία",
    KR: "Νότια Κορέα",
    VN: "Βιετνάμ",
    CN: "Κίνα",
    TR: "Τουρκία",
    TR_NC: "Βόρεια Κύπρος",
    IN: "Ινδία",
    PK: "Πακιστάν",
    AF: "Αφγανιστάν",
    LK: "Σρι Λάνκα",
    MM: "Μιανμάρ",
    IR: "Ιράν",
    MA: "Μαρόκο",
    DZ: "Αλγερία",
    TN: "Τυνησία",
    LY: "Λιβύη",
    GM: "Γκάμπια",
    SN: "Σενεγάλη",
    MR: "Μαυριτανία",
    ML: "Μάλι",
    GN: "Γουινέα",
    CI: "Ακτή Ελεφαντοστού",
    BF: "Μπουρκίνα Φάσο",
    NE: "Νίγηρας",
    TG: "Τόγκο",
    BJ: "Μπενίν",
    MU: "Μαυρίκιος",
    LR: "Λιβερία",
    SL: "Σιέρα Λεόνε",
    GH: "Γκάνα",
    NG: "Νιγηρία",
    TD: "Τσαντ",
    CF: "Κεντροαφρικανική Δημοκρατία",
    CM: "Καμερούν",
    CV: "Πράσινο Ακρωτήριο",
    ST: "Σάο Τομέ και Πρίνσιπε",
    GQ: "Ισημερινή Γουινέα",
    GA: "Γκαμπόν",
    CG: "Κονγκό",
    CD: "Λαϊκή Δημοκρατία του Κονγκό",
    AO: "Αγκόλα",
    GW: "Γουινέα-Μπισσάου",
    IO: "Βρετανικό Έδαφος Ινδικού Ωκεανού",
    SC: "Σεϋχέλλες",
    SD: "Σουδάν",
    RW: "Ρουάντα",
    ET: "Αιθιοπία",
    SO: "Σομαλία",
    DJ: "Τζιμπουτί",
    KE: "Κένυα",
    TZ: "Τανζανία",
    UG: "Ουγκάντα",
    BI: "Μπουρούντι",
    MZ: "Μοζαμβίκη",
    ZM: "Ζάμπια",
    MG: "Μαδαγασκάρη",
    RE: "Ρεουνιόν",
    ZW: "Ζιμπαμπουέ",
    NA: "Ναμίμπια",
    MW: "Μαλάουι",
    LS: "Λεσότο",
    BW: "Μποτσουάνα",
    SZ: "Εσουατίνι",
    KM: "Κομόρες",
    SH: "Νήσος Αγίας Ελένης",
    ER: "Ερυθραία",
    AW: "Αρούμπα",
    FO: "Νήσοι Φερόες",
    GL: "Γροιλανδία",
    GI: "Γιβραλτάρ",
    PT: "Πορτογαλία",
    LU: "Λουξεμβούργο",
    IE: "Ιρλανδία",
    IS: "Ισλανδία",
    AL: "Αλβανία",
    MT: "Μάλτα",
    CY: "Κύπρος",
    FI: "Φινλανδία",
    BG: "Βουλγαρία",
    LT: "Λιθουανία",
    LV: "Λετονία",
    EE: "Εσθονία",
    MD: "Μολδαβία",
    AM: "Αρμενία",
    BY: "Λευκορωσία",
    AD: "Ανδόρρα",
    MC: "Μονακό",
    SM: "Άγιος Μαρίνος",
    VA: "Βατικανό",
    UA: "Ουκρανία",
    RS: "Σερβία",
    ME: "Μαυροβούνιο",
    XK: "Κοσσυφοπέδιο",
    HR: "Κροατία",
    SI: "Σλοβενία",
    BA: "Βοσνία και Ερζεγοβίνη",
    MK: "Βόρεια Μακεδονία",
    CZ: "Τσεχία",
    SK: "Σλοβακία",
    LI: "Λίχτενσταϊν",
    FK: "Νήσοι Φώκλαντ",
    BZ: "Μπελίζ",
    GT: "Γουατεμάλα",
    SV: "Ελ Σαλβαδόρ",
    HN: "Ονδούρα",
    NI: "Νικαράγουα",
    CR: "Κόστα Ρίκα",
    PA: "Παναμάς",
    PM: "Σεν Πιερ και Μικελόν",
    HT: "Αϊτή",
    GP: "Γουαδελούπη",
    BO: "Βολιβία",
    GY: "Γουιάνα",
    EC: "Εκουαδόρ",
    GF: "Γαλλική Γουιάνα",
    PY: "Παραγουάη",
    MQ: "Μαρτινίκα",
    SR: "Σουρινάμ",
    UY: "Ουρουγουάη",
    BQ: "Μποναίρ, Σιντ Ευστάτιους και Σάμπα",
    TL: "Ανατολικό Τιμόρ",
    BN: "Μπρουνέι",
    NR: "Ναουρού",
    PG: "Παπούα Νέα Γουινέα",
    TO: "Τόνγκα",
    SB: "Νήσοι Σολομώντα",
    VU: "Βανουάτου",
    FJ: "Φίτζι",
    PW: "Παλάου",
    WF: "Ουαλίς και Φουτουνά",
    CK: "Νήσοι Κουκ",
    NU: "Νιούε",
    WS: "Σαμόα",
    KI: "Κιριμπάτι",
    NC: "Νέα Καληδονία",
    TV: "Τουβαλού",
    PF: "Γαλλική Πολυνησία",
    TK: "Τοκελάου",
    FM: "Μικρονησία",
    MH: "Νήσοι Μάρσαλ",
    IntlFreephone: "Διεθνής δωρεάν τηλέφωνο",
    SharedCost: "Κοινό κόστος",
    KP: "Βόρεια Κορέα",
    HK: "Χονγκ Κονγκ",
    MO: "Μακάο",
    KH: "Καμπότζη",
    LA: "Λάος",
    BD: "Μπανγκλαντές",
    GMSS: "Παγκόσμιο σύστημα δορυφορικής κινητής τηλεφωνίας",
    TW: "Ταϊβάν",
    QA: "Κατάρ",
    MV: "Μαλδίβες",
    LB: "Λίβανος",
    JO: "Ιορδανία",
    SY: "Συρία",
    IQ: "Ιράκ",
    KW: "Κουβέιτ",
    SA: "Σαουδική Αραβία",
    YE: "Υεμένη",
    OM: "Ομάν",
    PS: "Παλαιστίνη",
    AE: "Ηνωμένα Αραβικά Εμιράτα",
    IL: "Ισραήλ",
    BH: "Μπαχρέιν",
    BT: "Μπουτάν",
    MN: "Μογγολία",
    NP: "Νεπάλ",
    TJ: "Τατζικιστάν",
    TM: "Τουρκμενιστάν",
    AZ: "Αζερμπαϊτζάν",
    GE: "Γεωργία",
    KG: "Κιργιστάν",
    UZ: "Ουζμπεκιστάν",
    BS: "Μπαχάμες",
    BB: "Μπαρμπάντος",
    AI: "Ανγκουίλα",
    AG: "Αντίγκουα και Μπαρμπούντα",
    VG: "Βρετανικές Παρθένοι Νήσοι",
    VI: "Αμερικανικές Παρθένοι Νήσοι",
    KY: "Κέιμαν Νήσοι",
    BM: "Βερμούδες",
    GD: "Γρενάδα",
    TC: "Τερκς και Κέικος",
    MS: "Μοντσερράτ",
    MP: "Βόρειες Μαριάνες Νήσοι",
    GU: "Γκουάμ",
    AS: "Αμερικανική Σαμόα",
    SX: "Άγιος Μαρτίνος",
    LC: "Αγία Λουκία",
    DM: "Δομινίκα",
    VC: "Άγιος Βικέντιος και Γρεναδίνες",
    PR: "Πουέρτο Ρίκο",
    DO: "Δομινικανή Δημοκρατία",
    TT: "Τρινιντάντ και Τομπάγκο",
    KN: "Άγιος Χριστόφορος και Νέβις",
    CW: "Κουρασάο",
    AQ: "Ανταρκτική",
    NF: "Νήσος Νόρφολκ",
    HM: "Νήσοι Χερντ και Μακντόναλντ",
    CC: "Νήσοι Κόκος",
    CX: "Νήσος των Χριστουγέννων"
};

export default el; 