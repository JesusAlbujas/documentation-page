#!/usr/bin/env sh

# quitamos los errores
set -e

# borramos
rm -rf .vuepress/dist

# build
npm run build

# cambiamos al directorio
cd .vuepress/dist
