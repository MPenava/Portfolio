import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import mpen from "@/assets/profile/mpen.jpg";

const ProfileImage = () => {
  return (
    <Avatar className="h-58 w-56 rounded-full">
      <AvatarImage src={mpen.src} alt="Profile image" />
      <AvatarFallback>Profile image</AvatarFallback>
    </Avatar>
  );
};

export default ProfileImage;
