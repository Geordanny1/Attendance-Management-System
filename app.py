from flask import Flask, render_template, jsonify, request

app = Flask(__name__)


@app.route("/")
def home():

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

    return ( year, month )


def get_present_month_calendar() -> str:
    import calendar
    
    cal = calendar.HTMLCalendar()
    year, month  =  get_present_year_and_month()
    present_month_calendar = cal.formatmonth(year, month, withyear = True) 

    return present_month_calendar

@app.route("/changemonth", methods = ["POST"])
def changemonth():

    data = request.get_json()

    year   = data.get("year")
    month  = data.get("year")
    new_date = get_new_date(data) 
    new_year  = new_date["year"]
    new_month = new_date["month"]

    calendar = get_month_html_calendar(new_year, new_month)

    data = {
            "html" : calendar
            }

    return jsonify(data)




def get_new_date(date: dict) -> dict[str, int]:

    year  = date["year"]
    month  = date["month"]
    direction  = date["direction"]

    if direction == "next":
        if month == 12:

            year  += 1
            month  = 1
            new_date = {
                    "year" : year,
                    "month" : month
                    }

            return new_date

        month += 1
        new_date = {
                "year"  :  year,
                "month" : month
                }

        return new_date

    elif direction == "prev":
        if month == 1:

            month = 12
            year -= 1
            new_date = {
                    "year":  year,
                    "month": month
                    }

            return new_date

        month -= 1
        new_date = {
                "month" : month,
                "year"  : year
                }

        return new_date

    elif direction == "present":

        new_year, new_month = get_present_year_and_month()
        new_date = {
                "year":  new_year,
                "month": new_month
                }

        return new_date


def get_month_html_calendar(year: int, month: int) -> str:
    import calendar

    cal = calendar.HTMLCalendar()
    html_calendar = cal.formatmonth(year, month, withyear = True) 

    return html_calendar

