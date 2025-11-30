import React from "react";
import { socialService } from "@/core/social/socialService";
import { socialIconsMap } from "@/core/social/social";

export default async function WebFooter() {
  var socialIcons = await socialService.getEnabled();
  return (
    <div className="">
      {socialIcons.map((icon) => {
        const IconComponent = socialIconsMap[icon.key];
        return (
          <a
            key={icon.key}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon.key}
          >
            <IconComponent fontSize="medium" />
          </a>
        );
      })}
    </div>
  );
}
