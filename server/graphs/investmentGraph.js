const client = require("../config/gemini");
const investmentPrompt = require("../prompts/investmentPrompt");

async function runInvestmentAgent(company) {
  const completion = await client.chat.completions.create({
    model: "google/gemini-2.5-flash",
    messages: [
      {
        role: "user",
        content: `${investmentPrompt}

Company Name: ${company}`,
      },
    ],
    max_tokens:1500,  });

  return JSON.parse(completion.choices[0].message.content);
}

module.exports = runInvestmentAgent;