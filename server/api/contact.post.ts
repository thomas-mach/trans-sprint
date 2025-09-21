import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: "noreply@reviopadova.it",
      to: "m4chtomasz@gmail.com",
      subject: "Nuovo messaggio dal sito reviopadova.it",
      text: `Nome: ${body.name}\nEmail: ${body.email}\nMessaggio: ${body.message}`,
    });

    return { message: "Email inviata con successo!", id: data.id };
  } catch (error: any) {
    console.error(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Errore durante l'invio dell'email",
    });
  }
});
