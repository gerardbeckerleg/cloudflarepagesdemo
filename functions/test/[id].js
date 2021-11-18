export const onRequest = (context) => {
    return new Response(context.request);
}