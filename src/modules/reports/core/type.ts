type Video = {
  id: number;
  title: string;
  views: number;
  spent: number;
  roas: number
}

export type ReportsDataType = {
  id: number;
  influencer: string;
  videos: Video[];
  total: Omit<Omit<Video, 'title'>, 'id'>
}