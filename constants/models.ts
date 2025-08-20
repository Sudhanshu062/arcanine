const MODELS = [
    {
        label: "OpenAI",
        items: [
            { value: "openai/gpt-oss-120b", label: "GPT-OSS-120B" },
            { value: "openai/gpt-oss-20b", label: "GPT-OSS-20B" }
        ],
    },
    {
        label: "ZAI-Org",
        items: [
            { value: "zai-org/GLM-4.5", label: "GLM-4.5" },
            { value: "zai-org/GLM-4.5-Air", label: "GLM-4.5-Air" }
        ],
    },
    {
        label: "DeepSeek-AI",
        items: [
            { value: "deepseek-ai/DeepSeek-R1-0528", label: "DeepSeek-R1-0528" },
            { value: "deepseek-ai/DeepSeek-R1-0528-fast", label: "DeepSeek-R1-0528-fast" },
            { value: "deepseek-ai/DeepSeek-V3-0324", label: "DeepSeek-V3-0324" },
            { value: "deepseek-ai/DeepSeek-V3-0324-fast", label: "DeepSeek-V3-0324-fast" },
            { value: "deepseek-ai/DeepSeek-V3", label: "DeepSeek-V3" },
            { value: "deepseek-ai/DeepSeek-R1", label: "DeepSeek-R1" },
            { value: "deepseek-ai/DeepSeek-R1-fast", label: "DeepSeek-R1-fast" },
            { value: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B", label: "DeepSeek-R1-Distill-Llama-70B" }
        ],
    },
    {
        label: "Qwen",
        items: [
            { value: "Qwen/Qwen3-235B-A22B-Instruct-2507", label: "Qwen3-235B-A22B-Instruct-2507" },
            { value: "Qwen/Qwen3-235B-A22B", label: "Qwen3-235B-A22B" },
            { value: "Qwen/Qwen3-30B-A3B", label: "Qwen3-30B-A3B" },
            { value: "Qwen/Qwen3-30B-A3B-fast", label: "Qwen3-30B-A3B-fast" },
            { value: "Qwen/Qwen3-32B", label: "Qwen3-32B" },
            { value: "Qwen/Qwen3-32B-fast", label: "Qwen3-32B-fast" },
            { value: "Qwen/Qwen3-14B", label: "Qwen3-14B" },
            { value: "Qwen/Qwen3-4B-fast", label: "Qwen3-4B-fast" },
            { value: "Qwen/Qwen2.5-Coder-7B", label: "Qwen2.5-Coder-7B" },
            { value: "Qwen/Qwen2.5-Coder-7B-fast", label: "Qwen2.5-Coder-7B-fast" },
            { value: "Qwen/Qwen2.5-Coder-32B-Instruct", label: "Qwen2.5-Coder-32B-Instruct" },
            { value: "Qwen/Qwen2.5-Coder-32B-Instruct-fast", label: "Qwen2.5-Coder-32B-Instruct-fast" },
            { value: "Qwen/Qwen2.5-32B-Instruct", label: "Qwen2.5-32B-Instruct" },
            { value: "Qwen/Qwen2.5-32B-Instruct-fast", label: "Qwen2.5-32B-Instruct-fast" },
            { value: "Qwen/Qwen2.5-72B-Instruct", label: "Qwen2.5-72B-Instruct" },
            { value: "Qwen/Qwen2.5-72B-Instruct-fast", label: "Qwen2.5-72B-Instruct-fast" },
            { value: "Qwen/QwQ-32B", label: "QwQ-32B" },
            { value: "Qwen/QwQ-32B-fast", label: "QwQ-32B-fast" }
        ],
    },
    {
        label: "NVIDIA",
        items: [
            { value: "nvidia/Llama-3_1-Nemotron-Ultra-253B-v1", label: "Llama-3_1-Nemotron-Ultra-253B-v1" },
            { value: "nvidia/Llama-3_3-Nemotron-Super-49B-v1", label: "Llama-3_3-Nemotron-Super-49B-v1" }
        ],
    },
    {
        label: "Meta-LLaMA",
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
        label: "MistralAI",
        items: [
            { value: "mistralai/Mistral-Nemo-Instruct-2407", label: "Mistral-Nemo-Instruct-2407" },
            { value: "mistralai/Devstral-Small-2505", label: "Devstral-Small-2505" }
        ],
    },
    {
        label: "Google",
        items: [
            { value: "google/gemma-2-2b-it", label: "gemma-2-2b-it" },
            { value: "google/gemma-2-9b-it-fast", label: "gemma-2-9b-it-fast" }
        ],
    },
    {
        label: "Aaditya",
        items: [
            { value: "aaditya/Llama3-OpenBioLLM-70B", label: "Llama3-OpenBioLLM-70B" }
        ],
    },
    {
        label: "Microsoft",
        items: [
            { value: "microsoft/phi-4", label: "phi-4" }
        ],
    },
    {
        label: "NousResearch",
        items: [
            { value: "NousResearch/Hermes-3-Llama-405B", label: "Hermes-3-Llama-405B" }
        ],
    }
];

export { MODELS }