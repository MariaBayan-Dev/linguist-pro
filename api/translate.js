// Cambiamos "export default async function handler" por module.exports
module.exports = async function handler(request, response) {
    
    const apiKey = process.env.GROQ_API_KEY
    const { texto, idioma } = await request.json()
    
    const respuesta = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
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
    
    return response.json({
        traduccion: datos.choices[0].message.content
    })
    // Ya no hay "export default", usamos "module.exports" arriba
}