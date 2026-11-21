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
// Edit mode (the ✏️ Edit button) changes the board on this device only. Changes are kept
// in localStorage as { added: {page: [tiles]}, hidden: {page: [tile keys]},
// order: {grid: [tile keys]} }. A grid is a page id, or "<page>:extras" for the small
// round buttons under a folder's choices.
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
var STORE_KEY = 'pictureButtons.v2';
var OLD_STORE_KEY = 'pictureButtons.custom.v1'; // added buttons only, before hiding existed

// Every built-in tile gets a colour, the page it lives on, and a key that is stable
// across releases so hiding it can be remembered.
HOME.forEach(function (tile) {
  if (!tile.color) tile.color = NEUTRAL;
  tile.page = 'home';
  tile.key = tile.id || tile.label;
  (tile.items || []).forEach(function (child) {
    child.page = tile.id;
    child.key = child.label;
  });
  (tile.extras || []).forEach(function (child) {
    child.page = tile.id;
    child.key = 'x-' + child.label;
  });
  (tile.items || []).concat(tile.extras || []).forEach(function (child) {
    if (!child.color) child.color = tile.color;
  });
});

var picks = [];
var cameFromHome = false;
var editing = false;
var state = loadState();
var undoStack = []; // earlier versions of `state`, newest last, as JSON
var view = document.getElementById('view');
var sentenceEl = document.getElementById('sentence');
var sentenceBox = document.getElementById('sentence-box');
var clearButton = document.getElementById('clear');
var wordsBox = document.getElementById('words');
var undoButton = document.getElementById('edit-undo');

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
    img.draggable = false; // our own dragging, not the browser's image drag
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

// ---------- saved changes: added buttons and hidden buttons ----------

function emptyState() {
  return { added: {}, hidden: {}, order: {} };
}

function loadState() {
  var s = emptyState();
  try {
    var raw = window.localStorage.getItem(STORE_KEY);
    if (raw) {
      var data = JSON.parse(raw);
      if (data && data.added) s.added = data.added;
      if (data && data.hidden) s.hidden = data.hidden;
      if (data && data.order) s.order = data.order;
    } else {
      var old = window.localStorage.getItem(OLD_STORE_KEY);
      if (old) s.added = JSON.parse(old) || {};
    }
  } catch (e) { /* storage blocked or unreadable: start fresh */ }
  return s;
}

// colour, page, key and the custom flag are worked out again whenever a page is drawn
function stateJSON() {
  return JSON.stringify(state, function (k, v) {
    return k === 'color' || k === 'page' || k === 'custom' || k === 'key' ? undefined : v;
  });
}

