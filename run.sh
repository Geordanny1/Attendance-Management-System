# Source - https://stackoverflow.com/a/27691578
# Posted by Digisec, modified by community. See post 'Timeline' for change history
# Retrieved 2026-06-26, License - CC BY-SA 3.0

if [[ -z "$VIRTUAL_ENV" ]]; then
  source .env/bin/activate
  flask --app app run --debug
else

  source .env/bin/activate
  echo "VIRTUAL_ENV is set"
fi

