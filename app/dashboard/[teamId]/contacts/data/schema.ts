import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const contactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  roles: z.array(z.number()),
  rate: z.number(),
  gear: z.array(z.string()),
  team_id: z.string(),
  pronouns: z.string(),
  notes: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  zipcode: z.string(),
  type: z.string(),
})

export type Contact = z.infer<typeof contactSchema>