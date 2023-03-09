#!/bin/zsh
docker buildx build --platform linux/amd64 -t ghcr.io/valuable-promo/headless:latest . --load
docker buildx build --platform linux/arm64 -t ghcr.io/valuable-promo/headless:latest . --load
