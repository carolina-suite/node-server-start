
for d in apps/*/ ; do
  APPNAME=$(echo "$d" | cut -d'/' -f 2)
  if [ -d "$d/tailwind" ]; then
    ./node_modules/.bin/tailwind build "$d""tailwind/style.css" -c "$d""tailwind/tailwind.js" -o "./.static/css/$APPNAME.css"
    echo "./.static/css/$APPNAME.css"
  fi
done
