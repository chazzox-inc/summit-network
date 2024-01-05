import { z, defineCollection } from "astro:content";

const eventCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        date: z.date()
    })
});

const sectionCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string()
    })
});

export const collections = {
    events: eventCollection,
    sections: sectionCollection
};
