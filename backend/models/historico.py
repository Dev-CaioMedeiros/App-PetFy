from config import db

class Historico(db.Model):
    __tablename__ = "historico"

    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey("pets.id"), nullable=False)
    tipo_evento = db.Column(db.String(100))
    descricao = db.Column(db.Text)
    data = db.Column(db.DateTime)
