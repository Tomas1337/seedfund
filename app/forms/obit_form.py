from flask_wtf import FlaskForm
from sqlalchemy.orm import defaultload
from sqlalchemy.sql.sqltypes import Date, DateTime
from wtforms import widgets, StringField, DecimalField, DateField, SelectMultipleField, BooleanField, DateTimeField
from flask_wtf.file import FileField, FileRequired
from wtforms.validators import DataRequired, Email, ValidationError


class MultiCheckboxField(SelectMultipleField):
    widget = widgets.ListWidget(prefix_label=False)
    option_widget = widgets.CheckboxInput()

class ObitForm(FlaskForm):
    userId = StringField('userId')

    #Dead Person's info
    firstName = StringField('firstName', validators=[DataRequired()])
    lastName = StringField('lastName', validators=[DataRequired()])
    middleName = StringField('middleName')
    nickName = StringField('nickName')
    birthDate = StringField('birthDate')
    deathDate = StringField('deathDate')

    start_date = DateField('start_date')
    end_date = DateField('end_date')
    
    # #User Input
    short_message = StringField('shortMessage')
    long_message = StringField('longMessage')
    funding_goal = DecimalField('funding_goal')
    obit_image = StringField('obit_image') #,validators=[FileRequired()])

    onlineService = StringField('onlineService')
    memorialStartDate = DateTimeField('memorialStartDate')
    memorialEndDate = DateTimeField('memorialEndDate')

    financialAssistance = BooleanField('financialAssistance')
    bankClientName = StringField('bankClientName')
    bankName = StringField('bankName')
    bankAccountNumber = StringField('bankAccountNumber')
    

    



    # service_list = ['guest_book','novena_service', 'donation_service']
    # addedServices = MultiCheckboxField('addedServices', choices=service_list)
    # novenaLink = StringField('novenaLink')
    
    

