"use server";

import { settingsService } from "../configuration/settingsService";
import { SettingsKey } from "../configuration/settings";
import { SocialIcon } from "./social";

export const socialService = {
    async get() : Promise<SocialIcon[]> {
        var icons = await settingsService.get(SettingsKey.SocialLinks);
        
        try{
            const socialIcons: SocialIcon[] = icons ? JSON.parse(icons) : [];
            return socialIcons;
        } catch (error) {
            //log error
            return [];
        }
    },
    
    async getEnabled() : Promise<SocialIcon[]> {
        var allIcons = await this.get();
        return allIcons.filter(icon => icon.enabled);
    }
};