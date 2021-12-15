# Starter

Quasar template for quickly starting projects.

### Install the dependencies

```bash
npm i @quasar/cli && npm i --legacy-peer-deps
```

### Create environment files

You're gonna need to create environment files with values as shown in `variables/.env.example` in order to properly start or deploy the application. The easiest way to do it is to run `npm run generator` command, which will load and execute `generator.sh` script and do everything for you.

Contact [@MilosPaunovic](https://github.com/MilosPaunovic) if you need any additional help with it.

### Start in development mode

>  Change ENV to be local, development or production

```bash
npm run dev:ENV
```

### Build code for servers

>  Change ENV to be development or production

```bash
npm run build:ENV
```

### Testing

As it might depend on some backend service, no testing scripts will be listed here. If you know what you're doing, you'll know where to find them.
