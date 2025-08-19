const MODELS = [
    {
        label: "OpenAI",
        items: [
            { value: "openai/gpt-oss-120b", label: "GPT-OSS-120B" },
            { value: "openai/gpt-oss-20b", label: "GPT-OSS-20B" }
        ],
    },
    {
        label: "Zhipu AI (ZAI)",
        items: [
            { value: "zai-org/GLM-4.5", label: "GLM-4.5" },
            { value: "zai-org/GLM-4.5-Air", label: "GLM-4.5-Air" },
        ],
    },
    {
        label: "DeepSeek",
        items: [
            { value: "deepseek-ai/DeepSeek-R1-0528", label: "DeepSeek R1-0528" },
            { value: "deepseek-ai/DeepSeek-R1-0528-fast", label: "DeepSeek R1-0528 Fast" },
            { value: "deepseek-ai/DeepSeek-V3-0324", label: "DeepSeek V3-0324" },
            { value: "deepseek-ai/DeepSeek-V3-0324-fast", label: "DeepSeek V3-0324 Fast" },
            { value: "deepseek-ai/DeepSeek-V3", label: "DeepSeek V3" },
            { value: "deepseek-ai/DeepSeek-R1", label: "DeepSeek R1" },
            { value: "deepseek-ai/DeepSeek-R1-fast", label: "DeepSeek R1 Fast" },
        ],
    },
    {
        label: "Qwen",
        items: [
            { value: "Qwen/Qwen3-235B-A22B-Instruct-2507", label: "Qwen3-235B-A22B-Instruct-2507" },
            { value: "Qwen/Qwen3-235B-A22B", label: "Qwen3-235B-A22B" },
            { value: "Qwen/Qwen3-30B-A3B", label: "Qwen3-30B-A3B" },
            { value: "Qwen/Qwen3-30B-A3B-fast", label: "Qwen3-30B-A3B Fast" },
            { value: "Qwen/Qwen3-32B", label: "Qwen3-32B" },
            { value: "Qwen/Qwen3-32B-fast", label: "Qwen3-32B Fast" },
            { value: "Qwen/Qwen3-14B", label: "Qwen3-14B" },
            { value: "Qwen/Qwen3-4B-fast", label: "Qwen3-4B-fast" },
        ],
    },
    {
        label: "NVIDIA",
        items: [
            { value: "nvidia/Llama-3_1-Nemotron-Ultra-253B-v1", label: "Llama-3_1-Nemotron-Ultra-253B-v1" }
        ],
    },
    {
        label: "Meta",
        items: [
            { value: "meta-llama/Llama-3.3-70B-Instruct", label: "Llama-3.3-70B-Instruct" },
            { value: "meta-llama/Llama-3.3-70B-Instruct-fast", label: "Llama-3.3-70B-Instruct-fast" },
            { value: "meta-llama/Meta-Llama-3.1-70B-Instruct", label: "Meta-Llama-3.1-70B-Instruct" },
            { value: "meta-llama/Meta-Llama-3.1-8B-Instruct", label: "Meta-Llama-3.1-8B-Instruct" },
            { value: "meta-llama/Meta-Llama-3.1-8B-Instruct-fast", label: "Meta-Llama-3.1-8B-Instruct-fast" },
            { value: "meta-llama/Meta-Llama-3.1-405B-Instruct", label: "Meta-Llama-3.1-405B-Instruct" }
        ],
    },
    {
        label: "Mistral",
        items: [
            { value: "mistralai/Mistral-Nemo-Instruct-2407", label: "Mistral-Nemo-Instruct-2407" }
        ],
    },
];

export { MODELS };
