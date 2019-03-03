# jQuery.loadButton.js

This plugin allows you to animate a button to signal to users that something is loading.

NOTE: Requires font-awesome with fa-spin class.

## Usage:

### HTML:
```html
<button id="submit-btn">Send Form</button>
```

### JS:
```javascript:
// Turn loading on
$("#submit-btn").loadButton('on', {...options...});

// Turn loading off
$("#submit-btn").loadButton('off');
```

### Default options
```javascript:
{
    faClass: 'fas',
    faIcon: 'fa-cog',
    doSpin: true,
    loadingText: 'Saving...',
    loadingBackground: 'darkred',
    loadingForeground: 'white'
}
```