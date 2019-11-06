import React from 'react'
import {Followers} from './Followers'

export const User = ({userData}) => {
    return (
        <>
        <div className="cards" >
            <h2>{userData.name}</h2>
            <h4>{userData.location}</h4>
<img src={userData.avatar_url} alt={userData.login}/>
<h3>{userData.bio}</h3>
<a href={userData.blog}>Linkdin</a>
<h3>publicRepos:{userData.public_repos}</h3>

        </div>
        <Followers/>
        </>
    )
}


{/**avatar_url: "https://avatars2.githubusercontent.com/u/42871401?v=4"
bio: "Unquenchable thirst for knowledge keeps me up@night.Intrigued by all things advancing the human race.Pay it forward.Help somebody if you can&DressSharpMyFriend!"
blog: "https://www.linkedin.com/in/jtwray/"
company: null
created_at: "2018-08-31T14:57:34Z"
email: null
events_url: "https://api.github.com/users/jtwray/events{/privacy}"
followers: 9
followers_url: "https://api.github.com/users/jtwray/followers"
following: 26
following_url: "https://api.github.com/users/jtwray/following{/other_user}"
gists_url: "https://api.github.com/users/jtwray/gists{/gist_id}"
gravatar_id: ""
hireable: true
html_url: "https://github.com/jtwray"
id: 42871401
location: "asheville,nc"
login: "jtwray"
name: "James 'Tucker' Wray"
node_id: "MDQ6VXNlcjQyODcxNDAx"
organizations_url: "https://api.github.com/users/jtwray/orgs"
public_gists: 1
public_repos: 104
received_events_url: "https://api.github.com/users/jtwray/received_events"
repos_url: "https://api.github.com/users/jtwray/repos"
site_admin: false
starred_url: "https://api.github.com/users/jtwray/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/jtwray/subscriptions"
type: "User"
updated_at: "2019-10-31T23:57:51Z"
url: "https://api.github.com/users/jtwray" */}