// Returns false when the browser refuses (storage full or blocked).
function saveState() {
  try {
    window.localStorage.setItem(STORE_KEY, stateJSON());
    window.localStorage.removeItem(OLD_STORE_KEY);
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

// Call before every change so Undo can step back to it.
function remember() {
  undoStack.push(stateJSON());
  if (undoStack.length > 50) undoStack.shift();
  undoButton.disabled = false;
}

function undo() {
  if (!undoStack.length) return;
  state = JSON.parse(undoStack.pop());
  if (!state.order) state.order = {};
  undoButton.disabled = !undoStack.length;
  saveState();
  render();
}

function resetAll() {
  var ok = window.confirm(
    'Put every page back the way it started?\n\nButtons you added will be removed and hidden ' +
    'buttons will come back. You can tap Undo straight after if you change your mind.'
  );
  if (!ok) return;
  remember();
  state = emptyState();
  saveState();
  render();
}

function isHidden(item) {
  return (state.hidden[item.page] || []).indexOf(item.key) !== -1;
}

function removeTile(item) {
  remember();
  if (item.custom) {
    state.added[item.page] = (state.added[item.page] || []).filter(function (c) { return c.id !== item.id; });
  } else {
    (state.hidden[item.page] || (state.hidden[item.page] = [])).push(item.key);
  }
  saveState();
  render();
}

// The built-in tiles for a page that aren't hidden, then the ones added on this device,
// in the order a grown-up dragged them into.
function pageItems(pageId, builtIn, color) {
  var shown = builtIn.filter(function (t) { return !isHidden(t); });
  var mine = state.added[pageId] || [];
  mine.forEach(function (item) {
    item.color = color;
    item.page = pageId;
    item.key = item.id;
    item.custom = true;
  });
  return ordered(shown.concat(mine), pageId);
}

// Sort tiles by the saved order for this grid. Tiles it doesn't mention (new ones)
// keep their usual place at the end.
function ordered(items, gridId) {
  var order = state.order[gridId];
  if (!order) return items;
  var pos = {};
  order.forEach(function (key, i) { pos[key] = i; });
  return items
    .map(function (item, i) { return { item: item, rank: item.key in pos ? pos[item.key] : order.length + i }; })
    .sort(function (a, b) { return a.rank - b.rank; })
    .map(function (x) { return x.item; });
}

// After a tile is dropped somewhere new, remember the order it's now shown in.
function saveOrder(gridId, box) {
  var keys = Array.prototype.map.call(box.children, function (child) {
    var tile = child.querySelector('.tile') || child;
    return tile.getAttribute('data-key');
  });
  remember();
  state.order[gridId] = keys;
  saveState();
  render();
}

// ---------- drag to rearrange ----------
//
// Used by the message pictures (drag along to move, out of the box to remove) and by
// tiles in edit mode (touch and hold, then drag). While dragging, a copy follows the
// finger and the item itself stays in the page as a faded gap. The other items are
// moved around that gap, never the dragged item itself: iPhone Safari can lose track
// of a finger if the element it started on is moved.
//
// cfg: kind ('chip' | 'tile'), item (element that moves), box (its container),
//      ghostOf (element to copy, default item), hold (touch must hold still first),
//      removable + area (dropping outside area removes it), onDrop(from, to, removed),
//      onCancel()

var drag = null;
var suppressClick = { on: null, until: 0 }; // ignore a tap on the item just dropped
var HOLD_MS = 220;

function kids(box) { return Array.prototype.slice.call(box.children); }

function armDrag(e, cfg) {
  if (drag || e.button > 0) return;
  var hold = !!cfg.hold && e.pointerType !== 'mouse';
  drag = {
    cfg: cfg, kind: cfg.kind, id: e.pointerId, hold: hold, active: false,
    x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY,
  };
  if (hold) {
    // a quick swipe should still scroll the page, so only pick up after holding still
    drag.timer = setTimeout(function () { if (drag && !drag.active) activateDrag(); }, HOLD_MS);
  } else if (e.pointerType === 'mouse') {
    e.preventDefault(); // no text selection while dragging with a mouse
  }
}

function activateDrag() {
  var cfg = drag.cfg;
  clearTimeout(drag.timer);
  drag.active = true;
  drag.from = kids(cfg.box).indexOf(cfg.item);
  var source = cfg.ghostOf || cfg.item;
  var r = source.getBoundingClientRect();
  drag.dx = drag.x0 - r.left;
  drag.dy = drag.y0 - r.top;
  var ghost = source.cloneNode(true);
  ghost.classList.remove('new');
  ghost.classList.add('drag-ghost');
  ghost.style.width = r.width + 'px';
  ghost.style.height = r.height + 'px';
  document.body.appendChild(ghost);
  drag.ghost = ghost;
  cfg.item.classList.add('drag-slot');
  if (drag.hold && navigator.vibrate) navigator.vibrate(12); // a little buzz on Android
  dragTo(drag.x, drag.y);
}

function dragTo(x, y) {
  var cfg = drag.cfg;
  drag.ghost.style.left = (x - drag.dx) + 'px';
  drag.ghost.style.top = (y - drag.dy) + 'px';

  if (cfg.removable) {
    var a = cfg.area.getBoundingClientRect();
    var pad = 14;
    var out = x < a.left - pad || x > a.right + pad || y < a.top - pad || y > a.bottom + pad;
    if (out !== !!drag.outside) {
      drag.outside = out;
      drag.ghost.classList.toggle('remove', out);
      cfg.item.classList.toggle('leaving', out);
    }
    if (out) return;
  }

  // wait for items to finish sliding before checking again, so they don't flicker
  if (Date.now() < (drag.lockUntil || 0)) return;
  var list = kids(cfg.box);
  for (var i = 0; i < list.length; i++) {
    if (list[i] === cfg.item) continue;
    var r = list[i].getBoundingClientRect();
    if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) {
      moveSlot(cfg.box, cfg.item, list[i]);
      drag.lockUntil = Date.now() + 200;
      setTimeout(function () { if (drag && drag.active) dragTo(drag.x, drag.y); }, 210);
      return;
    }
  }
}

// Move the gap to where `target` is by moving the items in between, then slide them
// from their old spots to their new ones.
function moveSlot(box, slot, target) {
  var list = kids(box);
  var from = list.indexOf(slot);
  var to = list.indexOf(target);
  var before = list.map(function (k) { return k.getBoundingClientRect(); });
  var i;
  if (to > from) {
    for (i = from + 1; i <= to; i++) box.insertBefore(list[i], slot);
  } else {
    var after = slot.nextSibling;
    for (i = to; i < from; i++) box.insertBefore(list[i], after);
  }
  list.forEach(function (k, j) {
    var now = k.getBoundingClientRect();
    var dx = before[j].left - now.left;
    var dy = before[j].top - now.top;
    if (!dx && !dy) return;
    // `translate` adds to the wiggle's own transform instead of replacing it
    k.style.transition = 'none';
    k.style.translate = dx + 'px ' + dy + 'px';
    void k.offsetWidth;
    k.style.transition = 'translate 0.18s ease';
    k.style.translate = '0px 0px';
  });
}

function cleanupDrag(poof) {
  var d = drag;
  drag = null;
  if (!d) return;
  clearTimeout(d.timer);
  d.cfg.item.classList.remove('drag-slot');
  d.cfg.item.classList.remove('leaving');
  if (d.ghost) {
    var g = d.ghost;
    if (poof) {
      g.classList.add('poof');
      setTimeout(function () { if (g.parentNode) g.parentNode.removeChild(g); }, 200);
    } else if (g.parentNode) {
      g.parentNode.removeChild(g);
    }
  }
}

function abortDrag() { cleanupDrag(false); }

function endDrag(e, cancelled) {
  if (!drag || e.pointerId !== drag.id) return;
  if (!drag.active) {
    abortDrag(); // it was a tap: let the click happen as normal
    return;
  }
  var d = drag;
  var to = kids(d.cfg.box).indexOf(d.cfg.item);
  var removed = !!d.cfg.removable && !!d.outside && !cancelled;
  cleanupDrag(removed);
  // letting go of a held tile can also count as tapping it; that tap shouldn't open it
  suppressClick = { on: d.cfg.item, until: Date.now() + 600 };
  if (cancelled) d.cfg.onCancel();
  else if (removed || to !== d.from) d.cfg.onDrop(d.from, to, removed);
}

document.addEventListener('pointermove', function (e) {
  if (!drag || e.pointerId !== drag.id) return;
  drag.x = e.clientX;
  drag.y = e.clientY;
  if (!drag.active) {
    var moved = Math.abs(drag.x - drag.x0) + Math.abs(drag.y - drag.y0);
    if (drag.hold) {
      if (moved > 10) abortDrag(); // moved before the hold: it's a scroll
      return;
    }
    if (moved < 6) return;
    activateDrag();
    return;
  }
  dragTo(drag.x, drag.y);
});

document.addEventListener('pointerup', function (e) { endDrag(e, false); });
document.addEventListener('pointercancel', function (e) { endDrag(e, true); });

// Once something is picked up, stop the finger from scrolling the page.
document.addEventListener('touchmove', function (e) {
  if (drag && drag.active) e.preventDefault();
}, { passive: false });

document.addEventListener('contextmenu', function (e) {
  if (drag) e.preventDefault(); // long-press menus
});

document.addEventListener('click', function (e) {
  if (suppressClick.on && Date.now() < suppressClick.until && suppressClick.on.contains(e.target)) {
    e.stopPropagation();
    e.preventDefault();
  }
}, true);

// ---------- the top strip ----------

function addPick(item) {
  picks.push(item);
  renderStrip(true);
}

function renderStrip(animateLast) {
  if (drag && drag.kind === 'chip') abortDrag();
  empty(sentenceEl);
  clearButton.hidden = picks.length === 0;

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

    // Drag along the message to move it, or out of the box to remove it.
    chip.addEventListener('pointerdown', function (e) {
      armDrag(e, {
        kind: 'chip', item: chip, box: sentenceEl, area: sentenceBox, removable: true,
        onDrop: function (from, to, removed) {
          var moved = picks.splice(from, 1)[0];
          if (!removed) picks.splice(to, 0, moved);
          renderStrip(false);
        },
        onCancel: function () { renderStrip(false); },
      });
    });
    sentenceEl.appendChild(chip);
  });

  sentenceEl.scrollTop = sentenceEl.scrollHeight;
}

