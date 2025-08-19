import React from 'react'

import { SettingsPanelContext } from '@/context/settings-panel';

const useSettingsPanel = () => {
    const context = React.useContext(SettingsPanelContext);
    if (!context) {
        throw new Error(
            "useSettingsPanel must be used within a SettingsPanelProvider.",
        );
    }
    return context;
}

export { useSettingsPanel }