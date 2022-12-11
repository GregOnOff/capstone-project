const DUMMY_ITEMS = [
  {
    id: "i1",
    title: "Katzenbaby",
    price: 999,
    link: "https://amazon.com",
    category: "health",
    date: "2022-12-08T19:56:15.980Z",
    timeLeft: 9,
  },
  {
    id: "i2",
    title: "Apache Helicopter",
    price: 99,
    link: "https://amazon.com",
    date: "2022-11-30T19:56:15.980Z",
    category: "others",
    timeLeft: 4,
  },
  {
    id: "i3",
    title: "Bett",
    price: 399,
    link: "https://amazon.com",
    category: "furniture",
    date: "2022-12-01T19:56:15.980Z",
    timeLeft: 6,
  },
  {
    id: "i4",
    title: "MacBook Pro",
    price: 1299,
    link: "https://amazon.com",
    date: "2022-10-08T19:56:15.980Z",
    category: "tech",
    timeLeft: 12,
  },
];

export function getAllWishlistItems() {
  return DUMMY_ITEMS;
}
