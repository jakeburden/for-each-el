#!/bin/bash

yes | rm bundle.js
browserify -t brfs test.js -o bundle.js
