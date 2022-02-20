#!/usr/bin/env sh

# quitamos los errores
set -e

# borramos
rm -rf web_departamento/dist

# build
npm run build

