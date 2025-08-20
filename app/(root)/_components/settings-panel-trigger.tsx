import React from 'react'

import { RiSettingsLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import { useSettingsPanel } from "@/hooks/use-settings-panel";

const SettingsPanelTrigger = ({
    onClick,
}: {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
    const { isMobile, togglePanel } = useSettingsPanel();

    if (!isMobile) {
        return null;
    }

    return (
        <Button
            variant="ghost"
            className="px-2"
            onClick={(event) => {
                onClick?.(event);
                togglePanel();
            }}
        >
            <RiSettingsLine
                className="text-muted-foreground sm:text-muted-foreground/70 size-5"
                size={20}
                aria-hidden="true"
            />
            <span className="max-sm:sr-only">Settings</span>
        </Button>
    );
};

export { SettingsPanelTrigger };