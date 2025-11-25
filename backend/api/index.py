# api/index.py
# wrapper simples para importar sua app Flask
from app import app as application  # adapta se o seu Flask app estiver em outro arquivo/variável

def handler(request, response):
    # Vercel espera uma função handler(request, response).
    # Se sua versão do runtime for diferente, você pode adaptar.
    return application(request, response)
