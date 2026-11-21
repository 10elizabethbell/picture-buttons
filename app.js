// Picture Buttons
//
// HOME is the first screen. A tile with `items` is a folder: tapping it opens its own
// page with more choices. `extras` are the smaller round "tell me more" buttons under
// a folder's choices.
//
// Tile fields:
//   icon   the picture: one emoji, or a list of 4 emoji shown as a small collage
//   dot    'sm' or 'lg' draws a small or big circle instead of an emoji (for "how much")
//   img    a photo (data URL). Only buttons added on the device use this.
//   text   words drawn as the picture. Only buttons added on the device use this.
//   label  the word, shown only when "Show words" is on
//   say    what the device says out loud
//   color  folder colour; everything inside the folder uses it
//   strip  false = tapping the folder speaks but does not add a picture to the top strip
//
// Buttons that grown-ups add are kept in this browser's localStorage, per page.
//
// Kept to old-browser-safe JavaScript on purpose: hand-me-down tablets are common.

function howMuch() {
  return [
    { dot: 'sm', label: 'a little', say: 'A little' },
    { dot: 'lg', label: 'a lot', say: 'A lot' },
  ];
}

var HOME = [
  {
    id: 'feelings', icon: ['😊', '😢', '😠', '😨'], label: 'feelings', say: 'Feelings',
    strip: false, color: '#2f6fdb',
    items: [
      { icon: '😊', label: 'happy', say: 'I feel happy' },
      { icon: '🤩', label: 'excited', say: 'I feel excited' },
      { icon: '😌', label: 'calm', say: 'I feel calm' },
      { icon: '😢', label: 'sad', say: 'I feel sad' },
      { icon: '😟', label: 'worried', say: 'I feel worried' },
      { icon: '😨', label: 'scared', say: 'I feel scared' },
      { icon: '😠', label: 'angry', say: 'I feel angry' },
      { icon: '😤', label: 'frustrated', say: 'I feel frustrated' },
      { icon: '😴', label: 'tired', say: 'I feel tired' },
    ],
    extras: howMuch(),
  },
  {
    id: 'eat', icon: ['🍕', '🍎', '🥪', '🍪'], label: 'eat', say: "I'm hungry", color: '#e8771c',
    items: [
      { icon: '🍕', label: 'pizza', say: 'Pizza' },
      { icon: '🍗', label: 'chicken', say: 'Chicken' },
      { icon: '🍝', label: 'pasta', say: 'Pasta' },
      { icon: '🥪', label: 'sandwich', say: 'A sandwich' },
      { icon: '🍎', label: 'fruit', say: 'Fruit' },
      { icon: '🥦', label: 'veggies', say: 'Veggies' },
      { icon: '🥣', label: 'cereal', say: 'Cereal' },
      { icon: '🍟', label: 'fries', say: 'Fries' },
      { icon: '🍪', label: 'snack', say: 'A snack' },
    ],
    extras: [
      { icon: '😋', label: 'yummy', say: 'Yummy' },
      { icon: '😖', label: 'yucky', say: 'Yucky' },
      { icon: '➕', label: 'more', say: 'More, please' },
    ],
  },
  {
    id: 'drink', icon: '🥤', label: 'drink', say: "I'm thirsty", color: '#0e8fa3',
    items: [
      { icon: '💧', label: 'water', say: 'Water' },
      { icon: '🥛', label: 'milk', say: 'Milk' },
      { icon: '🧃', label: 'juice', say: 'Juice' },
      { icon: '🍫', label: 'chocolate milk', say: 'Chocolate milk' },
      { icon: '🍋', label: 'lemonade', say: 'Lemonade' },
      { icon: '☕', label: 'hot chocolate', say: 'Hot chocolate' },
    ],
    extras: [
      { icon: '➕', label: 'more', say: 'More, please' },
    ],
  },
  {
    id: 'hurts', icon: '🩹', label: 'hurts', say: 'Something hurts', color: '#d6336c',
    items: [
      { icon: '🤕', label: 'head', say: 'My head' },
      { icon: '👁️', label: 'eye', say: 'My eye' },
      { icon: '👂', label: 'ear', say: 'My ear' },
      { icon: '🦷', label: 'tooth', say: 'My tooth' },
      { icon: '🤢', label: 'tummy', say: 'My tummy' },
      { icon: '✋', label: 'hand', say: 'My hand' },
      { icon: '🦵', label: 'leg', say: 'My leg' },
      { icon: '🦶', label: 'foot', say: 'My foot' },
      { icon: '🤒', label: 'sick', say: 'I feel sick' },
    ],
    extras: howMuch(),
  },
  {
    id: 'play', icon: '🧸', label: 'play', say: 'I want to play', color: '#7c4ddb',
    items: [
      { icon: '🌳', label: 'outside', say: 'Outside' },
      { icon: '⚽', label: 'ball', say: 'Ball' },
      { icon: '🚗', label: 'cars', say: 'Cars' },
      { icon: '🧩', label: 'puzzle', say: 'A puzzle' },
      { icon: '🎨', label: 'draw', say: 'Drawing' },
      { icon: '📖', label: 'book', say: 'A book' },
      { icon: '🎵', label: 'music', say: 'Music' },
      { icon: '📱', label: 'tablet', say: 'The tablet' },
      { icon: '📺', label: 'TV', say: 'TV' },
    ],
  },
  {
    id: 'break', icon: '🧘', label: 'break', say: 'I need a break', color: '#1f9d55',
    items: [
      { icon: '🤫', label: 'quiet', say: 'Quiet' },
      { icon: '🤗', label: 'hug', say: 'A hug' },
      { icon: '🛏️', label: 'lie down', say: 'Lie down' },
      { icon: '🎧', label: 'headphones', say: 'My headphones' },
      { icon: '🚪', label: 'alone', say: 'Alone time' },
      { icon: '🌬️', label: 'breathe', say: 'Deep breaths' },
    ],
  },
  { icon: '🚽', label: 'bathroom', say: 'I need the bathroom' },
  { icon: '🙋', label: 'help', say: 'I need help' },
  { icon: '🛑', label: 'stop', say: 'Stop, please' },
  { icon: '👍', label: 'yes', say: 'Yes' },
  { icon: '👎', label: 'no', say: 'No' },
  { icon: '✅', label: 'all done', say: 'All done' },
];

