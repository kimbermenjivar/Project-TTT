

curl "http://tic-tac-toe.wdibos.com" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email":"'"${EMAIL}"'",
      "password":"'"${PASSWORD}"'",
      "password_confirmation":"'"${PASSWORD_CONFIRMATION}"'"
    }
  }'

echo
