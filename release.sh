#!/bin/bash

# Retrieve the latest version from package.json
latest_version=$(jq -r '.version' package.json)

new_version=$(echo $latest_version | awk -F. -v OFS=. '{$NF++; print}')

git tag $new_version

# Create archives
zip -r ../front-end-types-$new_version.zip . -x ./node_modules/\* ./.git/\* ./generate.js
tar -czvf ../front-end-types-$new_version.tar.gz --exclude=node_modules --exclude=.git --exclude=generate.js ../front-end-types\

# Execute the command with the latest version
gh release create "$new_version" --generate-notes ../front-end-types-$new_version.tar.gz ../front-end-types-$new_version.zip

# cleanup
rm -rf ../front-end-types-$new_version.tar.gz ../front-end-types-$new_version.zip