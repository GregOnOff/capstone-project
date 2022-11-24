const DUMMY_ITEMS = [
  {
    id: "i1",
    title: "Katzenbaby",
    price: "999.99",
    link: "https://amazon.com",
    category: "health",
    image: "images/placeholder.png",
    timeLeft: 9,
  },
  {
    id: "i2",
    title: "Apache Helicopter",
    price: 99.95,
    link: "https://amazon.com",
    category: "others",
    image: "images/placeholder.png",
    timeLeft: 4,
  },
  {
    id: "i3",
    title: "Bett",
    price: 399.99,
    link: "https://amazon.com",
    category: "furniture",
    image: "images/placeholder.png",
    timeLeft: 6,
  },
  {
    id: "i4",
    title: "MacBook Pro",
    price: 1299.99,
    link: "https://amazon.com",
    category: "tech",
    image: "images/placeholder.png",
    timeLeft: 12,
  },
];

export function getAllWishlistItems() {
  return DUMMY_ITEMS;
}
