import { Context } from 'koa';
import Repository from './RepositoryModel';

export const repositoriesGet = async (ctx: Context) => {
  const { username } = ctx.params;

  // ctx.body = [
  //   {
  //     id: 347493428,
  //     node_id: 'MDEwOlJlcG9zaXRvcnkzNDc0OTM0Mjg=',
  //     name: 'relay-first-try',
  //     full_name: 'luiznasciment0/relay-first-try',
  //     private: false,
  //     owner: {
  //       login: 'luiznasciment0',
  //       id: 55008532,
  //       node_id: 'MDQ6VXNlcjU1MDA4NTMy',
  //       avatar_url: 'https://avatars.githubusercontent.com/u/55008532?v=4',
  //       gravatar_id: '',
  //       url: 'https://api.github.com/users/luiznasciment0',
  //       html_url: 'https://github.com/luiznasciment0',
  //       followers_url: 'https://api.github.com/users/luiznasciment0/followers',
  //       following_url:
  //         'https://api.github.com/users/luiznasciment0/following{/other_user}',
  //       gists_url:
  //         'https://api.github.com/users/luiznasciment0/gists{/gist_id}',
  //       starred_url:
  //         'https://api.github.com/users/luiznasciment0/starred{/owner}{/repo}',
  //       subscriptions_url:
  //         'https://api.github.com/users/luiznasciment0/subscriptions',
  //       organizations_url: 'https://api.github.com/users/luiznasciment0/orgs',
  //       repos_url: 'https://api.github.com/users/luiznasciment0/repos',
  //       events_url:
  //         'https://api.github.com/users/luiznasciment0/events{/privacy}',
  //       received_events_url:
  //         'https://api.github.com/users/luiznasciment0/received_events',
  //       type: 'User',
  //       site_admin: false
  //     },
  //     html_url: 'https://github.com/luiznasciment0/relay-first-try',
  //     description: 'Aquela desc',
  //     fork: false,
  //     url: 'https://api.github.com/repos/luiznasciment0/relay-first-try',
  //     forks_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/forks',
  //     keys_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/keys{/key_id}',
  //     collaborators_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/collaborators{/collaborator}',
  //     teams_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/teams',
  //     hooks_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/hooks',
  //     issue_events_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/issues/events{/number}',
  //     events_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/events',
  //     assignees_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/assignees{/user}',
  //     branches_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/branches{/branch}',
  //     tags_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/tags',
  //     blobs_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/git/blobs{/sha}',
  //     git_tags_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/git/tags{/sha}',
  //     git_refs_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/git/refs{/sha}',
  //     trees_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/git/trees{/sha}',
  //     statuses_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/statuses/{sha}',
  //     languages_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/languages',
  //     stargazers_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/stargazers',
  //     contributors_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/contributors',
  //     subscribers_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/subscribers',
  //     subscription_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/subscription',
  //     commits_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/commits{/sha}',
  //     git_commits_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/git/commits{/sha}',
  //     comments_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/comments{/number}',
  //     issue_comment_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/issues/comments{/number}',
  //     contents_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/contents/{+path}',
  //     compare_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/compare/{base}...{head}',
  //     merges_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/merges',
  //     archive_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/{archive_format}{/ref}',
  //     downloads_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/downloads',
  //     issues_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/issues{/number}',
  //     pulls_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/pulls{/number}',
  //     milestones_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/milestones{/number}',
  //     notifications_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/notifications{?since,all,participating}',
  //     labels_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/labels{/name}',
  //     releases_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/releases{/id}',
  //     deployments_url:
  //       'https://api.github.com/repos/luiznasciment0/relay-first-try/deployments',
  //     created_at: '2021-03-13T22:32:20Z',
  //     updated_at: '2021-03-13T22:46:17Z',
  //     pushed_at: '2021-03-13T22:32:21Z',
  //     git_url: 'git://github.com/luiznasciment0/relay-first-try.git',
  //     ssh_url: 'git@github.com:luiznasciment0/relay-first-try.git',
  //     clone_url: 'https://github.com/luiznasciment0/relay-first-try.git',
  //     svn_url: 'https://github.com/luiznasciment0/relay-first-try',
  //     homepage: null,
  //     size: 0,
  //     stargazers_count: 1,
  //     watchers_count: 1,
  //     language: 'PHP',
  //     has_issues: true,
  //     has_projects: true,
  //     has_downloads: true,
  //     has_wiki: true,
  //     has_pages: false,
  //     forks_count: 0,
  //     mirror_url: null,
  //     archived: false,
  //     disabled: false,
  //     open_issues_count: 0,
  //     license: null,
  //     forks: 0,
  //     open_issues: 0,
  //     watchers: 1,
  //     default_branch: 'main',
  //     tags_id: null,
  //     tags: []
  //   },
  //   {
  //     id: 135082477,
  //     node_id: 'MDEwOlJlcG9zaXRvcnkxMzUwODI0Nzc=',
  //     name: 'react-div-100vh',
  //     full_name: 'mvasin/react-div-100vh',
  //     private: false,
  //     owner: {
  //       login: 'mvasin',
  //       id: 12434833,
  //       node_id: 'MDQ6VXNlcjEyNDM0ODMz',
  //       avatar_url: 'https://avatars.githubusercontent.com/u/12434833?v=4',
  //       gravatar_id: '',
  //       url: 'https://api.github.com/users/mvasin',
  //       html_url: 'https://github.com/mvasin',
  //       followers_url: 'https://api.github.com/users/mvasin/followers',
  //       following_url:
  //         'https://api.github.com/users/mvasin/following{/other_user}',
  //       gists_url: 'https://api.github.com/users/mvasin/gists{/gist_id}',
  //       starred_url:
  //         'https://api.github.com/users/mvasin/starred{/owner}{/repo}',
  //       subscriptions_url: 'https://api.github.com/users/mvasin/subscriptions',
  //       organizations_url: 'https://api.github.com/users/mvasin/orgs',
  //       repos_url: 'https://api.github.com/users/mvasin/repos',
  //       events_url: 'https://api.github.com/users/mvasin/events{/privacy}',
  //       received_events_url:
  //         'https://api.github.com/users/mvasin/received_events',
  //       type: 'User',
  //       site_admin: false
  //     },
  //     html_url: 'https://github.com/mvasin/react-div-100vh',
  //     description: "A workaround for the '100vh' issue in mobile browsers",
  //     fork: false,
  //     url: 'https://api.github.com/repos/mvasin/react-div-100vh',
  //     forks_url: 'https://api.github.com/repos/mvasin/react-div-100vh/forks',
  //     keys_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/keys{/key_id}',
  //     collaborators_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/collaborators{/collaborator}',
  //     teams_url: 'https://api.github.com/repos/mvasin/react-div-100vh/teams',
  //     hooks_url: 'https://api.github.com/repos/mvasin/react-div-100vh/hooks',
  //     issue_events_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/issues/events{/number}',
  //     events_url: 'https://api.github.com/repos/mvasin/react-div-100vh/events',
  //     assignees_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/assignees{/user}',
  //     branches_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/branches{/branch}',
  //     tags_url: 'https://api.github.com/repos/mvasin/react-div-100vh/tags',
  //     blobs_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/git/blobs{/sha}',
  //     git_tags_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/git/tags{/sha}',
  //     git_refs_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/git/refs{/sha}',
  //     trees_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/git/trees{/sha}',
  //     statuses_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/statuses/{sha}',
  //     languages_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/languages',
  //     stargazers_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/stargazers',
  //     contributors_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/contributors',
  //     subscribers_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/subscribers',
  //     subscription_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/subscription',
  //     commits_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/commits{/sha}',
  //     git_commits_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/git/commits{/sha}',
  //     comments_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/comments{/number}',
  //     issue_comment_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/issues/comments{/number}',
  //     contents_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/contents/{+path}',
  //     compare_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/compare/{base}...{head}',
  //     merges_url: 'https://api.github.com/repos/mvasin/react-div-100vh/merges',
  //     archive_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/{archive_format}{/ref}',
  //     downloads_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/downloads',
  //     issues_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/issues{/number}',
  //     pulls_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/pulls{/number}',
  //     milestones_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/milestones{/number}',
  //     notifications_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/notifications{?since,all,participating}',
  //     labels_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/labels{/name}',
  //     releases_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/releases{/id}',
  //     deployments_url:
  //       'https://api.github.com/repos/mvasin/react-div-100vh/deployments',
  //     created_at: '2018-05-27T21:20:49Z',
  //     updated_at: '2021-03-12T12:38:58Z',
  //     pushed_at: '2021-03-11T05:13:02Z',
  //     git_url: 'git://github.com/mvasin/react-div-100vh.git',
  //     ssh_url: 'git@github.com:mvasin/react-div-100vh.git',
  //     clone_url: 'https://github.com/mvasin/react-div-100vh.git',
  //     svn_url: 'https://github.com/mvasin/react-div-100vh',
  //     homepage: 'https://react-div-100vh.vercel.app',
  //     size: 1687,
  //     stargazers_count: 706,
  //     watchers_count: 706,
  //     language: 'TypeScript',
  //     has_issues: true,
  //     has_projects: true,
  //     has_downloads: true,
  //     has_wiki: true,
  //     has_pages: false,
  //     forks_count: 43,
  //     mirror_url: null,
  //     archived: false,
  //     disabled: false,
  //     open_issues_count: 10,
  //     license: {
  //       key: 'mit',
  //       name: 'MIT License',
  //       spdx_id: 'MIT',
  //       url: 'https://api.github.com/licenses/mit',
  //       node_id: 'MDc6TGljZW5zZTEz'
  //     },
  //     forks: 43,
  //     open_issues: 10,
  //     watchers: 706,
  //     default_branch: 'master',
  //     tags_id: '604c13a7000a9904300ab822',
  //     tags: ['games', 'design', 'ui', 'ux']
  //   },
  //   {
  //     id: 172547948,
  //     node_id: 'MDEwOlJlcG9zaXRvcnkxNzI1NDc5NDg=',
  //     name: 'create-react-native-module',
  //     full_name: 'brodybits/create-react-native-module',
  //     private: false,
  //     owner: {
  //       login: 'brodybits',
  //       id: 1559888,
  //       node_id: 'MDQ6VXNlcjE1NTk4ODg=',
  //       avatar_url: 'https://avatars.githubusercontent.com/u/1559888?v=4',
  //       gravatar_id: '',
  //       url: 'https://api.github.com/users/brodybits',
  //       html_url: 'https://github.com/brodybits',
  //       followers_url: 'https://api.github.com/users/brodybits/followers',
  //       following_url:
  //         'https://api.github.com/users/brodybits/following{/other_user}',
  //       gists_url: 'https://api.github.com/users/brodybits/gists{/gist_id}',
  //       starred_url:
  //         'https://api.github.com/users/brodybits/starred{/owner}{/repo}',
  //       subscriptions_url:
  //         'https://api.github.com/users/brodybits/subscriptions',
  //       organizations_url: 'https://api.github.com/users/brodybits/orgs',
  //       repos_url: 'https://api.github.com/users/brodybits/repos',
  //       events_url: 'https://api.github.com/users/brodybits/events{/privacy}',
  //       received_events_url:
  //         'https://api.github.com/users/brodybits/received_events',
  //       type: 'User',
  //       site_admin: false
  //     },
  //     html_url: 'https://github.com/brodybits/create-react-native-module',
  //     description: null,
  //     fork: false,
  //     url: 'https://api.github.com/repos/brodybits/create-react-native-module',
  //     forks_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/forks',
  //     keys_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/keys{/key_id}',
  //     collaborators_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/collaborators{/collaborator}',
  //     teams_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/teams',
  //     hooks_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/hooks',
  //     issue_events_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/issues/events{/number}',
  //     events_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/events',
  //     assignees_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/assignees{/user}',
  //     branches_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/branches{/branch}',
  //     tags_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/tags',
  //     blobs_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/git/blobs{/sha}',
  //     git_tags_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/git/tags{/sha}',
  //     git_refs_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/git/refs{/sha}',
  //     trees_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/git/trees{/sha}',
  //     statuses_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/statuses/{sha}',
  //     languages_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/languages',
  //     stargazers_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/stargazers',
  //     contributors_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/contributors',
  //     subscribers_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/subscribers',
  //     subscription_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/subscription',
  //     commits_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/commits{/sha}',
  //     git_commits_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/git/commits{/sha}',
  //     comments_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/comments{/number}',
  //     issue_comment_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/issues/comments{/number}',
  //     contents_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/contents/{+path}',
  //     compare_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/compare/{base}...{head}',
  //     merges_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/merges',
  //     archive_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/{archive_format}{/ref}',
  //     downloads_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/downloads',
  //     issues_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/issues{/number}',
  //     pulls_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/pulls{/number}',
  //     milestones_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/milestones{/number}',
  //     notifications_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/notifications{?since,all,participating}',
  //     labels_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/labels{/name}',
  //     releases_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/releases{/id}',
  //     deployments_url:
  //       'https://api.github.com/repos/brodybits/create-react-native-module/deployments',
  //     created_at: '2019-02-25T17:02:27Z',
  //     updated_at: '2021-03-12T05:49:53Z',
  //     pushed_at: '2021-03-12T22:48:45Z',
  //     git_url: 'git://github.com/brodybits/create-react-native-module.git',
  //     ssh_url: 'git@github.com:brodybits/create-react-native-module.git',
  //     clone_url: 'https://github.com/brodybits/create-react-native-module.git',
  //     svn_url: 'https://github.com/brodybits/create-react-native-module',
  //     homepage: null,
  //     size: 3495,
  //     stargazers_count: 423,
  //     watchers_count: 423,
  //     language: 'JavaScript',
  //     has_issues: true,
  //     has_projects: true,
  //     has_downloads: true,
  //     has_wiki: true,
  //     has_pages: false,
  //     forks_count: 35,
  //     mirror_url: null,
  //     archived: false,
  //     disabled: false,
  //     open_issues_count: 102,
  //     license: {
  //       key: 'mit',
  //       name: 'MIT License',
  //       spdx_id: 'MIT',
  //       url: 'https://api.github.com/licenses/mit',
  //       node_id: 'MDc6TGljZW5zZTEz'
  //     },
  //     forks: 35,
  //     open_issues: 102,
  //     watchers: 423,
  //     default_branch: 'master',
  //     tags_id: null,
  //     tags: []
  //   }
  // ];
  // ctx.status = 200;
  // return;

  const response = await fetch(
    `https://api.github.com/users/${username}/starred`
  );

  const data = await response.json();

  if (data.message) {
    ctx.body = data;
    ctx.status = 404;
    return;
  }

  const repositories = await Repository.find({
    username
  });

  let newData: Array<any> = [];

  data.map((item: any) => {
    const repo = repositories.find(
      repository => repository.full_name === item.full_name
    );

    if (repo) {
      item['tags_id'] = repo._id;
      item['tags'] = repo.tags;
    } else {
      item['tags_id'] = null;
      item['tags'] = [];
    }
    newData.push(item);
  });

  ctx.body = newData;
  ctx.status = 200;
};
