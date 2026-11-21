// Picture Buttons
//
// HOME is the first screen. A tile with `items` is a folder: tapping it opens its own
// page with more choices. `extras` are the smaller round "tell me more" buttons under
// a folder's choices.
//
// Tile fields:
//   icon   the picture: one emoji, or a list of 4 emoji shown as a small collage
//   dot    'sm' or 'lg' draws a small or big circle instead of an emoji (for "how much")
//   label  the word, shown only when "Show words" is on
//   say    what the device says out loud
//   color  folder colour; everything inside the folder uses it
//   strip  false = tapping the folder speaks but does not add a picture to the top strip
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

var NEUTRAL = '#5b6470';

// Every tile gets a colour. Things inside a folder use the folder's colour.
HOME.forEach(function (tile) {
  if (!tile.color) tile.color = NEUTRAL;
  (tile.items || []).concat(tile.extras || []).forEach(function (child) {
    if (!child.color) child.color = tile.color;
  });
});

var picks = [];
var cameFromHome = false;
var view = document.getElementById('view');
var sentenceEl = document.getElementById('sentence');
var wordsBox = document.getElementById('words');

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
  if (Array.isArray(item.icon)) {
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

function colourise(node, item) {
  node.style.setProperty('--c', item.color);
  node.style.setProperty('--t', tint(item.color, 0.86));
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
    colourise(chip, item);
    chip.appendChild(picture(item));
    chip.appendChild(el('span', 'word', item.label));
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
  colourise(btn, item);
  btn.appendChild(picture(item));
  btn.appendChild(el('span', 'word', item.label));

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

function grid(items, className) {
  var box = el('div', className);
  items.forEach(function (item) { box.appendChild(makeTile(item)); });
  return box;
}

// ---------- pages ----------

function showHome() {
  document.body.className = 'at-home' + (wordsBox.checked ? ' show-words' : '');
  document.body.style.backgroundColor = '';
  empty(view);
  view.appendChild(grid(HOME, 'grid home-grid'));
}

function showFolder(folder) {
  document.body.className = 'in-folder' + (wordsBox.checked ? ' show-words' : '');
  document.body.style.backgroundColor = tint(folder.color, 0.9);
  empty(view);

  var nav = el('div', 'nav');
  var home = el('button', 'home-btn');
  home.type = 'button';
  home.setAttribute('aria-label', 'Go home');
  home.appendChild(el('span', '', '🏠'));
  home.addEventListener('click', goHome);

  var here = el('div', 'here');
  colourise(here, folder);
  here.appendChild(picture(folder));
  here.appendChild(el('span', 'word', folder.label));

  nav.appendChild(home);
  nav.appendChild(here);
  view.appendChild(nav);
  view.appendChild(grid(folder.items, 'grid'));

  if (folder.extras) view.appendChild(grid(folder.extras, 'extras'));

  home.focus({ preventScroll: true });
}

function goHome() {
  if (cameFromHome) {
    history.back(); // keeps the phone's back button in step
  } else {
    history.replaceState(null, '', location.pathname + location.search);
    route();
  }
}

function findFolder(id) {
  for (var i = 0; i < HOME.length; i++) {
    if (HOME[i].id === id && HOME[i].items) return HOME[i];
  }
  return null;
}

function route() {
  var folder = findFolder(location.hash.slice(1));
  if (folder) {
    showFolder(folder);
  } else {
    cameFromHome = false;
    showHome();
  }
  view.className = 'view enter';
  void view.offsetWidth; // restart the fade-in
  view.className = 'view enter run';
  window.scrollTo(0, 0);
}

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
  if (wordsBox.checked) document.body.className += ' show-words';
  else document.body.className = document.body.className.replace(/\s*show-words/g, '');
});

window.addEventListener('hashchange', route);

renderStrip(false);
route();
