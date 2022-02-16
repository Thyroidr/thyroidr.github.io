#!/bin/bash

# add the CNAME file so the github pages custom domain works properly
echo www.ryanxw.com > build/CNAME

# add the relevant files also hosted
mkdir build/files
cp /mnt/d/Projects/resume/resume.pdf build/files

# tell github pages this is not jekyll
touch build/.nojekyll
