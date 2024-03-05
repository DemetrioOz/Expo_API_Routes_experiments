import { ExpoRequest, ExpoResponse } from 'expo-router/server'

export async function GET(): Promise<ExpoResponse> {
  return ExpoResponse.json({
    message: "Essa é uma mensagem do backend mobile!"
  })
}

export async function POST(request: ExpoRequest): Promise<ExpoResponse> {
  const {
    email, 
    password
  } = await request.json()

  if(email === "Teste" && password === "Teste") {
    return ExpoResponse.json({
      email, 
      name: "nome do usuario"
    })
  }

  return new ExpoResponse("usuario ou senha incorretos!", {
    status: 404,
    headers: {
      "Content-Type": "text/plain",
    }
  })
}