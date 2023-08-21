#!/bin/bash

# Retrieve the latest version from package.json
latest_version=$(jq -r '.version' package.json)

new_version=$(echo $latest_version | awk -F. -v OFS=. '{$NF++; print}')

git tag $new_version

# Create archives
zip -r ../front-end-types.zip . -x ./node_modules/\* ./.git/\* ./generate.js
tar -czvf ../front-end-types.tar.gz --exclude=node_modules --exclude=.git --exclude=generate.js ../front-end-types\

# Execute the command with the latest version
gh release create "$new_version" --generate-notes '../front-end-types.tar.gz#Source.tar.gz' '../front-end-types.zip#Source.zip'

# cleanup
rm -rf ../front-end-types.tar.gz ../front-end-types.zip