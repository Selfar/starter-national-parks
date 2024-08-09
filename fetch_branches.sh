#!/bin/bash

# Fetch all branches from the upstream
git fetch upstream

# Loop through each branch in the upstream repository
for branch in $(git branch -r | grep upstream/ | grep -v '\->' | sed 's/upstream\///'); do
    # Check out each branch
    git checkout -b $branch upstream/$branch
    # Push the branch to your fork
    git push origin $branch
done

# Return to the main branch (or whichever branch you prefer)
git checkout main