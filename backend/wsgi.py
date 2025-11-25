# wsgi.py
from app import app

# NÃO execute o servidor automaticamente quando importado:
if __name__ == "__main__":
    app.run(debug=True)
