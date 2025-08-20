import React from "react";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

import {
    RiChat1Line,
    RiBardLine,
    RiPlanetLine,
    RiSeedlingLine,
    RiSettings3Line,
} from "@remixicon/react";

import { TeamSwitcher } from "@/components/team-switcher";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";

const data = {
    teams: [
        {
            name: "ArkDigital",
            logo: "https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp2/logo-01_upxvqe.png",
        },
        {
            name: "Acme Corp.",
            logo: "https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp2/logo-01_upxvqe.png",
        },
        {
            name: "Evil Corp.",
            logo: "https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp2/logo-01_upxvqe.png",
        },
    ],
    navMain: [
        {
            title: "Playground",
            url: "#",
            items: [
                {
                    title: "Chat",
                    url: "#",
                    icon: RiChat1Line,
                    isActive: true,
                    subItems: [
                        {
                            title: "Group Chat",
                            url: "#",
                        },
                        {
                            title: "Direct Message",
                            url: "#",
                        },
                    ],
                },
                {
                    title: "Real-time",
                    url: "#",
                    icon: RiBardLine,
                }
            ]
        },
        {
            title: "More",
            url: "#",
            items: [
                {
                    title: "Community",
                    url: "#",
                    icon: RiPlanetLine,
                },
                {
                    title: "Help Centre",
                    url: "#",
                    icon: RiSeedlingLine,
                },
                {
                    title: "Settings",
                    url: "#",
                    icon: RiSettings3Line,
                },
            ],
        },
    ],
};

const Page = () => {
    return (
        <Sidebar className="dark !border-none">
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                {/* We only show the first parent group */}
                <SidebarGroup>
                    <SidebarGroupLabel className="uppercase text-sidebar-foreground/50">
                        {data.navMain[0]?.title}
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="px-2">
                        <SidebarMenu>
                            {data.navMain[0]?.items.map((item) => (
                                <Collapsible
                                    key={item.title}
                                    asChild
                                    defaultOpen={item.isActive}
                                    className="group/collapsible"
                                >
                                    <SidebarMenuItem key={item.title}>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton
                                                asChild
                                                className="group/menu-button font-medium gap-3 h-9 rounded-md data-[active=true]:hover:bg-transparent data-[active=true]:bg-gradient-to-b data-[active=true]:from-sidebar-primary data-[active=true]:to-sidebar-primary/70 data-[active=true]:shadow-[0_1px_2px_0_rgb(0_0_0/.05),inset_0_1px_0_0_rgb(255_255_255/.12)] [&>svg]:size-auto"
                                                isActive={item.isActive}
                                            >
                                                <a href={item.url}>
                                                    {item.icon && (
                                                        <item.icon
                                                            className="text-sidebar-foreground/50 group-data-[active=true]/menu-button:text-sidebar-foreground"
                                                            size={22}
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                    <span>{item.title}</span>
                                                    <ChevronRight height={16} width={16} className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                </a>
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="pt-1">
                                            <SidebarMenuSub>
                                                {item?.subItems?.map((subItem) => (
                                                    <SidebarMenuSubItem key={subItem.title}>
                                                        <SidebarMenuSubButton asChild>
                                                            <a href={subItem.url}>
                                                                <span>{subItem.title}</span>
                                                            </a>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                {/* Secondary Navigation */}
                <SidebarGroup>
                    <SidebarGroupLabel className="uppercase text-sidebar-foreground/50">
                        {data.navMain[1]?.title}
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="px-2">
                        <SidebarMenu>
                            {data.navMain[1]?.items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className="group/menu-button font-medium gap-3 h-9 rounded-md [&>svg]:size-auto"
                                        isActive={item.isActive}
                                    >
                                        <Link href={item.url}>
                                            {item.icon && (
                                                <item.icon
                                                    className="text-sidebar-foreground/50 group-data-[active=true]/menu-button:text-primary"
                                                    size={22}
                                                    aria-hidden="true"
                                                />
                                            )}
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarFooter>
        </Sidebar>
    );
}

export default Page
