export default class Cart {
  static add(book) {
    alert(`${book.title} has been added to the cart!`);
    console.log("Book Added:", book);
  }
}