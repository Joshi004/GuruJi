#!/usr/bin/env bash
set -e

LIVE_URL="https://joshi004.github.io/GuruJi/"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$SCRIPT_DIR/gurujifunfood-menu"

echo ""
echo "==> Building and deploying GuruJi Fun Food Menu..."
echo ""

cd "$APP_DIR"
npm run deploy

echo ""
echo "============================================"
echo "  Deployment complete!"
echo "  Live URL: $LIVE_URL"
echo "============================================"
echo ""
echo "Note: GitHub Pages may take up to 60 seconds"
echo "to reflect the latest changes."
echo ""
