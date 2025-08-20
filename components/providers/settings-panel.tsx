import React from 'react'

import { SettingsPanelContext } from '@/context/settings-panel';
import { useIsMobile } from "@/hooks/use-mobile";

const SettingsPanelProvider = ({ children }: { children: React.ReactNode }) => {

    const isMobile = useIsMobile(1024);
    const [openMobile, setOpenMobile] = React.useState(false);

    const togglePanel = React.useCallback(() => {
        return isMobile && setOpenMobile((open) => !open);
    }, [isMobile, setOpenMobile]);

    const contextValue = React.useMemo<SettingsPanelContext>(
        () => ({
            isMobile,
            openMobile,
            setOpenMobile,
            togglePanel,
        }),
        [isMobile, openMobile, setOpenMobile, togglePanel],
    );

    return (
        <SettingsPanelContext.Provider value={contextValue}>
            {children}
        </SettingsPanelContext.Provider>
    );

};

export { SettingsPanelProvider };