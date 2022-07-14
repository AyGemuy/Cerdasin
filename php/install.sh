#!/bin/bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install git nodejs webp ffmpeg imagemagick -y
git clone https://github.com/AyGemuy/HinataNew
cd HinataNew
npm install
node . --server
