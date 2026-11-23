import { useQuery } from "@tanstack/react-query";
import { getName, getAvatar } from "../api";

export function useFetchNames() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getName,
    staleTime: Infinity,
  });
}

export function useFetchAvatar() {
  return useQuery({
    queryKey: ["avatar"],
    queryFn: getAvatar,
    staleTime: Infinity,
  });
}