# Setting the default colors for output messages
green=$'\e[1;32m'
regular=$'\e[0m'

# Asking user input for default project name
read -p "What's the name of your project? [Starter]: " name
name=${name:-Starter}

# Replacing name throughout the project
sed -i '' -e 's/ExampleName/'"$name"'/g' ./package.json
sed -i '' -e 's/ExampleName/'"$name"'/g' ./quasar.conf.js
sed -i '' -e 's/ExampleName/'"$name"'/g' ./README.md
sed -i '' -e 's/ExampleName/'"$name"'/g' ./src/App.vue

# Reporting successful name replacement
printf "• ${green}Name successfully set${regular} \n"

# Asking user input for default project description
read -p "What's the proper description of this project? [Quasar template for quickly starting projects]: " description
description=${description:-Quasar template for quickly starting projects}

# Replacing description throughout the project
sed -i '' -e 's/ExampleDescription/'"$description"'/g' ./package.json
sed -i '' -e 's/ExampleDescription/'"$description"'/g' ./quasar.conf.js
sed -i '' -e 's/ExampleDescription/'"$description"'/g' ./README.md

# Reporting successful description replacement
printf "• ${green}Description successfully set${regular} \n"

# Entering variables folder
cd variables

# Creating local environment file
cp .env.example .env.local
sed -i '' -e '/ENVIRONMENT/ s/$/ local/' .env.local

# Creating development environment file
cp .env.example .env.development
sed -i '' -e '/ENVIRONMENT/ s/$/ development/' .env.development

# Creating production environment file
cp .env.example .env.production
sed -i '' -e '/ENVIRONMENT/ s/$/ production/' .env.production

# Reporting successful creation of environment files
printf "• ${green}Environment files successfully created${regular} \n"
