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

**OBS:** The server communication with github API have a rate limit with maximum 60 requests per hour beacuse the request are not authenticated. You can generate your personal credentials checking all boxes [here](https://github.com/settings/tokens/new), to allow 5000 requests per hour by the same server.

```
PORT=3333
MONGO_URI=mongodb://github-stars-db:27017/githubStars
GITHUB_ACCESS_TOKEN=<YOUR_ACCESS_TOKEN>
```

**NOTE:** If you prefer work with rate limit and without authentication, you will need to remove `GITHUB_ACCESS_TOKEN` line from `.env` and `.env.example` file.

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
