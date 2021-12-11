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
printf "\033[0;32mEnvironment files successfully created \n"
