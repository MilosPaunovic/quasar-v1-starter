# Starter

Quasar template for quickly starting Lakeside R&D projects.

### Install the dependencies

```bash
npm i @quasar/cli && npm i --legacy-peer-deps
```

### Create environment files

You're gonna need to create environment files with values as shown in `variables/.env.example` in order to properly start or deploy the application. The easiest way to do it is to run `npm run generator` command, which will load and execute `generator.sh` script and do everything for you.

Contact [@MilosPaunovic](https://github.com/MilosPaunovic) if you need any additional help with it.

### Start in DEV mode

>  Change ENV to be local

```bash
npm run dev:ENV
```

### Build for servers

>  Change ENV to be development or production

```bash
npm run build:ENV
```
