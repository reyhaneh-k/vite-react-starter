import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

const { Error, Warning, Disabled } = RuleConfigSeverity;

/**
 * Conventional Commits for this starter
 *
 * Format:
 *   <type>(<scope>)!: <subject>
 *
 * Examples:
 *   feat(routes): add home page
 *   fix(eslint): replace excludes with ignores in flat config
 *   chore(deps): bump vite
 *
 * Skip hook once: SKIP_COMMITLINT=1 git commit -m "..."
 *
 * @see https://www.conventionalcommits.org/
 * @see https://commitlint.js.org/
 */
const config = {
  extends: ["@commitlint/config-conventional"],
  formatter: "@commitlint/format",

  defaultIgnores: true,
  ignores: [
    (message) => message.includes("WIP"),
    (message) => /^draft\b/i.test(message),
  ],

  rules: {
    "header-max-length": [Error, "always", 100],
    "header-trim": [Error, "always"],

    "type-empty": [Error, "never"],
    "type-case": [Error, "always", "lower-case"],
    "type-enum": [
      Error,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
      ],
    ],

    "scope-empty": [Error, "never"],
    "scope-case": [Error, "always", "lower-case"],
    "scope-enum": [
      Warning,
      "always",
      [
        "routes",
        "layout",
        "components",
        "prim",
        "modules",
        "hooks",
        "providers",
        "stores",
        "utils",
        "consts",
        "types",
        "styles",
        "assets",
        "html",
        "eslint",
        "prettier",
        "husky",
        "lint-staged",
        "commitlint",
        "vite",
        "tsconfig",
        "tailwind",
        "deps",
        "ci",
        "sentry",
        "seo",
        "a11y",
        "dx",
      ],
    ],

    "subject-empty": [Error, "never"],
    "subject-full-stop": [Error, "never", "."],
    "subject-exclamation-mark": [Disabled, "never"],
    "subject-case": [
      Error,
      "never",
      [
        "sentence-case",
        "start-case",
        "pascal-case",
        "upper-case",
      ],
    ],

    "body-leading-blank": [Disabled, "always"],
    "body-max-line-length": [Error, "always", 100],
    "footer-leading-blank": [Warning, "always"],
    "footer-max-line-length": [Error, "always", 100],
  },
} satisfies UserConfig;

export default config;
