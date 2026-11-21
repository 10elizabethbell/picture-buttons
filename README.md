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
- **Drag a picture in the message** along to move it, or out of the box to take it away.
  The **✕** at the right end of the message box clears the whole message.
- ⬅️ at the top of a folder page, or the phone's back button, goes back home. Each
  folder page is tinted its own colour, so the child can tell which page they're on.

## Changing the buttons (no coding)

Tap **✏️** next to the speaker and enter your 4-digit code. The first time, you choose
the code instead. Like an iPhone home screen, every button then starts to wiggle and
gets a **✕** in its corner. **Touch and hold a button, then drag it** to move it, for
example to put the ones a child uses most near the top. With a mouse, just drag. The
top strip becomes a toolbar:

| | |
|---|---|
| **+ Add** | Add a button to the page you're on. |
| **✕** on a button | Remove it. This works on built-in buttons too; they're hidden, not deleted. |
| **↩️ Undo** | Step back one change at a time. |
| **⚙️** | Settings: **Change the code**, or **Reset every page** back to how it started (buttons, hidden buttons and order). Undo works straight after a reset. |
| **Done** | Back to the child's view. |

### More than one kid

Each kid can have their own buttons: what's added, hidden and moved is kept separately
for each.

- **Add kids** in edit mode: ⚙️ → **Kids** → **Add a kid**. Give them a name and a
  picture. They can start with the usual buttons or with a copy of the current kid's.
  The first kid is called "Kid 1" until you rename them with **Change**.
- **Switch kids:** once there are two or more, the kid's picture appears above ✏️ in the
  top strip. Tap it and choose a name. Switching doesn't need the code. It clears the
  message and goes back to the home page.
- **While editing**, the picture at the left of the toolbar shows whose buttons you're
  changing. Tap it to switch to another kid's without entering the code again. Undo
  steps back only through the current kid's changes, and Reset only resets the current
  kid.
- **Remove** a kid from the same Kids screen. Their buttons are deleted from the device.

The code and **Show words** are shared by everyone on the device.

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
     (the **📋 Paste** button, or Ctrl+V / ⌘V on a computer). It starts cropped to the
     middle. **Tap the photo in the preview** (it has a ✂️ badge) to adjust it:
     drag to move it, and pinch, scroll, use the slider or tap − / + to zoom.
     **Reset** goes back to the middle. The saved button is a small 320px square.
   - **Words**: short text shown on the button.
3. Type what it should **say out loud**. For a Words button, you can leave this empty
   and it says the words. Check the preview, then tap **Add button**.

The new button goes at the end of the page you added it from.

**Where changes are kept:** added buttons (photos included), hidden buttons and the order
you put buttons in are saved in this browser on this device. They are never uploaded. This means:

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
- **Analytics:** visits are counted with Google Analytics, loaded through Google Tag
  Manager (container `GTM-T6F5JB6T`, in the `<head>` of `index.html`). The page only
  loads the container; which tags fire is set up in Tag Manager. Nothing a family adds is
  sent with it: photos, words, kids' names and messages stay on the device. The site
  still works if the tag is blocked.
- There are no accounts.
- The code avoids newer JavaScript so that it runs on older hand-me-down tablets.
- This is a communication aid. It does not replace a speech-language pathologist.

## Run locally

Open `index.html` in a browser. No build step or install is needed.

## Publishing changes

GitHub Pages lets browsers keep files for 10 minutes. If `index.html` updates but a
cached `app.js` doesn't, the page can come up blank. To prevent that, `index.html` links
to `styles.css?v=…` and `app.js?v=…` with a fingerprint of each file's contents.

**After editing `styles.css` or `app.js`, run `./stamp.sh` before committing.** To have
git do it on every commit, install the hook once:

```sh
printf '#!/bin/sh\n./stamp.sh && git add index.html\n' > .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit
```
