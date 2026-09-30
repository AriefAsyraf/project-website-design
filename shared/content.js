/* Halcyon Coffee Roasters: ALL site text lives here.
   Edit this file to change the cafe's content across all 9 designs. */
window.CAFE = {
  name: 'Halcyon Coffee Roasters',
  shortName: 'Halcyon',
  tagline: 'Small-batch coffee from people we know by name.',
  intro: 'A neighbourhood roastery and espresso bar. We buy green coffee directly from growers, roast it in 12-kilo batches behind the counter, and brew it with care, one cup at a time.',
  currency: '$',
  nav: [
    { label: 'Story', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Origins', href: '#origins' },
    { label: 'Visit', href: '#visit' }
  ],
  cta: { order: 'Order ahead', visit: 'Find us' },
  story: [
    'Halcyon started in 2019 with a secondhand roaster, a borrowed corner of a bakery and one simple rule: know who grew it.',
    'Today we work with eleven producers across four countries, paying well above fair-trade minimums and visiting every farm we buy from. We roast light enough to taste where a coffee came from and sweet enough to drink every day.',
    'Our bar is small on purpose. There are no syrups to hide behind, just seasonal coffee, good milk and people who love talking about both.'
  ],
  facts: [
    { value: '2019', label: 'Roasting since' },
    { value: '11', label: 'Direct-trade producers' },
    { value: '12 kg', label: 'Batch size' },
    { value: '600+', label: 'Cups a day' }
  ],
  menu: [
    {
      category: 'Espresso Bar',
      items: [
        { name: 'Espresso', desc: 'A double shot of our seasonal house blend.', price: '3.50' },
        { name: 'Cortado', desc: 'Equal parts espresso and silky steamed milk.', price: '4.25' },
        { name: 'Flat White', desc: 'A double ristretto with a thin layer of microfoam.', price: '4.75' },
        { name: 'Oat Latte', desc: 'House espresso with creamy oat milk.', price: '5.25' },
        { name: 'Honey Lavender Cortado', desc: 'Seasonal signature with local honey and dried lavender.', price: '5.75' }
      ]
    },
    {
      category: 'Filter',
      items: [
        { name: 'Batch Brew', desc: 'Rotating single origin, ready when you are.', price: '3.75' },
        { name: 'V60 Pour-Over', desc: 'Any single origin, brewed to order.', price: '5.50' },
        { name: 'Cold Brew', desc: 'Steeped for 18 hours and served over ice.', price: '5.00' }
      ]
    },
    {
      category: 'Pastries',
      items: [
        { name: 'Butter Croissant', desc: 'Laminated in-house over three days.', price: '3.75' },
        { name: 'Cardamom Bun', desc: 'A Swedish-style knot with pearl sugar.', price: '4.50' },
        { name: 'Brown Butter Banana Bread', desc: 'Served warm, with a pinch of sea salt.', price: '4.25' },
        { name: 'Olive Oil & Orange Cake', desc: 'Moist and bright, and dairy-free.', price: '4.50' }
      ]
    }
  ],
  origins: [
    {
      name: 'Ethiopia Guji', region: 'Hambela Wamena, Guji', producer: 'Buku smallholder washing station',
      process: 'Natural', altitude: '2,100–2,300 m', notes: ['Blueberry', 'Jasmine', 'Cacao nib'],
      price: '19.00', weight: '250 g'
    },
    {
      name: 'Colombia Huila', region: 'Pitalito, Huila', producer: 'La Esperanza growers group',
      process: 'Washed', altitude: '1,700–1,900 m', notes: ['Red apple', 'Panela', 'Milk chocolate'],
      price: '17.00', weight: '250 g'
    },
    {
      name: 'Kenya Nyeri', region: 'Othaya, Nyeri', producer: 'Othaya smallholder cooperative',
      process: 'Washed, SL28 & SL34', altitude: '1,800 m', notes: ['Blackcurrant', 'Grapefruit', 'Brown sugar'],
      price: '20.00', weight: '250 g'
    }
  ],
  hours: [
    { days: 'Mon – Fri', open: '7:00', close: '16:00' },
    { days: 'Saturday', open: '8:00', close: '17:00' },
    { days: 'Sunday', open: '8:00', close: '15:00' }
  ],
  address: { street: '214 Larkspur Street', area: 'Northside', city: 'Portland, OR 97209' },
  phone: '(503) 555-0142',
  email: 'hello@halcyon.coffee',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'TikTok', href: '#' },
    { label: 'Spotify', href: '#' }
  ],
  newsletter: {
    heading: 'New coffees, first.',
    text: 'One short email when a new origin lands. No spam, ever.',
    cta: 'Subscribe'
  }
};

/* Test hook: ?stress makes content longer to check layouts hold up. */
if (/[?&]stress\b/.test((window.location && window.location.search) || '')) {
  window.CAFE.name = 'Halcyon Coffee Roasters & Neighbourhood Bakehouse';
  window.CAFE.menu[0].items[0].name = 'Extraordinarily Long Seasonal Espresso Special';
}
