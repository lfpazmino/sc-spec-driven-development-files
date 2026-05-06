# Claude Code Settings

[How I Run Claude Code Free Using NVIDIA's Servers](https://x.com/sauravv_x/status/2036208662520406167?s=20)

## Step 1: Get your free NVIDIA API key
Go to: https://build.nvidia.com/settings/api-keys

## Step 2: Install the proxy

```bash
#Install uv (one-time only)
curl -LsSf https://astral.sh/uv/install.sh | sh

#Download the proxy
git clone https://github.com/lfpazmino/free-claude-code.git
cd free-claude-code

#Create config file
cp .env.example .env
```

## Step 3: Edit the .env file
```bash
nano .env
```

Clear everything and paste this (swap in your own key):

```bash
NVIDIA_NIM_API_KEY="nvapi-your-full-key-here"

# Model mappings
MODEL_OPUS="nvidia_nim/z-ai/glm5"
MODEL_SONNET="nvidia_nim/minimaxai/minimax-m2.5"
MODEL_HAIKU="nvidia_nim/z-ai/glm5"
MODEL="nvidia_nim/z-ai/glm5"
```

## Step 4: Create the Claude settings file

```bash
mkdir -p ~/.claude
nano ~/.claude/settings.json
```

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "http://localhost:8082",
    "ANTHROPIC_AUTH_TOKEN": "freecc",
    "ANTHROPIC_API_KEY": "sk-any-non-empty-string"
  }
}
```

## Step 5: Start the proxy
Run this and keep the terminal open:

```bash
uv run uvicorn server:app --host 0.0.0.0 --port 8082
```

## Step 6: Launch Claude Code
Open a new terminal and run:

```bash
ANTHROPIC_BASE_URL="http://localhost:8082" ANTHROPIC_AUTH_TOKEN="freecc" ANTHROPIC_API_KEY="sk-any-non-empty-string" claude

# Choosing a model

# For coding and file editing
claude --model claude-sonnet-4.6

# For reasoning-heavy tasks and agents:
claude --model claude-opus-4.6

```

## Step 7: Configure 

```json
"claudeCode.environmentVariables": [
  { "name": "ANTHROPIC_BASE_URL", "value": "http://localhost:8082" },
  { "name": "ANTHROPIC_AUTH_TOKEN", "value": "freecc" },
  { "name": "CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY", "value": "1" }
]
```