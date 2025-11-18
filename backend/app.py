from config import init_app, db
from routes.user_routes import user_routes
from routes.pet_routes import pet_routes
from flask import send_from_directory
from sqlalchemy import text
import os

# 🔥 Cria o app CORRETO (com db, bcrypt, cors)
app = init_app()

# 🔥 Pasta de uploads
UPLOAD_FOLDER = os.path.join("uploads")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

# 🔥 Servir imagens
@app.route("/uploads/<path:filename>")
def uploads(filename):
    return send_from_directory(app.config["UPLOAD_FOLDER"], filename)

# 🔥 Teste de conexão
with app.app_context():
    try:
        db.session.execute(text("SELECT 1"))
        print("✅ Banco de dados conectado com sucesso!")
    except Exception as e:
        print("❌ Erro ao conectar ao banco de dados:", e)

# 🔥 Registrar rotas
app.register_blueprint(user_routes, url_prefix="/api")
app.register_blueprint(pet_routes, url_prefix="/api")

# 🔥 Iniciar servidor
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        print("📦 Tabelas verificadas/criadas com sucesso!")

    print("🚀 Servidor Flask rodando em http://127.0.0.1:5000")
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)))