// ---------- tiles ----------

function makeTile(item) {
  var btn = el('button', 'tile');
  btn.type = 'button';
  btn.setAttribute('aria-label', item.say);
  btn.setAttribute('data-key', item.key);
  colourise(btn, item.color);
  btn.appendChild(picture(item));
  if (item.label) btn.appendChild(el('span', 'word', item.label));

  if (item.items) {
    btn.className += ' folder';
    btn.addEventListener('click', function () {
      if (!editing) {
        var last = picks[picks.length - 1];
        if (item.strip !== false && last !== item) addPick(item);
        speak(item.say);
      }
      cameFromHome = true;
      location.hash = item.id; // folders still open while editing, to edit inside them
    });
  } else {
    btn.addEventListener('click', function () {
      if (editing) return; // like iPhone: tapping a wiggling button does nothing
      addPick(item);
      speak(item.say);
    });
  }
  return btn;
}

// While editing, each tile wiggles out of step with its neighbours and has a ✕ in the corner.
function wiggle(tile, item) {
  var wrap = el('div', 'tile-wrap');
  wrap.style.animationDelay = (-Math.random() * 0.3).toFixed(2) + 's';
  wrap.style.animationDuration = (0.24 + Math.random() * 0.08).toFixed(2) + 's';

  var x = el('button', 'delete-badge', '✕');
  x.type = 'button';
  x.setAttribute('aria-label', 'Remove ' + (item.label || item.say));
  x.addEventListener('click', function () { removeTile(item); });

  wrap.appendChild(tile);
  wrap.appendChild(x);
  return wrap;
}

