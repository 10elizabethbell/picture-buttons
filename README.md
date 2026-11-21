# Picture Buttons

A simple picture-based communication board for children who have a hard time
saying how they feel or what they want. Pictures carry the meaning. Words are hidden
unless a grown-up turns on **Show words**.

**Live site:** https://10elizabethbell.github.io/picture-buttons/

## How it works

- **Tap a picture** to add it to the top strip and have the device say it aloud.
- **Say it** reads the whole sentence in order.
- **⬅️** removes the last picture. **🗑️** clears the strip.
- **👍 / 👎 / ❓** answer questions.
- Groups: *I feel*, *I want*, *Answers*.

## Editing the pictures and phrases

All tiles are defined at the top of `app.js` in the `TILES` object:

```js
{ icon: '😊', label: 'happy', say: 'I feel happy' }
```

- `icon`: the picture (any emoji).
- `label`: the word shown only when **Show words** is on.
- `say`: what the device speaks.

## Notes

- Pictures are emoji, so they look slightly different on each device (Apple, Android, Windows).
- Speech uses the device's built-in English voice. It works offline once the page has loaded.
- Nothing is stored or sent anywhere. The site is plain HTML, CSS and JavaScript with no accounts and no tracking.
- This is a learning aid. It does not replace a speech-language pathologist or other professional support.

## Run locally

Open `index.html` in a browser. No build step or install is needed.
