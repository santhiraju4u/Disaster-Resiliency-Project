const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const apiVersion = '2020-19-06';
const assistantId= '701f1c5e-469a-49c3-8931-6121cead6a94';
const apikey= 'sZZKQErn3r0t6M56CpQ4QYxJ9jexi16G3pV4LoZCjIF5';
const apiUrl= 'https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/809ca36b-dc7b-4e85-bbd6-11a440687887';

const assistant = new AssistantV2({
  version: apiVersion,
  authenticator: new IamAuthenticator({
  apikey: apikey,
  }),
  url: apiUrl,
  disableSslVerification: 'false',

});

const message = (text, sessionId) => {
    if (!assistantId || assistantId === '<assistant_id>') {
      return Promise.reject('ASSISTANT_ID has not been configured.')
    } else if (!sessionId) {
      return Promise.reject('sessionId has not been provided.')
    } else if (!text) {
      return Promise.reject('No user input provided.')
    }
  
    const payload = {
      assistantId: assistantId,
      sessionId: sessionId,
      input: {
        message_type: 'text',
        text: text
      }
    };
  
    return new Promise((resolve, reject) => {
      assistant.message(payload, (err, data) => {
        if (err) {
          console.error('Failed to send message to Watson Assistant');
          reject(err);
        } else {
          resolve(data.result.output);
        }
      });
    });
  };
  
  const session = () => {
    if (!assistantId || assistantId === '<assistant_id>') {
      return Promise.reject('ASSISTANT_ID has not been configured');
    }
  
    return assistant
      .createSession({
        assistantId: assistantId
      })
      .then(response => response.result['session_id'])
      .catch(err => {
        console.error('Failed to obtain a session ID from Watson Assistant');
        console.error(`  ASSISTANT_URL: ${apiUrl}`);
        throw err;
      });
  };
  
  module.exports = {
    message: message,
    session: session
  };
  