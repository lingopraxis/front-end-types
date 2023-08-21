#!/bin/bash

# Retrieve the latest version from package.json
latest_version=$(jq -r '.version' package.json)

# Create archives
zip -r ../front-end-types-$latest_version.zip . -x ./node_modules/\* ./.git/\* ./generate.js
tar -czvf ../front-end-types-$latest_version.tar.gz --exclude=node_modules --exclude=.git --exclude=generate.js ../front-end-types\

# Execute the command with the latest version
gh release create "$latest_version" --generate-notes ../front-end-types-$latest_version.tar.gz ../front-end-types-$latest_version.zip

# cleanup
rm -rf ../front-end-types-$latest_version.tar.gz ../front-end-types-$latest_version.zip