import { z } from 'zod';

export const settingsSchema = z.object({
  name: z.string().min(2, 'Nome obrigatório'),
  email: z.string().email(),
});

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Senha atual obrigatória'),
    newPassword: z
      .string()
      .min(6, 'Nova senha deve ter pelo menos 6 caracteres'),
    confirmPassword: z.string().min(1, 'Confirme a nova senha'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;
