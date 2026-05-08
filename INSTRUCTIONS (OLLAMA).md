# Claude Code Settings

[How to run Claude Code Locally](https://x.com/AItechscarlett/status/2050999526803333312?s=20)

## Step 1: Install [ollama](ollama.com)

```bash
ollama pull qwen3-coder
```

## Step 2: Create the Claude settings file

```bash
mkdir -p ~/.claude
nano ~/.claude/settings.json
```

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "http://localhost:11434",
    "ANTHROPIC_AUTH_TOKEN": "ollama",
  }
}
```

## Run without environment variables in .bashrc

```bash
ollama launch claude
```