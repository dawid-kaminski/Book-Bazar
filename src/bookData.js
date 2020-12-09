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
