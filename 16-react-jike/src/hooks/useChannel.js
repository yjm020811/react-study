import { useEffect, useState } from "react";
import { fetchChannelApi } from "@/api/article";

export function useChannel() {
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    const getChannelList = async () => {
      const result = await fetchChannelApi();
      setChannelList(result.data.channels);
    };
    getChannelList();
  }, []);
  return {
    channelList
  };
}
