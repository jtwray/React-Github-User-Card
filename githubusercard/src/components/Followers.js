import React from 'react'
import { SingleFollower } from './SingleFollower'


export const Followers = ({ followersData }) => {
    return (
        <>
            <div>

                {followersData&&followersData.map((f) => { return (<SingleFollower followerData={f} />) })}
            </div>

        </>
    )
}


{/**avatar_url: "https://avatars0.githubusercontent.com/u/35116923?v=4"
events_url: "https://api.github.com/users/VivaCode/events{/privacy}"
followers_url: "https://api.github.com/users/VivaCode/followers"
following_url: "https://api.github.com/users/VivaCode/following{/other_user}"
gists_url: "https://api.github.com/users/VivaCode/gists{/gist_id}"
gravatar_id: ""
html_url: "https://github.com/VivaCode"
id: 35116923
login: "VivaCode"
node_id: "MDQ6VXNlcjM1MTE2OTIz"
organizations_url: "https://api.github.com/users/VivaCode/orgs"
received_events_url: "https://api.github.com/users/VivaCode/received_events"
repos_url: "https://api.github.com/users/VivaCode/repos"
site_admin: false
starred_url: "https://api.github.com/users/VivaCode/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/VivaCode/subscriptions"
type: "User"
url: "https://api.github.com/users/VivaCode" */}