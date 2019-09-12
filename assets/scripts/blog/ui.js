const postTemplate = require('../templates/posts.handlebars')
// const store = require('../store')

const failureMessage = message => {
  $('.message-blog').text(message)
  // $('.message-auth').removeClass('success')
  // $('.message-auth').addClass('failure')
  // Clear getFormFields
  $('form').trigger('reset')
}

const hideMessaging = function () {
  setTimeout(function () {
    $('.message-blog').html('')
  }, 5000)
}

const clearForms = () => {
  $('form').trigger('reset')
}

const createPostSuccess = data => {
  $('#newPostModal').modal('hide')
  clearForms()
}

const createPostFailure = data => {
  failureMessage('Failed to add post')
  hideMessaging()
}

const getPostsSuccess = data => {
  clearForms()
  const showPostsHtml = postTemplate({ posts: data.posts })
  $('#posts').html(showPostsHtml)
  // debugger
}

// const getMyPostsSuccess = data => {
//   clearForms()
//   const showPostsHtml = postTemplate({ posts: data.posts })
//   $('#posts').html(showPostsHtml)
// }

const updatePostSuccess = data => {
  $('#updatePostModal').modal('hide')
  clearForms()
}

const updatePostFailure = data => {
  failureMessage('Failed to update post')
  hideMessaging()
}

const updateCommentSuccess = data => {
  $('#updateCommentModal').modal('hide')
  clearForms()
}

const updateCommentFailure = data => {
  failureMessage('Failed to update comment')
  hideMessaging()
}

const createCommentSuccess = data => {
  $('#newCommentModal').modal('hide')
  clearForms()
}

const createCommentFailure = data => {
  failureMessage('Failed to add comment')
  hideMessaging()
}

const deleteCommentSuccess = data => {
  clearForms()
}

// const showCommentsHtml = commentTemplate({ comments: data.comments })
//  $('#comments').html(showCommentsHtml)
const failure = data => {}

// const onGetCommentsOfAPost = data => {
//   const showCommentsHtml = commentTemplate({ comments: data.comments })
//   $('#comments').html(showCommentsHtml)
// }

module.exports = {
  getPostsSuccess,
  createCommentSuccess,
  createCommentFailure,
  createPostSuccess,
  createPostFailure,
  failure,
  updatePostSuccess,
  updatePostFailure,
  deleteCommentSuccess,
  updateCommentSuccess,
  updateCommentFailure
  // onGetCommentsOfAPost
}
