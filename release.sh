#!/bin/bash

# Retrieve the latest version from the package.json file
latest_version=$(jq -r '.version' package.json)

# Increment the patch version
new_version=$(echo $latest_version | awk -F. -v OFS=. '{$NF++; print}')

git tag $new_version

# Create archives
zip -r front-end-types.zip . -x ./node_modules/\* ./.git/\*
tar -czvf front-end-types.tar.gz --exclude=node_modules --exclude=.git ../front-end-types

# Execute the command with the latest version
gh release create "$new_version" --generate-notes 

# cleanup
rm -rf front-end-types.tar.gz front-end-types.zip