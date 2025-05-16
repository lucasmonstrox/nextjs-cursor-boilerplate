import { z } from 'zod';

export const settingsSchema = z.object({
  name: z.string().min(2, 'Nome obrigatório'),
  email: z.string().email(),
});