// gridId names the grid for remembering the order tiles are dragged into.
function grid(items, className, gridId) {
  var box = el('div', className);
  items.forEach(function (item) {
    var tile = makeTile(item);
    if (!editing) {
      box.appendChild(tile);
      return;
    }
    var wrap = wiggle(tile, item);
    // Like iPhone: touch and hold a wiggling tile to pick it up, then drag it.
    tile.addEventListener('pointerdown', function (e) {
      armDrag(e, {
        kind: 'tile', item: wrap, ghostOf: tile, box: box, hold: true,
        onDrop: function () { saveOrder(gridId, box); },
        onCancel: render,
      });
    });
    box.appendChild(wrap);
  });
  return box;
}

// ---------- pages ----------

function showHome() {
  document.body.classList.add('at-home');
  document.body.classList.remove('in-folder');
  document.body.style.backgroundColor = '';
  empty(view);
  view.appendChild(grid(pageItems('home', HOME, NEUTRAL), 'grid home-grid', 'home'));
}

function showFolder(folder) {
  document.body.classList.add('in-folder');
  document.body.classList.remove('at-home');
  document.body.style.backgroundColor = tint(folder.color, 0.9);
  empty(view);

  var nav = el('div', 'nav');
  var home = el('button', 'home-btn');
  home.type = 'button';
  home.setAttribute('aria-label', 'Back to the home page');
  home.appendChild(el('span', '', '⬅️'));
  home.addEventListener('click', goHome);

  var here = el('div', 'here');
  colourise(here, folder.color);
  here.appendChild(picture(folder));
  here.appendChild(el('span', 'word', folder.label));

  nav.appendChild(home);
  nav.appendChild(here);
  view.appendChild(nav);
  view.appendChild(grid(pageItems(folder.id, folder.items, folder.color), 'grid', folder.id));

  var extrasId = folder.id + ':extras';
  var extras = ordered((folder.extras || []).filter(function (t) { return !isHidden(t); }), extrasId);
  if (extras.length) view.appendChild(grid(extras, 'extras', extrasId));
}

function findFolder(id) {
  for (var i = 0; i < HOME.length; i++) {
    if (HOME[i].id === id && HOME[i].items && !isHidden(HOME[i])) return HOME[i];
  }
  return null;
}

function currentPage() {
  var folder = findFolder(location.hash.slice(1));
  return folder ? { id: folder.id, color: folder.color } : { id: 'home', color: NEUTRAL };
}

// Draw the current page in place (after a change, or entering/leaving edit mode).
function render() {
  if (drag && drag.kind === 'tile') abortDrag();
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

// ---------- edit mode ----------

function startEditing() {
  editing = true;
  document.body.classList.add('editing');
  render();
  document.getElementById('edit-done').focus({ preventScroll: true });
}

function stopEditing() {
  editing = false;
  document.body.classList.remove('editing');
  render();
}

// Scroll a newly added button into view and make it pop.
function showNewTile(key) {
  var tile = view.querySelector('[data-key="' + key + '"]');
  if (!tile) return;
  var target = tile.parentNode.className === 'tile-wrap' ? tile.parentNode : tile;
  if (target.scrollIntoView) target.scrollIntoView({ block: 'center', behavior: 'smooth' });
  target.className += ' just-added';
}

document.getElementById('edit-add').addEventListener('click', function () {
  var page = currentPage();
  openAdd(page.id, page.color);
});
undoButton.addEventListener('click', undo);
document.getElementById('edit-done').addEventListener('click', stopEditing);
document.getElementById('edit-btn').addEventListener('click', requestEdit);

// A short message at the bottom of the screen.
function toast(text) {
  var t = el('div', 'toast', text);
  t.setAttribute('role', 'status');
  document.body.appendChild(t);
  setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 2200);
}

