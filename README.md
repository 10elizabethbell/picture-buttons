# Picture Buttons

A simple picture-based communication board for children who have a hard time
saying how they feel or what they want. Pictures carry the meaning. Words are hidden
unless a grown-up turns on **Show words**.

**Live site:** https://10elizabethbell.github.io/picture-buttons/

## How it works

**Home** has 12 big buttons. Everything fits on one screen, with no scrolling.

- **Colourful stacked buttons open a page with more choices.** The card peeking out
  behind them means "there's more in here".
  - 😊😢 **Feelings**: happy, excited, calm, sad, worried, scared, angry, frustrated, tired
  - 🍕🍎 **Eat**: nine foods, plus 😋 yummy, 😖 yucky and ➕ more
  - 🥤 **Drink**: six drinks, plus ➕ more
  - 🩹 **Hurts**: head, eye, ear, tooth, tummy, hand, leg, foot, sick
  - 🧸 **Play**: outside, ball, cars, puzzle, drawing, book, music, tablet, TV
  - 🧘 **Break**: quiet, hug, lie down, headphones, alone time, deep breaths
- **Plain white buttons say something straight away:** 🚽 bathroom, 🙋 help, 🛑 stop,
  👍 yes, 👎 no, ✅ all done.
- **Feelings** and **Hurts** have a small dot and a big dot, meaning "a little" and "a lot".

Every tap speaks out loud and adds the picture to the strip at the top. For example,
🍕🍎 → 🍕 → 😋 builds "I'm hungry. Pizza. Yummy." Then:

- 🔊 says the whole message.
- ⬅️ takes away the last picture. 🗑️ clears the strip.
- 🏠, or the phone's back button, goes back home. Each folder page is tinted its own
  colour, so the child can tell which page they're on.

## Editing the pictures and phrases

Everything lives in the `HOME` list at the top of `app.js`. A tile looks like this:

```js
{ icon: '🍕', label: 'pizza', say: 'Pizza' }
```

- `icon`: the picture (any emoji, or a list of 4 for a collage).
- `label`: the word shown only when **Show words** is on.
- `say`: what the device says.

To make a button open its own page, give it an `id`, a `color` and an `items` list.
Optional `extras` become the small round buttons under the choices. Keep each page to
nine or fewer choices so it stays calm and fits on one screen.

## Notes

- Pictures are emoji, so they look slightly different on Apple, Android and Windows.
- Speech uses the device's built-in English voice. It works offline once the page has loaded.
- Nothing is stored or sent anywhere. There are no accounts and no tracking.
- The code avoids newer JavaScript so that it runs on older hand-me-down tablets.
- This is a communication aid. It does not replace a speech-language pathologist.

## Run locally

Open `index.html` in a browser. No build step or install is needed.
