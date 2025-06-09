// hooks/useYouTubeMetadata.ts
import { useEffect, useState } from 'react';

interface VideoMeta {
  id: string;
  title: string;
  thumbnail: string;
}

export const useYouTubeMetadata = (ids: string[]) => {
  const [videos, setVideos] = useState<VideoMeta[]>([]);

  useEffect(() => {
    const fetchMetadata = async () => {
      const key = process.env.NEXT_PUBLIC_YT_API_KEY;
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${ids.join(
          ','
        )}&key=${key}`
      );
      const data = await res.json();
      const items = data.items.map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
      }));
      setVideos(items);
    };
    if (ids.length) fetchMetadata();
  }, [ids]);

  return videos;
};
