const register = async () => {
    
}

const postRegister = async (data) => {
    const url = "/api/Comentarios"

    try {
      const res = await fetch(url, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "nombre": data.name,
          "email": data.email,
          "asunto": "string",
          "mensaje": data.consultation
        })
      })
      const result = await res
      return result
    } catch (error) {
      console.log(error)
    }
  }