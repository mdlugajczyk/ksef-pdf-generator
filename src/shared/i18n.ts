export type Language = 'pl' | 'en';

let currentLanguage: Language = 'pl';

const TRANSLATIONS_EN: Record<string, string> = {
  Sprzedawca: 'Seller',
  Nabywca: 'Buyer',
  'Dane identyfikacyjne': 'Identification data',
  'Dane kontaktowe': 'Contact data',
  Szczegóły: 'Details',
  Pozycje: 'Items',
  'Dodatkowe informacje': 'Additional information',
  'Dodatkowy opis': 'Additional description',
  Rozliczenie: 'Settlement',
  Płatność: 'Payment',
  Skonto: 'Discount',
  Wysyłka: 'Shipment',
  Przewoźnik: 'Carrier',
  'Adres przewoźnika': 'Carrier address',
  'Adres miejsca wysyłki': 'Shipping address',
  'Adres miejsca docelowego, do którego został zlecony transport':
    'Destination address for the ordered transport',
  'Adres pośredni wysyłki': 'Intermediate shipping address',
  'Treść korygująca': 'Correcting content',
  'Treść korygowana': 'Corrected content',
  'Podmiot inny': 'Other entity',
  'Nazwa towaru lub usługi': 'Name of goods or service',
  'Cena jedn. netto': 'Net unit price',
  'Cena jedn. brutto': 'Gross unit price',
  Ilość: 'Quantity',
  Miara: 'Unit',
  Rabat: 'Discount',
  'Stawka podatku': 'Tax rate',
  'Stawka podatku OSS': 'OSS tax rate',
  'Wartość sprzedaży netto': 'Net sales value',
  'Wartość sprzedaży brutto': 'Gross sales value',
  'Wartość z ZZP': 'Value from simplified farming scheme',
  'Wartość z SZY': 'Value from simplified scheme',
  'Wartość zamówienia lub umowy z uwzględnieniem kwoty podatku':
    'Order or contract value including tax',
  'Kwota podatku': 'Tax amount',
  'Kwota podatku akcyzowego': 'Excise tax amount',
  'Kwota płatności': 'Payment amount',
  'Termin płatności': 'Payment due date',
  'Opis płatności': 'Payment description',
  'Data zapłaty częściowej': 'Partial payment date',
  'Kwota zapłaty częściowej': 'Partial payment amount',
  'Forma płatności': 'Payment method',
  'Informacja o płatności': 'Payment info',
  'Informacja o płatności: ': 'Payment info: ',
  'Zapłacono': 'Paid',
  'Zapłata częściowa': 'Partial payment',
  'Brak zapłaty': 'Unpaid',
  'Płatność inna': 'Other payment',
  'Płatność inna: ': 'Other payment: ',
  'Przelew': 'Bank transfer',
  Inna: 'Other',
  'Opis płatności innej': 'Other payment description',
  'Opis płatności innej: ': 'Other payment description: ',
  'Rodzaj informacji': 'Information type',
  'Treść informacji': 'Information content',
  'Numer dokumentu': 'Document number',
  'Data dokumentu': 'Document date',
  'Lp.': 'No.',
  'Numer wiersza': 'Line number',
  'Numer identyfikujący fakturę w KSeF': 'KSeF invoice identifier',
  'Numer faktury': 'Invoice number',
  'Numer KSEF': 'KSeF number',
  'Faktura podstawowa': 'Basic invoice',
  'Faktura zaliczkowa': 'Advance invoice',
  'Faktura rozliczeniowa': 'Settlement invoice',
  'Faktura korygująca rozliczeniową': 'Corrective settlement invoice',
  'Faktura korygująca zaliczkową': 'Corrective advance invoice',
  'Faktura korygująca zbiorcza (rabat)': 'Collective corrective invoice (discount)',
  'Faktura korygująca': 'Corrective invoice',
  'Faktura uproszczona': 'Simplified invoice',
  'NIP Sprzedawcy': 'Seller VAT ID',
  'Data wystawienia faktury': 'Invoice issue date',
  'Data przesłania do KSeF': 'Date sent to KSeF',
  'Data nadania numeru KSeF': 'Date KSeF number assigned',
  'Wartość funkcji skrótu złożonego dokumentu': 'Composite document hash value',
  'Numer kontrahenta': 'Customer number',
  'Numer klienta': 'Customer number',
  'Identyfikator nabywcy': 'Buyer identifier',
  'Identyfikator podatkowy inny': 'Other tax identifier',
  'Identyfikator wewnętrzny': 'Internal identifier',
  'Brak identyfikatora': 'No identifier',
  Adres: 'Address',
  'Adres do korespondencji': 'Correspondence address',
  'Numer EORI': 'EORI number',
  'Prefiks VAT': 'VAT prefix',
  'Status podatnika': 'Taxpayer status',
  'NIP': 'VAT ID',
  'Nazwa': 'Name',
  Kraj: 'Country',
  Ulica: 'Street',
  'Numer domu': 'House number',
  'Numer lokalu': 'Apartment number',
  'Kod pocztowy': 'Postal code',
  Miejscowość: 'City',
  Polska: 'Poland',
  'Wielka Brytania': 'United Kingdom',
  GLN: 'GLN',
  Województwo: 'Province',
  Powiat: 'County',
  Gmina: 'Municipality',
  Poczta: 'Post office',
  'Warunki skonta': 'Discount terms',
  'Wysokość skonta': 'Discount amount',
  'Data otrzymania zapłaty: ': 'Payment received date: ',
  'Kurs waluty wspólny dla wszystkich wierszy faktury': 'Exchange rate common to all invoice rows',
  'Data umowy': 'Contract date',
  'Numer umowy': 'Contract number',
  'Data zamówienia': 'Order date',
  'Numer zamówienia': 'Order number',
  'Data dostawy / wykonania': 'Delivery / service date',
  'Kurs waluty': 'Exchange rate',
  'Kurs waluty OSS': 'OSS exchange rate',
  'Kod waluty': 'Currency code',
  'Miejsce wystawienia': 'Place of issue',
  'Data wystawienia': 'Issue date',
  'Data dokonania nabycia': 'Acquisition date',
  'Data otrzymania płatności': 'Payment received date',
  'Miejsce wystawienia: ': 'Place of issue: ',
  'Data wystawienia: ': 'Issue date: ',
  'Data dokonania nabycia: ': 'Acquisition date: ',
  'Data otrzymania płatności: ': 'Payment received date: ',
  'Kurs waluty: ': 'Exchange rate: ',
  'Rola': 'Role',
  'Rola inna': 'Other role',
  'Opis roli': 'Role description',
  'Udział': 'Share',
  'Data dokonania lub zakończenia dostawy towarów lub wykonania usługi':
    'Date of delivery or completion of the supply of goods or provision of the service',
  'Data dokonania lub zakończenia dostawy towarów lub wykonania usługi: ':
    'Date of delivery or completion of the supply of goods or provision of the service: ',
  'Data dokonania lub zakończenia dostawy towarów lub wykonania usługi: od ':
    'Date of delivery or completion of the supply of goods or provision of the service: from ',
  'Data dokonania lub zakończenia dostawy towarów lub wykonania usługi: do ':
    'Date of delivery or completion of the supply of goods or provision of the service: to ',
  'Procedura One Stop Shop': 'One Stop Shop procedure',
  'Opis ładunku': 'Cargo description',
  'Opis innego ładunku': 'Other cargo description',
  'Opis innego rodzaju transportu': 'Other transport description',
  'Data i godzina rozpoczęcia transportu': 'Transport start date and time',
  'Data i godzina zakończenia transportu': 'Transport end date and time',
  'Ładunek inny': 'Other cargo',
  'Transport inny': 'Other transport',
  'Dokumenty Zapłaty': 'Payment documents',
  'Kwota netto': 'Net amount',
  'Kwota brutto': 'Gross amount',
  'Kwota podatku PLN': 'Tax amount PLN',
  'Numery wcześniejszych faktur zaliczkowych': 'Numbers of earlier advance invoices',
  'Wartość zamówienia lub umowy z uwzględnieniem kwoty podatku: ':
    'Order or contract value including tax: ',
  'Kwota należności ogółem': 'Total amount due',
  'Podsumowanie stawek podatku': 'Tax rate summary',
  'Kwota pozostała do zapłaty': 'Amount remaining to be paid',
  'Otrzymana kwota zapłaty (zaliczki)': 'Received advance payment amount',
  'Kwota zapłaty (zaliczki) dokumentowana fakturą': 'Advance payment documented by invoice',
  'Korekta kwoty zapłaty (zaliczki) dokumentowana fakturą':
    'Correction of advance payment documented by invoice',
  'Faktura wystawiona w walucie': 'Invoice issued in currency',
  marża: 'margin',
  'zwolnione z opodatkowania': 'exempt from taxation',
  'zwolnione od podatku': 'tax exempt',
  'odwrotne obciążenie': 'reverse charge',
  'niepodlegające opodatkowaniu-transakcje dostawy towarów oraz świadczenia usług poza terytorium kraju':
    'non-taxable supply of goods and services outside the territory of the country',
  'Korekta skutkująca w dacie ujęcia faktury pierwotnej':
    'Correction effective on the date the original invoice is recorded',
  'Korekta skutkująca w dacie wystawienia faktury korygującej':
    'Correction effective on the date the corrective invoice is issued',
  'Korekta skutkująca w dacie innej, w tym gdy dla różnych pozycji faktury korygującej daty te są różne':
    'Correction effective on another date, including when dates differ for different corrective invoice lines',
  'Faktor - w przypadku gdy na fakturze występują dane faktora':
    'Factor - when the invoice includes factor data',
  'Odbiorca - w przypadku gdy na fakturze występują dane jednostek wewnętrznych, oddziałów, wyodrębnionych w ramach nabywcy, które same nie stanowią nabywcy w rozumieniu ustawy':
    'Recipient - when the invoice includes internal units or branches separated within the buyer that do not themselves constitute the buyer under the law',
  'Podmiot pierwotny - w przypadku gdy na fakturze występują dane podmiotu będącego w stosunku do podatnika podmiotem przejętym lub przekształconym, który dokonywał dostawy lub świadczył usługę. Z wyłączeniem przypadków, o których mowa w art. 106j ust.2 pkt 3 ustawy, gdy dane te wykazywane są w części Podmiot1K':
    'Original entity - when the invoice includes data of an entity that, relative to the taxpayer, was acquired or transformed and that supplied goods or provided services. Excluding cases referred to in Article 106j(2)(3), where the data are shown in section Podmiot1K',
  'Dodatkowy nabywca - w przypadku gdy na fakturze występują dane kolejnych (innych niż wymieniony w części Podmiot2) nabywców':
    'Additional buyer - when the invoice includes data of additional buyers other than those listed in section Podmiot2',
  'Wystawca faktury - w przypadku gdy na fakturze występują dane podmiotu wystawiającego fakturę w imieniu podatnika. Nie dotyczy przypadku, gdy wystawcą faktury jest nabywca':
    'Invoice issuer - when the invoice includes data of the entity issuing the invoice on behalf of the taxpayer. Does not apply when the buyer is the issuer',
  'Dokonujący płatności - w przypadku gdy na fakturze występują dane podmiotu regulującego zobowiązanie w miejsce nabywcy':
    'Payer - when the invoice includes data of the entity settling the liability instead of the buyer',
  'Jednostka samorządu terytorialnego - wystawca': 'Local government unit - issuer',
  'Jednostka samorządu terytorialnego - odbiorca': 'Local government unit - recipient',
  'Członek grupy VAT - wystawca': 'VAT group member - issuer',
  'Członek grupy VAT - odbiorca': 'VAT group member - recipient',
  'Organ egzekucyjny - w przypadku, o którym mowa w art. 106c pkt 1 ustawy':
    'Enforcement authority - in the case referred to in Article 106c(1) of the Act',
  'Komornik sądowy - w przypadku, o którym mowa w art. 106c pkt 2 ustawy':
    'Court bailiff - in the case referred to in Article 106c(2) of the Act',
  'Przedstawiciel podatkowy - w przypadku, gdy na fakturze występują dane przedstawiciela podatkowego, o którym mowa w przepisach art. 18a - 18d ustawy':
    'Tax representative - when the invoice includes data of the tax representative referred to in Articles 18a-18d of the Act',
  'Znacznik dla towaru lub usługi z zał. nr 15 do ustawy':
    'Indicator for goods or services from Annex 15 to the Act',
  'Procedura': 'Procedure',
  'Oznaczenia dotyczące procedur': 'Procedure designations',
  Adnotacje: 'Annotations',
  'Numer partii towaru': 'Batch number',
  'Data zapisania pliku': 'File save date',
  'Stawka 0% stosowana w ramach sprzedaży krajowej': '0% rate applied to domestic sales',
  'Stawka 0% - wewnątrzwspólnotowa dostawa towarów': '0% rate - intra-Community supply of goods',
  'Stawka 0% - eksport towarów': '0% rate - export of goods',
  'Dostawa towarów oraz świadczenie usług opodatkowane poza terytorium kraju':
    'Supply of goods and services taxed outside the territory of the country',
  'Świadczenie usług z art. 100 ust. 1 pkt 4 ustawy': 'Service under Article 100(1)(4) of the Act',
  'Towar/usługa wymienione w załączniku 15': 'Goods/service listed in Annex 15',
  'Pozostała sprzedaż krajowa': 'Other domestic sales',
  'Rejestry': 'Registers',
  'Stopka faktury': 'Invoice footer',
  'Pozostałe informacje': 'Additional information',
  'Wytworzona w: ': 'Generated in: ',
  'Sprawdź, czy Twoja faktura znajduje się w KSeF!': 'Check whether your invoice is in KSeF!',
  'Zweryfikuj dostawcę faktury': 'Verify the invoice supplier',
  'Nie możesz zeskanować kodu z obrazka? Kliknij w link weryfikacyjny i przejdź do weryfikacji faktury!':
    'Cannot scan the code from the image? Click the verification link and open the invoice verification page!',
  'Nie możesz zeskanować kodu z obrazka? Kliknij w link weryfikacyjny i przejdź do weryfikacji wystawcy faktury!':
    'Cannot scan the code from the image? Click the verification link and open the invoice issuer verification page!',
  CERTYFIKAT: 'CERTIFICATE',
  'Numer WZ': 'Goods issue note number',
  'Numery dokumentów magazynowych WZ': 'Warehouse issue note document numbers',
  'Faktura dotyczy jednostki podrzędnej JST: ': 'This invoice concerns a subordinate local government unit: ',
  'Faktura dotyczy członka grupy GV: ': 'This invoice concerns a VAT group member: ',
  'Data wystawienia, z zastrzeżeniem art. 106na ust. 1 ustawy: ':
    'Issue date, subject to Article 106na(1) of the Act: ',
  'Podsumowanie stawek podatku VAT': 'VAT rate summary',
  'Mechanizm podzielonej płatności': 'Split payment mechanism',
  'Metoda kasowa': 'Cash accounting',
  'Procedura trójstronna uproszczona': 'Simplified triangulation procedure',
  Samofakturowanie: 'Self-billing',
  'towary używane': 'used goods',
  'dzieła sztuki': 'works of art',
  'biura podróży': 'travel agencies',
  'przedmioty kolekcjonerskie i antyki': 'collectibles and antiques',
  'Istnieje obowiązek wystawienia dokumentu VAT-22': 'A VAT-22 document must be issued',
  'Nie istnieje obowiązek wystawienia dokumentu VAT-22': 'A VAT-22 document is not required',
  'Dostawa towarów lub świadczenie usług zwolnionych od podatku na podstawie art. 43 ust. 1, art. 113 ust. 1 i 9 albo przepisów wydanych na podstawie art. 82 ust. 3 lub na podstawie innych przepisów':
    'Supply of goods or services exempt from tax under Article 43(1), Article 113(1) and (9), or regulations issued under Article 82(3), or under other provisions',
  'Podstawa zwolnienia od podatku: ': 'Tax exemption basis: ',
  'Przepis ustawy albo aktu wydanego na podstawie ustawy, na podstawie którego podatnik stosuje zwolnienie od podatku':
    'The statutory provision or act issued under the Act on which the taxpayer relies for the tax exemption',
  'Przepis ustawy albo aktu wydanego na podstawie ustawy: ': 'Statutory provision or act issued under the Act: ',
  'Przepis dyrektywy 2006/112/WE, który zwalnia od podatku taką dostawę towarów lub takie świadczenie usług':
    'Provision of Directive 2006/112/EC that exempts such a supply of goods or services from tax',
  'Przepis dyrektywy: ': 'Directive provision: ',
  'Inna podstawa prawna wskazującą na to, że dostawa towarów lub świadczenie usług korzysta ze zwolnienia':
    'Another legal basis indicating that the supply of goods or services is exempt',
  'Inna podstawa prawna: ': 'Other legal basis: ',
  'Wewnątrzwspólnotowe dostawy nowych środków transportu: ': 'Intra-Community supplies of new means of transport: ',
  'Numer kadłuba nowego środka transportu: ': 'Hull number of the new means of transport: ',
  'Numer fabryczny nowego środka transportu: ': 'Serial number of the new means of transport: ',
  'Numer VIN:  ': 'VIN number:  ',
  'Numer nadwozia:  ': 'Body number:  ',
  'Numer podwozia:  ': 'Chassis number:  ',
  'Numer ramy:  ': 'Frame number:  ',
  'Dostawa dotyczy pojazdów lądowych, o których mowa w art. 2 pkt 10 lit. a ustawy':
    'The delivery concerns land vehicles referred to in Article 2(10)(a) of the Act',
  'Dostawa dotyczy jednostek pływających, o których mowa w art. 2 pkt 10 lit. b ustawy':
    'The delivery concerns watercraft referred to in Article 2(10)(b) of the Act',
  'Dostawa dotyczy statków powietrznych, o których mowa w art. 2 pkt 10 lit. c ustawy':
    'The delivery concerns aircraft referred to in Article 2(10)(c) of the Act',
  'Rachunek banku lub rachunek spółdzielczej kasy oszczędnościowo-kredytowej służący do dokonywania rozliczeń z tytułu nabywanych przez ten bank lub tę kasę wierzytelności pieniężnych':
    'Bank account or credit union account used for settlements arising from receivables purchased by that bank or credit union',
  'Rachunek banku lub rachunek spółdzielczej kasy oszczędnościowo-kredytowej wykorzystywany przez ten bank lub tę kasę do pobrania należności od nabywcy towarów lub usług za dostawę towarów lub świadczenie usług, potwierdzone fakturą, i przekazania jej w całości albo części dostawcy towarów lub usługodawcy':
    'Bank account or credit union account used by that bank or credit union to collect payment from the buyer for goods or services confirmed by invoice and transfer it in whole or in part to the supplier or service provider',
  'Rachunek banku lub rachunek spółdzielczej kasy oszczędnościowo-kredytowej prowadzony przez ten bank lub tę kasę w ramach gospodarki własnej, niebędący rachunkiem rozliczeniowym':
    'Bank account or credit union account maintained by that bank or credit union for its own operations, not being a settlement account',
  'Gotówka': 'Cash',
  'Karta': 'Card',
  'Czek': 'Cheque',
  'Polecenie zapłaty': 'Direct debit',
  'Rachunek bankowy': 'Bank account',
  'Pozostałe': 'Other',
  'NIE': 'NO',
  'TAK': 'YES',
  'Punkt odbioru': 'Collection point',
  'Miejsce dostawy': 'Delivery place',
  'Miejsce odbioru': 'Pickup place',
  'Aplikacja Podatnika KSeF': 'KSeF Taxpayer Application',
};

