const books = [
  {
    id: "1",
    title: "Harry Potter",
    author: "",
    img: "https://livro.pl/media/catalog/product/cache/1/image/555x555/602f0fa2c1f0d1ba5e241f914e856ff9/1/4/14708446854683315.jpg_2.jpg",
    types: ["children_literature", "fantasy"]
  },
  {
    id: "2",
    title: "Władca Pierścieni",
    author: "",
    img: "https://ecsmedia.pl/c/wladca-pierscieni-druzyna-pierscienia-dwie-wieze-powrot-krola-w-iext41745185.jpg",
    types: ["novel", "fantasy"]
  },
  {
    id: "3",
    title: "Szczęście Rodzinne",
    author: "",
    img: "https://cf2-taniaksiazka.statiki.pl/images/large/35D/@9788726184952_52.jpg",
    types: ["novel"]
  },
  {
    id: "3",
    title: "The Girl on the Train",
    author: "",
    img: "https://images-na.ssl-images-amazon.com/images/I/41fMCU2vRPL._SX326_BO1,204,203,200_.jpg",
    types: ["thriller"]
  },
  {
    id: "4",
    title: "Duma i uprzedzenie",
    author: "",
    img: "https://www.nexto.pl/converter?t=11&img=%2Fupload%2Fsklep%2Fzielona_sowa%2Febook%2Fduma_i_uprzedzenie-jane_austin-zielona_sowa%2Fpublic%2Fduma_i_uprzedzenie-zielona_sowa-ebook-cov.jpg",
    types: ["novel", "romantic"]
  },
  {
    id: "5",
    title: "Wielki Gatsby",
    author: "",
    img: "https://ecsmedia.pl/c/wielki-gatsby-w-iext41765483.jpg",
    types: ["novel", "romantic"]
  },
  {
    id: "6",
    title: "Flowers for Algernon",
    author: "",
    img: "https://upload.wikimedia.org/wikipedia/en/e/ea/FlowersForAlgernon.jpg",
    types: ["science_fiction"]
  },
  {
    id: "7",
    title: "Proces",
    author: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTH5ICCfKsR1V0a_iOpCKkWdgoqbddcEVcADdUFhc4Fj_b0S4xuUO18B621LPINDeVb77VLRKQ&usqp=CAc",
    types: ["novel"]
  },
  {
    id: "8",
    title: "Nieznośna lekkość bytu",
    author: "",
    img: "https://ecsmedia.pl/c/nieznosna-lekkosc-bytu-b-iext43789567.jpg",
    types: ["novel"]
  },
  {
    id: "9",
    title: "The Silence of the Lambs",
    author: "",
    img: "https://images-na.ssl-images-amazon.com/images/I/61xCUSb1dHL.jpg",
    types: ["thriller"]
  },
  {
    id: "10",
    title: "Zbrodnia i Kara",
    author: "",
    img: "https://www.nieprzeczytane.pl/images/photos/okladki/1025/1024645/__b_9788365755377.jpg",
    types: ["romantic", "novel"]
  },
  {
    id: "11",
    title: "Green Lantern",
    author: "",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeLAcdMilOJ3aX5ASxOvhrm8uJGepEcC7b8An678FDD1Yb7QDJ",
    types: ["comic_book"]
  },
  {
    id: "12",
    title: "Batman",
    author: "",
    img: "https://image.ceneostatic.pl/data/products/15692708/i-batman-zabojczy-zart.jpg",
    types: ["children_literature", "comic_book"]
  },
  {
    id: "13",
    title: "Sto lat samotności",
    author: "",
    img: "https://cdn-lubimyczytac.pl/upload/books/123000/123498/310421-352x500.jpg",
    types: ["novel"]
  },
  {
    id: "14",
    title: "It",
    author: "",
    img: "https://emp-scs-uat.img-osdw.pl/img-p/1/kipwn/d576082e/std/2bc-452/799392495o.jpg",
    types: ["horror"]
  },
  {
    id: "15",
    title: "Mały Książę",
    author: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxueK3v1Y6zY37fmfUF403tlS90WOXYCGnzKU2-xTZicc6y-YOcBqBj7arz4U-9lAawKpNQYI&usqp=CAc",
    types: ["children_literature", "fantasy", "novel"]
  },
  {
    id: "16",
    title: "Folwark Zwierzęcy",
    author: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGF6ZRwkzVq9sr0_dvBSJUDjsBdfxMWCWFjmntWDxIMhyOpviFlvGn2YyQL8qnOntWPc38QQY&usqp=CAc",
    types: ["novel"]
  },
  {
    id: "17",
    title: "Podziemny krąg",
    author: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhSnJDJcIliu5pNC24rifjU4ZbTpzA-9xrgmBHl8NKty1ZcKQnODhm8-YzIqM&usqp=CAc",
    types: ["novel"]
  },
  {
    id: "18",
    title: "Mechaniczna Pomarańcza",
    author: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZFVQOeN6iBRsE0xpUpkz0lZY6erJpIm2PEiEJGwY0eMNPZK4Gio0YfdeZnQ&usqp=CAc",
    types: ["science_fiction", "fantasy", "thriller"]
  },
  {
    id: "19",
    title: "Dracula",
    author: "",
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