// ---------- the code that unlocks edit mode ----------
//
// A child lock, not security: anyone with the device and some know-how can get past it.
// The code is kept in localStorage. If storage is blocked it lasts until the page closes.

var PIN_KEY = 'pictureButtons.pin';
var memoryPin = '';

function getPin() {
  try { return window.localStorage.getItem(PIN_KEY) || memoryPin; } catch (e) { return memoryPin; }
}

function setPin(code) {
  memoryPin = code;
  try { window.localStorage.setItem(PIN_KEY, code); } catch (e) { /* kept in memory instead */ }
}

var pinDialog = document.getElementById('pin-dialog');
var pinTitle = document.getElementById('pin-title');
var pinSub = document.getElementById('pin-sub');
var pinDisplay = document.getElementById('pin-display');
var pinMsg = document.getElementById('pin-msg');
var pinOk = document.getElementById('pin-ok');
var pinForgot = document.getElementById('pin-forgot');

// mode: 'unlock' | 'create' | 'confirm' | 'gate' (the "forgot the code" question)
var pin = { mode: null, entry: '', first: '', answer: 0, after: null };

var PIN_TEXT = {
  unlock: ['Enter your code', 'Needed to change the buttons.'],
  create: ['Choose a 4-digit code', "You'll type it each time you tap Edit."],
  confirm: ['Type the same code again', ''],
  gate: ['Forgot the code?', ''],
};

// The Edit button: ask for the code, or have one chosen the very first time.
function requestEdit() {
  openPin(getPin() ? 'unlock' : 'create', startEditing);
}

// `after` runs once the code is entered correctly or a new one is saved.
function openPin(mode, after) {
  pin.after = after;
  pin.first = '';
  setPinMode(mode, '');
  pinDialog.hidden = false;
  document.body.classList.add('dialog-open');
  pinDialog.querySelector('.key').focus();
}

function closePin() {
  pinDialog.hidden = true;
  document.body.classList.remove('dialog-open');
  pin.mode = null;
}

function finishPin() {
  var after = pin.after;
  closePin();
  if (after) after();
}

function setPinMode(mode, message) {
  pin.mode = mode;
  pin.entry = '';
  pinTitle.textContent = PIN_TEXT[mode][0];
  if (mode === 'gate') {
    var a = 12 + Math.floor(Math.random() * 13); // 12 to 24
    var b = 3 + Math.floor(Math.random() * 7); // 3 to 9
    pin.answer = a * b;
    pinSub.textContent = 'To choose a new code, answer this: what is ' + a + ' × ' + b + '?';
  } else {
    pinSub.textContent = PIN_TEXT[mode][1];
  }
  pinMsg.textContent = message || '';
  pinOk.style.visibility = mode === 'gate' ? 'visible' : 'hidden';
  pinForgot.hidden = mode !== 'unlock';
  drawPin();
}

function drawPin() {
  empty(pinDisplay);
  if (pin.mode === 'gate') {
    pinDisplay.appendChild(el('span', 'pin-answer', pin.entry || ' '));
    return;
  }
  for (var i = 0; i < 4; i++) {
    pinDisplay.appendChild(el('span', 'pin-dot' + (i < pin.entry.length ? ' filled' : '')));
  }
}

function shakePin() {
  pinDisplay.className = 'pin-display';
  void pinDisplay.offsetWidth;
  pinDisplay.className = 'pin-display shake';
}

function pinPress(key) {
  if (!pin.mode) return;
  if (key === 'back') {
    pin.entry = pin.entry.slice(0, -1);
    drawPin();
    return;
  }
  if (key === 'ok') {
    if (pin.mode === 'gate' && pin.entry) checkGate();
    return;
  }
  var max = pin.mode === 'gate' ? 3 : 4;
  if (pin.entry.length >= max) return;
  pin.entry += key;
  pinMsg.textContent = '';
  drawPin();
  if (pin.mode !== 'gate' && pin.entry.length === 4) setTimeout(pinComplete, 150); // let the 4th dot show
}

function pinComplete() {
  var entry = pin.entry;
  if (pin.mode === 'unlock') {
    if (entry === getPin()) {
      finishPin();
    } else {
      shakePin();
      setPinMode('unlock', "That's not the code. Try again.");
    }
  } else if (pin.mode === 'create') {
    pin.first = entry;
    setPinMode('confirm', '');
  } else if (pin.mode === 'confirm') {
    if (entry !== pin.first) {
      pin.first = '';
      shakePin();
      setPinMode('create', "Those didn't match. Choose a code again.");
      return;
    }
    setPin(entry);
    finishPin();
  }
}

