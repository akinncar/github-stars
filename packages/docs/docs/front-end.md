---
title: Front-end
---

## Step 1: Introduction

Client side of this project was made with React 17 and Webpack. To run, you will need to enter in subfolder and do an additional configurations before start server.

```shell
cd packages/client
```

## Step 2: Environment

The `.env` file have an unique property, the `API URL`, and you can define your local server in this file, or the production API available on `https://github-stars-api-akinncar.herokuapp.com/`

```
API_URL=http://localhost:3333
```

## Step 3: Start Server

After configure the environment file, you can run dev script to start local server.

```shell
yarn start
```

## That's It!

After run this command, you are able to access `http://localhost:3000` in your favorite browser.
