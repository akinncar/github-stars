# Rest API

## Introduction

This project use Node JS Server with Koa. If you want to run locally, you can see how to do that in [Installation](./Installation.md) session. Else, you can use the production server available on heroku.

<b>Base URL</b><br />
https://github-stars-api-akinncar.herokuapp.com/

<b>Standard HTTP response codes</b><br />

<table>
  <thead>
    <th>Status Code</th>
    <th>Status Message</th>
  </thead>
  <tbody>
    <tr>
      <td>200</td>
      <td>Service OK</td>
    </tr>
    <tr>
      <td>400</td>
      <td>Bad Request</td>
    </tr>
    <tr>
      <td>404</td>
      <td>Not Found</td>
    </tr>
    <tr>
      <td>500, 502, 503, 504	</td>
      <td>Server Error</td>
    </tr>
  </tbody>
</table><br />

## Endpoints

### Get User Starred Repositories `GET /repository/:username`

<b>Return</b><br />

```javascript
[
  {
    "id": 347436428,
    "node_id": "MDEwOlJlcG9zaXRsdfkzNDc0OTM0Mjg=",
    "name": "github-stars",
    "full_name": "akinncar/github-stars",
    "private": false,
    "default_branch": "main",
    "tags_id": "604cbc84a87ba3233c97a2b5",
    "tags": ["react", "node", "webpack"]
  }
]
```

### Edit Tags of Repository `PATCH /repositoryTagAll`

<b>Body</b><br />

```javascript
{
	"username": "akinncar",
	"full_name": "facebook/react",
	"tags": ["facebook"]
}
```

<b>Return</b><br />

```javascript
[
  {
    "_id": "604cbc84a87ba3233c97a2b5",
    "tags": [
      "facebook"
    ]
  }
]
```

### Add Repository Single Tag `PATCH /repositoryTag`

<b>Body</b><br />

```javascript
{
	"username": "akinncar",
	"full_name": "facebook/react",
	"tag": "js"
}
```

<b>Return</b><br />

```javascript
[
  {
    "_id": "604cbc84a87ba3233c97a2b5",
    "tags": [
      "facebook",
      "js"
    ]
  }
]
```

### Delete Repository Single Tag `DELETE /repositoryTag/:tag_id/:tag_name`

<b>Return</b><br />

```javascript
[
  {
    "_id": "604cbc84a87ba3233c97a2b5",
    "tags": [
      "facebook"
    ]
  }
]
```

