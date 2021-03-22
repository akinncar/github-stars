---
title: Back-end - Docker
---

## Step 1: Introduction

The server side of this project was made with Node 14 and Koa.js. To run, you will need to enter in subfolder and do an additional configurations before start server.

```shell
cd packages/server
```

## Step 2: Environment

With docker installed on your computer, you will need to create a `.env` to you server connect with your docker database (just copy `.env.example`).

```
PORT=3333
MONGO_URI=mongodb://github-stars-db:27017/githubStars
```

## Step 3: Start Server

After configure the environment file, you can the server local with docker compose command.

```shell
docker-compose up
```

If you have permission problem, your also can try:

```shell
sudo docker-compose up
```

## That's It!

After run this command, you are able to access your server on `http://localhost:3333`.
