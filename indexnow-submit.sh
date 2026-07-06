#!/usr/bin/env bash
# Notifies IndexNow (Bing, Yandex, Seznam, etc.) about every URL in sitemap.xml.
# Run after publishing changes so the live site gets re-crawled quickly.
set -euo pipefail
cd "$(dirname "$0")"

HOST="northforceapps.github.io"
KEY="2fae948dc2e225c4b275c605bad784aa"
KEY_LOCATION="https://${HOST}/gpslogger/${KEY}.txt"

URL_LIST=$(grep -oP '(?<=<loc>)[^<]+' sitemap.xml | jq -R -s -c 'split("\n") | map(select(length > 0))')

PAYLOAD=$(jq -n \
  --arg host "$HOST" \
  --arg key "$KEY" \
  --arg keyLocation "$KEY_LOCATION" \
  --argjson urlList "$URL_LIST" \
  '{host: $host, key: $key, keyLocation: $keyLocation, urlList: $urlList}')

curl -s -o /dev/null -w "IndexNow response: %{http_code}\n" \
  -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "$PAYLOAD"
