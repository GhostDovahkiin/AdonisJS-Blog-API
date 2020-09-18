'use strict'

const User = use('App/Models/User')
const Post = use('App/Models/Post')
const slugify = require('slugify')

// Define resolvers
const resolvers = {
  Query: {
    // Fetch all users
    async allUsers() {
      const users = await User.all()
      return users.toJSON()
    },
    // Get a user by its ID
    async fetchUser(_, {
      id
    }) {
      const user = await User.find(id)
      return user.toJSON()
    },
    // Fetch all posts
    async allPosts() {
      const posts = await Post.all()
      return posts.toJSON()
    },
    // Get a post by its ID
    async fetchPost(_, {
      id
    }) {
      const post = await Post.find(id)
      return post.toJSON()
    }
  },
}
