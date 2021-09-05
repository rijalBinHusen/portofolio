<template>
  <div class="md:gap-4 p-6 bg-blue-50 md:grid">
    <div class="grid grid-cols-2 justify-between lg:px-40 md:mb-4">
      <h1 class="justify-start md:text-left text-2xl font-bold">
        Activity
      </h1>
    </div>
    <div 
      style="max-height:300px;" 
      class="md:grid grid-cols-2 gap-6 lg:px-40"
    >
      <div class="overflow-auto">
        <div class="bg-white p-4">
          <div class="">
            <div class="mb-4">
              <h1 class="text-2xl font-bold text-gray-700">
                Github
              </h1>
            </div>

            <div class="">
              <span
                v-if="github.length > 0"
                class="text-lg text-gray-700"
              >
                <div
                  v-for="act in github "
                  :key="act.id"
                  class="border-b-2"
                >
                  <!-- Date -->
                  <b>{{ new Date(act.created_at).toISOString().slice(0, 10) }}</b>
                  <br>
                  <!-- actor and activity -->
                  {{ " @" + act.actor.login }} 
                  <!-- activity -->
                  <b> {{ " " + act.type.replace("Event", "") }} </b>
                  <!-- repo name -->
                  {{ " repository " + act.repo.name }}
                  <!-- if activity is push, show the commit -->
                  <div 
                    v-if="act.type === 'PushEvent'"
                    class=""
                  >
                    <b> Commit list:</b>
                    <ul class="list-disc ml-4">
                      <li
                        v-for="commit in act.payload.commits"
                        :key="commit.sha"
                      >
                        {{ commit.message }}
                      </li>
                    </ul>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 md:mt-0 mt-6">
        <div>
          <div class="mb-4">
            <h1 class="text-2xl font-bold text-gray-700">
              Creating pixel perfect icons in Figma
            </h1>
            <p class="hidden">
              View all
            </p>
          </div>

          <div class="">
            <span class="block mb-4 text-xl">12 Feb 20 20 | Design, Pattern</span>
            <p class="text-lg text-gray-700">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Activity",
    data() {
        return {
            github: [
  {
    "id": "17850947991",
    "type": "WatchEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 70737507,
      "name": "locomotivemtl/locomotive-scroll",
      "url": "https://api.github.com/repos/locomotivemtl/locomotive-scroll"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2021-09-04T03:36:06Z",
    "org": {
      "id": 1923096,
      "login": "locomotivemtl",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/locomotivemtl",
      "avatar_url": "https://avatars.githubusercontent.com/u/1923096?"
    }
  },
  {
    "id": "17819723905",
    "type": "PushEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 401175787,
      "name": "rijalBinHusen/absenwithwebpack",
      "url": "https://api.github.com/repos/rijalBinHusen/absenwithwebpack"
    },
    "payload": {
      "push_id": 7849828897,
      "size": 4,
      "distinct_size": 4,
      "ref": "refs/heads/master",
      "head": "2edbabc9d51887f0836f63ff672d777d2ee9853e",
      "before": "780a66fd555b26c384e0ebb1d24addb834e492b3",
      "commits": [
        {
          "sha": "a7c4bf273ca12795f8252be019e92461a2a479fc",
          "author": {
            "email": "jeryzal333@gmail.com",
            "name": "rijalBinHusen"
          },
          "message": "after npm run lint",
          "distinct": true,
          "url": "https://api.github.com/repos/rijalBinHusen/absenwithwebpack/commits/a7c4bf273ca12795f8252be019e92461a2a479fc"
        },
        {
          "sha": "22dbf3a9cd6083a344bac4aaaf23467343da5cab",
          "author": {
            "email": "jeryzal333@gmail.com",
            "name": "rijalBinHusen"
          },
          "message": "add electronjs package",
          "distinct": true,
          "url": "https://api.github.com/repos/rijalBinHusen/absenwithwebpack/commits/22dbf3a9cd6083a344bac4aaaf23467343da5cab"
        },
        {
          "sha": "13ad1f622d311a48c83178dcabf95140112e05c7",
          "author": {
            "email": "jeryzal333@gmail.com",
            "name": "rijalBinHusen"
          },
          "message": "will fix bug waiting import all data",
          "distinct": true,
          "url": "https://api.github.com/repos/rijalBinHusen/absenwithwebpack/commits/13ad1f622d311a48c83178dcabf95140112e05c7"
        },
        {
          "sha": "2edbabc9d51887f0836f63ff672d777d2ee9853e",
          "author": {
            "email": "jeryzal333@gmail.com",
            "name": "rijalBinHusen"
          },
          "message": "fix bug waiting import progress",
          "distinct": true,
          "url": "https://api.github.com/repos/rijalBinHusen/absenwithwebpack/commits/2edbabc9d51887f0836f63ff672d777d2ee9853e"
        }
      ]
    },
    "public": true,
    "created_at": "2021-09-02T05:53:06Z"
  },
  {
    "id": "17763273979",
    "type": "PushEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 401175787,
      "name": "rijalBinHusen/absenwithwebpack",
      "url": "https://api.github.com/repos/rijalBinHusen/absenwithwebpack"
    },
    "payload": {
      "push_id": 7823057171,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/master",
      "head": "780a66fd555b26c384e0ebb1d24addb834e492b3",
      "before": "889eeb4068bd7e8859100d7999aad0c23cb5cdc4",
      "commits": [
        {
          "sha": "780a66fd555b26c384e0ebb1d24addb834e492b3",
          "author": {
            "email": "jeryzal333@gmail.com",
            "name": "rijalBinHusen"
          },
          "message": "fix bug when download 1 day is null",
          "distinct": true,
          "url": "https://api.github.com/repos/rijalBinHusen/absenwithwebpack/commits/780a66fd555b26c384e0ebb1d24addb834e492b3"
        }
      ]
    },
    "public": true,
    "created_at": "2021-08-30T01:58:01Z"
  },
  {
    "id": "17762859696",
    "type": "CreateEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 401175787,
      "name": "rijalBinHusen/absenwithwebpack",
      "url": "https://api.github.com/repos/rijalBinHusen/absenwithwebpack"
    },
    "payload": {
      "ref": "master",
      "ref_type": "branch",
      "master_branch": "master",
      "description": "absen offline build with npm",
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2021-08-30T00:57:03Z"
  },
  {
    "id": "17762835542",
    "type": "CreateEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 401175787,
      "name": "rijalBinHusen/absenwithwebpack",
      "url": "https://api.github.com/repos/rijalBinHusen/absenwithwebpack"
    },
    "payload": {
      "ref": null,
      "ref_type": "repository",
      "master_branch": "main",
      "description": "absen offline build with npm",
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2021-08-30T00:53:43Z"
  },
  {
    "id": "17685442731",
    "type": "PushEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 394555199,
      "name": "rijalBinHusen/readfile",
      "url": "https://api.github.com/repos/rijalBinHusen/readfile"
    },
    "payload": {
      "push_id": 7783544307,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/master",
      "head": "28eb0668445e2ab2f6a525aa1d98d04354951539",
      "before": "f050d765aa5eec1acd4be7af3c65b3ccefcc9362",
      "commits": [
        {
          "sha": "28eb0668445e2ab2f6a525aa1d98d04354951539",
          "author": {
            "email": "jeryzal333@gmail.com",
            "name": "rijalBinHusen"
          },
          "message": "Multiple file csv read to console",
          "distinct": true,
          "url": "https://api.github.com/repos/rijalBinHusen/readfile/commits/28eb0668445e2ab2f6a525aa1d98d04354951539"
        }
      ]
    },
    "public": true,
    "created_at": "2021-08-24T00:22:23Z"
  },
  {
    "id": "17666028411",
    "type": "WatchEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 136730813,
      "name": "romainsimon/vue-simple-search-dropdown",
      "url": "https://api.github.com/repos/romainsimon/vue-simple-search-dropdown"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2021-08-22T13:35:33Z"
  },
  {
    "id": "17499009956",
    "type": "CreateEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 394555199,
      "name": "rijalBinHusen/readfile",
      "url": "https://api.github.com/repos/rijalBinHusen/readfile"
    },
    "payload": {
      "ref": "master",
      "ref_type": "branch",
      "master_branch": "master",
      "description": "read file csv as object with javascript",
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2021-08-10T06:58:07Z"
  },
  {
    "id": "17498994978",
    "type": "CreateEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 394555199,
      "name": "rijalBinHusen/readfile",
      "url": "https://api.github.com/repos/rijalBinHusen/readfile"
    },
    "payload": {
      "ref": null,
      "ref_type": "repository",
      "master_branch": "main",
      "description": "read file csv as object with javascript",
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2021-08-10T06:56:46Z"
  },
  {
    "id": "17381958404",
    "type": "CreateEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 391475943,
      "name": "rijalBinHusen/warehousenotes",
      "url": "https://api.github.com/repos/rijalBinHusen/warehousenotes"
    },
    "payload": {
      "ref": "master",
      "ref_type": "branch",
      "master_branch": "master",
      "description": null,
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2021-07-31T22:37:42Z"
  },
  {
    "id": "17381958052",
    "type": "CreateEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 391475943,
      "name": "rijalBinHusen/warehousenotes",
      "url": "https://api.github.com/repos/rijalBinHusen/warehousenotes"
    },
    "payload": {
      "ref": null,
      "ref_type": "repository",
      "master_branch": "main",
      "description": null,
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2021-07-31T22:37:35Z"
  },
  {
    "id": "17261792752",
    "type": "PullRequestEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 349021822,
      "name": "rijalBinHusen/absenOffline",
      "url": "https://api.github.com/repos/rijalBinHusen/absenOffline"
    },
    "payload": {
      "action": "opened",
      "number": 1,
      "pull_request": {
        "url": "https://api.github.com/repos/rijalBinHusen/absenOffline/pulls/1",
        "id": 694977812,
        "node_id": "MDExOlB1bGxSZXF1ZXN0Njk0OTc3ODEy",
        "html_url": "https://github.com/rijalBinHusen/absenOffline/pull/1",
        "diff_url": "https://github.com/rijalBinHusen/absenOffline/pull/1.diff",
        "patch_url": "https://github.com/rijalBinHusen/absenOffline/pull/1.patch",
        "issue_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/issues/1",
        "number": 1,
        "state": "open",
        "locked": false,
        "title": "Absen",
        "user": {
          "login": "rijalBinHusen",
          "id": 67273416,
          "node_id": "MDQ6VXNlcjY3MjczNDE2",
          "avatar_url": "https://avatars.githubusercontent.com/u/67273416?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/rijalBinHusen",
          "html_url": "https://github.com/rijalBinHusen",
          "followers_url": "https://api.github.com/users/rijalBinHusen/followers",
          "following_url": "https://api.github.com/users/rijalBinHusen/following{/other_user}",
          "gists_url": "https://api.github.com/users/rijalBinHusen/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/rijalBinHusen/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/rijalBinHusen/subscriptions",
          "organizations_url": "https://api.github.com/users/rijalBinHusen/orgs",
          "repos_url": "https://api.github.com/users/rijalBinHusen/repos",
          "events_url": "https://api.github.com/users/rijalBinHusen/events{/privacy}",
          "received_events_url": "https://api.github.com/users/rijalBinHusen/received_events",
          "type": "User",
          "site_admin": false
        },
        "body": "merge with local",
        "created_at": "2021-07-22T08:40:26Z",
        "updated_at": "2021-07-22T08:40:26Z",
        "closed_at": null,
        "merged_at": null,
        "merge_commit_sha": null,
        "assignee": null,
        "assignees": [

        ],
        "requested_reviewers": [

        ],
        "requested_teams": [

        ],
        "labels": [

        ],
        "milestone": null,
        "draft": false,
        "commits_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/pulls/1/commits",
        "review_comments_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/pulls/1/comments",
        "review_comment_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/pulls/comments{/number}",
        "comments_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/issues/1/comments",
        "statuses_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/statuses/fefcbbf9ebc81723755835fd47d47efb13cfac7e",
        "head": {
          "label": "rijalBinHusen:absen",
          "ref": "absen",
          "sha": "fefcbbf9ebc81723755835fd47d47efb13cfac7e",
          "user": {
            "login": "rijalBinHusen",
            "id": 67273416,
            "node_id": "MDQ6VXNlcjY3MjczNDE2",
            "avatar_url": "https://avatars.githubusercontent.com/u/67273416?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/rijalBinHusen",
            "html_url": "https://github.com/rijalBinHusen",
            "followers_url": "https://api.github.com/users/rijalBinHusen/followers",
            "following_url": "https://api.github.com/users/rijalBinHusen/following{/other_user}",
            "gists_url": "https://api.github.com/users/rijalBinHusen/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/rijalBinHusen/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/rijalBinHusen/subscriptions",
            "organizations_url": "https://api.github.com/users/rijalBinHusen/orgs",
            "repos_url": "https://api.github.com/users/rijalBinHusen/repos",
            "events_url": "https://api.github.com/users/rijalBinHusen/events{/privacy}",
            "received_events_url": "https://api.github.com/users/rijalBinHusen/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 349021822,
            "node_id": "MDEwOlJlcG9zaXRvcnkzNDkwMjE4MjI=",
            "name": "absenOffline",
            "full_name": "rijalBinHusen/absenOffline",
            "private": false,
            "owner": {
              "login": "rijalBinHusen",
              "id": 67273416,
              "node_id": "MDQ6VXNlcjY3MjczNDE2",
              "avatar_url": "https://avatars.githubusercontent.com/u/67273416?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/rijalBinHusen",
              "html_url": "https://github.com/rijalBinHusen",
              "followers_url": "https://api.github.com/users/rijalBinHusen/followers",
              "following_url": "https://api.github.com/users/rijalBinHusen/following{/other_user}",
              "gists_url": "https://api.github.com/users/rijalBinHusen/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/rijalBinHusen/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/rijalBinHusen/subscriptions",
              "organizations_url": "https://api.github.com/users/rijalBinHusen/orgs",
              "repos_url": "https://api.github.com/users/rijalBinHusen/repos",
              "events_url": "https://api.github.com/users/rijalBinHusen/events{/privacy}",
              "received_events_url": "https://api.github.com/users/rijalBinHusen/received_events",
              "type": "User",
              "site_admin": false
            },
            "html_url": "https://github.com/rijalBinHusen/absenOffline",
            "description": null,
            "fork": false,
            "url": "https://api.github.com/repos/rijalBinHusen/absenOffline",
            "forks_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/forks",
            "keys_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/teams",
            "hooks_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/hooks",
            "issue_events_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/issues/events{/number}",
            "events_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/events",
            "assignees_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/assignees{/user}",
            "branches_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/branches{/branch}",
            "tags_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/tags",
            "blobs_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/languages",
            "stargazers_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/stargazers",
            "contributors_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/contributors",
            "subscribers_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/subscribers",
            "subscription_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/subscription",
            "commits_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/contents/{+path}",
            "compare_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/merges",
            "archive_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/downloads",
            "issues_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/issues{/number}",
            "pulls_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/labels{/name}",
            "releases_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/releases{/id}",
            "deployments_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/deployments",
            "created_at": "2021-03-18T09:57:03Z",
            "updated_at": "2021-07-01T01:01:37Z",
            "pushed_at": "2021-07-22T08:39:42Z",
            "git_url": "git://github.com/rijalBinHusen/absenOffline.git",
            "ssh_url": "git@github.com:rijalBinHusen/absenOffline.git",
            "clone_url": "https://github.com/rijalBinHusen/absenOffline.git",
            "svn_url": "https://github.com/rijalBinHusen/absenOffline",
            "homepage": null,
            "size": 13,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "HTML",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 1,
            "license": null,
            "forks": 0,
            "open_issues": 1,
            "watchers": 0,
            "default_branch": "main"
          }
        },
        "base": {
          "label": "rijalBinHusen:main",
          "ref": "main",
          "sha": "348dd63ad942a0cf267b1fcd16067d41329187cf",
          "user": {
            "login": "rijalBinHusen",
            "id": 67273416,
            "node_id": "MDQ6VXNlcjY3MjczNDE2",
            "avatar_url": "https://avatars.githubusercontent.com/u/67273416?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/rijalBinHusen",
            "html_url": "https://github.com/rijalBinHusen",
            "followers_url": "https://api.github.com/users/rijalBinHusen/followers",
            "following_url": "https://api.github.com/users/rijalBinHusen/following{/other_user}",
            "gists_url": "https://api.github.com/users/rijalBinHusen/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/rijalBinHusen/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/rijalBinHusen/subscriptions",
            "organizations_url": "https://api.github.com/users/rijalBinHusen/orgs",
            "repos_url": "https://api.github.com/users/rijalBinHusen/repos",
            "events_url": "https://api.github.com/users/rijalBinHusen/events{/privacy}",
            "received_events_url": "https://api.github.com/users/rijalBinHusen/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 349021822,
            "node_id": "MDEwOlJlcG9zaXRvcnkzNDkwMjE4MjI=",
            "name": "absenOffline",
            "full_name": "rijalBinHusen/absenOffline",
            "private": false,
            "owner": {
              "login": "rijalBinHusen",
              "id": 67273416,
              "node_id": "MDQ6VXNlcjY3MjczNDE2",
              "avatar_url": "https://avatars.githubusercontent.com/u/67273416?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/rijalBinHusen",
              "html_url": "https://github.com/rijalBinHusen",
              "followers_url": "https://api.github.com/users/rijalBinHusen/followers",
              "following_url": "https://api.github.com/users/rijalBinHusen/following{/other_user}",
              "gists_url": "https://api.github.com/users/rijalBinHusen/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/rijalBinHusen/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/rijalBinHusen/subscriptions",
              "organizations_url": "https://api.github.com/users/rijalBinHusen/orgs",
              "repos_url": "https://api.github.com/users/rijalBinHusen/repos",
              "events_url": "https://api.github.com/users/rijalBinHusen/events{/privacy}",
              "received_events_url": "https://api.github.com/users/rijalBinHusen/received_events",
              "type": "User",
              "site_admin": false
            },
            "html_url": "https://github.com/rijalBinHusen/absenOffline",
            "description": null,
            "fork": false,
            "url": "https://api.github.com/repos/rijalBinHusen/absenOffline",
            "forks_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/forks",
            "keys_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/teams",
            "hooks_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/hooks",
            "issue_events_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/issues/events{/number}",
            "events_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/events",
            "assignees_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/assignees{/user}",
            "branches_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/branches{/branch}",
            "tags_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/tags",
            "blobs_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/languages",
            "stargazers_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/stargazers",
            "contributors_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/contributors",
            "subscribers_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/subscribers",
            "subscription_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/subscription",
            "commits_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/contents/{+path}",
            "compare_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/merges",
            "archive_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/downloads",
            "issues_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/issues{/number}",
            "pulls_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/labels{/name}",
            "releases_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/releases{/id}",
            "deployments_url": "https://api.github.com/repos/rijalBinHusen/absenOffline/deployments",
            "created_at": "2021-03-18T09:57:03Z",
            "updated_at": "2021-07-01T01:01:37Z",
            "pushed_at": "2021-07-22T08:39:42Z",
            "git_url": "git://github.com/rijalBinHusen/absenOffline.git",
            "ssh_url": "git@github.com:rijalBinHusen/absenOffline.git",
            "clone_url": "https://github.com/rijalBinHusen/absenOffline.git",
            "svn_url": "https://github.com/rijalBinHusen/absenOffline",
            "homepage": null,
            "size": 13,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "HTML",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 1,
            "license": null,
            "forks": 0,
            "open_issues": 1,
            "watchers": 0,
            "default_branch": "main"
          }
        },
        "_links": {
          "self": {
            "href": "https://api.github.com/repos/rijalBinHusen/absenOffline/pulls/1"
          },
          "html": {
            "href": "https://github.com/rijalBinHusen/absenOffline/pull/1"
          },
          "issue": {
            "href": "https://api.github.com/repos/rijalBinHusen/absenOffline/issues/1"
          },
          "comments": {
            "href": "https://api.github.com/repos/rijalBinHusen/absenOffline/issues/1/comments"
          },
          "review_comments": {
            "href": "https://api.github.com/repos/rijalBinHusen/absenOffline/pulls/1/comments"
          },
          "review_comment": {
            "href": "https://api.github.com/repos/rijalBinHusen/absenOffline/pulls/comments{/number}"
          },
          "commits": {
            "href": "https://api.github.com/repos/rijalBinHusen/absenOffline/pulls/1/commits"
          },
          "statuses": {
            "href": "https://api.github.com/repos/rijalBinHusen/absenOffline/statuses/fefcbbf9ebc81723755835fd47d47efb13cfac7e"
          }
        },
        "author_association": "OWNER",
        "auto_merge": null,
        "active_lock_reason": null,
        "merged": false,
        "mergeable": null,
        "rebaseable": null,
        "mergeable_state": "unknown",
        "merged_by": null,
        "comments": 0,
        "review_comments": 0,
        "maintainer_can_modify": false,
        "commits": 37,
        "additions": 8233,
        "deletions": 323,
        "changed_files": 16
      }
    },
    "public": true,
    "created_at": "2021-07-22T08:40:27Z"
  },
  {
    "id": "17261783273",
    "type": "CreateEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 349021822,
      "name": "rijalBinHusen/absenOffline",
      "url": "https://api.github.com/repos/rijalBinHusen/absenOffline"
    },
    "payload": {
      "ref": "absen",
      "ref_type": "branch",
      "master_branch": "main",
      "description": null,
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2021-07-22T08:39:45Z"
  },
  {
    "id": "17261690487",
    "type": "PushEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 381868214,
      "name": "rijalBinHusen/complete-datatable-vue",
      "url": "https://api.github.com/repos/rijalBinHusen/complete-datatable-vue"
    },
    "payload": {
      "push_id": 7570033007,
      "size": 5,
      "distinct_size": 5,
      "ref": "refs/heads/master",
      "head": "8285e71afb74cefa9b903ec5208e60609937602d",
      "before": "f727c83893ee87bec964cc6f0c97d4cfba376d26",
      "commits": [
        {
          "sha": "2d215522453dbfcd423f58d98a6b7df043cbdddd",
          "author": {
            "email": "jeryzal333@gmail.com",
            "name": "rijalBinHusen"
          },
          "message": "fix bug error when filter number",
          "distinct": true,
          "url": "https://api.github.com/repos/rijalBinHusen/complete-datatable-vue/commits/2d215522453dbfcd423f58d98a6b7df043cbdddd"
        },
        {
          "sha": "636d26f01363629886c1ac0b36d5bb79ff771b23",
          "author": {
            "email": "jeryzal333@gmail.com",
            "name": "rijalBinHusen"
          },
          "message": "fix when sort number",
          "distinct": true,
          "url": "https://api.github.com/repos/rijalBinHusen/complete-datatable-vue/commits/636d26f01363629886c1ac0b36d5bb79ff771b23"
        },
        {
          "sha": "e7c404226c89ad383007489c55bea43ebf3e89bc",
          "author": {
            "email": "jeryzal333@gmail.com",
            "name": "rijalBinHusen"
          },
          "message": "save all data to localstorage when call methods",
          "distinct": true,
          "url": "https://api.github.com/repos/rijalBinHusen/complete-datatable-vue/commits/e7c404226c89ad383007489c55bea43ebf3e89bc"
        },
        {
          "sha": "b525f7edbafcef633097659ac1178008b23be1c2",
          "author": {
            "email": "jeryzal333@gmail.com",
            "name": "rijalBinHusen"
          },
          "message": "fix bug value input disappear after refresh",
          "distinct": true,
          "url": "https://api.github.com/repos/rijalBinHusen/complete-datatable-vue/commits/b525f7edbafcef633097659ac1178008b23be1c2"
        },
        {
          "sha": "8285e71afb74cefa9b903ec5208e60609937602d",
          "author": {
            "email": "jeryzal333@gmail.com",
            "name": "rijalBinHusen"
          },
          "message": "Merge commit 'f727c83' the origin",
          "distinct": true,
          "url": "https://api.github.com/repos/rijalBinHusen/complete-datatable-vue/commits/8285e71afb74cefa9b903ec5208e60609937602d"
        }
      ]
    },
    "public": true,
    "created_at": "2021-07-22T08:32:23Z"
  },
  {
    "id": "17109331287",
    "type": "WatchEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 279318307,
      "name": "dannyconnell/localbase",
      "url": "https://api.github.com/repos/dannyconnell/localbase"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2021-07-10T01:34:37Z"
  },
  {
    "id": "17108494133",
    "type": "WatchEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 17203748,
      "name": "dfahlander/Dexie.js",
      "url": "https://api.github.com/repos/dfahlander/Dexie.js"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2021-07-09T22:33:56Z"
  },
  {
    "id": "16996619341",
    "type": "PushEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 381868214,
      "name": "rijalBinHusen/complete-datatable-vue",
      "url": "https://api.github.com/repos/rijalBinHusen/complete-datatable-vue"
    },
    "payload": {
      "push_id": 7436576437,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/master",
      "head": "f727c83893ee87bec964cc6f0c97d4cfba376d26",
      "before": "ca64c3e671a96a16c332056ae47df4d6d583eb6e",
      "commits": [
        {
          "sha": "f727c83893ee87bec964cc6f0c97d4cfba376d26",
          "author": {
            "email": "67273416+rijalBinHusen@users.noreply.github.com",
            "name": "rijalBinHusen"
          },
          "message": "Update README.md",
          "distinct": true,
          "url": "https://api.github.com/repos/rijalBinHusen/complete-datatable-vue/commits/f727c83893ee87bec964cc6f0c97d4cfba376d26"
        }
      ]
    },
    "public": true,
    "created_at": "2021-07-01T07:22:49Z"
  },
  {
    "id": "16995132225",
    "type": "PushEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 381868214,
      "name": "rijalBinHusen/complete-datatable-vue",
      "url": "https://api.github.com/repos/rijalBinHusen/complete-datatable-vue"
    },
    "payload": {
      "push_id": 7435872041,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/master",
      "head": "ca64c3e671a96a16c332056ae47df4d6d583eb6e",
      "before": "622f69e0396add158b0c938429bb72f343dfdf30",
      "commits": [
        {
          "sha": "ca64c3e671a96a16c332056ae47df4d6d583eb6e",
          "author": {
            "email": "67273416+rijalBinHusen@users.noreply.github.com",
            "name": "rijalBinHusen"
          },
          "message": "Update README.md",
          "distinct": true,
          "url": "https://api.github.com/repos/rijalBinHusen/complete-datatable-vue/commits/ca64c3e671a96a16c332056ae47df4d6d583eb6e"
        }
      ]
    },
    "public": true,
    "created_at": "2021-07-01T04:56:27Z"
  },
  {
    "id": "16995125996",
    "type": "PushEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 381868214,
      "name": "rijalBinHusen/complete-datatable-vue",
      "url": "https://api.github.com/repos/rijalBinHusen/complete-datatable-vue"
    },
    "payload": {
      "push_id": 7435869042,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/master",
      "head": "622f69e0396add158b0c938429bb72f343dfdf30",
      "before": "4aece5493ebdbd6ffb2da1eb14ae28e1d69c1199",
      "commits": [
        {
          "sha": "622f69e0396add158b0c938429bb72f343dfdf30",
          "author": {
            "email": "67273416+rijalBinHusen@users.noreply.github.com",
            "name": "rijalBinHusen"
          },
          "message": "Update README.md",
          "distinct": true,
          "url": "https://api.github.com/repos/rijalBinHusen/complete-datatable-vue/commits/622f69e0396add158b0c938429bb72f343dfdf30"
        }
      ]
    },
    "public": true,
    "created_at": "2021-07-01T04:55:39Z"
  },
  {
    "id": "16994966514",
    "type": "PushEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 381868214,
      "name": "rijalBinHusen/complete-datatable-vue",
      "url": "https://api.github.com/repos/rijalBinHusen/complete-datatable-vue"
    },
    "payload": {
      "push_id": 7435791907,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/master",
      "head": "4aece5493ebdbd6ffb2da1eb14ae28e1d69c1199",
      "before": "71eed427890b34f356fcb1b5c181c5b46e9419d2",
      "commits": [
        {
          "sha": "4aece5493ebdbd6ffb2da1eb14ae28e1d69c1199",
          "author": {
            "email": "67273416+rijalBinHusen@users.noreply.github.com",
            "name": "rijalBinHusen"
          },
          "message": "Create README.md",
          "distinct": true,
          "url": "https://api.github.com/repos/rijalBinHusen/complete-datatable-vue/commits/4aece5493ebdbd6ffb2da1eb14ae28e1d69c1199"
        }
      ]
    },
    "public": true,
    "created_at": "2021-07-01T04:35:07Z"
  },
  {
    "id": "16993372701",
    "type": "PushEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 349021822,
      "name": "rijalBinHusen/absenOffline",
      "url": "https://api.github.com/repos/rijalBinHusen/absenOffline"
    },
    "payload": {
      "push_id": 7435013080,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/main",
      "head": "348dd63ad942a0cf267b1fcd16067d41329187cf",
      "before": "02e66e0d6115c46b0c936be37e417e67dbd3aa12",
      "commits": [
        {
          "sha": "348dd63ad942a0cf267b1fcd16067d41329187cf",
          "author": {
            "email": "67273416+rijalBinHusen@users.noreply.github.com",
            "name": "rijalBinHusen"
          },
          "message": "Update README.md",
          "distinct": true,
          "url": "https://api.github.com/repos/rijalBinHusen/absenOffline/commits/348dd63ad942a0cf267b1fcd16067d41329187cf"
        }
      ]
    },
    "public": true,
    "created_at": "2021-07-01T01:01:36Z"
  },
  {
    "id": "16993306215",
    "type": "CreateEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 381868214,
      "name": "rijalBinHusen/complete-datatable-vue",
      "url": "https://api.github.com/repos/rijalBinHusen/complete-datatable-vue"
    },
    "payload": {
      "ref": "master",
      "ref_type": "branch",
      "master_branch": "master",
      "description": "complete datatable base on vuejs and bootstrap for css",
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2021-07-01T00:52:33Z"
  },
  {
    "id": "16993240921",
    "type": "CreateEvent",
    "actor": {
      "id": 67273416,
      "login": "rijalBinHusen",
      "display_login": "rijalBinHusen",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rijalBinHusen",
      "avatar_url": "https://avatars.githubusercontent.com/u/67273416?"
    },
    "repo": {
      "id": 381868214,
      "name": "rijalBinHusen/complete-datatable-vue",
      "url": "https://api.github.com/repos/rijalBinHusen/complete-datatable-vue"
    },
    "payload": {
      "ref": null,
      "ref_type": "repository",
      "master_branch": "main",
      "description": "complete datatable base on vuejs and bootstrap for css",
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2021-07-01T00:43:17Z"
  }
]

        }
    },
    // mounted() {
    //     this.http.get("https://api.github.com/users/rijalBinHusen/events")
    //     .then( (response) => this.github = response.data )
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    // },
}
</script>