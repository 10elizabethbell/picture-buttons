// Picture Buttons
// Each tile: icon (what the child sees), label (shown only when "Show words" is on),
// and say (what the device speaks aloud).
// To change a picture or phrase, edit the entries below.

const TILES = {
  feelings: [
    { icon: '😊', label: 'happy',      say: 'I feel happy' },
    { icon: '😌', label: 'calm',       say: 'I feel calm' },
    { icon: '🤩', label: 'excited',    say: 'I feel excited' },
    { icon: '🥰', label: 'loved',      say: 'I feel loved' },
    { icon: '😢', label: 'sad',        say: 'I feel sad' },
    { icon: '😟', label: 'worried',    say: 'I feel worried' },
    { icon: '😨', label: 'scared',     say: 'I feel scared' },
    { icon: '😠', label: 'angry',      say: 'I feel angry' },
    { icon: '😤', label: 'frustrated', say: 'I feel frustrated' },
    { icon: '😴', label: 'tired',      say: 'I feel tired' },
    { icon: '🤒', label: 'sick',       say: 'I feel sick' },
    { icon: '🤕', label: 'hurt',       say: 'I feel hurt' },
  ],
  wants: [
    { icon: '💧', label: 'drink',    say: 'I want a drink' },
    { icon: '🍎', label: 'eat',      say: 'I want something to eat' },
    { icon: '🚽', label: 'bathroom', say: 'I need the bathroom' },
    { icon: '🧘', label: 'break',    say: 'I need a break' },
    { icon: '🤗', label: 'hug',      say: 'I want a hug' },
    { icon: '🧸', label: 'play',     say: 'I want to play' },
    { icon: '🙋', label: 'help',     say: 'I need help' },
    { icon: '🌳', label: 'outside',  say: 'I want to go outside' },
    { icon: '🤫', label: 'quiet',    say: 'I need it to be quiet' },
    { icon: '➕', label: 'more',     say: 'I want more' },
    { icon: '✋', label: 'stop',     say: 'Stop, please' },
    { icon: '✅', label: 'all done', say: 'I am all done' },
  ],
  answers: [
    { icon: '👍', label: 'yes',        say: 'Yes' },
    { icon: '👎', label: 'no',         say: 'No' },
    { icon: '❓', label: "don't know", say: "I don't know" },
  ],
};

const picks = [];
const sentenceEl = document.getElementById('sentence');
const wordsBox = document.getElementById('words');

function speak(text) {
  if (!text || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
}

function makeTile(tile) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'tile';
  btn.setAttribute('aria-label', tile.say);

  const icon = document.createElement('span');
  icon.className = 'icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = tile.icon;

  const word = document.createElement('span');
  word.className = 'word';
  word.textContent = tile.label;

  btn.append(icon, word);
  btn.addEventListener('click', () => {
    picks.push(tile);
    render();
    speak(tile.say);
  });
  return btn;
}

function render() {
  sentenceEl.replaceChildren();

  if (picks.length === 0) {
    const hint = document.createElement('span');
    hint.className = 'placeholder';
    hint.setAttribute('aria-hidden', 'true');
    hint.textContent = '👆';
    sentenceEl.append(hint);
    return;
  }

  picks.forEach((tile) => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.setAttribute('aria-hidden', 'true');

    const icon = document.createElement('span');
    icon.textContent = tile.icon;

    const word = document.createElement('span');
    word.className = 'word';
    word.textContent = tile.label;

    chip.append(icon, word);
    sentenceEl.append(chip);
  });
}

function sayAll() {
  speak(picks.map((t) => t.say).join('. '));
}

// Build the tile grids
for (const [group, tiles] of Object.entries(TILES)) {
  const container = document.getElementById(group);
  tiles.forEach((tile) => container.append(makeTile(tile)));
}

document.getElementById('say').addEventListener('click', sayAll);

document.getElementById('undo').addEventListener('click', () => {
  picks.pop();
  render();
});

document.getElementById('clear').addEventListener('click', () => {
  picks.length = 0;
  render();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
});

wordsBox.addEventListener('change', () => {
  document.body.classList.toggle('show-words', wordsBox.checked);
});

render();
