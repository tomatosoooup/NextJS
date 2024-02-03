"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ServerPage = () => {
  const user = useCurrentUser();

  return (
    <div>
      <UserInfo user={user} label="🙋 Client component" />
    </div>
  );
};

export default ServerPage;
