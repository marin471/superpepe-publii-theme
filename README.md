# SuperPepe Publii Theme

A modern, crypto-focused Publii theme inspired by the SuperPepe design. Features animated backgrounds, presale widgets, countdown timers, and a professional meme coin aesthetic.

![SuperPepe Theme Preview](https://via.placeholder.com/800x400/000000/ffffff?text=SuperPepe+Theme)

## Features

✨ **Modern Crypto Design** - Dark theme with blue/purple gradients and space aesthetics
🎮 **Interactive Elements** - Animated backgrounds, floating characters, marquee text
📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
⚡ **Performance Optimized** - Fast loading with optimized CSS and JavaScript
🎨 **Highly Customizable** - Extensive theme options in Publii interface
📝 **SEO Friendly** - Optimized for search engines and social sharing
🎯 **Crypto-Focused** - Perfect for meme coins, DeFi projects, and crypto blogs

## Installation

### Method 1: Direct Upload (Recommended)

1. Download the theme ZIP file
2. Open Publii application
3. Go to **Site Settings** → **Themes**
4. Click **Upload Theme** button
5. Select the downloaded ZIP file
6. Click **Upload**
7. Activate the theme

### Method 2: Manual Installation

1. Extract the ZIP file
2. Copy the `superpepe` folder to your Publii themes directory:
   - **Windows**: `%USERPROFILE%\Documents\Publii\sites\YOUR_SITE\input\themes\`
   - **macOS**: `~/Documents/Publii/sites/YOUR_SITE/input/themes/`
   - **Linux**: `~/Documents/Publii/sites/YOUR_SITE/input/themes/`
3. Restart Publii
4. Go to **Site Settings** → **Themes** and activate SuperPepe

## Theme Configuration

After installing, customize your theme in **Site Settings** → **Theme Options**:

### Brand Settings
- **Site Title**: Your project name (e.g., "SUPER PEPE")
- **Site Subtitle**: Your mission statement or tagline
- **Hero Character Image**: Upload your mascot or character image
- **About Section Image**: Upload custom about section background

### Presale Configuration
- **Show Presale Widget**: Toggle presale widget visibility
- **Token Price**: Set your token price (e.g., "$0.00008")
- **Funds Raised**: Current funding amount
- **Funding Goal**: Target funding goal
- **Countdown Timer**: Set days, hours, minutes, seconds

### Social Media
- **Twitter/X URL**: Link to your Twitter profile
- **Telegram URL**: Link to your Telegram group

## Customization

### Colors & Styling

The theme uses CSS custom properties for easy color customization. Edit `/assets/css/style.css`:

```css
:root {
  --primary-color: #22d3ee;    /* Cyan */
  --secondary-color: #facc15;  /* Yellow */
  --accent-color: #4ade80;     /* Green */
  --background-dark: #000000;  /* Black */
  --text-primary: #ffffff;     /* White */
  --text-secondary: #d1d5db;   /* Gray */
}
```

### Adding Custom Sections

Create custom page sections by editing `index.hbs`:

```handlebars
<!-- Custom Section -->
<section class="py-20 bg-gradient-to-b from-blue-900 to-purple-900">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center text-white mb-8">
      Your Custom Section
    </h2>
    <p class="text-center text-gray-300">
      Add your content here...
    </p>
  </div>
</section>
```

### Modifying Animations

Animations are defined in `/assets/css/animations.css`. Customize or add new animations:

```css
@keyframes yourAnimation {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.your-element {
  animation: yourAnimation 3s ease-in-out infinite;
}
```

## Content Structure

### Homepage Sections

The theme includes these main sections:

1. **Hero Section** - Main title, character, and presale widget
2. **Marquee Banner** - Scrolling promotional text
3. **Blog Posts** - Latest posts grid (if posts exist)
4. **About Section** - Project description with wooden sign design
5. **Footer** - Disclaimer and social links

### Blog Features

- **Post Templates** - Full-featured blog post layout
- **Tag Pages** - Organized content by tags
- **Author Pages** - Author profiles and post listings
- **Search** - Built-in search functionality
- **404 Page** - Custom error page with character

### Menu Configuration

Set up your navigation in **Site Settings** → **Menus**:

- Create a "Main Menu"
- Add pages like About, Roadmap, How to Buy, FAQs
- The theme will automatically use anchor links for single-page sections

## Performance Tips

### Optimize Images
- Use WebP format when possible
- Compress images before uploading
- Consider using CDN for better loading speeds

### JavaScript Performance
- The theme includes optimized JavaScript
- Animations respect `prefers-reduced-motion` setting
- Lazy loading for better performance

## Troubleshooting

### Common Issues

**Theme not appearing**:
- Ensure ZIP file is properly uploaded
- Check file permissions in themes directory
- Restart Publii application

**Images not loading**:
- Check image file paths in theme options
- Ensure images are properly uploaded to media library
- Verify image URLs are correct

**Countdown not working**:
- Check JavaScript console for errors
- Ensure countdown elements have correct data attributes
- Verify date format in theme options

**Styling issues**:
- Clear browser cache
- Regenerate site in Publii
- Check CSS syntax in custom styles

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Examples

### Change Hero Background

Replace the gradient background in `index.hbs`:

```handlebars
<!-- Change this -->
<div class="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-black">

<!-- To this -->
<div class="w-full h-full bg-gradient-to-br from-green-900 via-teal-900 to-black">
```

### Add Social Media Icons

In `default.hbs` footer section:

```handlebars
<a href="{{@config.custom.socialDiscord}}" class="text-gray-400 hover:text-white transition-colors">
  <span class="text-2xl">💬</span>
</a>
```

### Custom Presale Widget

Modify the presale widget in `index.hbs` to match your project needs:

```handlebars
<div class="text-center">
  <p class="text-yellow-400 font-bold">1 {{@config.custom.tokenSymbol}} = {{@config.custom.presalePrice}}</p>
  <p class="text-sm text-gray-400 mt-2">Next stage: $0.0001</p>
</div>
```

## Support

For theme support and customization help:

- Check the [Publii Documentation](https://getpublii.com/docs/)
- Review the theme files for implementation details
- Modify CSS and templates as needed for your project

## License

This theme is provided as-is for educational and personal use. Feel free to modify and adapt it for your projects.

## Changelog

### Version 1.0.0
- Initial release
- Complete SuperPepe design implementation
- Responsive design
- Blog functionality
- Theme customization options
- SEO optimization

---

**Note**: This theme is designed for crypto/meme coin projects. Ensure compliance with local regulations when using for financial projects.
