export type MenuItem = {
  name: string;
  price: string;
  desc?: string;
  sub?: { name: string; price: string }[];
};
export type MenuCategory = { title: string; items: MenuItem[] };

export const categories: MenuCategory[] = [
  {
    title: "Rice",
    items: [
      {
        name: "White Rice",
        price: "100",
        desc: "Basmati / long grain rice served with chicken / beef / fish / turkey / assorted.",
        sub: [{ name: "With Stew", price: "270" }],
      },
      {
        name: "Jollof Rice",
        price: "270",
        desc: "Basmati rice",
        sub: [
          { name: "Plain Jollof", price: "120" },
          { name: "With Goat Meat", price: "320" },
        ],
      },
      {
        name: "Fried Rice",
        price: "270",
        desc: "Basmati rice cooked in assorted vegetable with chicken / fish / turkey / liver / beef / assorted.",
        sub: [
          { name: "Plain Fried Rice", price: "170" },
          { name: "With Goat Meat", price: "320" },
        ],
      },
      { name: "Delta Coconut Rice", price: "320", desc: "Rice cooked with extra coconut purée. Served with chicken / beef / fish / turkey / assorted." },
      { name: "Seafood Rice", price: "320", desc: "Basmati rice cooked in assorted vegetable and prawns, served with chicken / beef / fish / turkey / assorted." },
      { name: "Asun Rice", price: "320", desc: "Basmati rice cooked with bell peppers, chilli, spices and fried goat meat, served with chicken / beef / fish / turkey / assorted." },
      { name: "Village Rice", price: "320", desc: "Basmati rice with chilli, spices and dry fish, served with chicken / beef / fish / turkey / assorted." },
      { name: "Coconut Fried Rice", price: "320", desc: "Basmati rice made with bell peppers, spices and an infusion of coconut purée, served with chicken / beef / fish / turkey / assorted." },
      { name: "Banga Rice", price: "320", desc: "Rice cooked with banga purée, chillies and crayfish, served with chicken / beef / fish / turkey / assorted." },
      { name: "Leaf Peppered Rice & Stew", price: "300", desc: "One of Benin's best cuisines — steamed rice wrapped in leaves for a distinct aroma, served with a rich, spicy tomato and palm-oil based stew with chicken / beef / fish / turkey / assorted." },
    ],
  },
  {
    title: "Soup",
    items: [
      {
        name: "Banga Soup",
        price: "320",
        desc: "Banga purée with chilli, proteins and dry fish, served with chicken / beef / fish / turkey / assorted.",
        sub: [
          { name: "With Goat Meat", price: "420" },
          { name: "With Tikko", price: "420" },
        ],
      },
      {
        name: "Ogbono Soup",
        price: "320",
        desc: "Ogbono seeds with chilli, proteins and dry fish, served with chicken / beef / fish / turkey / assorted.",
        sub: [{ name: "With Goat Meat", price: "420" }],
      },
      { name: "Owho Soup", price: "420", desc: "Chilli-infused soup with ladyfish and tikko." },
      {
        name: "Vegetable Soup",
        price: "320",
        desc: "Ugwu with water leaves, chilli, proteins and dry fish, served with chicken / beef / fish / turkey / assorted.",
        sub: [{ name: "With Goat Meat", price: "420" }],
      },
      { name: "Black Soup", price: "320", desc: "Fresh leaves (scented ugwu, bitter leaf and uziza), chilli and dry fish, served with chicken / beef." },
      { name: "Fisherman Soup", price: "470", desc: "Chilli-infused with prawns, crabs and tilapia, served with chicken / beef / fish / turkey / assorted." },
      {
        name: "Egusi Soup",
        price: "320",
        desc: "Egusi seeds with chilli, protein and dry fish, served with chicken / beef / fish / turkey / assorted.",
        sub: [{ name: "With Goat Meat", price: "420" }],
      },
      { name: "Afang Soup", price: "420", desc: "Ukazi with chilli, proteins and dry fish, served with chicken / beef / fish / turkey / assorted." },
      { name: "Ofensala Soup", price: "370", desc: "Yam with chilli, goat meat and dry fish, served with chicken / beef / fish / turkey / assorted." },
      { name: "Oha Soup", price: "320", desc: "Oha leaves with cocoyam, chilli, protein and dry fish, served with chicken / beef / fish / turkey / assorted." },
      { name: "Okra Soup", price: "320", desc: "Okra with chilli, protein and dry fish, served with chicken / beef / fish / turkey / assorted." },
      { name: "Seafood Okra Soup", price: "420", desc: "Okra with crabs, prawns, chilli and tilapia, served with chicken / beef / fish / turkey / assorted." },
    ],
  },
  {
    title: "Pasta",
    items: [
      { name: "Plain Spaghetti", price: "95", desc: "Boiled pasta in salt, oil and water." },
      { name: "Seafood Pasta", price: "370", desc: "Spaghetti pasta with bell peppers and prawns." },
      { name: "Mussels & Creamy Pasta", price: "420", desc: "Creamy pasta with prawns, mussels and cheese." },
      { name: "Jollof Pasta", price: "270", desc: "Pasta with chilli, spices and fresh tomatoes." },
    ],
  },
  {
    title: "Swallow",
    items: [
      { name: "Poundo", price: "80", desc: "A staple made from pounded boiled yam." },
      { name: "Semo", price: "80", desc: "A staple made from semolina." },
      { name: "Eba", price: "70", desc: "A staple made from garri (dried & fried cassava flakes) and hot water." },
      { name: "Starch", price: "80", desc: "A staple made from cassava starch and palm oil." },
    ],
  },
  {
    title: "Stews",
    items: [
      { name: "Assorted Stew", price: "220", desc: "Assorted proteins with chilli and fresh tomatoes." },
      { name: "Beef Stew", price: "220", desc: "Beef with chilli, herbs, spices and fresh tomatoes." },
      { name: "Turkey Stew", price: "220", desc: "Turkey with chilli, herbs, spices and fresh tomatoes." },
      { name: "Village Stew (Obe Ata)", price: "270", desc: "Dry fish with chilli, herbs, proteins and fresh tomatoes." },
      { name: "Goat Meat Stew", price: "320", desc: "Goat meat with chilli, herbs and fresh tomatoes." },
      { name: "Chicken Stew", price: "170", desc: "Chicken with chilli, herbs, spices and fresh tomatoes." },
      { name: "Titus Stew", price: "170", desc: "Titus with chilli, herbs and fresh tomatoes." },
    ],
  },
  {
    title: "Pepper Soup",
    items: [
      { name: "Goat Meat", price: "370", desc: "Goat meat with scented leaves, spices, herbs and chilli." },
      { name: "Turkey", price: "220", desc: "Turkey with scented leaves, spices, herbs and chilli." },
      { name: "Ukodo (Yam & Pepper Soup)", price: "270", desc: "Yam with proteins, peppers, spices, herbs, scented leaves and chilli." },
      { name: "Assorted", price: "250", desc: "Proteins with scented leaves, spices, herbs and chilli." },
      { name: "Catfish", price: "370", desc: "Catfish with scented leaves, spices, herbs and chilli." },
    ],
  },
  {
    title: "Extra",
    items: [
      { name: "Yam & Egg Sauce", price: "270", desc: "Fresh yam with eggs, tomatoes and bell peppers." },
      { name: "Asun", price: "270", desc: "Goat meat with herbs, chilli and bell peppers." },
      { name: "Bole & Fish Sauce", price: "270", desc: "Fresh fish with plantains, bell peppers and chilli." },
      {
        name: "Fried Beans",
        price: "270",
        desc: "Stir-fried in a rich palm-oil based pepper sauce with greens & spices.",
        sub: [{ name: "With Plantains / Yam", price: "370" }],
      },
      {
        name: "Barbeque",
        price: "—",
        desc: "Fish marinated in aromatic spice blends and grilled.",
        sub: [
          { name: "Whole Catfish", price: "520" },
          { name: "Whole Tilapia", price: "370" },
        ],
      },
      { name: "Yamarita & Egg Sauce", price: "320", desc: "Fresh yam tempura with eggs and chilli." },
      { name: "Potatoes & Egg Sauce", price: "270", desc: "Potatoes with eggs, chilli and bell peppers." },
      { name: "Iseiwu", price: "320", desc: "Goat head with chilli." },
      {
        name: "Egg & Noodles",
        price: "220",
        desc: "Staple with stir-fried noodles mixed with spicy sautéed onions, peppers, tomatoes and eggs.",
        sub: [{ name: "With Plantains / Yam", price: "370" }],
      },
      { name: "Suya", price: "270", desc: "A spiced, nutty, smoky, roasted charred beef." },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Yam", price: "120", desc: "Boiled / fried yam." },
      { name: "Potatoes", price: "120", desc: "Deep-fried potato wedges." },
      { name: "Snails", price: "370", desc: "Deep-fried snails with chilli and bell peppers." },
      { name: "Plantains", price: "120", desc: "Deep-fried / boiled plantains." },
      { name: "Crunchy Prawns", price: "270", desc: "Tempura prawns with parsley and spices." },
      { name: "Plain Beans", price: "170", desc: "Plain boiled beans with added salt." },
    ],
  },
  {
    title: "Protein",
    items: [
      { name: "Chicken", price: "170", desc: "Boiled / deep-fried chicken with peppers." },
      { name: "Roasted Chicken", price: "180", desc: "Chicken glazed with a secret sauce and roasted." },
      { name: "Turkey", price: "170", desc: "Boiled / deep-fried turkey then deep-fried with peppers." },
      { name: "Titus Fish", price: "140", desc: "Boiled / deep-fried titus then deep-fried with peppers." },
      { name: "Catfish", price: "320", desc: "Boiled / deep-fried catfish then deep-fried with peppers." },
      { name: "Bush Meat", price: "370", desc: "Boiled / deep-fried bush meat then deep-fried with peppers." },
      { name: "Beef", price: "140", desc: "Boiled / deep-fried beef with pepper sauce." },
      { name: "Roasted Beef", price: "180", desc: "Beef marinated with spices and roasted." },
      { name: "Goat Meat", price: "170", desc: "Boiled / deep-fried goat meat then deep-fried with peppers." },
      { name: "Hake Fish", price: "140", desc: "Boiled / deep-fried hake then deep-fried with peppers." },
      { name: "Tilapia", price: "220", desc: "Boiled / deep-fried tilapia then deep-fried with peppers." },
      { name: "Peppered Snails", price: "520", desc: "Boiled / fried snails then deep-fried with peppers." },
    ],
  },
];