function checkGate() {
  if (parseInt(pin.entry, 10) === pin.answer) {
    setPinMode('create', ''); // then confirm, then on into edit mode
  } else {
    shakePin();
    setPinMode('gate', 'Not quite. Try this one.');
  }
}

Array.prototype.forEach.call(pinDialog.querySelectorAll('.key'), function (k) {
  k.addEventListener('click', function () { pinPress(k.getAttribute('data-key')); });
});
pinForgot.addEventListener('click', function () { setPinMode('gate', ''); });
document.getElementById('pin-cancel').addEventListener('click', closePin);

// ---------- settings (⚙️ in edit mode) ----------

var settingsDialog = document.getElementById('settings-dialog');

function openSettings() {
  settingsDialog.hidden = false;
  document.body.classList.add('dialog-open');
  document.getElementById('set-code').focus();
}

function closeSettings() {
  settingsDialog.hidden = true;
  document.body.classList.remove('dialog-open');
}

document.getElementById('edit-settings').addEventListener('click', openSettings);
document.getElementById('settings-close').addEventListener('click', closeSettings);
document.getElementById('set-code').addEventListener('click', function () {
  closeSettings();
  openPin('create', function () { toast('Code changed'); });
});
document.getElementById('set-reset').addEventListener('click', function () {
  closeSettings();
  resetAll();
});
settingsDialog.addEventListener('click', function (e) {
  if (e.target === settingsDialog) closeSettings();
});

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
var previewHint = document.getElementById('preview-hint');
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

  // A photo in the preview is a button that opens the crop editor.
  var editable = draft.kind === 'photo' && !!draft.source;
  var tile = el(editable ? 'button' : 'div', 'tile preview-tile' + (editable ? ' preview-edit' : ''));
  colourise(tile, draft.color);
  tile.appendChild(picture(shown));
  if (editable) {
    tile.type = 'button';
    tile.setAttribute('aria-label', 'Adjust the photo: zoom in or out, or move it');
    var badge = el('span', 'preview-badge', '✂️');
    badge.setAttribute('aria-hidden', 'true');
    tile.appendChild(badge);
    tile.addEventListener('click', openCrop);
  }
  previewHint.hidden = !editable;
  empty(previewBox);
  previewBox.appendChild(tile);

  saveButton.disabled = !draftItem();
}

// Load a photo into a working copy (at most 1600px on its long side) that the crop
// editor can zoom into. Only the final 320px crop is saved; this copy is thrown away.
function loadSource(file, done) {
  var reader = new FileReader();
  reader.onerror = function () { done(null); };
  reader.onload = function () {
    var img = new Image();
    img.onerror = function () { done(null); };
    img.onload = function () {
      var k = Math.min(1, 1600 / Math.max(img.width, img.height));
      var canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(img.width * k));
      canvas.height = Math.max(1, Math.round(img.height * k));
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = '#fff'; // see-through pictures get a white background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      done(canvas);
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}

// The biggest square in the middle of the photo, in the working copy's pixels.
function centerCrop(src) {
  var side = Math.min(src.width, src.height);
  return { x: (src.width - side) / 2, y: (src.height - side) / 2, size: side };
}

// Cut the crop out as the 320px square JPEG that gets saved with the button.
function renderCrop(src, c) {
  var out = document.createElement('canvas');
  out.width = 320;
  out.height = 320;
  var ctx = out.getContext('2d');
  ctx.imageSmoothingQuality = 'high';
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, 320, 320);
  ctx.drawImage(src, c.x, c.y, c.size, c.size, 0, 0, 320, 320);
  return out.toDataURL('image/jpeg', 0.8);
}

// Use a picture from the file picker, the Paste button or Ctrl/⌘+V.
function usePhoto(blob) {
  photoStatus.textContent = '';
  loadSource(blob, function (src) {
    if (!draft) return;
    if (!src) {
      photoStatus.textContent = "That picture couldn't be opened. Try a different one.";
      return;
    }
    draft.source = src;
    draft.crop = centerCrop(src);
    draft.img = renderCrop(src, draft.crop);
    setKind('photo'); // a pasted picture switches the form to Photo
  });
}

// ---------- photo crop editor ----------
//
// A square frame sits over the photo; the photo moves and zooms underneath it.
// Positions are in CSS pixels relative to the frame's top-left corner:
//   F       frame size          s0  scale where the photo's short side just fills F
//   z       zoom (1 = s0)       ox, oy  where the photo's top-left corner sits

var cropDialog = document.getElementById('crop-dialog');
var cropStage = document.getElementById('crop-stage');
var cropFrame = document.getElementById('crop-frame');
var cropZoom = document.getElementById('crop-zoom');
var CROP_MARGIN = 28; // dimmed border of photo visible around the frame
var crop = null;

