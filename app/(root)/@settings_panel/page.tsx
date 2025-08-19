"use client"

import React from "react";

import { RiQuillPenAiLine } from "@remixicon/react";

import SliderControl from "@/components/slider-control";

import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { MODELS } from "@/constants/models";

const Page = () => {
    const id = React.useId();

    return (
        <>
            {/* Sidebar header */}
            <div className="py-5">
                <div className="flex items-center gap-2">
                    <RiQuillPenAiLine
                        className="text-muted-foreground/70"
                        size={20}
                        aria-hidden="true"
                    />
                    <h2 className="text-sm font-medium">My preferences</h2>
                </div>
            </div>

            {/* Sidebar content */}
            <div className="-mt-px">
                {/* Content group */}
                <div className="py-5 relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-black/[0.06] before:via-black/10 before:to-black/[0.06]">
                    <h3 className="text-xs font-medium uppercase text-muted-foreground/80 mb-4">
                        Chat presets
                    </h3>
                    <div className="space-y-3">
                        {/* Model */}
                        <div className="flex items-center justify-between gap-2">
                            <Label htmlFor={`${id}-model`} className="font-normal">
                                Model
                            </Label>
                            <Select defaultValue="openai/gpt-oss-20b">
                                <SelectTrigger
                                    id={`${id}-model`}
                                    className="bg-background w-auto max-w-full h-7 py-1 px-2 gap-1 [&_svg]:-me-1 border-none"
                                >
                                    <SelectValue placeholder="Select a model" />
                                </SelectTrigger>
                                <SelectContent
                                    className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2"
                                    align="end"
                                >
                                    {MODELS.map((group) => (
                                        <SelectGroup key={group.label}>
                                            <SelectLabel>{group.label}</SelectLabel>
                                            {group.items.map((item) => (
                                                <SelectItem key={item.value} value={item.value}>
                                                    {item.label}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        {/* Response format */}
                        <div className="flex items-center justify-between gap-2">
                            <Label htmlFor={`${id}-response-format`} className="font-normal">
                                Response format
                            </Label>
                            <Select defaultValue="1">
                                <SelectTrigger
                                    id={`${id}-response-format`}
                                    className="bg-background w-auto max-w-full h-7 py-1 px-2 gap-1 [&_svg]:-me-1 border-none"
                                >
                                    <SelectValue placeholder="Select response format" />
                                </SelectTrigger>
                                <SelectContent
                                    className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2"
                                    align="end"
                                >
                                    <SelectItem value="1">text</SelectItem>
                                    <SelectItem value="2">json_object</SelectItem>
                                    <SelectItem value="3">json_schema</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Writing style */}
                        <div className="flex items-center justify-between gap-2">
                            <Label htmlFor={`${id}-writing-style`} className="font-normal">
                                Writing style
                            </Label>
                            <Select defaultValue="1">
                                <SelectTrigger
                                    id={`${id}-writing-style`}
                                    className="bg-background w-auto max-w-full h-7 py-1 px-2 gap-1 [&_svg]:-me-1 border-none"
                                >
                                    <SelectValue placeholder="Select writing style" />
                                </SelectTrigger>
                                <SelectContent
                                    className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2"
                                    align="end"
                                >
                                    <SelectItem value="1">Concise</SelectItem>
                                    <SelectItem value="2">Formal</SelectItem>
                                    <SelectItem value="3">Technical</SelectItem>
                                    <SelectItem value="4">Creative</SelectItem>
                                    <SelectItem value="5">Scientific</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Mode */}
                        <div className="flex items-center justify-between gap-2">
                            <Label htmlFor={`${id}-mode`} className="font-normal">
                                Mode
                            </Label>
                            <Select defaultValue="1">
                                <SelectTrigger
                                    id={`${id}-mode`}
                                    className="bg-background w-auto max-w-full h-7 py-1 px-2 gap-1 [&_svg]:-me-1 border-none"
                                >
                                    <SelectValue placeholder="Select mode" />
                                </SelectTrigger>
                                <SelectContent
                                    className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2"
                                    align="end"
                                >
                                    <SelectItem value="1">Chatbot</SelectItem>
                                    <SelectItem value="2">Code</SelectItem>
                                    <SelectItem value="3">Translate</SelectItem>
                                    <SelectItem value="4">Summarize</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Content group */}
                <div className="py-5 relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-black/[0.06] before:via-black/10 before:to-black/[0.06]">
                    <h3 className="text-xs font-medium uppercase text-muted-foreground/80 mb-4">
                        Configurations
                    </h3>
                    <div className="space-y-3">
                        {/* Temperature */}
                        <SliderControl
                            minValue={0}
                            maxValue={2}
                            initialValue={[1.25]}
                            defaultValue={[1]}
                            step={0.01}
                            label="Temperature"
                        />

                        {/* Maximum length */}
                        <SliderControl
                            className="[&_input]:w-14"
                            minValue={1}
                            maxValue={16383}
                            initialValue={[2048]}
                            defaultValue={[2048]}
                            step={1}
                            label="Maximum length"
                        />

                        {/* Top P */}
                        <SliderControl
                            minValue={0}
                            maxValue={1}
                            initialValue={[0.5]}
                            defaultValue={[0]}
                            step={0.01}
                            label="Top P"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;