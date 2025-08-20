"use client"

import React from 'react'

import {
    BadgeCheck,
    Bell,
    CreditCard,
    LogOut,
    Sparkles,
} from "lucide-react"

import { SettingsPanelProvider } from '@/components/providers/settings-panel';

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
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

const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
}

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
                            {/* <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                            </DropdownMenuContent> */}
                            <DropdownMenuContent
                                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                                // side={isMobile ? "bottom" : "right"}
                                side="bottom"
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <Avatar className="h-8 w-8 rounded-lg">
                                            <AvatarImage src={user.avatar} alt={user.name} />
                                            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-medium">{user.name}</span>
                                            <span className="truncate text-xs">{user.email}</span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Sparkles height={16} width={16} />
                                        Upgrade to Pro
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <BadgeCheck height={16} width={16} />
                                        Account
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard height={16} width={16} />
                                        Billing
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Bell height={16} width={16} />
                                        Notifications
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut height={16} width={16} />
                                    Log out
                                </DropdownMenuItem>
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