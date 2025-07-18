# CSS Loading Debug Guide for Publii

## Method 1: Browser Developer Tools

### Step 1: Open Developer Tools
1. In your Publii preview, right-click anywhere on the page
2. Select "Inspect" or "Inspect Element"
3. Or press `F12` (Windows) or `Cmd+Option+I` (Mac)

### Step 2: Check Network Tab
1. Click the "Network" tab in Developer Tools
2. Refresh the page (`Cmd+R` or `Ctrl+R`)
3. Look for your CSS files:
   - `main.css` should appear with status `200` (successful)
   - `style.css` should appear with status `200`
   - `animations.css` should appear with status `200`
4. If any file shows `404` or `Failed`, the path is incorrect

### Step 3: Check Console Tab
1. Click the "Console" tab
2. Look for any red error messages like:
   - "Failed to load resource"
   - "404 Not Found"
   - CSS syntax errors

### Step 4: Check Elements Tab
1. Click the "Elements" tab (or "Inspector" in Firefox)
2. Find the `<head>` section
3. Look for your CSS links:
   ```html
   <link rel="stylesheet" href="assets/css/main.css">
   ```
4. Click on the CSS file link to see if it opens and shows your styles

## Method 2: Check Applied Styles

### Inspect Specific Elements
1. Right-click on an element (like the hero title)
2. Select "Inspect"
3. In the "Styles" panel, you should see:
   - Your custom CSS classes
   - Colors, fonts, and spacing from your theme
   - If styles are crossed out, they're being overridden

### Look for These Key Styles
- `.bg-black` should show `background-color: #000000`
- `.text-cyan-400` should show `color: #22d3ee`
- `.animate-float` should show animation properties

## Method 3: Quick Visual Checks

### Background Colors
- Hero section should be black with gradient overlay
- Header should be black/transparent
- Sections should have blue/purple gradients

### Typography
- Main title should be large and have gradient text
- Body text should be white/gray colors
- Font should be system font stack

### Animations
- Stars should be visible and blinking
- Character image should float up and down
- Hover effects should work on buttons

## Method 4: File Structure Check

Ensure your files are in the correct locations:
```
superpepe-publii-theme/
├── assets/
│   ├── css/
│   │   ├── main.css (imports style.css and animations.css)
│   │   ├── style.css (main styles)
│   │   └── animations.css (animations)
│   └── js/
│       └── scripts.js
├── default.hbs (references main.css)
└── config.json
```

## Method 5: Common Issues & Fixes

### Issue: Styles Not Loading
**Check:**
- File paths in `default.hbs` are correct
- CSS files exist in `assets/css/` folder
- No syntax errors in CSS files

### Issue: Some Styles Missing
**Check:**
- `main.css` properly imports other CSS files
- No conflicting styles
- CSS specificity issues

### Issue: Animations Not Working
**Check:**
- `animations.css` is being loaded
- JavaScript is working (for star generation)
- Browser supports CSS animations

## Method 6: Publii-Specific Checks

### Theme Settings
1. Go to Publii → Site Settings → Theme
2. Make sure SuperPepe theme is selected and active
3. Check if theme options are saving correctly

### Regenerate Site
1. In Publii, click "Regenerate" button
2. This rebuilds the site with latest changes
3. Check preview again

### Clear Cache
1. In Publii preview, try hard refresh:
   - Windows: `Ctrl+Shift+R`
   - Mac: `Cmd+Shift+R`
2. Or clear browser cache entirely

## Expected Results

If CSS is loading correctly, you should see:
- Black background with blue/purple gradients
- White text on dark backgrounds
- Cyan-colored links and accents
- Yellow text for highlights
- Smooth animations and transitions
- Professional crypto-themed styling

## Troubleshooting Commands

If using terminal in the theme folder:
```bash
# Check if files exist
ls -la assets/css/

# Check file contents
cat assets/css/main.css
cat assets/css/style.css

# Check file permissions
ls -la assets/css/*.css
```
