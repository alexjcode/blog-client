// handlebars reference
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

const onGetPosts = event => {
  if (event) {
    event.preventDefault()
  }
  api.getPosts()
    .then(ui.getPostsSuccess)
    .then(() => {
      $('#posts').find('button[user!="' + store.user._id + '"]').hide()
      $('.add-comment-to-post').show()
      if (!store.user || store.user._id === '888') {
        $('#posts').find('button').hide()
        $('.add-comment-to-post').hide()
      } else {
        $('.add-comment-to-post').show()
      }
    })
    .catch(ui.failure)
}

const onEditPostButton = event => {
  event.preventDefault()
  const button = $(event.target)
  const id = button.data('id')
  const form = $('#update-post').children()
  // console.log(button)
  form.eq(0).val(id)
  form.eq(1).val(button.attr('title'))
  form.eq(2).val(button.attr('text'))
}

const onAddCommentToPost = event => {
  event.preventDefault()
  const button = $(event.target)
  const id = button.data('id')
  const form = $('#create-comment').children()
  form.eq(0).val(id)
}

const onEditCommentButton = event => {
  event.preventDefault()
  const button = $(event.target)
  const id = button.data('id')
  const form = $('#update-comment').children()
  form.eq(0).val(id)
  form.eq(1).val(button.attr('text'))
}

const onUpdatePost = event => {
  if (event) {
    event.preventDefault()
  }
  const form = event.target
  const formData = getFormFields(form)
  const id = formData.post.id
  api.updatePost(formData, id)
    .then(ui.updatePostSuccess)
    .then(onGetPosts)
    .catch(ui.updatePostFailure)
}

const onUpdateComment = event => {
  if (event) {
    event.preventDefault()
  }
  const form = event.target
  const formData = getFormFields(form)
  const id = formData.comment.id
  api.updateComment(formData, id)
    .then(ui.updateCommentSuccess)
    .then(onGetPosts)
    .catch(ui.updateCommentFailure)
}

const onCreateComment = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createComment(formData)
    .then(ui.createCommentSuccess)
    .then(onGetPosts)
    .catch(ui.createCommentFailure)
}

const onCreatePost = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.createPost(formData)
    .then(ui.createPostSuccess)
    .then(onGetPosts)
    .catch(ui.createPostFailure)
}

const onDeletePost = event => {
  if (event) {
    event.preventDefault()
  }
  const button = $(event.target)
  const id = button.data('id')
  api.deletePost(id)
    .then(ui.deletePostSuccess)
    .then(onGetPosts)
    .catch(ui.failure)
}

const onDeleteCommment = event => {
  if (event) {
    event.preventDefault()
  }
  const button = $(event.target)
  const id = button.data('id')
  api.deleteComment(id)
    .then(ui.deleteCommentSuccess)
    .then(onGetPosts)
    .catch(ui.failure)
}

module.exports = {
  onGetPosts,
  onEditPostButton,
  onUpdatePost,
  onUpdateComment,
  onCreateComment,
  onCreatePost,
  onDeletePost,
  onAddCommentToPost,
  onDeleteCommment,
  onEditCommentButton
}
