from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
<<<<<<< HEAD
    return render_template("home.html")
=======

    calendar = get_present_month_calendar()

    return render_template("home.html", title = "home", calendar = calendar)

@app.route("/statistics")
def statistics():
    return render_template("statistics.html", title = "stats")

@app.route("/management")
def management():
    return render_template("management.html", title = "management")

@app.route("/about")
def about():
    return render_template("about.html", title = "about")




# Helper Funtions

def get_present_year_and_month() -> tuple[int, int]:

    import datetime as dt

    today = dt.date.today()

    year = today.year
    month = today.month

    return year, month


def get_present_month_calendar():
    import calendar
    
    cal = calendar.HTMLCalendar()


    year, month  =  get_present_year_and_month()
    present_month_calendar = cal.formatmonth(year, month, withyear = True) 

    return present_month_calendar
>>>>>>> b247205 (Merge branch 'testing' into main and fix conflicts)



