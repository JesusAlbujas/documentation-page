#!/usr/bin/env sh

# quitamos los errores
set -e

# borramos
rm -rf .vuepress/dist

# build
npm run build

# copiamos readme y license
cp README.md .vuepress/dist
cp LICENSE .vuepress/dist

# cambiamos al directorio
cd .vuepress/dist
