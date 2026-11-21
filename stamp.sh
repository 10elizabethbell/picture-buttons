#!/bin/sh
# Stamps a content fingerprint onto the CSS and JS links in index.html
# (styles.css?v=1a2b3c4d). GitHub Pages lets browsers cache files for 10 minutes;
# without this, a browser can pair a new index.html with an old cached app.js and
# show a blank page. Runs automatically from the git pre-commit hook (see README).
set -e
cd "$(dirname "$0")"
css=$(git hash-object styles.css | cut -c1-8)
js=$(git hash-object app.js | cut -c1-8)
sed -i.bak -E \
  -e "s/styles\.css(\?v=[0-9a-f]+)?\"/styles.css?v=$css\"/" \
  -e "s/app\.js(\?v=[0-9a-f]+)?\"/app.js?v=$js\"/" \
  index.html
rm -f index.html.bak
