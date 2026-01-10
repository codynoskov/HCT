import placeholderImage from '../assets/images/artist-placeholder.png';
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

export interface ArtistData {
  name: string;
  slug: string;
  bio: string;
  fullBio?: string;
  image: string;
  instagram: string;
  tags: string[];
  bookingHref: string;
  galleryImages: GalleryImage[];
  contentBlocks?: ContentBlock[];
}

// Generate placeholder gallery images
const createGalleryImages = (artistName: string, count: number = 6): GalleryImage[] => {
  return Array(count).fill(null).map((_, i) => ({
    src: tattooPlaceholder.src,
    alt: `${artistName}'s tattoo work ${i + 1}`,
    tags: i === 0 ? [{ text: "Featured", color: "Accent" as const }] : undefined
  }));
};

export const artists: ArtistData[] = [
  {
    name: "Alex",
    slug: "alex",
    bio: "I'm a traditional tattoo artist rooted in the hardcore punk scene — vegan, straight edge, and a coffee lover. My work blends classic American traditional with contemporary influences, always aiming for bold lines and vibrant colors that stand the test of time.",
    fullBio: "I've been tattooing professionally for over a decade, drawing inspiration from the rich history of American traditional tattooing while adding my own modern twist. Every piece I create is designed to age beautifully, with bold lines and saturated colors that maintain their impact over time. My studio is a judgment-free zone where we can collaborate on bringing your vision to life.",
    image: placeholderImage.src,
    instagram: "alex_hct",
    tags: ["Linework", "Traditional & Old School", "Cartoon"],
    bookingHref: "/book?artist=alex",
    galleryImages: createGalleryImages("Alex", 12),
    contentBlocks: [
      {
        title: "Style & Direction",
        paragraphs: [
          "My tattooing philosophy centers on honoring the craft's heritage while pushing creative boundaries. I specialize in American Traditional designs — think bold eagles, classic roses, and iconic flash — but I love adding contemporary elements that make each piece unique to its wearer.",
          "Whether you're looking for a classic sailor jerry-style anchor or want to put a modern spin on traditional imagery, I'm here to make it happen. Every session begins with a conversation about what the tattoo means to you and how we can make it truly yours."
        ]
      },
      {
        title: "Flash & Custom Work",
        paragraphs: [
          "My flash collection features a curated selection of ready-to-tattoo designs, perfect for walk-ins or anyone looking for something classic. These pieces are pre-designed and priced affordably, making them ideal for your first tattoo or building a cohesive sleeve.",
          "For custom work, I collaborate closely with clients to develop original designs. Bring me your ideas, reference images, or just a vague concept — I'll sketch multiple options until we find the perfect piece for you."
        ],
        gallery: createGalleryImages("Alex Flash", 6)
      },
      {
        title: "Booking & Sessions",
        paragraphs: [
          "I work Tuesday through Saturday, with appointments available from 11am to 7pm. For larger pieces requiring multiple sessions, I offer package pricing and priority scheduling. Deposits are required to secure your appointment and go toward your final tattoo cost.",
          "First-timers welcome! I take pride in creating a comfortable environment for everyone, whether it's your first tattoo or your fiftieth. Reach out through the booking form or DM me on Instagram to start planning your next piece."
        ]
      }
    ]
  },
  {
    name: "Arseniy",
    slug: "arseniy",
    bio: "Born from hardcore punk — I've been tattooing since 2013. My Traditional and Old School tattoos are fast, bold, and built to last. You can choose from my collection of ready-made flash designs, or I'll be happy to bring your own idea to life. I specialize in creating pieces that honor the rich history of tattooing while adding my own contemporary twist.",
    fullBio: "From my roots in the hardcore punk scene, I've developed a tattooing style that values authenticity, craftsmanship, and community. Over a decade of experience has refined my technique, allowing me to execute Traditional and Old School designs with speed and precision without sacrificing quality.",
    image: placeholderImage.src,
    instagram: "arspunx",
    tags: ["Linework", "White on Black", "Traditional & Old School", "Fineline", "Tribal & Neo-Tribal"],
    bookingHref: "/book?artist=arseniy",
    galleryImages: createGalleryImages("Arseniy", 12),
    contentBlocks: [
      {
        title: "Style & Direction",
        paragraphs: [
          "My work spans a range of styles, from classic Traditional and Old School to more experimental approaches like White on Black and Neo-Tribal. What unites everything I do is a commitment to bold, lasting work that looks as good in twenty years as it does today.",
          "I'm particularly drawn to designs with strong cultural roots — whether that's American Traditional iconography, Tribal patterns, or the raw energy of punk aesthetics. Each piece carries meaning beyond its visual impact."
        ]
      },
      {
        title: "Flash & Custom Work",
        paragraphs: [
          "My flash sheets are always growing, featuring designs inspired by everything from classic Americana to punk rock imagery. Flash pieces are available for walk-ins when my schedule allows, or you can book ahead to secure a specific design.",
          "Custom work is where I really shine. I love taking a client's vision and translating it into a tattoo that exceeds their expectations. The process typically involves a consultation, sketching phase, and final refinement before we put needle to skin."
        ],
        gallery: createGalleryImages("Arseniy Flash", 6)
      },
      {
        title: "Booking & Sessions",
        paragraphs: [
          "I'm available for appointments throughout the week. For smaller flash pieces, we can often get you in quickly. Larger custom work requires more lead time for design development and scheduling.",
          "I believe in transparent pricing and clear communication throughout the process. Reach out via the booking form or Instagram DM to discuss your project and get a quote."
        ]
      }
    ]
  },
  {
    name: "Gil",
    slug: "gil",
    bio: "Born and raised in Berlin. I do engraving tattoos inspired by medieval woodcuts and copper engravings. I really enjoy doing nature themed tattoos like flowers, animals, medieval stuff and designs out of the soulsborne universe. Every piece I create is a journey into historical artistry, bringing centuries-old techniques into modern skin art.",
    fullBio: "Growing up surrounded by Berlin's rich artistic heritage shaped my approach to tattooing. I found my calling in the intricate world of engraving-style tattoos, where every line tells a story and the level of detail creates truly mesmerizing pieces.",
    image: placeholderImage.src,
    instagram: "gil_engraving",
    tags: ["Linework", "Floral & Botanic", "Engraving"],
    bookingHref: "/book?artist=gil",
    galleryImages: createGalleryImages("Gil", 12),
    contentBlocks: [
      {
        title: "Style & Direction",
        paragraphs: [
          "My engraving style pays homage to the master printmakers of the medieval and Renaissance periods. Using precise linework and careful shading, I recreate the look of woodcuts and copper engravings directly on skin. The result is tattoos that feel like living pieces of historical art.",
          "Nature themes dominate my portfolio — botanical illustrations, animal studies, and mythological creatures rendered with meticulous attention to detail. I also love creating pieces inspired by the dark fantasy aesthetic of games like Dark Souls and Bloodborne."
        ]
      },
      {
        title: "Flash & Custom Work",
        paragraphs: [
          "While I do maintain a selection of flash designs, my work leans heavily toward custom pieces. The nature of engraving-style tattoos means each design benefits from being tailored to the specific placement and size we're working with.",
          "For custom work, I spend significant time researching historical references and developing original artwork. Expect the design process to take several weeks for complex pieces — the results are worth the wait."
        ],
        gallery: createGalleryImages("Gil Flash", 6)
      },
      {
        title: "Booking & Sessions",
        paragraphs: [
          "Engraving-style tattoos require patience, both from the artist and the client. Sessions may run longer than traditional tattoos due to the detailed linework involved. I recommend breaking larger pieces into multiple sessions for comfort and optimal results.",
          "To book, reach out with your ideas and preferred placement. Include any reference images that inspire you — whether that's historical engravings, game artwork, or natural subjects you'd like to incorporate."
        ]
      }
    ]
  },
  {
    name: "Sarah",
    slug: "sarah",
    bio: "I'm a beginner artist based in Berlin (born/raised in Castrop-Rauxel). My tattoo style is kinda blackwork traditional. What matters most to me is that you feel comfortable — not just with your tattoo, but with the whole process around it. If you want to get to know me, my work and my personality, reach out on Instagram!",
    fullBio: "My journey into tattooing started from a deep love for art and a desire to create meaningful work that people carry with them forever. Though I'm newer to the craft, I bring fresh perspective and genuine care to every piece I create.",
    image: placeholderImage.src,
    instagram: "sarah_rawk_tattoo",
    tags: ["Linework", "Blackwork", "Traditional & Old School", "Classic Black & Grey"],
    bookingHref: "/book?artist=sarah",
    galleryImages: createGalleryImages("Sarah", 12),
    contentBlocks: [
      {
        title: "Style & Direction",
        paragraphs: [
          "I describe my style as blackwork traditional — taking the bold, iconic imagery of traditional tattooing and rendering it in striking black and grey. The result is timeless designs with a modern, graphic quality.",
          "Beyond the aesthetic, what sets my work apart is my approach to the entire experience. I want every client to feel heard, respected, and comfortable from first contact through healing. Your tattoo journey should be as positive as the finished piece."
        ]
      },
      {
        title: "Flash & Custom Work",
        paragraphs: [
          "My flash collection is growing as I develop my style and build my portfolio. These designs are perfect for clients looking for something beautiful at accessible prices while I continue honing my craft.",
          "Custom work is available with realistic expectations about complexity. I'm upfront about my current skill level and will refer you to more experienced artists for projects beyond my abilities. Transparency builds trust."
        ],
        gallery: createGalleryImages("Sarah Flash", 6)
      },
      {
        title: "Booking & Sessions",
        paragraphs: [
          "I keep my booking process simple and stress-free. Reach out on Instagram or through the booking form with your ideas. I'll let you know if it's a good fit for my current skill set and experience level.",
          "My rates reflect my experience as a developing artist. If you're looking for quality work at reasonable prices while supporting an emerging tattooer, let's connect!"
        ]
      }
    ]
  }
];

// Helper function to get an artist by slug
export function getArtistBySlug(slug: string): ArtistData | undefined {
  return artists.find(artist => artist.slug === slug);
}

// Helper function to get all artist slugs for static path generation
export function getAllArtistSlugs(): string[] {
  return artists.map(artist => artist.slug);
}
