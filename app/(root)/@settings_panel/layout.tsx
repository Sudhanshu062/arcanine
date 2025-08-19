"use client"

import React from "react";

import { useSettingsPanel } from "@/hooks/use-settings-panel";

import { Sheet, SheetTitle, SheetContent } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const { isMobile, openMobile, setOpenMobile } = useSettingsPanel();

    if (isMobile) {
        return (
            <Sheet open={openMobile} onOpenChange={setOpenMobile}>
                <SheetContent className="w-72 px-4 md:px-6 py-0 bg-[hsl(240_5%_92.16%)] [&>button]:hidden">
                    <SheetTitle className="hidden">Settings</SheetTitle>
                    <div className="flex h-full w-full flex-col">
                        {children}
                    </div>
                </SheetContent>
            </Sheet>
        );
    }

    return (
        <ScrollArea>
            <div className="w-[300px] px-4 md:px-6">
                {children}
            </div>
        </ScrollArea>
    );
};

export default Layout;