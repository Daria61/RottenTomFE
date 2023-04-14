import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import { PrivateCom } from "@/components/PrivateCom";

export default function List() {
  const router = useRouter();
  const { loggenIn }: { loggenIn: boolean } = useAuth();

  useEffect(() => {
    if (!loggenIn) {
      router.push("/login");
    }
  }, [loggenIn]);
  return loggenIn ? <PrivateCom /> : null;
}
