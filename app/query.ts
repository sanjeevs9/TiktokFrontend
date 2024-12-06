export const user =`
user(uniqueId: $uniqueId) {
    nickname
    avatar
    secUid
    uniqueId
    id
    posts {
      collectCount
      commentCount
      diggCount
      desc
      id
      playCount
      shareCount
    }
    stats {
      diggCount
      followerCount
      followingCount
      heart
      heartCount
      videoCount
    }
    followers {
      avatar
      name
    }
    following{
      avatar
      name
    }
  }
`