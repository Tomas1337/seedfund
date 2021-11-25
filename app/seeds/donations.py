from werkzeug.security import generate_password_hash
from app.models import db, Donation
from datetime import datetime, timedelta

# Adds obits. Add more here if you like!


def seed_donations():

    donation1 = Donation(
        user_id = 1,
        obit_id = 2,
        amount = 203
    )
    db.session.add(donation1)

    donation2 = Donation(
        user_id = 3,
        obit_id = 2,
        amount = 410
    )
    db.session.add(donation2)

    donation3 = Donation(
        user_id = 4,
        obit_id = 2,
        amount = 850
    )
    db.session.add(donation3)

    donation4 = Donation(
        user_id = 5,
        obit_id = 2,
        amount = 230
    )
    db.session.add(donation4)

    donation5 = Donation(
        user_id = 6,
        obit_id = 2,
        amount = 80
    )
    db.session.add(donation5)

    donation6 = Donation(
        user_id = 2,
        obit_id = 1,
        amount = 50
    )
    db.session.add(donation6)

    donation7 = Donation(
        user_id = 1,
        obit_id = 3,
        amount = 290
    )
    db.session.add(donation7)

    donation8 = Donation(
        user_id = 2,
        obit_id = 3,
        amount = 800
    )
    db.session.add(donation8)

    donation9 = Donation(
        user_id = 3,
        obit_id = 4,
        amount = 40
    )
    db.session.add(donation9)

    donation10 = Donation(
        user_id = 5,
        obit_id = 4,
        amount = 100
    )
    db.session.add(donation10)

    donation11 = Donation(
        user_id = 6,
        obit_id = 5,
        amount = 13
    )
    db.session.add(donation11)

    donation12 = Donation(
        user_id = 1,
        obit_id = 6,
        amount = 10000
    )
    db.session.add(donation12)

    donation13 = Donation(
        user_id = 2,
        obit_id = 6,
        amount = 8000
    )
    db.session.add(donation13)

    donation14 = Donation(
        user_id = 3,
        obit_id = 6,
        amount = 900
    )
    db.session.add(donation14)

    donation15 = Donation(
        user_id = 4,
        obit_id = 6,
        amount = 100000
    )
    db.session.add(donation15)

    donation16 = Donation(
        user_id = 5,
        obit_id = 7,
        amount = 1084
    )
    db.session.add(donation16)

    donation17 = Donation(
        user_id = 6,
        obit_id = 7,
        amount = 2092
    )
    db.session.add(donation17)

    donation18 = Donation(
        user_id = 1,
        obit_id = 8,
        amount = 20
    )
    db.session.add(donation18)

    donation19 = Donation(
        user_id = 4,
        obit_id = 9,
        amount = 200
    )
    db.session.add(donation19)

    donation20 = Donation(
        user_id = 5,
        obit_id = 9,
        amount = 800
    )
    db.session.add(donation20)

    donation21 = Donation(
        user_id = 9,
        obit_id = 10,
        amount = 10
    )
    db.session.add(donation21)

    donation22 = Donation(
        user_id = 6,
        obit_id = 11,
        amount = 2000
    )
    db.session.add(donation22)

    donation23 = Donation(
        user_id = 10,
        obit_id = 12,
        amount = 500
    )
    db.session.add(donation23)

    donation24 = Donation(
        user_id = 2,
        obit_id = 13,
        amount = 25
    )
    db.session.add(donation24)

    donation25 = Donation(
        user_id = 11,
        obit_id = 14,
        amount = 2000
    )
    db.session.add(donation25)

    donation26 = Donation(
        user_id = 10,
        obit_id = 14,
        amount = 2500000
    )
    db.session.add(donation26)

    donation27 = Donation(
        user_id = 5,
        obit_id = 14,
        amount = 5000
    )
    db.session.add(donation27)

    donation28 = Donation(
        user_id = 4,
        obit_id = 15,
        amount = 1000
    )
    db.session.add(donation28)

    donation29 = Donation(
        user_id = 11,
        obit_id = 16,
        amount = 500
    )
    db.session.add(donation29)

    donation30 = Donation(
        user_id = 3,
        obit_id = 16,
        amount = 50
    )
    db.session.add(donation30)

    db.session.commit()

def undo_donations():
    db.session.execute('TRUNCATE donation;')
    db.session.commit()
