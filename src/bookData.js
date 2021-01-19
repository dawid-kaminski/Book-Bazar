const books = [
  {
    id: "1",
    title: "Harry Potter",
    author: "J.K. Rowling",
    description: "Harry Potter, sierota i podrzutek, od niemowlęcia wychowywany był przez ciotkę i wuja, którzy traktowali go jak piąte koło u wozu. Pochodzenie chłopca owiane jest tajemnicą; jedyną pamiątką Harry`ego z przeszłości jest zagadkowa blizna na czole. Skąd jednak biorą się niesamowite zjawiska, które towarzyszą nieświadomemu niczego Potterowi? Wszystko zmienia się w dniu jedenastych urodzin chłopca, kiedy dowiaduje się o istnieniu świata, o którym nie miał dotąd pojęcia.",
    img: "https://livro.pl/media/catalog/product/cache/1/image/555x555/602f0fa2c1f0d1ba5e241f914e856ff9/1/4/14708446854683315.jpg_2.jpg",
    types: ["children_literature", "fantasy"]
  },
  {
    id: "2",
    title: "Władca Pierścieni",
    author: "J.R.R. Tolkien",
    description: "Wszystkie trzy części opowiadają o Wojnie o Pierścień z mitologii Śródziemia oraz o związanej z nią wędrówce hobbita Froda Bagginsa do Mordoru, opisanych w powieści Władca Pierścieni J.R.R. Tolkiena. Frodo musi zniszczyć tytułowy Pierścień, a dokonać tego można tylko w Szczelinach Zagłady. W tym samym czasie Władca Ciemności, Sauron, rozpętuje wojnę, pragnąc odzyskać Pierścień – przedmiot, którego brakuje mu, by stać się niepokonanym.",
    img: "https://ecsmedia.pl/c/wladca-pierscieni-druzyna-pierscienia-dwie-wieze-powrot-krola-w-iext41745185.jpg",
    types: ["novel", "fantasy"]
  },
  {
    id: "3",
    title: "Szczęście Rodzinne",
    author: "Lew Tołstoj",
    description: "'Szczęście rodzinne' to dzieje pewnego małżeństwa, które mimo wszelkich przesłanek szczęścia przechodzi kryzys.",
    img: "https://cf2-taniaksiazka.statiki.pl/images/large/35D/@9788726184952_52.jpg",
    types: ["novel"]
  },
  {
    id: "3",
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    description: "Rachel każdego ranka dojeżdża do pracy tym samym pociągiem. Wie, że pociąg zawsze zatrzymuje się przed tym samym semaforem, dokładnie naprzeciwko szeregu domów. Zaczyna się jej nawet wydawać, że zna ludzi, którzy mieszkają w jednym z nich. Uważa, że prowadzą doskonałe życie. Gdyby tylko mogła być tak szczęśliwa jak oni. I nagle widzi coś wstrząsającego. Widzi tylko przez chwilę, bo pociąg rusza, ale to wystarcza. Wszystko się zmienia. Rachel ma teraz okazję stać się częścią życia ludzi, których widywała jedynie z daleka. Teraz się przekonają, że jest kimś więcej niż tylko dziewczyną z pociągu.",
    img: "https://images-na.ssl-images-amazon.com/images/I/41fMCU2vRPL._SX326_BO1,204,203,200_.jpg",
    types: ["thriller"]
  },
  {
    id: "4",
    title: "Duma i uprzedzenie",
    author: "Jane Austen",
    description: "Rzecz dzieje się na angielskiej prowincji na przełomie XVIII i XIX wieku. Niezbyt zamożni państwo Bennetowie mają nie lada kłopot – nadeszła pora, by wydać za mąż ich pięć dorosłych córek. Sęk w tym, że niełatwo jest znaleźć odpowiedniego męża na prowincji. Pojawia się jednak iskierka nadziei, bo oto posiadłość po sąsiedzku postanawia dzierżawić pewien młody człowiek, przystojny i bogaty...",
    img: "https://www.nexto.pl/converter?t=11&img=%2Fupload%2Fsklep%2Fzielona_sowa%2Febook%2Fduma_i_uprzedzenie-jane_austin-zielona_sowa%2Fpublic%2Fduma_i_uprzedzenie-zielona_sowa-ebook-cov.jpg",
    types: ["novel", "romantic"]
  },
  {
    id: "5",
    title: "Wielki Gatsby",
    author: "F. Scott Fitzgerald",
    description: "Nick Carraway, absolwent Uniwersytetu Yale’a, który walczył w I wojnie światowej, wraca do domu z zamiarem rozpoczęcia kariery. Zniecierpliwiony przenosi się do Nowego Jorku. Powieść zaczyna się wczesnym latem 1922 w fikcyjnym miasteczku West Egg na Long Island, gdzie Nick wynajmuje mieszkanie. W posiadłości obok mieszka Gatsby. Tom i Daisy Buchananowie mieszkają nad zatoką w bardziej prestiżowej miejscowości, East Egg. Daisy jest kuzynką Nicka, a Tom był w tej samej społeczności na Uniwersytecie Yale’a. Zapraszają Nicka na obiad do swojej rezydencji, gdzie poznaje on młodą kobietę, Jordan Baker, z którą Daisy chce go umówić na randkę.",
    img: "https://ecsmedia.pl/c/wielki-gatsby-w-iext41765483.jpg",
    types: ["novel", "romantic"]
  },
  {
    id: "6",
    title: "Flowers for Algernon",
    author: "Daniel Keyes",
    description: "Trzydziestodwuletni Charlie Gordon jest upośledzony umysłowo, ma iloraz inteligencji na poziomie 68 punktów. Uczy się czytać i pisać na zajęciach w Beekman College. Dwaj naukowcy z tej uczelni, doktor Nemur i doktor Strauss, prowadzą badania nad wzrostem inteligencji. Udało im się już za pomocą zabiegu chirurgicznego zwiększyć zdolności umysłowe myszy o imieniu Algernon i teraz chcą przeprowadzić taki sam eksperyment z człowiekiem.",
    img: "https://upload.wikimedia.org/wikipedia/en/e/ea/FlowersForAlgernon.jpg",
    types: ["science_fiction"]
  },
  {
    id: "7",
    title: "Proces",
    author: "Franz Kafka",
    description: "„Proces” jest surrealistyczną powieścią Franza Kafki należącą do ścisłego kanonu literatury światowej. Opowiada o prokurencie bankowym Józefie K., który zostaje pewnego dnia aresztowany, mimo że nie popełnił żadnego przestępstwa. Pozornie areszt ma łagodny charakter; skazany może prowadzić normalne życie, będąc jedynie zobowiązanym do pozostania do dyspozycji sądu. Jednak w rzeczywistości aresztowanie diametralnie zmienia egzystencję Józefa K. Odwracają się od niego przyjaciele i znajomi. Mnożą się niezrozumiałe zdarzenia. Sąd nie odstępuje od wyroku, a liczne przesłuchania nie pozwalają bohaterowi udowodnić swojej niewinności. Szuka on pomocy w rodzinie i poza nią: u żony sądowego, prawnika, malarza sądowego, innego oskarżonego, kapelana więziennego, ale wszystkie te próby okazują się bezskuteczne.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTH5ICCfKsR1V0a_iOpCKkWdgoqbddcEVcADdUFhc4Fj_b0S4xuUO18B621LPINDeVb77VLRKQ&usqp=CAc",
    types: ["novel"]
  },
  {
    id: "8",
    title: "Nieznośna lekkość bytu",
    author: "Milan Kundera",
    description: "To przypadek decyduje, że zakochujemy się właśnie w tej, a nie w innej osobie. Przypadek decyduje również o tym, czym zajmujemy się przez całe życie, kim jesteśmy, z jakimi ludźmi się stykamy. A w państwie totalitarnym czynnik losowy staje się tym bardziej paradoksalny, im bardziej wszechwładny ustrój stara się go wyeliminować i narzucić obywatelom sztuczne ograniczenia.",
    img: "https://ecsmedia.pl/c/nieznosna-lekkosc-bytu-b-iext43789567.jpg",
    types: ["novel"]
  },
  {
    id: "9",
    title: "The Silence of the Lambs",
    author: "Thomas Harris",
    description: "Clarice Starling rozpoczyna staż w Sekcji Behawioralnej FBI, zajmującej się seryjnymi mordercami. Jej pierwszym zadaniem jest spotkanie z przybywającym w szpitalu dla umysłowo chorych wielokrotnym mordercą i kanibalem, z zawodu psychiatrą – doktorem Hannibalem Lecterem. Kobieta wdaje się z nim w niebezpieczną grę psychologiczną: w zamian za okruchy informacji na temat Buffalo Billa, który od kilku miesięcy terroryzuje Stany Zjednoczone, porywając, mordując i obdzierając ze skóry młode kobiety, opowiada o sobie. Doktor Lecter, prawdziwy geniusz zła, manipuluje Clarice i poddaje ją osobliwej psychoanalizie. Młoda agentka wierzy, że dzięki bezbłędnej intuicji Lectera uda się wpaść na trop psychopaty, zanim zginie kolejna porwana. Jednak tylko Hannibal zna reguły gry tej makabrycznej gry, a nawet jej finał…",
    img: "https://images-na.ssl-images-amazon.com/images/I/61xCUSb1dHL.jpg",
    types: ["thriller"]
  },
  {
    id: "10",
    title: "Zbrodnia i Kara",
    author: "Fiodor Dostojewski",
    description: "„Zbrodnia i kara” to bez wątpienia najwybitniejsze literackie studium psychiki zbrodniarza. Dostojewski nadzwyczaj wnikliwie obrazuje motywy popełnionej zbrodni, a także wewnętrzną walkę sprawcy z dręczącymi go wyrzutami sumienia. Pomysł historii Rodiona Raskolnikowa, byłego studenta prawa, który postanawia zamordować bogatą lichwiarkę, zrodził się prawdopodobnie, kiedy autor przebywał na katordze, a jego współwięźniami byli między innymi mordercy.",
    img: "https://www.nieprzeczytane.pl/images/photos/okladki/1025/1024645/__b_9788365755377.jpg",
    types: ["romantic", "novel"]
  },
  {
    id: "11",
    title: "Green Lantern",
    author: "Bill Finger, Martin Nodell",
    description: "Każda Zielona Latarnia posiada pierścień mocy i latarnię mocy, które dają użytkownikowi kontrolę nad światem fizycznym tak długo, dopóki posiadacz ma dosyć woli i siły, aby ją dzierżyć. Pierścień ten jest jedną z najpotężniejszych broni we wszechświecie i może być bardzo niebezpieczny. Pierścień Zielonej Latarni ze złotego wieku komiksu (Alana Scotta) jest magiczny, zaś pierścienie pozostałych Latarni są technicznymi urządzeniami Guardians of the Universe (pol. Strażników Wszechświata), którzy dają je godnym kandydatom. Tworzą oni międzygalaktyczne organy ścigania i siły pokojowe znane jako Green Lantern Corps (pol. Korpus Zielonej Latarni). Każda z tych postaci wchodziła także w skład podstawowej grupy superbohaterów DC: Alan Scott był członkiem Justice Society of America (pol. Stowarzyszenia Sprawiedliwych Ameryki), pozostali zaś Justice League of America (pol. Ligi Sprawiedliwych Ameryki).",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeLAcdMilOJ3aX5ASxOvhrm8uJGepEcC7b8An678FDD1Yb7QDJ",
    types: ["comic_book"]
  },
  {
    id: "12",
    title: "Batman",
    author: "Bob Kane, Bill Finger",
    description: "Bruce Wayne był spokojnym, szczęśliwym dzieckiem pary miliarderów. Rodzice nie rozpieszczali go, obdarzając mądrą miłością. Pewnego wieczoru wybrali się we trójkę do kina na seans filmu Zorro[9] (w wersji filmowej był to teatr). Po skończonym spektaklu udawali się do domu, gdy nagle zza rogu wyłonił się bandyta, zażądał pieniędzy i biżuterii, a gdy Wayne'owie stawili opór, ten zabił ich bez skrupułów na oczach chłopca.",
    img: "https://image.ceneostatic.pl/data/products/15692708/i-batman-zabojczy-zart.jpg",
    types: ["children_literature", "comic_book"]
  },
  {
    id: "13",
    title: "Sto lat samotności",
    author: "Gabriel García Márquez",
    description: "Miała to być pierwsza powieść Gabriela Garcíi Márqueza. Dzięki swym dziadkom znał od dziecka historię Macondo i dzieje rodziny Buendía, prześladowanej fatum kazirodztwa. Świat, w którym rzeczy nadzwyczajne miały wymiar szarej codzienności, zwyczajność zaś przyjmowana była jak zjawisko nadprzyrodzone; świat bez czasu, gdzie wiele rzeczy nie miało jeszcze nazw, był też jego światem. Potrzebował aż dwudziestu lat, by spisać te rodzinne opowieści z całym dobrodziejstwem i przekleństwem odniesień biblijnych, baśniowych, literackich, politycznych; uświadomił nam, że „plemiona skazane na sto lat samotności nie mają już drugiej szansy na ziemi”.",
    img: "https://cdn-lubimyczytac.pl/upload/books/123000/123498/310421-352x500.jpg",
    types: ["novel"]
  },
  {
    id: "14",
    title: "It",
    author: "Stephen King",
    description: "Akcja książki została podzielona na dwa tory: część opisanych wydarzeń ma miejsce w 1958 roku, gdy bohaterowie są 11-latkami, a część w 1985, gdy są już dorosłymi ludźmi niepamiętającymi zbyt wiele ze swego dzieciństwa. Wydarzenia te rozgrywają się podczas serii niewyjaśnionych morderstw w Derry, której ofiarami padają wyłącznie dzieci. W 1958 bohaterowie postanawiają odszukać i zabić tajemniczego mordercę, którym okazuje się potwór od tysiącleci żerujący w Maine – tytułowe To, przybierające często postać Pennywise'a, Tańczącego Klauna, czasami przedstawiającego się jako Bob Grey. To potrafi zamienić się w coś, czego jego ofiara boi się najbardziej – w mumię, martwego brata, utopionych chłopców, wilkołaka. W 1985 roku Pennywise rozpoczyna kolejną serię morderstw, zmuszając dorosłych już bohaterów, aby powrócili do Derry i stawili czoła największemu koszmarowi swego dzieciństwa.",
    img: "https://emp-scs-uat.img-osdw.pl/img-p/1/kipwn/d576082e/std/2bc-452/799392495o.jpg",
    types: ["horror"]
  },
  {
    id: "15",
    title: "Mały Książę",
    author: "Antoine de Saint-Exupéry",
    description: "Książka, bez której nie sposób sobie wyobrazić kanonu literatury dziecięcej i młodzieżowej. Ta uniwersalna opowieść o przyjaźni i odpowiedzialności już od pokoleń wzrusza czytelników na całym świecie.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxueK3v1Y6zY37fmfUF403tlS90WOXYCGnzKU2-xTZicc6y-YOcBqBj7arz4U-9lAawKpNQYI&usqp=CAc",
    types: ["children_literature", "fantasy", "novel"]
  },
  {
    id: "16",
    title: "Folwark Zwierzęcy",
    author: "George Orwell",
    description: "Orwell pisał: ,,Folwark zwierzęcy miał być przede wszystkim satyrą na rewolucję rosyjską. Jednak, jak podkreślam, przesłanie utworu jest szersze: chciałem wyrazić w nim myśl, iż ów szczególny rodzaj rewolucji (gwałtowna rewolucja oparta na konspiracji, z motorem napędowym w postaci nieświadomie żądnych władzy osób) może doprowadzić jedynie do zmiany władców. Mój morał brzmi tak oto: rewolucje mogą przynieść radykalna poprawę, gdy masy będą czujne i będą wiedzieć, jak pozbyć się swych przywódców, gdy tamci zrobią, co do nich należy. [...] Nie można robić rewolucji, jeśli nie robi się jej dla siebie; nie ma czegoś takiego, jak dobrotliwa dyktatura”.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGF6ZRwkzVq9sr0_dvBSJUDjsBdfxMWCWFjmntWDxIMhyOpviFlvGn2YyQL8qnOntWPc38QQY&usqp=CAc",
    types: ["novel"]
  },
  {
    id: "17",
    title: "Podziemny krąg",
    author: "Chuck Palahniuk",
    description: "Książka skupia się na bezimiennym narratorze, który nienawidzi swojej pracy i swojego życia. Pracuje on dla, również nienazwanej, firmy motoryzacyjnej. Jego zadanie polega na stosowaniu wzoru (liczba samochodów w obiegu razy prawdopodobieństwo wypadku razy średni koszt ugody pozasądowej), który mówi jego pracodawcy, czy wycofanie z rynku danego modelu będzie tańsze, czy droższe od (obiektywnie nieuczciwego) zatajenia wady fabrycznej. W tym samym czasie zaczyna być coraz bardziej zawiedziony propagowanym przez media konsumpcyjnym stylem życia, który pochłonął jego życie, zmuszając go do identyfikowania siebie z meblami, ubraniami i innymi posiadanymi przedmiotami. Związane z tym niezadowolenie połączone z jego służbowymi podróżami pomiędzy strefami czasowymi spowodowało, że zaczął cierpieć na chroniczną bezsenność.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhSnJDJcIliu5pNC24rifjU4ZbTpzA-9xrgmBHl8NKty1ZcKQnODhm8-YzIqM&usqp=CAc",
    types: ["novel"]
  },
  {
    id: "18",
    title: "Mechaniczna Pomarańcza",
    author: "Anthony Burgess",
    description: "Jest to opowieść o nastoletnim Aleksie, który w dzień jest przykładnym, choć niesfornym synkiem, zakochanym w muzyce Ludwiga van Beethovena, lecz każdej nocy wyrywa się z domu, by stać się członkiem bandy. Zdradzony przez kolegów, trafia do więzienia, gdzie decyduje się zamienić wyrok na udział w eksperymencie resocjalizacyjnym. Ów eksperyment obrzydza mu przemoc tak skutecznie, że od tej pory nie jest w stanie się nawet bronić. Jego przypadek zostaje wykorzystany w rozgrywkach politycznych, a sam Alex „wyleczony jak trza”.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZFVQOeN6iBRsE0xpUpkz0lZY6erJpIm2PEiEJGwY0eMNPZK4Gio0YfdeZnQ&usqp=CAc",
    types: ["science_fiction", "fantasy", "thriller"]
  },
  {
    id: "19",
    title: "Dracula",
    author: "Bram Stoker",
    description: "Jonathan Harker, młody, naiwny prawnik, wyrusza w podróż do Transylwanii na spotkanie z hrabią Draculą, który przymierza się do przyjazdu do Anglii. Na miejscu wychodzi na jaw, że ekscentryczny arystokrata nie jest tym, kim się wydaje być, a jego plany mają krwawy, zbrodniczy wymiar.",
    img: "https://media.libris.to/jacket/09257725_dracula.jpg",
    types: ["horror"]
  },
  {
    id: "20",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "Jonathan Harker, młody, naiwny prawnik, wyrusza w podróż do Transylwanii na spotkanie z hrabią Draculą, który przymierza się do przyjazdu do Anglii. Na miejscu wychodzi na jaw, że ekscentryczny arystokrata nie jest tym, kim się wydaje być, a jego plany mają krwawy, zbrodniczy wymiar.",
    img: "https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg",
    types: ["novel"]
  },
    {
    id: "21",
    title: "A Passage to India",
    author: "E.M. Foster",
    description: "Jonathan Harker, młody, naiwny prawnik, wyrusza w podróż do Transylwanii na spotkanie z hrabią Draculą, który przymierza się do przyjazdu do Anglii. Na miejscu wychodzi na jaw, że ekscentryczny arystokrata nie jest tym, kim się wydaje być, a jego plany mają krwawy, zbrodniczy wymiar.",
    img: "data:image/jpeg;base64,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",
    types: ["novel"]
  },
    {
    id: "22",
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    description: "Jonathan Harker, młody, naiwny prawnik, wyrusza w podróż do Transylwanii na spotkanie z hrabią Draculą, który przymierza się do przyjazdu do Anglii. Na miejscu wychodzi na jaw, że ekscentryczny arystokrata nie jest tym, kim się wydaje być, a jego plany mają krwawy, zbrodniczy wymiar.",
    img: "https://images-na.ssl-images-amazon.com/images/I/41JKGW9P6AL._SX372_BO1,204,203,200_.jpg",
    types: ["novel"]
  },
    {
    id: "23",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    description: "Jonathan Harker, młody, naiwny prawnik, wyrusza w podróż do Transylwanii na spotkanie z hrabią Draculą, który przymierza się do przyjazdu do Anglii. Na miejscu wychodzi na jaw, że ekscentryczny arystokrata nie jest tym, kim się wydaje być, a jego plany mają krwawy, zbrodniczy wymiar.",
    img: "https://m.media-amazon.com/images/I/41fcfrag9fL.jpg",
    types: ["novel"]
  },
    {
    id: "24",
    title: "44 Scotland Street",
    author: "Alexander McCall Smith",
    description: "Jonathan Harker, młody, naiwny prawnik, wyrusza w podróż do Transylwanii na spotkanie z hrabią Draculą, który przymierza się do przyjazdu do Anglii. Na miejscu wychodzi na jaw, że ekscentryczny arystokrata nie jest tym, kim się wydaje być, a jego plany mają krwawy, zbrodniczy wymiar.",
    img: "https://cdn-lubimyczytac.pl/upload/books/72000/72398/352x500.jpg",
    types: ["novel"]
  },
]
export function getAllBooks() {
  return books;
}

export function getBookById(id) {
  return books.find((book)=>{
    if (book.id === id) {
      return true;
    }
    return false;
  });
}
