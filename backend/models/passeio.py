from config import db

class Passeio(db.Model):
    __tablename__ = "passeios"

    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey("pets.id"), nullable=False)
    data = db.Column(db.Date)
    local = db.Column(db.String(150))
    observacoes = db.Column(db.Text)
