import {
  Twitter,
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

export interface SocialIcon{
    key: SocialIconKey;
    name: string;
    url: string;
    enabled: boolean;
}

export const socialIconsMap = {
  twitter: Twitter,
  facebook: Facebook, 
  instagram: Instagram,
  linkedin: LinkedIn,
  youtube: YouTube,
} as const;

export type SocialIconKey = keyof typeof socialIconsMap;