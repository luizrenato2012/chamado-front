#!/bin/bash

echo 'Iniciando json-server em http://localhost:1234'

 /opt/node-8.11.3/lib/node_modules/json-server/bin/index.js banco.json --port 1234 --routes routes.json

