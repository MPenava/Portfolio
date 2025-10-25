import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import mpen from "@/assets/profile/mpen.jpg";

const ProfileImage = () => {
  return (
    <div className="relative inline-block">
      <Avatar className="size-72 rounded-3xl border-4">
        <AvatarImage src={mpen.src} alt="Profile image" className="shadow-xl" />
        <AvatarFallback>Profile image</AvatarFallback>
      </Avatar>
      {/* Badges */}
      <div className="absolute -left-8 top-24 rounded-md bg-background px-3 py-2 shadow-md shadow-primary-foreground">
        Code
      </div>
      <span className="absolute -right-10 top-16 rounded-md bg-background px-3 py-2 shadow-md shadow-primary-foreground">
        Design
      </span>
    </div>
  );
};

export default ProfileImage;
