using DotNetEnv;

public class OpenAi
{
    private readonly string _openApiKey;

    public OpenAi()
    {
        Env.Load(); // Loads the environment variables from .env file

        _openApiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY");
        // Use the _openApiKey to authenticate with OpenAI
    }

    // ...
}