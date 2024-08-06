#!/bin/bash

# Script para rodar docker-compose.prod.yml
docker compose -f docker-compose.prod.yml down; docker compose -f docker-compose.prod.yml up --build
# docker compose -f docker-compose.prod.yml up

