# Image Organization Guide

This document outlines the folder structure for all website images.

## 📁 Folder Structure

```
public/images/
├── products/              # All product-related images
│   ├── tshirts/          # T-shirt product photos
│   ├── hoodies/          # Hoodie product photos
│   ├── accessories/      # Accessories (caps, bags, etc.)
│   └── other/            # Other products
│
├── banners/              # Banner and hero images
│   ├── hero/             # Homepage hero banners
│   ├── promotional/      # Sale and promotional banners
│   └── featured/         # Featured product showcase
│
└── avatars/              # User and team photos
    ├── users/            # Customer/user profile pictures
    ├── team/             # Team member photos
    └── testimonials/     # Customer testimonial photos
```

## 🖼️ Usage in Code

### Products
```typescript
<Image 
  src="/images/products/tshirts/product-name.jpg"
  alt="Product Name"
  width={400}
  height={400}
/>
```

### Banners
```typescript
<Image 
  src="/images/banners/hero/hero-banner.jpg"
  alt="Hero Banner"
  width={1200}
  height={600}
/>
```

### Avatars
```typescript
<Image 
  src="/images/avatars/team/member-name.jpg"
  alt="Team Member"
  width={200}
  height={200}
/>
```

## 📤 Pushing New Images

1. Place images in the appropriate folder
2. Run: `git add public/images/`
3. Commit: `git commit -m "Add new images: [description]"`
4. Push: `git push origin main`

## 📏 Image Naming Convention

- Use **lowercase** with **hyphens**: `tshirt-black-front.jpg`
- Include **color/variant**: `hoodie-red-back.jpg`
- Include **view**: `product-front.jpg`, `product-back.jpg`
- For avatars: `firstname-lastname.jpg`

## 🎯 Image Format Recommendations

- **Products**: JPG (quality 80-85%) or PNG for transparency
- **Banners**: WebP or JPG for web optimization
- **Avatars**: JPG or PNG (aim for 1:1 aspect ratio)

Keep images under 500KB where possible for better performance.