function cropScale() { return crop.s0 * crop.z; }

// Keep the frame covered by the photo: no empty gaps at the edges.
function clampCrop() {
  var s = cropScale();
  crop.ox = Math.min(0, Math.max(crop.F - crop.W * s, crop.ox));
  crop.oy = Math.min(0, Math.max(crop.F - crop.H * s, crop.oy));
}

function drawCrop() {
  var s = cropScale();
  var st = crop.src.style;
  st.left = (CROP_MARGIN + crop.ox) + 'px';
  st.top = (CROP_MARGIN + crop.oy) + 'px';
  st.width = (crop.W * s) + 'px';
  st.height = (crop.H * s) + 'px';
  cropZoom.value = crop.z;
}

// Zoom so the point (px, py) in the frame stays under the finger or pointer.
function zoomCrop(z, px, py) {
  if (px === undefined) { px = crop.F / 2; py = crop.F / 2; }
  var before = cropScale();
  crop.z = Math.max(1, Math.min(crop.zMax, z));
  var after = cropScale();
  crop.ox = px - (px - crop.ox) * after / before;
  crop.oy = py - (py - crop.oy) * after / before;
  clampCrop();
  drawCrop();
}

function moveCrop(dx, dy) {
  crop.ox += dx;
  crop.oy += dy;
  clampCrop();
  drawCrop();
}

// The current crop as a square in the working copy's pixels.
function currentCrop() {
  var s = cropScale();
  return { x: -crop.ox / s, y: -crop.oy / s, size: crop.F / s };
}

function setCrop(c) {
  crop.z = Math.max(1, Math.min(crop.zMax, crop.F / c.size / crop.s0));
  var s = cropScale();
  crop.ox = -c.x * s;
  crop.oy = -c.y * s;
  clampCrop();
  drawCrop();
}

// Size the stage and frame to the space available.
function layoutCrop() {
  var w = cropStage.clientWidth;
  crop.F = w - 2 * CROP_MARGIN;
  cropStage.style.height = w + 'px';
  cropFrame.style.left = CROP_MARGIN + 'px';
  cropFrame.style.top = CROP_MARGIN + 'px';
  cropFrame.style.width = crop.F + 'px';
  cropFrame.style.height = crop.F + 'px';
  var short = Math.min(crop.W, crop.H);
  crop.s0 = crop.F / short;
  crop.zMax = Math.max(1, Math.min(6, short / 50)); // stop before it's a blur of pixels
  cropZoom.max = crop.zMax;
}

function openCrop() {
  if (!draft || !draft.source) return;
  var src = draft.source;
  crop = { src: src, W: src.width, H: src.height, pointers: {} };
  src.className = 'crop-img';
  cropStage.insertBefore(src, cropFrame);
  cropDialog.hidden = false; // visible first, so it can be measured
  layoutCrop();
  setCrop(draft.crop);
  cropStage.focus();
}

function closeCrop() {
  cropDialog.hidden = true;
  if (crop && crop.src.parentNode) crop.src.parentNode.removeChild(crop.src);
  crop = null;
}

function applyCrop() {
  draft.source = crop.src;
  draft.crop = currentCrop();
  draft.img = renderCrop(crop.src, draft.crop);
  closeCrop();
  updatePreview();
}

function stagePoint(e) {
  var r = cropStage.getBoundingClientRect();
  return { x: e.clientX - r.left - CROP_MARGIN, y: e.clientY - r.top - CROP_MARGIN };
}

function pinch(a, b) {
  return {
    d: Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)),
    mx: (a.x + b.x) / 2,
    my: (a.y + b.y) / 2,
  };
}

// One finger or the mouse drags; two fingers pinch to zoom (and drag by their midpoint).
cropStage.addEventListener('pointerdown', function (e) {
  if (!crop) return;
  try { cropStage.setPointerCapture(e.pointerId); } catch (err) { /* not every pointer can be captured */ }
  crop.pointers[e.pointerId] = stagePoint(e);
  e.preventDefault();
});

cropStage.addEventListener('pointermove', function (e) {
  if (!crop || !crop.pointers[e.pointerId]) return;
  var ids = Object.keys(crop.pointers);
  var now = stagePoint(e);
  if (ids.length === 1) {
    var prev = crop.pointers[e.pointerId];
    crop.pointers[e.pointerId] = now;
    moveCrop(now.x - prev.x, now.y - prev.y);
    return;
  }
  var before = pinch(crop.pointers[ids[0]], crop.pointers[ids[1]]);
  crop.pointers[e.pointerId] = now;
  var after = pinch(crop.pointers[ids[0]], crop.pointers[ids[1]]);
  crop.ox += after.mx - before.mx;
  crop.oy += after.my - before.my;
  zoomCrop(before.d > 0 ? crop.z * after.d / before.d : crop.z, after.mx, after.my);
});

