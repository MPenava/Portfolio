import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import mpen from "@/assets/images/mpen.png";

const ProfileImage = () => {
  return (
    <Avatar className="size-60 rounded-full">
      <AvatarImage src={mpen.src} alt="Profile image" />
      <AvatarFallback>Profile image</AvatarFallback>
    </Avatar>
  );
};

export default ProfileImage;
