import React from 'react'

type SettingsPanelContext = {
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    togglePanel: () => void;
};

const SettingsPanelContext = React.createContext<SettingsPanelContext | null>(
    null,
);

export { SettingsPanelContext };