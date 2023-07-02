import axios from 'axios';

// API Key Hidden in ENV
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;


// Function to make the OpenAI API request
const generateCompletion = (inputText) => {
    console.log(apiKey)
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: 'https://api.openai.com/v1/engines/davinci-codex/completions',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      data: {
        prompt: inputText,
        max_tokens: 3000
      }
    })
      .then(response => {
        resolve(response.data.choices[0].text);
      })
      .catch(error => {
        reject(error);
      });
  });
};
export default generateCompletion
