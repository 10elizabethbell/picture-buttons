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

## Changing the buttons (no coding)

Tap **✏️ Edit** at the top right of any page and enter your 4-digit code. The first time,
you choose the code instead. Like an iPhone home screen, every button then starts to
wiggle and gets a **✕** in its corner. The top strip becomes a toolbar:

| | |
|---|---|
| **+ Add** | Add a button to the page you're on. |
| **✕** on a button | Remove it. This works on built-in buttons too; they're hidden, not deleted. |
| **↩️ Undo** | Step back one change at a time. |
| **⚙️** | Settings: **Change the code**, or **Reset every page** back to how it started. Undo works straight after a reset. |
| **Done** | Back to the child's view. |

**Forgot the code?** Tap *Forgot the code?* on the keypad and answer a multiplication
question. You can then choose a new code, and nothing you added is lost. The code is a
child lock to stop changes by accident, not a security feature. It's stored on the
device, so don't reuse a PIN you use for anything else.

While editing, tapping a button doesn't speak. Tapping a colourful folder still opens it,
so you can change the buttons inside. Changes save as you go. The Undo history lasts
until the page is reloaded; Reset is always available.

### Adding a button

1. Tap **+ Add**.
2. Choose what the button shows:
   - **Emoji**: pick from suggestions that suit the page, or type any emoji.
   - **Photo**: take one, choose one from the device, or paste a copied picture
     (the **📋 Paste** button, or Ctrl+V / ⌘V on a computer). It's cropped to a square
     and shrunk.
   - **Words**: short text shown on the button.
3. Type what it should **say out loud**. For a Words button, you can leave this empty
   and it says the words. Check the preview, then tap **Add button**.

The new button goes at the end of the page you added it from.

**Where changes are kept:** added buttons (photos included) and hidden buttons are saved
in this browser on this device. They are never uploaded. This means:

- They don't appear on other devices or other browsers.
- Clearing the browser's website data deletes them.
- On iPhone and iPad, Safari can clear a website's saved data if the site isn't opened
  for about a week. Adding the site to the Home Screen (Share → Add to Home Screen)
  protects it.

## Editing the built-in pictures and phrases

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
