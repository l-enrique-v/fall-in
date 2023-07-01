// src/App.js
import { Configuration, OpenAIApi } from 'openai';

import FormSection from './components/FormSection';
import AnswerSection from './components/AnswerSection';

import { useState } from 'react';

const TherapyBot = () => {
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const [storedValues, setStoredValues] = useState([]);

    const generateResponse = async (newQuestion, setNewQuestion) => {
        let options = {
            model: 'text-davinci-003',
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ['/'],
        };

        let completeOptions = {
            ...options,
            prompt: newQuestion,
        };

        const response = await openai.createCompletion(completeOptions);

        if (response.data.choices) {
            setStoredValues([
                {
                    question: newQuestion,
                    answer: response.data.choices[0].text,
                },
                ...storedValues,
            ]);
            setNewQuestion('');
        }
    };

    return (
        <div>
            <div className="header-section">
                <h1>ChatGPT CLONE 🤖</h1>
                    <p>
                        I am an automated system designed to create a therapeutic profile.
                        Kindly keep in mind that I am a machine and
                        operate solely based on programmed algorithms.
                    </p>
            </div>

            <FormSection generateResponse={generateResponse} />

            <AnswerSection storedValues={storedValues} />
        </div>
    );
};

export default TherapyBot;