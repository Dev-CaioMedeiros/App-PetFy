from config import db

class Vacina(db.Model):
    __tablename__ = "vacinas"

    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey("pets.id"), nullable=False)
    nome = db.Column(db.String(100), nullable=False)
    data_aplicacao = db.Column(db.Date)
