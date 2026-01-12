import type { CollectionEntry } from 'astro:content';

type ArtistEntry = CollectionEntry<'artists'>;
type StyleEntry = CollectionEntry<'styles'>;

export interface GalleryImage {
  src: string;
  alt?: string;
  tags?: Array<{
    text: string;
    color?: 'Primary' | 'Accent' | 'Neutral';
  }>;
}

export interface Artist {
  name: string;
  href?: string;
}

/**
 * Get the URL slug for a content entry.
 * Uses slugOverride if defined, otherwise falls back to the file-based slug.
 */
export function getSlug(entry: { slug: string; data: { slugOverride?: string; name: string } }): string {
  return entry.data.slugOverride ?? entry.slug;
}

/**
 * Find artists that work in a given style.
 * Matches by checking if the style slug is in the artist's styles array.
 */
export function getRelatedArtists(
  styleSlug: string,
  artists: ArtistEntry[]
): Artist[] {
  return artists
    .filter((artist) => {
      // Check if artist has this style in their styles array (stored as slug)
      return artist.data.styles.includes(styleSlug);
    })
    .map((artist) => ({
      name: artist.data.name,
      href: `/artists/${getSlug(artist)}`,
    }));
}

/**
 * Get gallery images for a style using the style's cover image.
 */
export function getStyleGalleryImages(
  styleName: string,
  fallbackCover?: string
): GalleryImage[] {
  const images: GalleryImage[] = [];

  // Use cover image as fallback
  if (fallbackCover) {
    images.push({
      src: fallbackCover,
      alt: `${styleName} example`,
      tags: [{ text: styleName, color: 'Primary' }],
    });
  }

  return images;
}

/**
 * Resolve style slugs to their display names.
 * Returns an array of style names for the given slugs.
 */
export function resolveStyleNames(styleSlugs: string[], styles: StyleEntry[]): string[] {
  const slugToName = new Map(styles.map((s) => [getSlug(s), s.data.name]));
  return styleSlugs
    .map((slug) => slugToName.get(slug))
    .filter((name): name is string => name !== undefined);
}

/**
 * Resolve style slugs to style objects with name and href.
 */
export function resolveStyles(styleSlugs: string[], styles: StyleEntry[]): Array<{ name: string; href: string }> {
  const styleMap = new Map(styles.map((s) => [getSlug(s), s]));
  return styleSlugs
    .map((slug) => {
      const style = styleMap.get(slug);
      if (!style) return null;
      return {
        name: style.data.name,
        href: `/styles/${getSlug(style)}`,
      };
    })
    .filter((s): s is { name: string; href: string } => s !== null);
}

