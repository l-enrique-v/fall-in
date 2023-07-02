import axios from 'axios';

// API Key Hidden in ENV
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;


// Function to make the OpenAI API requestç
const generateCompletion = (inputText) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: 'https://api.openai.com/v1/engines/text-davinci-003/completions',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      data: {
        prompt: inputText,
        max_tokens: 100
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
