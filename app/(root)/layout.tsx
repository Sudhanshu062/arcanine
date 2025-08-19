"use client"

import React from 'react'

import { SettingsPanelProvider } from '@/components/providers/settings-panel';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

const Layout = ({
    app_sidebar,
    chat,
    settings_panel
}: {
    app_sidebar: React.ReactNode
    chat: React.ReactNode
    settings_panel: React.ReactNode
}) => {
    return (
        <SidebarProvider>
            {app_sidebar}
            <SidebarInset className="bg-sidebar group/sidebar-inset">
                <header className="dark flex h-16 shrink-0 items-center gap-2 px-4 md:px-6 lg:px-8 bg-sidebar text-sidebar-foreground relative before:absolute before:inset-y-3 before:-left-px before:w-px before:bg-gradient-to-b before:from-white/5 before:via-white/15 before:to-white/5 before:z-50">
                    <SidebarTrigger className="-ms-2" />
                    <div className="flex items-center gap-8 ml-auto">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button className="gap-0 rounded-full py-0 ps-0 cursor-pointer">
                                    <div className="me-0.5 flex aspect-square h-full p-1.5">
                                        <img
                                            className="h-auto w-full rounded-full"
                                            src="https://originui.com/avatar.jpg"
                                            alt="Profile image"
                                            width={24}
                                            height={24}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <span>@georgelucas</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>
                <SettingsPanelProvider>
                    <div className="flex h-[calc(100svh-4rem)] bg-[hsl(240_5%_92.16%)] md:rounded-s-3xl md:group-peer-data-[state=collapsed]/sidebar-inset:rounded-s-none transition-all ease-in-out duration-300">
                        {chat}
                        {settings_panel}
                    </div>
                </SettingsPanelProvider>
            </SidebarInset>
        </SidebarProvider>
    );
}

export default Layout