module.exports = {
  preset: "conventionalcommits",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          {
            breaking: true,
            release: "major",
          },
          {
            type: "refactor",
            release: "patch",
          },
          {
            type: "test",
            release: "patch",
          },
          {
            type: "style",
            release: "patch",
          },
          {
            type: "docs",
            release: "patch",
          },
          {
            type: "perf",
            release: "patch",
          },
          {
            type: "ci",
            release: "patch",
          },
          {
            type: "chore",
            release: "patch",
          },
          {
            type: "deps",
            release: "patch",
          },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        presetConfig: {
          types: [
            {
              type: "feat",
              section: ":sparkles: Features",
              hidden: false,
            },
            {
              type: "fix",
              section: ":bug: Fixes",
              hidden: false,
            },
            {
              type: "docs",
              section: ":memo: Documentation",
              hidden: false,
            },
            {
              type: "style",
              section: ":barber: Styling",
              hidden: false,
            },
            {
              type: "refactor",
              section: ":zap: Refactor",
              hidden: false,
            },
            {
              type: "perf",
              section: ":fast_forward: Performance",
              hidden: false,
            },
            {
              type: "test",
              section: ":white_check_mark: Tests",
              hidden: false,
            },
            {
              type: "ci",
              section: ":repeat: CI",
              hidden: false,
            },
            {
              type: "chore",
              section: ":page_facing_up: Chore",
              hidden: false,
            },
            {
              type: "deps",
              section: ":books: Dependencies",
              hidden: false,
            },
          ],
        },
      },
    ]
  ],
  tagFormat: "${version}",
  branches: [
    {
      name: "main",
    },
  ],
  successComment: true,
  failComment: false
};
