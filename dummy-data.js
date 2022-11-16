const DUMMY_ITEMS = [
  {
    id: "i1",
    title: "Katzenbaby",
    price: "999.99",
    link: "https://amazon.com",
    category: "others",
    image: "images/placeholder.png",
    timeLeft: 9,
  },
  {
    id: "i2",
    title: "Apachi Helicopter",
    price: 99.95,
    link: "https://amazon.com",
    category: "tech",
    image: "images/placeholder.png",
    timeLeft: 4,
  },
  {
    id: "i3",
    title: "Sofa",
    price: 399.99,
    link: "https://amazon.com",
    category: "furniture",
    image: "images/placeholder.png",
    timeLeft: 6,
  },
];

export function getAllWishlistItems() {
  return DUMMY_ITEMS;
}
