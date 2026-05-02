// Este archivo vive en el servidor de Vercel, no en el navegador
// Por eso puede leer las variables de entorno de forma segura
module.exports = async function handler(request, response) {
    
    // Leemos la API key de las variables de entorno de Vercel
    const apiKey = process.env.GROQ_API_KEY
    
    // Recibimos el texto y el idioma que nos manda el navegador
    const { texto, idioma } = await request.json()
    
    // Llamamos a Groq desde el servidor con la clave segura
    const respuesta = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}` // la clave viene del servidor
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            max_tokens: 1000,
            messages: [
                {
                    role: "user",
                    content: `Traduce este texto ${idioma}. Responde SOLO con la traducción, sin explicaciones ni texto extra: ${texto}`
                }
            ]
        })
    })
    
    const datos = await respuesta.json()
    
    // Devolvemos solo la traducción al navegador, nunca la API key
    return response.json({
        traduccion: datos.choices[0].message.content
    })
}