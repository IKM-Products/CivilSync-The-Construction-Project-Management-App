"use client";

import { Mail, Phone, UserRound } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

interface ProjectMember {
  id: string;
  name: string;
  role: string;
  email?: string;
  phoneNumber?: string;
}

interface ProjectMembersProps {
  members: ProjectMember[];
}

export function ProjectMembers({ members }: ProjectMembersProps) {
  if (members.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Project Members</CardTitle>
        </CardHeader>

        <CardContent className="py-10 text-center text-sm text-muted-foreground">
          No project members added yet.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Members</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-muted p-2">
                <UserRound className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold">{member.name}</h3>
                <Badge variant="outline" className="mt-1">
                  {member.role}
                </Badge>
              </div>
            </div>

            <div className="space-y-1 text-sm text-muted-foreground">
              {member.email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{member.email}</span>
                </div>
              )}

              {member.phoneNumber && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{member.phoneNumber}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}