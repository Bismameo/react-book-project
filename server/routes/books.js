import express from 'express';
import { books, featuredBooks, bestsellers, formatPrice } from '../data/books.js';

const router = express.Router();

router.get('/', (req, res) => {
  const { category, featured, bestseller, search } = req.query;
  let filteredBooks = [...books];

  if (category) {
    filteredBooks = filteredBooks.filter((book) =>
      book.category.toLowerCase() === String(category).toLowerCase()
    );
  }

  if (featured === 'true') {
    filteredBooks = filteredBooks.filter((book) => book.featured);
  }

  if (bestseller === 'true') {
    filteredBooks = filteredBooks.filter((book) => book.bestseller);
  }

  if (search) {
    const query = String(search).trim().toLowerCase();
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.category.toLowerCase().includes(query)
    );
  }

  res.json({
    success: true,
    count: filteredBooks.length,
    data: filteredBooks.map((book) => ({
      ...book,
      img: book.img || book.image,
      priceDisplay: formatPrice(book.price)
    }))
  });
});

router.get('/featured', (req, res) => {
  res.json({
    success: true,
    count: featuredBooks.length,
    data: featuredBooks.map((book) => ({
      ...book,
      img: book.img || book.image,
      priceDisplay: formatPrice(book.price)
    }))
  });
});

router.get('/bestsellers', (req, res) => {
  res.json({
    success: true,
    count: bestsellers.length,
    data: bestsellers.map((book) => ({
      ...book,
      img: book.img || book.image,
      priceDisplay: formatPrice(book.price)
    }))
  });
});

router.get('/:id', (req, res) => {
  const book = books.find((item) => item.id === Number(req.params.id));

  if (!book) {
    return res.status(404).json({
      success: false,
      message: 'Book not found.'
    });
  }

  res.json({
    success: true,
    data: {
      ...book,
      img: book.img || book.image,
      priceDisplay: formatPrice(book.price)
    }
  });
});

export default router;
