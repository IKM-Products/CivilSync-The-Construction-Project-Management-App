"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface UserAvatarProps {
  name: string;
  email: string;
  image?: string | null;
}

export function UserAvatar({
  name,
  email,
  image,
}: UserAvatarProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex items-center gap-3">
      <Avatar className="h-10 w-10">
        <AvatarImage
          src={image ?? ""}
          alt={name}
        />

        <AvatarFallback>
          {initials}
        </AvatarFallback>
      </Avatar>

      <div className="hidden md:block">
        <p className="text-sm font-medium">
          {name}
        </p>

        <p className="text-xs text-muted-foreground">
          {email}
        </p>
      </div>
    </div>
  );
}