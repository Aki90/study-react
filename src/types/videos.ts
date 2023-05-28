type Common = {
  kind?: string;
  etag?: string;
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description?: string;
    thumbnails: {
      default?: {
        url: string;
        width?: number;
        height?: number;
      };
      medium: {
        url: string;
        width?: number;
        height?: number;
      };
    };
    channelTitle?: string;
  };
};

export type PreviousParsingVideo = Common & {
  id: {
    kind: string;
    videoId: string;
  };
};

export type Video = Common & { id: string };
