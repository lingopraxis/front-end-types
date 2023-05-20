#!/bin/bash

# Retrieve the latest version from package.json
latest_version=$(jq -r '.version' package.json)

# Execute the command with the latest version
gh release create "$latest_version" --generate-notes