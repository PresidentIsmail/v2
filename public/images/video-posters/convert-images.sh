#!/bin/bash

mkdir -p webp

for file in *.png; do
  ffmpeg -i "$file" -pix_fmt yuv420p "webp/$(basename "$file" .png).webp"
done
