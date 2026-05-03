//CODIGO PARA VERCEL Y PROTECCIÓN API

//Apuntes a futuro

module.exports = async function handler(request, response) {
    try {
        const apiKey = process.env.GROQ_API_KEY
        
        // Se lee el body para mas compatibilidad con Vercel
        const { texto, idioma } = request.body
        
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
        
    } catch(error) {
    /*

    Si algo falla, se devuelve el error en formato JSON
    asi el navegador puede leerlo más fácilmente

    */
        return response.status(500).json({
            error: error.message
        })
    }
}