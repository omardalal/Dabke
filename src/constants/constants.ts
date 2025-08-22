export type ColorKey = "red" | "green" | "white" | "black";

export const HERO = {
  titlePrefix: "Palestinian",
  titleAccent: "Dabke",
  subtitle:
    "A living pulse of our culture - rhythmic steps, claps, and pride. Explore regional styles, stories, and reconstructed 3D performances.",
};

export const CHIPS: { label: string; color: ColorKey }[] = [
  { label: "Levant Roots", color: "red" },
  { label: "Heritage", color: "green" },
  { label: "Community", color: "white" },
  { label: "Rhythm", color: "black" },
];

export const STYLES_SECTION = {
  title: "Dabke Styles",
  subtitle:
    "Each region stamps its identity into the rhythm. Tap a card to watch the 3D reconstruction and learn the steps.",
};

export const DABKE_CARDS = [
  {
    title: "Dabke Sha'rawiyeh",
    region: "North",
    description:
      "Fast, energetic footwork and tight circles. Known for playful improvisations and fierce tempo.",
  },
  {
    title: "Dabke Dal'ouna",
    region: "Central",
    description:
      "Iconic line formation with strong stomps matching the beat of traditional songs like 'Ala Dal'ouna'.",
  },
  {
    title: "Dabke Sha'ami",
    region: "Levant",
    description:
      "Elegant, synchronized steps emphasizing unity and the collective clap. Great for big weddings.",
  },
  {
    title: "Dabke Sa'idi",
    region: "Mountain",
    description:
      "Heavy heel strikes, shoulder sway, and a proud pace - grounded and powerful.",
  },
  {
    title: "Dabke Tawaheh",
    region: "Coastal",
    description:
      "Bouncy cadence with playful turns, often paired with mijwiz and tabla for a festive vibe.",
  },
  {
    title: "Dabke Karradi",
    region: "Galilee",
    description:
      "Call-and-response movements led by the lawweeh (leader), blending stamina with flair.",
  },
];

export const ORIGINS_SECTION = {
  title: "Origins & Journey",
  subtitle:
    "From village harvests and stone-laying celebrations to modern stages - dabke has always been a dance of togetherness.",
};

export const TIMELINE = [
  {
    year: "Ottoman Era",
    text:
      "Communal line dances accompany work and weddings across the Levant; rhythms vary by village and terrain.",
  },
  {
    year: "Early 20th C.",
    text:
      "Folkloric troupes begin codifying steps; songs like 'Dal'ouna' reinforce shared lyrics and beat.",
  },
  {
    year: "Late 20th C.",
    text:
      "Stage interpretations grow; the lawweeh leads variations while preserving village authenticity.",
  },
  {
    year: "Today",
    text:
      "Global Palestinian communities evolve dabke for theaters, festivals, and viral clips - tradition meeting innovation.",
  },
];

export const ABOUT = {
  title: "3D Reconstructed Performances",
  text:
    "We capture authentic dancers and reconstruct performances in 3D so you can study footwork and formation from any angle. Each video includes step notes, tempo, and region context.",
};

export const PILLS: { label: string; color: ColorKey }[] = [
  { label: "tatreez", color: "red" },
  { label: "keffiyeh", color: "green" },
  { label: "Dabke", color: "white" },
  { label: "Heritage", color: "black" },
];

export const FOOTER_TEXT = "Built with love · by Arein Daralnakhla";
