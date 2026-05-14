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
      { name: "White Rice", price: "100", desc: "Basmati / long grain rice." },
      {
        name: "Jollof Rice",
        price: "270",
        desc: "One-pot rice infused with chillies, tomatoes, onions and peppers — served with chicken, beef, fish or turkey.",
        sub: [
          { name: "Plain Jollof", price: "120" },
          { name: "With Goat Meat", price: "320" },
        ],
      },
      {
        name: "Fried Rice",
        price: "270",
        desc: "Basmati cooked with assorted vegetables and chicken, fish, turkey, liver or beef.",
        sub: [
          { name: "Plain Fried Rice", price: "170" },
          { name: "With Goat Meat", price: "320" },
        ],
      },
      { name: "Delta Coconut Rice", price: "320", desc: "Rice cooked with extra coconut purée." },
      { name: "Seafood Rice", price: "320", desc: "Basmati cooked in assorted vegetables and prawns." },
      { name: "Asun Rice", price: "320", desc: "Basmati cooked with pepper, chilli, spices and fried goat meat." },
      { name: "Village Rice", price: "320", desc: "Basmati with chilli, spices and dry fish." },
      { name: "Coconut Fried Rice", price: "320", desc: "Cooked with bell peppers, spices and an infusion of coconut purée." },
      { name: "Banga Rice", price: "320", desc: "Rice cooked with banga purée, chillies and crayfish." },
      { name: "Leaf Peppered Rice & Stew", price: "300", desc: "One of Benin's classic dishes — steamed rice wrapped in leaves for a distinct aroma, served with onion, spicy tomato and palm-oil-based stew." },
    ],
  },
  {
    title: "Soup",
    items: [
      { name: "Banga Soup", price: "320", desc: "Banga purée with chilli, proteins and dry fish.", sub: [{ name: "With Goat Meat", price: "420" }, { name: "With Tikko", price: "420" }] },
      { name: "Ogbongo Soup", price: "320", desc: "Ogbongo seeds with chilli, proteins and dry fish.", sub: [{ name: "With Goat Meat", price: "420" }] },
      { name: "Owho Soup", price: "420", desc: "Chilli-infused soup with lodyfish and tikko." },
      { name: "Vegetable Soup", price: "320", desc: "Ugwu and water leaves with chilli, proteins and dry fish.", sub: [{ name: "With Goat Meat", price: "420" }] },
      { name: "Black Soup", price: "320", desc: "Fresh scented uziza and bitter leaves with chilli and fish." },
      { name: "Fisherman Soup", price: "470", desc: "Chilli-infused with prawns, crabs and tilapia." },
      { name: "Egusi Soup", price: "320", desc: "Egusi seeds with chilli, protein and dry fish.", sub: [{ name: "With Goat Meat", price: "420" }] },
      { name: "Afang Soup", price: "420", desc: "Ukazzi with chilli, proteins and dry fish." },
      { name: "Ofensala Soup", price: "370", desc: "Yam with chilli, goat meat and dry fish." },
      { name: "Oha Soup", price: "320", desc: "Oha leaves with cocoyam, chilli, protein and dry fish." },
      { name: "Okra Soup", price: "320", desc: "Okra with chilli, protein and dry fish." },
      { name: "Seafood Okra Soup", price: "420", desc: "Okra with crabs, prawns, chilli and tilapia." },
    ],
  },
  {
    title: "Pasta",
    items: [
      { name: "Plain Spaghetti", price: "95", desc: "Boiled pasta in salt, oil and water." },
      { name: "Seafood Pasta", price: "370", desc: "Spaghetti with bell peppers and prawns." },
      { name: "Mussels & Creamy", price: "420", desc: "Creamy pasta with prawns, mussels and cheese." },
      { name: "Jollof Pasta", price: "270", desc: "Pasta with chilli, spices and fresh tomatoes." },
    ],
  },
  {
    title: "Swallow",
    items: [
      { name: "Poundo", price: "80", desc: "Staple made from pounded boiled yam." },
      { name: "Semo", price: "80", desc: "Staple made from semolina." },
      { name: "Eba", price: "70", desc: "Garri (dried & fried cassava flakes) with hot water." },
      { name: "Starch", price: "80", desc: "Cassava starch and palm oil." },
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
      { name: "Goat Meat", price: "370", desc: "Scented leaves, spices, herbs and chilli." },
      { name: "Turkey", price: "220", desc: "Scented leaves, spices, herbs and chilli." },
      { name: "Ukodo (Yam & Pepper Soup)", price: "270", desc: "Yam with proteins, peppers, herbs, scented leaves and chilli." },
      { name: "Assorted", price: "370", desc: "Proteins with scented leaves, spices, herbs and chilli." },
      { name: "Catfish", price: "370", desc: "Catfish with scented leaves, spices, herbs and chilli." },
    ],
  },
  {
    title: "Extra",
    items: [
      { name: "Yam & Egg Sauce", price: "270", desc: "Fresh yam with eggs, tomatoes and bell peppers." },
      { name: "Asun", price: "270", desc: "Goat meat with herbs, chilli and bell peppers." },
      { name: "Bole & Fish Sauce", price: "270", desc: "Fresh fish with plantains, bell peppers and chilli." },
      { name: "Fried Beans", price: "270", desc: "Stir-fried in a rich palm-oil pepper sauce with greens & spices.", sub: [{ name: "With Plantains / Yam", price: "370" }] },
      { name: "Barbeque", price: "320", desc: "Fish marinated in aromatic spice blends and grilled.", sub: [{ name: "Whole Catfish", price: "370" }, { name: "Whole Tilapia", price: "370" }] },
      { name: "Yamarita & Eggs Sauce", price: "320", desc: "Fresh yam tempura with eggs and chilli." },
      { name: "Potatoes & Egg Sauce", price: "270", desc: "Potatoes with eggs, chilli and bell peppers." },
      { name: "Iseivu", price: "320", desc: "Goat head with chilli." },
      { name: "Eggs & Noodles", price: "270", desc: "Stir-fried noodles tossed with spicy sautéed onions, peppers, tomatoes and eggs.", sub: [{ name: "With Plantains / Yam", price: "370" }] },
      { name: "Suya", price: "270", desc: "A spiced, nutty, smoky roasted charred beef." },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Yam", price: "120", desc: "Boiled or fried yam." },
      { name: "Potatoes", price: "120", desc: "Deep-fried potato wedges." },
      { name: "Snails", price: "370", desc: "Deep-fried snails with chilli and bell peppers." },
      { name: "Plantains", price: "120", desc: "Deep-fried or boiled plantains." },
      { name: "Crunchy Prawns", price: "270", desc: "Tempura prawns with parsley and spices." },
      { name: "Plain Beans", price: "170", desc: "Plain boiled beans with added salt." },
    ],
  },
  {
    title: "Protein",
    items: [
      { name: "Chicken", price: "170", desc: "Boiled or deep-fried chicken with peppers." },
      { name: "Roasted Chicken", price: "180", desc: "Chicken glazed with a secret sauce and roasted." },
      { name: "Turkey", price: "170", desc: "Boiled then deep-fried turkey with peppers." },
      { name: "Titus Fish", price: "140", desc: "Boiled then deep-fried titus with peppers." },
      { name: "Catfish", price: "320", desc: "Boiled then deep-fried catfish with peppers." },
      { name: "Bush Meat", price: "370", desc: "Boiled then deep-fried bush meat with peppers." },
      { name: "Beef", price: "140", desc: "Boiled or deep-fried beef with pepper sauce." },
      { name: "Roasted Beef", price: "180", desc: "Beef marinated with spices and roasted." },
      { name: "Goat Meat", price: "170", desc: "Boiled then deep-fried goat meat with peppers." },
      { name: "Hake Fish", price: "140", desc: "Boiled then deep-fried hake with peppers." },
      { name: "Tilapia", price: "220", desc: "Boiled then deep-fried tilapia with peppers." },
      { name: "Peppered Snails", price: "520", desc: "Boiled or fried snails then deep-fried with peppers." },
    ],
  },
];
