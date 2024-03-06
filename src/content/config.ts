import { defineCollection, z } from "astro:content";

const events = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      data: z.array(
        z.object({
          url: z.string(),
        })
      ),
    }),
});

export const collections = {
  events,
};
