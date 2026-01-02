"use client";

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar
        repoUrl=""
        downloadUrl=""
      />

      {/* Full-screen gradient background */}
      <div className="min-h-screen bg-gradient-to-r from-orange-300 via-orange-700 to-black flex items-center justify-center px-6">

        {/* Content Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl w-full max-w-3xl p-6">

          <h2 className="text-white text-2xl font-semibold mb-4">
            PR Review Bot — Demo
          </h2>

          {/* Video Section */}
          <div className="rounded-xl overflow-hidden border border-white/20">
            <video
              className="w-full"
              controls
              src="/demo.mp4"
            />
          </div>

          {/* Instruction Text */}
          <div className="mt-4 text-gray-200">
            <h3 className="text-lg font-semibold mb-1">
              How to use this project
            </h3>

            <p className="text-sm leading-relaxed">
              1. Create or open a Pull Request in your GitHub repository. <br />
              2. The PR-Review Bot automatically fetches the code changes. <br />
              3. The AI analyzes diffs and generates a structured review. <br />
              4. The bot posts feedback directly on the pull request. <br />
              5. You can use this dashboard to preview review results and logs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
