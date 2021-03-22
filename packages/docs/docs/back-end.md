---
title: Back-end
---

## Step 1: Introduction

The server side of this project was made with Node 14 and Koa.js. To run, you will need to enter in subfolder and do an additional configurations before start server.

```shell
cd packages/server
```

## Step 2: Environment

This API uses MongoDB for data storage, and you will need to add your personal database to run locally (If you prefer, you can see server and database configuration with docker in next session), and configure the server port (default `3333`). Create and `.env` file based on `.env.example`, and add this configurations:

```
PORT=3333
MONGO_URI=<YOUR_DATABASE_URI>
```

## Step 3: Start Server

After configure the environment file, you can run dev script to start local server.

```shell
yarn dev
```

## That's It!

After run this command, you are able to access your server on `http://localhost:3333`.
