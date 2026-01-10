import tattooPlaceholder from '../assets/images/placeholder.png';

interface GalleryImage {
  src: string;
  alt?: string;
  tags?: Array<{
    text: string;
    color?: "Primary" | "Accent" | "Neutral";
  }>;
}

interface ContentBlock {
  title: string;
  paragraphs: string[];
  gallery?: GalleryImage[];
}

interface Artist {
  name: string;
  href?: string;
}

export interface StyleData {
  name: string;
  slug: string;
  description: string;
  artists: Artist[];
  galleryImages: GalleryImage[];
  contentBlocks?: ContentBlock[];
  bookingHref: string;
}

// Generate placeholder gallery images for a style
const createGalleryImages = (styleName: string, artistName: string, count: number = 6): GalleryImage[] => {
  return Array(count).fill(null).map((_, i) => ({
    src: tattooPlaceholder.src,
    alt: `${styleName} tattoo example ${i + 1}`,
    tags: [{ text: `Created by ${artistName}`, color: "Accent" as const }]
  }));
};

export const styles: StyleData[] = [
  {
    name: "Linework",
    slug: "linework",
    description: "This approach is built around clarity, precision, and visual restraint. Instead of relying on shading or color, the entire composition is carried by line alone. The focus is on structure, balance, and rhythm, resulting in tattoos that feel clean, intentional, and timeless.",
    artists: [
      { name: "Arseniy", href: "/artists/arseniy" },
      { name: "Sera", href: "/artists/sera" },
      { name: "Gil", href: "/artists/gil" },
      { name: "Sarah", href: "/artists/sarah" },
      { name: "Bruno", href: "/artists/bruno" },
      { name: "Ed", href: "/artists/ed" },
      { name: "Alex", href: "/artists/alex" }
    ],
    galleryImages: [
      { src: tattooPlaceholder.src, alt: "Linework tattoo 1", tags: [{ text: "Created by Gil", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Linework tattoo 2", tags: [{ text: "Created by Alex", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Linework tattoo 3", tags: [{ text: "Created by Arseniy", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Linework tattoo 4", tags: [{ text: "Created by Sarah", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Linework tattoo 5", tags: [{ text: "Created by Sarah", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Linework tattoo 6", tags: [{ text: "Created by Alex", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Linework tattoo 7", tags: [{ text: "Created by Sera", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Linework tattoo 8", tags: [{ text: "Created by Bruno", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Linework tattoo 9", tags: [{ text: "Created by Ed", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Linework tattoo 10", tags: [{ text: "Created by Gil", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Linework tattoo 11", tags: [{ text: "Created by Arseniy", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Linework tattoo 12", tags: [{ text: "Created by Sarah", color: "Accent" as const }] }
    ],
    bookingHref: "/book?style=linework",
    contentBlocks: [
      {
        title: "Precision & Clarity",
        paragraphs: [
          "Linework tattooing strips away everything but the essential: the line. Without shading or color to rely on, every stroke must be deliberate, every curve intentional. This constraint forces a level of precision that defines the entire approach.",
          "The result is work that reads clearly at any distance and ages gracefully over time. By focusing on structure rather than texture, linework tattoos maintain their impact as the skin naturally changes."
        ],
        gallery: createGalleryImages("Linework", "Arseniy", 3)
      },
      {
        title: "Rhythm & Balance",
        paragraphs: [
          "Great linework creates visual rhythm through the repetition and variation of line weights, spacing, and curves. Like musical composition, the tattoo develops a tempo that guides the eye through the design.",
          "Balance doesn't mean symmetry — it means thoughtful distribution of visual weight. A single bold line can anchor an entire composition of delicate details, creating dynamic tension that holds attention."
        ]
      },
      {
        title: "Timeless Appeal",
        paragraphs: [
          "The simplicity of linework gives it an enduring quality. While trends in tattooing shift constantly, clean lines never go out of style. These tattoos look as contemporary now as they will in decades.",
          "This approach also adapts beautifully to any scale. From small, discrete pieces to expansive full-sleeve designs, the principles of linework translate across every format."
        ],
        gallery: createGalleryImages("Linework", "Gil", 3)
      }
    ]
  },
  {
    name: "Floral & Botanic",
    slug: "floral-and-botanic",
    description: "Inspired by nature, this approach translates organic shapes into tattoo designs that work harmoniously with the body. Rather than aiming for realism, the focus is on flow, structure, and balance, allowing natural elements to feel integrated rather than decorative.",
    artists: [
      { name: "Nastia Zlotin", href: "/artists/nastia-zlotin" },
      { name: "Zohar", href: "/artists/zohar" },
      { name: "Sera", href: "/artists/sera" },
      { name: "Gil", href: "/artists/gil" },
      { name: "Sina Ra", href: "/artists/sina-ra" },
      { name: "Luara", href: "/artists/luara" }
    ],
    galleryImages: [
      { src: tattooPlaceholder.src, alt: "Floral tattoo 1", tags: [{ text: "Created by Nastia Zlotin", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Floral tattoo 2", tags: [{ text: "Created by Zohar", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Floral tattoo 3", tags: [{ text: "Created by Sera", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Floral tattoo 4", tags: [{ text: "Created by Sina Ra", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Floral tattoo 5", tags: [{ text: "Created by Luara", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Floral tattoo 6", tags: [{ text: "Created by Nastia Zlotin", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Floral tattoo 7", tags: [{ text: "Created by Gil", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Floral tattoo 8", tags: [{ text: "Created by Luara", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Floral tattoo 9", tags: [{ text: "Created by Sera", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Floral tattoo 10", tags: [{ text: "Created by Zohar", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Floral tattoo 11", tags: [{ text: "Created by Nastia Zlotin", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Floral tattoo 12", tags: [{ text: "Created by Luara", color: "Accent" as const }] }
    ],
    bookingHref: "/book?style=floral-botanic",
    contentBlocks: [
      {
        title: "Movement & Growth",
        paragraphs: [
          "Botanic forms are treated as living structures, shaped by implied motion rather than static composition. Stems bend, leaves stretch, and petals unfold along the natural lines of the body, reinforcing a sense of growth and direction. This creates tattoos that feel responsive to posture and movement instead of fixed illustrations placed on skin.",
          "Negative space plays a critical role here, allowing the design to breathe and preventing visual overload. By simplifying forms and emphasizing rhythm, the tattoo maintains clarity over time while still suggesting complexity beneath the surface."
        ],
        gallery: createGalleryImages("Floral", "Nastia Zlotin", 3)
      },
      {
        title: "Abstraction Over Imitation",
        paragraphs: [
          "Instead of copying plants as they appear in nature, this style abstracts their essential characteristics. A flower may be reduced to repeating curves, or a branch suggested through a sequence of lines and breaks. The result is imagery that feels familiar but not literal, leaving room for interpretation.",
          "This abstraction helps the tattoo age more gracefully and adapt to different scales. Whether small and subtle or expansive and wrapping, the design retains its identity without relying on fine detail or strict realism."
        ]
      },
      {
        title: "Harmony With the Body",
        paragraphs: [
          "Placement is considered as carefully as the motif itself. Botanic elements follow muscle groups, joints, and bone structure, reinforcing the body's existing architecture. This approach ensures the tattoo feels intentional and cohesive rather than applied on top of the skin.",
          "Ultimately, the goal is unity between subject and form. Nature becomes a framework rather than a theme, guiding composition, flow, and restraint to create tattoos that feel timeless, balanced, and inherently connected to the wearer."
        ],
        gallery: createGalleryImages("Floral", "Luara", 3)
      }
    ]
  },
  {
    name: "Blackwork",
    slug: "blackwork",
    description: "Defined by contrast and discipline, this approach uses only black ink to create strong, graphic tattoos. The absence of color places full emphasis on shape, density, and negative space, resulting in bold and direct visual statements.",
    artists: [
      { name: "Sina Ra", href: "/artists/sina-ra" },
      { name: "Sarah", href: "/artists/sarah" },
      { name: "Skezy", href: "/artists/skezy" },
      { name: "Bruno", href: "/artists/bruno" },
      { name: "Ed", href: "/artists/ed" }
    ],
    galleryImages: [
      { src: tattooPlaceholder.src, alt: "Blackwork tattoo 1", tags: [{ text: "Created by Sina Ra", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Blackwork tattoo 2", tags: [{ text: "Created by Skezy", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Blackwork tattoo 3", tags: [{ text: "Created by Skezy", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Blackwork tattoo 4", tags: [{ text: "Created by Sarah", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Blackwork tattoo 5", tags: [{ text: "Created by Bruno", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Blackwork tattoo 6", tags: [{ text: "Created by Ed", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Blackwork tattoo 7", tags: [{ text: "Created by Sina Ra", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Blackwork tattoo 8", tags: [{ text: "Created by Bruno", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Blackwork tattoo 9", tags: [{ text: "Created by Ed", color: "Accent" as const }] }
    ],
    bookingHref: "/book?style=blackwork",
    contentBlocks: [
      {
        title: "Contrast & Density",
        paragraphs: [
          "Blackwork thrives on the tension between solid black and untouched skin. This high contrast creates immediate visual impact, drawing the eye and commanding attention. The density of black ink can be modulated to create subtle gradients or stark boundaries.",
          "The simplicity of a single color forces every other element to work harder — composition, shape, and placement become paramount when color is removed from the equation."
        ],
        gallery: createGalleryImages("Blackwork", "Sina Ra", 3)
      },
      {
        title: "Graphic Impact",
        paragraphs: [
          "Blackwork naturally lends itself to graphic, poster-like designs. Bold shapes and clean edges create tattoos that read almost like printed matter — striking from across the room and remaining legible as the skin ages.",
          "This graphic quality makes blackwork particularly well-suited to geometric patterns, architectural imagery, and abstract compositions where impact matters more than nuance."
        ]
      },
      {
        title: "Timeless Medium",
        paragraphs: [
          "Black ink ages better than any other color. While colored tattoos may fade or shift over time, well-executed blackwork maintains its integrity for decades. This longevity makes it an ideal choice for pieces meant to last a lifetime.",
          "The style also adapts to diverse cultural traditions — from Polynesian tribal to contemporary abstract — proving that limitation breeds creativity rather than constraint."
        ],
        gallery: createGalleryImages("Blackwork", "Skezy", 3)
      }
    ]
  },
  {
    name: "Illustrative",
    slug: "illustrative",
    description: "Rooted in drawing and visual storytelling, this approach blends artistic expression with tattoo-specific structure. The result is tattoos that feel expressive and personal while remaining technically sound and long-lasting.",
    artists: [
      { name: "Zohar", href: "/artists/zohar" },
      { name: "Sera", href: "/artists/sera" },
      { name: "Bruno", href: "/artists/bruno" },
      { name: "Ed", href: "/artists/ed" }
    ],
    galleryImages: [
      { src: tattooPlaceholder.src, alt: "Illustrative tattoo 1", tags: [{ text: "Created by Bruno", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Illustrative tattoo 2", tags: [{ text: "Created by Bruno", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Illustrative tattoo 3", tags: [{ text: "Created by Zohar", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Illustrative tattoo 4", tags: [{ text: "Created by Sera", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Illustrative tattoo 5", tags: [{ text: "Created by Ed", color: "Accent" as const }] },
      { src: tattooPlaceholder.src, alt: "Illustrative tattoo 6", tags: [{ text: "Created by Zohar", color: "Accent" as const }] }
    ],
    bookingHref: "/book?style=illustrative",
    contentBlocks: [
      {
        title: "Drawing Meets Tattooing",
        paragraphs: [
          "Illustrative tattooing bridges the gap between fine art and skin. Artists in this style bring strong drawing fundamentals to every piece, treating the body as a canvas for expressive, hand-drawn aesthetics.",
          "The result often feels like a page torn from a sketchbook and made permanent — maintaining the spontaneity and character of drawn work while adapting to the unique requirements of tattoo art."
        ],
        gallery: createGalleryImages("Illustrative", "Bruno", 3)
      },
      {
        title: "Personal Expression",
        paragraphs: [
          "More than any other style, illustrative work allows for deeply personal expression. Each artist's hand is visible in the work — their quirks, their influences, their visual language all come through in the final piece.",
          "This makes artist selection particularly important. Clients should seek out artists whose existing work resonates with them, knowing that personal style will infuse every custom design."
        ]
      },
      {
        title: "Narrative Potential",
        paragraphs: [
          "Illustrative tattoos excel at storytelling. Whether depicting scenes, characters, or symbolic imagery, this style can communicate complex ideas and emotions in ways more structured approaches cannot.",
          "The flexibility of illustration allows for blending influences — from comic book aesthetics to classical drawing to contemporary graphic design — creating truly unique pieces that defy easy categorization."
        ],
        gallery: createGalleryImages("Illustrative", "Zohar", 3)
      }
    ]
  }
];

// Helper function to get a style by slug
export function getStyleBySlug(slug: string): StyleData | undefined {
  return styles.find(style => style.slug === slug);
}

// Helper function to get all style slugs for static path generation
export function getAllStyleSlugs(): string[] {
  return styles.map(style => style.slug);
}
