# Adding Real Images to Your Website

I've updated your website components to include image placeholders and support real images. Here's how to add your actual product and service images:

## 📸 Current Image Support

The following sections now support images:

### 1. **Products Section** (`src/components/Products.tsx`)
- Technical diagrams for each product
- Interactive expandable product cards
- Each product has an abstract SVG visualization

### 2. **ProductsGrid** (`src/components/ProductsGrid.tsx`)
- Image field in each product card (currently using placeholder URLs)
- High aspect ratio images (4:3) recommended
- Displays above product information

### 3. **Services Section** (`src/components/Services.tsx`)
- Technical capability visualizations for each service
- Animated SVG backgrounds with grid patterns
- Icon-based visual representation

### 4. **Industries Section** (`src/components/Industries.tsx`)
- Abstract technical diagrams for each capability
- SVG-based graphics showing technical architecture

### 5. **About Section** (`src/components/About.tsx`)
- Company facility visualization
- Abstract building/infrastructure graphic

## 🖼️ How to Add Real Images

### Option A: Using Placeholder URLs (Current)
The components currently use placeholder URLs from `https://via.placeholder.com`

Example in ProductsGrid:
```tsx
image: 'https://via.placeholder.com/400x300?text=PLC+Controller+System',
```

### Option B: Add Local Images to Assets

1. **Create image folders in** `src/assets/`:
```
src/assets/
├── products/
│   ├── plc.jpg
│   ├── hmi.jpg
│   ├── vfd.jpg
│   └── safety.jpg
├── services/
│   ├── integration.jpg
│   ├── optimization.jpg
│   └── support.jpg
└── about/
    └── facility.jpg
```

2. **Import and use in components**:
```tsx
import plcImage from '../assets/products/plc.jpg';
import hmiImage from '../assets/products/hmi.jpg';

const products = [
  {
    ...
    image: plcImage,
    ...
  },
  {
    ...
    image: hmiImage,
    ...
  }
];
```

### Option C: Use External CDN/Cloud Storage

```tsx
const products = [
  {
    ...
    image: 'https://your-cdn.com/products/plc-controller.jpg',
    ...
  }
];
```

## 📋 Recommended Images to Add

### Products
- **PLC-500 Series**: Industrial controller hardware shot
- **HMI-Touch Pro Series**: Touchscreen display device
- **VFD-Ultra Series**: Variable frequency drive unit
- **Safety Controller SC-300**: Safety rated control module

### Services
- **System Integration**: Control panel or installation scene
- **Process Optimization**: Factory/production floor scene
- **Technical Support**: Engineer at workstation/remote support

### About
- **Company Facility**: Warehouse/office or team photo
- **Manufacturing Equipment**: Internal workshop/assembly area

## 🎨 Image Requirements

- **Format**: JPG, PNG, WebP (WebP recommended for web)
- **Products Grid**: 400x300px (4:3 ratio)
- **Full-width sections**: 600x400px or higher
- **Quality**: Optimized for web (72 DPI), compressed
- **Alt text**: Always provided for accessibility

## 📝 Next Steps

1. **Prepare your images** (product photos, facility photos, process diagrams)
2. **Choose storage method** (local assets or external CDN)
3. **Update image paths** in the components
4. **Test responsive display** on different screen sizes
5. **Optimize images** for fast loading

## 🔗 Files Updated

- ✅ `src/components/Products.tsx` - Visual diagrams for each product
- ✅ `src/components/ProductsGrid.tsx` - Image support in product cards
- ✅ `src/components/Services.tsx` - Capability visualizations
- ✅ `src/components/Industries.tsx` - Technical diagrams
- ✅ `src/components/About.tsx` - Company facility visualization
- ✅ `src/assets/images.ts` - Image path definitions (ready to update)

## 💡 Tips for Best Results

1. **Consistency**: Use professional photos with consistent lighting and style
2. **Branding**: Maintain industrial/technical aesthetic matching your brand
3. **Performance**: Compress images (use tools like TinyPNG or Squoosh)
4. **Accessibility**: Always include descriptive alt text
5. **Responsive**: Test that images look good on mobile, tablet, and desktop

## 🚀 Example: Adding a Product Image

**Current (Placeholder):**
```tsx
{
  id: 1,
  model: 'PLC-500 Series',
  image: 'https://via.placeholder.com/400x300?text=PLC+Controller+System',
  ...
}
```

**With Local File:**
```tsx
import plcImage from '../assets/products/plc-500.jpg';

{
  id: 1,
  model: 'PLC-500 Series',
  image: plcImage,
  ...
}
```

**With External URL:**
```tsx
{
  id: 1,
  model: 'PLC-500 Series',
  image: 'https://your-domain.com/images/plc-500.jpg',
  ...
}
```

---

The website is now **fully ready** to display your product and service images. Just replace the placeholder URLs with your actual images!
