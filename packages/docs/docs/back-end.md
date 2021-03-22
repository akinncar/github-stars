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

**OBS:** The server communication with github API have a rate limit with maximum 60 requests per hour beacuse the request are not authenticated. You can generate your personal credentials checking all boxes [here](https://github.com/settings/tokens/new), to allow 5000 requests per hour by the same server.

```
PORT=3333
MONGO_URI=<YOUR_DATABASE_URI>
GITHUB_ACCESS_TOKEN=<YOUR_ACCESS_TOKEN>
```

**NOTE:** If you prefer work with rate limit and without authentication, you will need to remove `GITHUB_ACCESS_TOKEN` line from `.env` and `.env.example` file.

## Step 3: Start Server

After configure the environment file, you can run dev script to start local server.

```shell
yarn dev
```

## That's It!

After run this command, you are able to access your server on `http://localhost:3333`.