// Emoji offered in the "Add a button" form, picked to suit each page.
var SUGGEST = {
  home: ['👩', '👨', '👵', '👴', '👶', '🧒', '🐶', '🐱', '🏫', '🚗', '🚌', '🛁', '🛏️', '❤️', '⭐', '🎁'],
  feelings: ['🤪', '🥰', '😮', '😕', '😳', '😞', '🥺', '😭', '😡', '🙂', '😬', '🤔'],
  eat: ['🍌', '🍓', '🍇', '🍉', '🥕', '🧀', '🥚', '🥞', '🍔', '🌭', '🌮', '🍦', '🧁', '🍿', '🥨', '🍩'],
  drink: ['🍼', '🍊', '🍵', '🧋', '🧊', '🍓', '🥥', '🍉'],
  hurts: ['👃', '💪', '🦴', '🤧', '😷', '🥶', '🥵', '🐝', '🤮'],
  play: ['🎮', '🚲', '🏊', '🎈', '🦖', '🚂', '✈️', '🎲', '🧱', '🏀', '🎤', '🛹'],
  break: ['🛁', '🧸', '🐶', '🐱', '🌳', '🎶', '🌙', '🛋️'],
};

var NEUTRAL = '#5b6470';
var STORE_KEY = 'pictureButtons.custom.v1';

// Every tile gets a colour. Things inside a folder use the folder's colour.
HOME.forEach(function (tile) {
  if (!tile.color) tile.color = NEUTRAL;
  (tile.items || []).concat(tile.extras || []).forEach(function (child) {
    if (!child.color) child.color = tile.color;
  });
});

var picks = [];
var cameFromHome = false;
var custom = loadCustom();
var view = document.getElementById('view');
var sentenceEl = document.getElementById('sentence');
var wordsBox = document.getElementById('words');
var editBox = document.getElementById('editing');

