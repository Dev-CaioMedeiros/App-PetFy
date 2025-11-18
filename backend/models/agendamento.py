from config import db

class Agendamento(db.Model):
    __tablename__ = "agendamentos"

    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey("pets.id"), nullable=False)
    clinic_id = db.Column(db.Integer, db.ForeignKey("clinicas.id"), nullable=False)
    data = db.Column(db.DateTime)
    descricao = db.Column(db.Text)
