from app.models import db, Obit
from datetime import datetime, timedelta
import random
import webbrowser
import requests
import json
import asyncio
import time


def get_random_user():
    url = 'https://randomuser.me/api/'
    res = requests.get(url).json()
    #j = json.dumps(res, indent=2)
    return res['results'][0]
    # return res

def seed_obits():
    random.seed('obit')
    for i in range(1,20):
        user = get_random_user()
        nick_name = str(user['name']['title'] +' '+ user['name']['last']) 
        obit = Obit(
            user_id= random.randrange(1, 12),
            first_name= str(user['name']['first']),
            middle_name= "Middle",
            last_name= str(user['name']['last']),
            nick_name=(nick_name[:20] + '..') if len(nick_name) > 20 else nick_name,
            short_message="May you rest in peace",
            long_message="We pray for the eternal repose of our most beloved friend, father and husband. May he rest in peace with the angels. We pray for the eternal repose of our most beloved friend, father and husband. May he rest in peace with the angels. We pray for the eternal repose of our most beloved friend, father and husband. May he rest in peace with the angels. We pray for the eternal repose of our most beloved friend, father and husband. May he rest in peace with the angels. We pray for the eternal repose of our most beloved friend, father and husband. May he rest in peace with the angels. We pray for the eternal repose of our most beloved friend, father and husband. May he rest in peace with the angels.",
            obit_image='https://thispersondoesnotexist.com/image',
            start_date=(datetime.now() + timedelta(days=random.randrange(0,3))).isoformat(),
            end_date=(datetime.now() + timedelta(days=random.randrange(3, 10))).isoformat(),
            created_at=(datetime.now()).isoformat(),
            funding_goal=float(100000)

            #TODO
            #Add the bank details, financial assistance toggle and online novena thing.
        )
        db.session.add(obit)
        db.session.commit()



def undo_obits():
    db.session.execute('TRUNCATE obits CASCADE;')
    db.session.commit()