// ---------- helpers ----------

function el(tag, className, text) {
  var node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function empty(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

// Mix a hex colour toward white. amount 0 = same colour, 1 = white.
function tint(hex, amount) {
  var n = parseInt(hex.slice(1), 16);
  var mix = function (c) { return Math.round(c + (255 - c) * amount); };
  return 'rgb(' + mix(n >> 16) + ',' + mix((n >> 8) & 255) + ',' + mix(n & 255) + ')';
}

function speak(text) {
  if (!text || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  var utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
}

function picture(item) {
  var icon = el('span', 'icon');
  icon.setAttribute('aria-hidden', 'true');
  if (item.img) {
    var img = el('img', 'photo');
    img.src = item.img;
    img.alt = '';
    icon.appendChild(img);
  } else if (item.text) {
    icon.appendChild(el('span', 'text-pic', item.text));
  } else if (Array.isArray(item.icon)) {
    icon.className += ' collage';
    item.icon.forEach(function (e) { icon.appendChild(el('span', '', e)); });
  } else if (item.dot) {
    icon.className += ' dot-wrap';
    icon.appendChild(el('span', 'dot dot-' + item.dot));
  } else {
    icon.textContent = item.icon;
  }
  return icon;
}

function colourise(node, color) {
  node.style.setProperty('--c', color);
  node.style.setProperty('--t', tint(color, 0.86));
}

// ---------- buttons added on this device ----------

function loadCustom() {
  try {
    var data = JSON.parse(window.localStorage.getItem(STORE_KEY) || '{}');
    return data && typeof data === 'object' ? data : {};
  } catch (e) {
    return {};
  }
}

// Returns false when the browser refuses (storage full or blocked).
function saveCustom() {
  try {
    var json = JSON.stringify(custom, function (key, value) {
      // colour, page and the custom flag are worked out again when the page is drawn
      return key === 'color' || key === 'page' || key === 'custom' ? undefined : value;
    });
    window.localStorage.setItem(STORE_KEY, json);
    return true;
  } catch (e) {
    return false;
  }
}

// Ask the browser not to clear our storage when space runs low. Not every browser agrees.
function keepStorage() {
  try {
    if (navigator.storage && navigator.storage.persist) navigator.storage.persist();
  } catch (e) { /* not supported */ }
}

// The built-in tiles for a page, followed by the ones added on this device.
function pageItems(pageId, builtIn, color) {
  var mine = custom[pageId] || [];
  mine.forEach(function (item) {
    item.color = color;
    item.page = pageId;
    item.custom = true;
  });
  return builtIn.concat(mine);
}

function removeCustom(item) {
  if (!window.confirm('Remove this button?')) return;
  custom[item.page] = (custom[item.page] || []).filter(function (c) { return c.id !== item.id; });
  saveCustom();
  render();
}

// ---------- the top strip ----------

function addPick(item) {
  picks.push(item);
  renderStrip(true);
}

function renderStrip(animateLast) {
  empty(sentenceEl);

  if (picks.length === 0) {
    var hint = el('span', 'placeholder', '👆');
    hint.setAttribute('aria-hidden', 'true');
    sentenceEl.appendChild(hint);
    return;
  }

  picks.forEach(function (item, i) {
    var chip = el('span', 'chip');
    chip.setAttribute('aria-hidden', 'true');
    colourise(chip, item.color);
    chip.appendChild(picture(item));
    if (item.label) chip.appendChild(el('span', 'word', item.label));
    if (animateLast && i === picks.length - 1) chip.className += ' new';
    sentenceEl.appendChild(chip);
  });

  sentenceEl.scrollLeft = sentenceEl.scrollWidth;
}

// ---------- tiles ----------

function makeTile(item) {
  var btn = el('button', 'tile');
  btn.type = 'button';
  btn.setAttribute('aria-label', item.say);
  colourise(btn, item.color);
  btn.appendChild(picture(item));
  if (item.label) btn.appendChild(el('span', 'word', item.label));

  if (item.items) {
    btn.className += ' folder';
    btn.addEventListener('click', function () {
      var last = picks[picks.length - 1];
      if (item.strip !== false && last !== item) addPick(item);
      speak(item.say);
      cameFromHome = true;
      location.hash = item.id;
    });
  } else {
    btn.addEventListener('click', function () {
      addPick(item);
      speak(item.say);
    });
  }
  return btn;
}

// A tile with a red ✕ in the corner, shown in edit mode for buttons added on this device.
function withRemove(tile, item) {
  var wrap = el('div', 'tile-wrap');
  var x = el('button', 'remove-btn', '✕');
  x.type = 'button';
  x.setAttribute('aria-label', 'Remove this button: ' + item.say);
  x.addEventListener('click', function () { removeCustom(item); });
  wrap.appendChild(tile);
  wrap.appendChild(x);
  return wrap;
}

function makeAddTile(pageId, color) {
  var btn = el('button', 'tile add-tile');
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Add a button');
  colourise(btn, color);
  var icon = el('span', 'icon', '➕');
  icon.setAttribute('aria-hidden', 'true');
  btn.appendChild(icon);
  btn.appendChild(el('span', 'add-word', 'Add'));
  btn.addEventListener('click', function () { openAdd(pageId, color); });
  return btn;
}

// pageId is set for a page's main grid, which is where added buttons and ➕ go.
function grid(items, className, pageId, color) {
  var editing = editBox.checked;
  var box = el('div', className);
  items.forEach(function (item) {
    var tile = makeTile(item);
    box.appendChild(editing && item.custom ? withRemove(tile, item) : tile);
  });
  if (pageId && editing) box.appendChild(makeAddTile(pageId, color));
  return box;
}

function editBar() {
  var bar = el('div', 'edit-bar');
  bar.appendChild(el('span', '', 'Tap ➕ to add a button. Tap ✕ to remove one you added.'));
  var done = el('button', 'edit-done', 'Done');
  done.type = 'button';
  done.addEventListener('click', function () {
    editBox.checked = false;
    render();
  });
  bar.appendChild(done);
  return bar;
}

// ---------- pages ----------

function showHome() {
  document.body.classList.add('at-home');
  document.body.classList.remove('in-folder');
  document.body.style.backgroundColor = '';
  empty(view);
  if (editBox.checked) view.appendChild(editBar());
  view.appendChild(grid(pageItems('home', HOME, NEUTRAL), 'grid home-grid', 'home', NEUTRAL));
}

function showFolder(folder) {
  document.body.classList.add('in-folder');
  document.body.classList.remove('at-home');
  document.body.style.backgroundColor = tint(folder.color, 0.9);
  empty(view);
  if (editBox.checked) view.appendChild(editBar());

  var nav = el('div', 'nav');
  var home = el('button', 'home-btn');
  home.type = 'button';
  home.setAttribute('aria-label', 'Go home');
  home.appendChild(el('span', '', '🏠'));
  home.addEventListener('click', goHome);

  var here = el('div', 'here');
  colourise(here, folder.color);
  here.appendChild(picture(folder));
  here.appendChild(el('span', 'word', folder.label));

  nav.appendChild(home);
  nav.appendChild(here);
  view.appendChild(nav);
  view.appendChild(grid(pageItems(folder.id, folder.items, folder.color), 'grid', folder.id, folder.color));

  if (folder.extras) view.appendChild(grid(folder.extras, 'extras'));
}

function findFolder(id) {
  for (var i = 0; i < HOME.length; i++) {
    if (HOME[i].id === id && HOME[i].items) return HOME[i];
  }
  return null;
}

// Draw the current page in place (after adding/removing buttons or toggling edit mode).
function render() {
  var folder = findFolder(location.hash.slice(1));
  if (folder) showFolder(folder);
  else showHome();
}

// Draw the page after moving to it, with a short fade and focus on the home button.
function route() {
  var folder = findFolder(location.hash.slice(1));
  if (!folder) cameFromHome = false;
  render();
  view.className = 'view';
  void view.offsetWidth; // restart the fade-in
  view.className = 'view run';
  window.scrollTo(0, 0);
  var home = view.querySelector('.home-btn');
  if (home) home.focus({ preventScroll: true });
}

function goHome() {
  if (cameFromHome) {
    history.back(); // keeps the phone's back button in step
  } else {
    history.replaceState(null, '', location.pathname + location.search);
    route();
  }
}

// ---------- "Add a button" form ----------

var dialog = document.getElementById('add-dialog');
var kindButtons = Array.prototype.slice.call(dialog.querySelectorAll('.kind'));
var panes = Array.prototype.slice.call(dialog.querySelectorAll('.pane'));
var suggestBox = document.getElementById('emoji-suggest');
var emojiInput = document.getElementById('emoji-input');
var photoInput = document.getElementById('photo-input');
var textInput = document.getElementById('text-input');
var sayInput = document.getElementById('say-input');
var pasteButton = document.getElementById('paste-btn');
var photoStatus = document.getElementById('photo-status');
var previewBox = document.getElementById('preview');
var saveButton = document.getElementById('add-save');
var draft = null;

function openAdd(pageId, color) {
  draft = { page: pageId, color: color, kind: 'emoji', icon: '', img: '', text: '' };
  emojiInput.value = '';
  photoInput.value = '';
  textInput.value = '';
  sayInput.value = '';
  photoStatus.textContent = '';

  empty(suggestBox);
  (SUGGEST[pageId] || SUGGEST.home).forEach(function (emoji) {
    var b = el('button', 'suggest', emoji);
    b.type = 'button';
    b.addEventListener('click', function () {
      draft.icon = emoji;
      emojiInput.value = emoji;
      markSuggestion();
      updatePreview();
    });
    suggestBox.appendChild(b);
  });

  setKind('emoji');
  dialog.hidden = false;
  document.body.classList.add('dialog-open');
  kindButtons[0].focus();
}

function closeAdd() {
  dialog.hidden = true;
  document.body.classList.remove('dialog-open');
  draft = null;
}

function setKind(kind) {
  draft.kind = kind;
  kindButtons.forEach(function (b) {
    b.setAttribute('aria-pressed', String(b.getAttribute('data-kind') === kind));
  });
  panes.forEach(function (p) { p.hidden = p.getAttribute('data-pane') !== kind; });
  sayInput.placeholder = kind === 'text' ? 'Leave empty to say the words' : 'For example: Grandma';
  updatePreview();
}

function markSuggestion() {
  Array.prototype.forEach.call(suggestBox.children, function (b) {
    b.setAttribute('aria-pressed', String(b.textContent === draft.icon));
  });
}

// The finished button, or null if something required is still missing.
function draftItem() {
  var say = sayInput.value.trim();
  var item = { id: 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6) };
  if (draft.kind === 'emoji') {
    if (!draft.icon) return null;
    item.icon = draft.icon;
  } else if (draft.kind === 'photo') {
    if (!draft.img) return null;
    item.img = draft.img;
  } else {
    if (!draft.text) return null;
    item.text = draft.text;
    if (!say) say = draft.text;
  }
  if (!say) return null;
  item.say = say;
  item.label = draft.kind === 'text' ? '' : say; // words buttons already show their words
  return item;
}

function updatePreview() {
  var shown = {};
  if (draft.kind === 'emoji') shown.icon = draft.icon || '❔';
  if (draft.kind === 'photo') { if (draft.img) shown.img = draft.img; else shown.icon = '📷'; }
  if (draft.kind === 'text') shown.text = draft.text || 'Aa';

  var tile = el('div', 'tile preview-tile');
  colourise(tile, draft.color);
  tile.appendChild(picture(shown));
  empty(previewBox);
  previewBox.appendChild(tile);

  saveButton.disabled = !draftItem();
}

// Shrink a photo to a 320px square (cropped from the middle) so it stores small.
function readPhoto(file, done) {
  var reader = new FileReader();
  reader.onerror = function () { done(null); };
  reader.onload = function () {
    var img = new Image();
    img.onerror = function () { done(null); };
    img.onload = function () {
      var side = Math.min(img.width, img.height);
      var size = Math.min(320, side);
      var canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, size, size);
      done(canvas.toDataURL('image/jpeg', 0.8));
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}

kindButtons.forEach(function (b) {
  b.addEventListener('click', function () { setKind(b.getAttribute('data-kind')); });
});

emojiInput.addEventListener('input', function () {
  draft.icon = emojiInput.value.trim();
  markSuggestion();
  updatePreview();
});

// Use a picture from the file picker, the Paste button or Ctrl/⌘+V.
function usePhoto(blob) {
  photoStatus.textContent = '';
  readPhoto(blob, function (url) {
    if (!draft) return;
    if (!url) {
      photoStatus.textContent = "That picture couldn't be opened. Try a different one.";
      return;
    }
    draft.img = url;
    setKind('photo'); // a pasted picture switches the form to Photo
  });
}

photoInput.addEventListener('change', function () {
  var file = photoInput.files && photoInput.files[0];
  if (file) usePhoto(file);
});

var PASTE_FALLBACK = "This browser didn't let the button paste. Press Ctrl+V (⌘V on a Mac) instead.";

// Paste button: reads the clipboard directly. Works on phones and tablets too.
// The browser may ask permission the first time.
pasteButton.addEventListener('click', function () {
  photoStatus.textContent = '';
  if (!navigator.clipboard || !navigator.clipboard.read) {
    photoStatus.textContent = PASTE_FALLBACK;
    return;
  }
  navigator.clipboard.read().then(function (items) {
    for (var i = 0; i < items.length; i++) {
      for (var j = 0; j < items[i].types.length; j++) {
        var type = items[i].types[j];
        if (type.indexOf('image/') === 0) return items[i].getType(type).then(usePhoto);
      }
    }
    photoStatus.textContent = 'No picture is copied right now. Copy a picture first, then tap Paste.';
  }).catch(function () {
    photoStatus.textContent = PASTE_FALLBACK;
  });
});

// Ctrl/⌘+V anywhere in the form. Only pictures are caught; pasting text still works normally.
document.addEventListener('paste', function (e) {
  if (dialog.hidden || !e.clipboardData || !e.clipboardData.items) return;
  var items = e.clipboardData.items;
  for (var i = 0; i < items.length; i++) {
    if (items[i].kind === 'file' && items[i].type.indexOf('image/') === 0) {
      var file = items[i].getAsFile();
      if (file) {
        e.preventDefault();
        usePhoto(file);
        return;
      }
    }
  }
});

textInput.addEventListener('input', function () {
  draft.text = textInput.value.trim();
  updatePreview();
});

sayInput.addEventListener('input', updatePreview);

saveButton.addEventListener('click', function () {
  var item = draftItem();
  if (!item) return;
  var list = custom[draft.page] || (custom[draft.page] = []);
  list.push(item);
  if (!saveCustom()) {
    list.pop();
    window.alert("There isn't room on this device to save that. Try a smaller photo, or remove some buttons you added.");
    return;
  }
  keepStorage();
  closeAdd();
  render();
});

document.getElementById('add-cancel').addEventListener('click', closeAdd);

dialog.addEventListener('click', function (e) {
  if (e.target === dialog) closeAdd(); // tap outside the form
});

document.addEventListener('keydown', function (e) {
  if (!dialog.hidden && (e.key === 'Escape' || e.key === 'Esc')) closeAdd();
});

// ---------- controls ----------

document.getElementById('say').addEventListener('click', function () {
  speak(picks.map(function (t) { return t.say; }).join('. '));
});

document.getElementById('undo').addEventListener('click', function () {
  picks.pop();
  renderStrip(false);
});

document.getElementById('clear').addEventListener('click', function () {
  picks.length = 0;
  renderStrip(false);
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
});

wordsBox.addEventListener('change', function () {
  document.body.classList.toggle('show-words', wordsBox.checked);
});

editBox.addEventListener('change', function () {
  render();
  if (editBox.checked) window.scrollTo(0, 0);
});

window.addEventListener('hashchange', route);

// Browsers can restore checkbox state on reload, so start in step with it.
document.body.classList.toggle('show-words', wordsBox.checked);
renderStrip(false);
route();
