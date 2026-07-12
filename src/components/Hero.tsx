import { useState } from "react";
import { Search, Sparkles, TrendingUp } from "lucide-react";
import api from "../services/api";

function Hero() {
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!company.trim()) {
      alert("Please enter a company name.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/analyze", {
        company,
      });

      console.log(response.data);

      setResult(response.data);
    } catch (error: any) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        {/* Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-blue-400/30 bg-white/10 px-5 py-2 backdrop-blur-md">
          <Sparkles size={18} className="text-blue-400" />
          <span className="text-sm text-gray-300">
            Powered by AI Agents
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-center text-6xl font-extrabold leading-tight md:text-7xl">
          AI Investment{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Research Agent
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-3xl text-center text-xl leading-9 text-gray-300">
          Research any public company using AI. Analyze financials,
          market trends, risks, competitors and receive an explainable
          investment recommendation within seconds.
        </p>

        {/* Search Box */}
        <div className="mt-12 flex w-full max-w-3xl items-center rounded-2xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
          <Search className="ml-3 text-gray-300" />

          <input
            type="text"
            placeholder="Search Company (Tesla, Apple, Microsoft...)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAnalyze();
              }
            }}
            className="w-full bg-transparent px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none"
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 font-semibold transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze →"}
          </button>
        </div>

        {/* Current Company */}
        <p className="mt-4 text-gray-400">
          Current Company:{" "}
          <span className="text-cyan-400">
            {company || "None"}
          </span>
        </p>

        {/* AI Result */}
        {result && (
          <div className="mt-10 w-full max-w-5xl rounded-3xl border border-cyan-500/30 bg-white/10 p-8 backdrop-blur-xl shadow-xl">

            <h2 className="mb-6 text-3xl font-bold text-cyan-400">
              AI Investment Report
            </h2>

            <div className="space-y-6">

              <p>
                <span className="font-bold text-cyan-300">
                  Company:
                </span>{" "}
                {result.analysis.company}
              </p>

              <p>
                <span className="font-bold text-cyan-300">
                  Recommendation:
                </span>{" "}
                <span className="text-green-400 font-semibold">
                  {result.analysis.recommendation}
                </span>
              </p>

              <p>
                <span className="font-bold text-cyan-300">
                  Confidence:
                </span>{" "}
                {result.analysis.confidence}
              </p>

              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  Company Overview
                </h3>
                <p className="text-gray-300 whitespace-pre-wrap">
                  {result.analysis.overview}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  Financial Health
                </h3>
                <p className="text-gray-300 whitespace-pre-wrap">
                  {result.analysis.financialHealth}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  Growth Potential
                </h3>
                <p className="text-gray-300 whitespace-pre-wrap">
                  {result.analysis.growthPotential}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  Competitive Advantages
                </h3>
                <p className="text-gray-300 whitespace-pre-wrap">
                  {result.analysis.competitiveAdvantages}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  Major Risks
                </h3>
                <p className="text-gray-300 whitespace-pre-wrap">
                  {result.analysis.majorRisks}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  Reason for Recommendation
                </h3>
                <p className="text-gray-300 whitespace-pre-wrap">
                  {result.analysis.reason}
                </p>
              </div>

            </div>

          </div>
        )}

        {/* Feature Cards */}
        <div className="mt-20 grid w-full max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/40">
            <TrendingUp className="mb-4 text-blue-400" size={40} />
            <h2 className="mb-3 text-2xl font-semibold">
              Financial Analysis
            </h2>
            <p className="text-gray-300">
              Revenue, profit, growth, cash flow and financial health
              analyzed automatically.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
            <Sparkles className="mb-4 text-cyan-400" size={40} />
            <h2 className="mb-3 text-2xl font-semibold">
              AI Reasoning
            </h2>
            <p className="text-gray-300">
              Every investment decision includes transparent reasoning
              instead of simply saying Invest or Pass.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-indigo-400/40">
            <Search className="mb-4 text-indigo-400" size={40} />
            <h2 className="mb-3 text-2xl font-semibold">
              Market Research
            </h2>
            <p className="text-gray-300">
              News sentiment, competitors, SWOT analysis and market
              trends combined into one intelligent report.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;