function endPointer(e) {
  if (crop) delete crop.pointers[e.pointerId];
}
cropStage.addEventListener('pointerup', endPointer);
cropStage.addEventListener('pointercancel', endPointer);

// Mouse wheel or trackpad: zoom around the pointer.
cropStage.addEventListener('wheel', function (e) {
  if (!crop) return;
  e.preventDefault();
  var p = stagePoint(e);
  zoomCrop(crop.z * Math.exp(-e.deltaY * 0.002), p.x, p.y);
}, { passive: false });

cropZoom.addEventListener('input', function () {
  if (crop) zoomCrop(parseFloat(cropZoom.value));
});
document.getElementById('zoom-in').addEventListener('click', function () { if (crop) zoomCrop(crop.z * 1.25); });
document.getElementById('zoom-out').addEventListener('click', function () { if (crop) zoomCrop(crop.z / 1.25); });
document.getElementById('crop-reset').addEventListener('click', function () { if (crop) setCrop(centerCrop(crop.src)); });
document.getElementById('crop-cancel').addEventListener('click', closeCrop);
document.getElementById('crop-done').addEventListener('click', applyCrop);

// Keep the same part of the photo in the frame if the screen turns or resizes.
window.addEventListener('resize', function () {
  if (!crop) return;
  var c = currentCrop();
  layoutCrop();
  setCrop(c);
});

kindButtons.forEach(function (b) {
  b.addEventListener('click', function () { setKind(b.getAttribute('data-kind')); });
});

emojiInput.addEventListener('input', function () {
  draft.icon = emojiInput.value.trim();
  markSuggestion();
  updatePreview();
});

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
  if (dialog.hidden || !cropDialog.hidden || !e.clipboardData || !e.clipboardData.items) return;
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
  remember();
  var list = state.added[draft.page] || (state.added[draft.page] = []);
  list.push(item);
  if (!saveState()) {
    list.pop();
    undoStack.pop();
    undoButton.disabled = !undoStack.length;
    window.alert("There isn't room on this device to save that. Try a smaller photo, or remove some buttons you added.");
    return;
  }
  keepStorage();
  closeAdd();
  render();
  showNewTile(item.id);
});

document.getElementById('add-cancel').addEventListener('click', closeAdd);

dialog.addEventListener('click', function (e) {
  if (e.target === dialog) closeAdd(); // tap outside the form
});

document.addEventListener('keydown', function (e) {
  // the crop editor: Esc cancels; on the photo itself, arrows move, +/- zoom, Enter is Done
  if (!cropDialog.hidden) {
    if (e.key === 'Escape' || e.key === 'Esc') closeCrop();
    else if (e.target !== cropStage) return;
    else if (e.key === 'Enter') applyCrop();
    else if (e.key === '+' || e.key === '=') zoomCrop(crop.z * 1.25);
    else if (e.key === '-' || e.key === '_') zoomCrop(crop.z / 1.25);
    else if (e.key === 'ArrowLeft') moveCrop(-12, 0);
    else if (e.key === 'ArrowRight') moveCrop(12, 0);
    else if (e.key === 'ArrowUp') moveCrop(0, -12);
    else if (e.key === 'ArrowDown') moveCrop(0, 12);
    else return;
    e.preventDefault();
    return;
  }
  // typing the code on a keyboard
  if (!pinDialog.hidden) {
    if (/^[0-9]$/.test(e.key)) pinPress(e.key);
    else if (e.key === 'Backspace') pinPress('back');
    else if (e.key === 'Enter') pinPress('ok');
    else if (e.key === 'Escape' || e.key === 'Esc') closePin();
    else return;
    e.preventDefault();
    return;
  }
  if (e.key !== 'Escape' && e.key !== 'Esc') return;
  if (!settingsDialog.hidden) closeSettings();
  else if (!dialog.hidden) closeAdd();
  else if (editing) stopEditing();
});

// ---------- message controls ----------

document.getElementById('say').addEventListener('click', function () {
  speak(picks.map(function (t) { return t.say; }).join('. '));
});

clearButton.addEventListener('click', function () {
  picks.length = 0;
  renderStrip(false);
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
});

wordsBox.addEventListener('change', function () {
  document.body.classList.toggle('show-words', wordsBox.checked);
});

window.addEventListener('hashchange', route);

// Browsers can restore checkbox state on reload, so start in step with it.
document.body.classList.toggle('show-words', wordsBox.checked);
renderStrip(false);
route();
