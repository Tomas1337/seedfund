FROM python:3.8

# Setup Flask environment
ENV FLASK_APP=app
ENV FLASK_ENV=development
ENV SQLALCHEMY_ECHO=True

EXPOSE 5000

COPY ./requirements.txt .
# Install Python Dependencies
RUN pip install -r requirements.txt
RUN pip install psycopg2

# Run flask environment
#CMD gunicorn app:app

#CMD ["flask", "run"]
