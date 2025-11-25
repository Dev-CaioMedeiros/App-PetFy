from config import init_app, db
from flask_migrate import Migrate
from routes.user_routes import user_routes
from routes.pet_routes import pet_routes
from flask import send_from_directory
from sqlalchemy import text
import os

app = init_app()
migrate = Migrate(app, db)

UPLOAD_FOLDER = os.path.join("uploads")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

@app.route("/uploads/<path:filename>")
def uploads(filename):
    return send_from_directory(app.config["UPLOAD_FOLDER"], filename)

with app.app_context():
    try:
        db.session.execute(text("SELECT 1"))
        print("✅ Banco de dados conectado!")
    except Exception as e:
        print("❌ Erro ao conectar com o banco:", e)

app.register_blueprint(user_routes, url_prefix="/api")
app.register_blueprint(pet_routes, url_prefix="/api")

if __name__ == "__main__":
    print("🚀 Servidor rodando em http://127.0.0.1:5000")
    app.run(host="0.0.0.0", port=5000)
