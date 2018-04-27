from __future__ import print_function
from datetime import datetime
import psycopg2
import psycopg2.extras
import logging
from random import randint
import json
import urllib
from urllib.request import urlopen


def fetch_data():
    temp=randint(25,40)
    humidity=randint(40,60)
    plant_temp=randint(25,50)
    ph=randint(5,11)





    try:
        conn = psycopg2.connect(dbname='aquaponics', user='postgres', host='localhost', password='aquaponics')
        print('Opened DB successfull')

    except:
        print(datetime.now())
        logging.exception("unable to open the database")
        return
    else:
        cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
        cur.execute("DELETE FROM aqua_reading where 1=1")

        cur.execute("""INSERT INTO aqua_reading(temp,plant_temp,humidity,ph)
                      VALUES (%s, %s, %s, %s)""", (temp, plant_temp, humidity, ph))

        cur.execute("""INSERT INTO aqua_reading_data(temp,plant_temp,humidity,ph)
                              VALUES (%s, %s, %s, %s)""", (temp, plant_temp, humidity, ph))




        conn.commit()
        cur.close()
        conn.close

        print("data written")



def control_data():
        data= urllib.request.urlopen("http://127.0.0.1:8000/controlp/").read()
        output = json.loads(data)

        for item in output:
            Heater = item.get("Heater")
            LED = item.get("LED")
            Autonomous = item.get("Autonomous")
            Motor = item.get("Motor")
#
#         if Autonomous:False
#
#             if(Heater==True)
#                 gpio.write(pin,high)
#             else
#                 gpio.write(pin,low)
#
#             if (LED==True)
#                 gpio.write(pin,high)
#             else
#                 gpio.write(pin,low)
#
#             if (Motor=True)
#                 gpio.write(pin,high)
#             else
#                 gpio.write(pin,low)


#def Arduino_control():
    #h=0
    #m=0
    #if h>8 && h<18
     #   gpio.write(24,high)
    #else
     #   gpio.write(24,low)

    #if (h == 4 | | h == 8 | | h == 12 | | h == 16 | | h == 20 | | h == 0)


       # print("minutes: ")
       #print(m)
       # if (m < 10)
        #    gpio.write(25, LOW)
       # else
         #   gpio.write(25, HIGH)
        #delay(1000)
    #if (ph > 8.5)
        #gpio.write(25,High)

    #else
        #gpio.write(25, LOW)
    #if (Temp < 25)
        #digitalWrite(26, HIGH)
    #else
        #gpio.write(26, LOW)






control_data()
fetch_data()



