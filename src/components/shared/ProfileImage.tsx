import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import mpen from "@/assets/profile/mpen.jpg";

const ProfileImage = () => {
  return (
    <Avatar className="size-48 border border-8">
      <AvatarImage src={mpen.src} alt="Profile image" />
      <AvatarFallback>Profile image</AvatarFallback>
    </Avatar>
  );
};

export default ProfileImage;
