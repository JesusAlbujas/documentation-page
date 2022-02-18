#!/usr/bin/env sh

# quitamos los errores
set -e

# borramos
rm -rf ./dist

# build
npm run build

# cambiamos al directorio
cd ./dist