const TRANSLATIONS_EN_LOWER: Record<string, string> = Object.fromEntries(
  Object.entries(TRANSLATIONS_EN).map(([key, value]) => [key.toLowerCase(), value])
);

export function setLanguage(language: string | undefined): void {
  currentLanguage = language?.toLowerCase() === 'en' ? 'en' : 'pl';
}

export function getLanguage(): Language {
  return currentLanguage;
}

export function translateText(value: string | null | undefined): string {
  if (!value) {
    return '';
  }
  if (currentLanguage !== 'en') {
    return value;
  }

  const directMatch = TRANSLATIONS_EN[value] ?? TRANSLATIONS_EN_LOWER[value.toLowerCase()];

  if (directMatch) {
    return directMatch;
  }

  const trimmed = value.trimEnd();
  const suffix = value.slice(trimmed.length);

  const trimmedMatch = TRANSLATIONS_EN[trimmed] ?? TRANSLATIONS_EN_LOWER[trimmed.toLowerCase()];

  if (trimmedMatch) {
    return trimmedMatch + suffix;
  }

  const base = trimmed.replace(/[:：]\s*$/, '');
  const baseSuffix = trimmed.slice(base.length);
  const baseMatch = TRANSLATIONS_EN[base] ?? TRANSLATIONS_EN_LOWER[base.toLowerCase()];

  if (baseMatch) {
    return baseMatch + baseSuffix + suffix;
  }

  return value;
}

export function translateContent<T>(value: T): T {
  if (currentLanguage !== 'en' || !value || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(translateContent) as T;
  }

  const translated = Object.fromEntries(
    Object.entries(value as Record<string, unknown>).map(([key, entry]) => {
      if (key === 'text') {
        if (typeof entry === 'string') {
          return [key, translateText(entry)];
        }
        if (Array.isArray(entry)) {
          return [key, entry.map((item) => (typeof item === 'string' ? translateText(item) : translateContent(item)))];
        }
      }

      if (entry && typeof entry === 'object') {
        return [key, translateContent(entry)];
      }

      return [key, entry];
    })
  );

  return translated as T;
}
