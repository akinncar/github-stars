# Installation

This project use [Node](https://nodejs.org/en/blog/release/v12.18.3/) and [Yarn](https://classic.yarnpkg.com/en/docs/install/), you will need to install this two packages globally in your system before start.

## Clone

You can clone this project to your machine running this command on your therminal:

`$ git clone origin https://github.com/akinncar/github-stars.git`

## Environment Variables

We have three environment variables that are set in subfolders. All enviroments have a `.env.example` file that you can base to create your own `.env`

<b>Server</b><br />

```
API_URL=https://github-stars-api-akinncar.herokuapp.com/
```

<b>Client</b><br />

```
PORT=3333
MONGO_URI=<YOUR_MONGODB_CONNECT_STRING>
```

## Packages

You can run yarn command to install all packages of subfolders in root folder.

`$ yarn`


## Scripts

Are two scripts to run this projects in development mode directly in root folder.

<b>Server</b><br />

`$ yarn server:dev`

<b>Client</b><br />

`$ yarn client:dev`

