import { MediaPageSection } from "@/components/sections/MediaPageSection";
import {
  mediaPageCategories,
  type MediaCategoryKey,
} from "@/content/gallery";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Медіа",
  path: "/gallery",
});

type GalleryPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

const mediaCategoryKeys: MediaCategoryKey[] = [
  "competitions",
  "training",
  "veterans",
];

function toMediaCategoryKey(category?: string): MediaCategoryKey | undefined {
  return mediaCategoryKeys.find((key) => key === category);
}

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const params = await searchParams;

  return (
    <MediaPageSection
      categories={mediaPageCategories}
      initialCategoryKey={toMediaCategoryKey(params?.category)}
    />
  );
}
