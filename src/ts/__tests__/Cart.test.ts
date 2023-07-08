import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  cart.add(
  new Movie(
      1015,
      'Inception',
      'Inception',
      'IMAX',
      2010,
      'USA',
      'Your mind is the scene of the crime.',
      ['Action', 'Adventure', 'Sci-Fi'],
      148,
      1500
  )
);

  expect(cart.items.length).toBe(1);
});
