require("dotenv").config();

const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

async function main() {
  try {
    const completion = await client.chat.completions.create({
      model: "google/gemini-2.5-flash",
      messages: [
        {
          role: "user",
          content: "Say hello.",
        },
      ],
    });

    console.log(completion.choices[0].message.content);
  } catch (err) {
    console.error("FULL ERROR:");
    console.error(err);
  }
}

main();