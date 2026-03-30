export const categoryImages = {
  "beauty": "/categories/beauty.jpg",
  "fragrances": "/categories/fragrances.jpg",
  "furniture": "/categories/furniture.jpg",
  "groceries": "/categories/groceries.jpg",
  "home-decoration": "/categories/home-decoration.jpg",
  "kitchen-accessories": "/categories/kitchen-accessories.jpg",
  "laptops": "/categories/laptops.jpg",
  "mens-shirts": "/categories/mens-shirts.jpg",
  "mens-shoes": "/categories/mens-shoes.jpg",
  "mens-watches": "/categories/mens-watches.jpg",
  "mobile-accessories": "/categories/mobile-accessories.jpg",
  "motorcycle": "/categories/motorcycle.jpg",
  "skin-care": "/categories/skin-care.jpg",
  "smartphones": "/categories/smartphones.jpg",
  "sports-accessories": "/categories/sports-accessories.jpg",
  "sunglasses": "/categories/sunglasses.jpg",
  "tablets": "/categories/tablets.jpg",
  "tops": "/categories/tops.jpg",
  "vehicle": "/categories/vehicle.jpg",
  "womens-bags": "/categories/womens-bags.jpg",
  "womens-dresses": "/categories/womens-dresses.jpg",
  "womens-jewellery": "/categories/womens-jewellery.jpg",
  "womens-shoes": "/categories/womens-shoes.jpg",
  "womens-watches": "/categories/womens-watches.jpg"
};

export const getCategoryImage = (slug) => {
  return categoryImages[slug] || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800";
};