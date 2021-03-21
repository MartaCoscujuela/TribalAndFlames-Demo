const queryString = require('query-string');

const stringifiedParams = queryString.stringify({
  client_id: process.env.FACEBOOK_ID,
  redirect_uri: process.env.FACEBOOK_CALLBACK,
  scope: ['email'].join(','), // comma seperated string
  response_type: 'code',
  auth_type: 'rerequest',
  display: 'popup',
});

module.exports = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;
