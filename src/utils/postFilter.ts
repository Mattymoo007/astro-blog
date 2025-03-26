import type { CollectionEntry } from "astro:content";
import { SITE } from "@/config";

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;

  // Always include featured posts, regardless of publication date
  // Otherwise, apply normal filtering rules
  return (
    data.featured ||
    (!data.draft && (import.meta.env.DEV || isPublishTimePassed))
  );
};

export default postFilter;
