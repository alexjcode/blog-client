const store = require('../store')
// const events = require('./events')

const successMessage = message => {
  $('form').trigger('reset')
  $('#message').text(message)
  // $('#message').removeClass('failure')
  // $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('.message-auth').text(message)
  // $('.message-auth').removeClass('success')
  // $('.message-auth').addClass('failure')
  // Clear getFormFields
  $('form').trigger('reset')
}

const hideMessaging = function () {
  setTimeout(function () {
    $('#message').html('')
    $('.message-auth').html('')
  }, 5000)
}

const signUpSuccess = responseData => {
  successMessage('You signed up successfully!')
  $('#signUpModal').modal('hide')
  hideMessaging()
}

const signUpFailure = responseData => {
  failureMessage('Sign up failed!')
  hideMessaging()
}

const signInSuccess = responseData => {
  $('form').trigger('reset')
  $('#change-password-btn').show()
  $('#sign-out').show()
  $('#sign-in-btn').hide()
  $('#sign-up-btn').hide()
  $('#signInModal').modal('hide')
  $('#update-post').show()
  // $('#show-post').show()
  $('#create-comment').show()
  $('#new-post').show()
  $('#update-comment').show()
  $('#posts').show()
  $('#new-post-btn').show()
  store.user = responseData.user
  successMessage('You signed in successfully!')
  hideMessaging()
}

const signInFailure = () => {
  failureMessage('Sign in failed!')
  hideMessaging()
}

const signOutSuccess = responseData => {
  $('form').trigger('reset')
  // $('.myModal').modal('hide')
  successMessage('You signed out successfully!')
  $('#change-password-btn').hide()
  $('#sign-out').hide()
  $('#sign-in-btn').show()
  $('#sign-up-btn').show()
  $('#new-post').hide()
  store.user = {}
  store.user._id = '888'
  $('#update-post').hide()
  $('#show-post').hide()
  $('#create-comment').hide()
  $('#new-post-btn').hide()
  $('#update-comment').hide()
  $('#posts').show()
  hideMessaging()
}

const signOutFailure = responseData => {
  failureMessage('Sign out failed!')
  hideMessaging()
}

const changePasswordSuccess = responseData => {
  successMessage('You changed your password!')
  $('#changePwModal').modal('hide')
  hideMessaging()
}

const changePasswordFailure = responseData => {
  failureMessage('Password not changed!')
  hideMessaging()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
