export interface Root {
  type: string
  id: string
  url: string
  slug: string
  bitly_gif_url: string
  bitly_url: string
  embed_url: string
  username: string
  source: string
  title: string
  rating: string
  content_url: string
  source_tld: string
  source_post_url: string
  is_sticker: number
  import_datetime: string
  trending_datetime: string
  images: Images
  user: User
  analytics_response_payload: string
  analytics: Analytics
}

export interface Images {
  original: Original
  fixed_height: FixedHeight
  fixed_height_downsampled: FixedHeightDownsampled
  fixed_height_small: FixedHeightSmall
  fixed_width: FixedWidth
  fixed_width_downsampled: FixedWidthDownsampled
  fixed_width_small: FixedWidthSmall
}

export interface Original {
  height: string
  width: string
  size: string
  url: string
  mp4_size: string
  mp4: string
  webp_size: string
  webp: string
  frames: string
  hash: string
}

export interface FixedHeight {
  height: string
  width: string
  size: string
  url: string
  mp4_size: string
  mp4: string
  webp_size: string
  webp: string
}

export interface FixedHeightDownsampled {
  height: string
  width: string
  size: string
  url: string
  webp_size: string
  webp: string
}

export interface FixedHeightSmall {
  height: string
  width: string
  size: string
  url: string
  mp4_size: string
  mp4: string
  webp_size: string
  webp: string
}

export interface FixedWidth {
  height: string
  width: string
  size: string
  url: string
  mp4_size: string
  mp4: string
  webp_size: string
  webp: string
}

export interface FixedWidthDownsampled {
  height: string
  width: string
  size: string
  url: string
  webp_size: string
  webp: string
}

export interface FixedWidthSmall {
  height: string
  width: string
  size: string
  url: string
  mp4_size: string
  mp4: string
  webp_size: string
  webp: string
}

export interface User {
  avatar_url: string
  banner_image: string
  banner_url: string
  profile_url: string
  username: string
  display_name: string
  description: string
  instagram_url: string
  website_url: string
  is_verified: boolean
}

export interface Analytics {
  onload: Onload
  onclick: Onclick
  onsent: Onsent
}

export interface Onload {
  url: string
}

export interface Onclick {
  url: string
}

export interface Onsent {
  url: string
}

export interface Edit {
  id: string
  title: string
  import_datetime: string
  trending_datetime: string
  images: Images
}

export interface RootEdit {
  type: string
  id: string
  url: string
  slug: string
  bitlyGifUrl: string
  bitlyUrl: string
  embedUrl: string
  username: string
  source: string
  title: string
  rating: string
  contentUrl: string
  sourceTld: string
  sourcePostUrl: string
  isSticker: number
  importDatetime: string
  trendingDatetime: string
  images: Images
  user: User
  analyticsResponsePayload: string
  analytics: Analytics
}
