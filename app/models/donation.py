from sqlalchemy.orm import backref
from .db import db
from datetime import datetime


class Donation(db.Model):
    __tablename__ = 'donations'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    obit_id = db.Column(db.Integer, db.ForeignKey(
        "obits.id"), nullable=False)
    amount = db.Column(db.Numeric(10, 2), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    user = db.relationship("User", back_populates="donations")
    obit = db.relationship("Obit", back_populates="donations")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "obit_id": self.obit_id,
            "amount": float(self.amount),
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }

    def to_dict_obits(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "obit_id": self.obit_id,
            "amount": float(self.amount),
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "obit": self.obit.to_dict()
        }
