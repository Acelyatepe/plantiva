#!/bin/zsh

cd "$(dirname "$0")" || exit 1

npm run dev &
plantiva_server_pid=$!

for attempt in {1..40}; do
  if curl --silent --fail http://localhost:3000 >/dev/null 2>&1; then
    open -a "Google Chrome" http://localhost:3000
    wait "$plantiva_server_pid"
    exit $?
  fi
  sleep 1
done

echo "Plantiva geliştirme sunucusu zamanında başlayamadı. Terminal çıktısını kontrol edin."
wait "$plantiva_server_pid"
