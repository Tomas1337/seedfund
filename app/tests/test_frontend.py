import pytest
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import selenium.webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities 
import os

# The class object is used to test the UI of the New Obituary Page
LONG_MESSAGE = """
Deborah “Debbie” Lynn Peterson was a caring wife, mother, grandmother, sister, and friend. She left this world suddenly on July 6, 2020 at age 56.

She was born to Craig and Donna Sanders on June 23, 1964. After graduating from high school, Debbie chased her dreams to serve abroad in the Peace Corps where she met her husband, John Peterson. Together, they had 3 children: Brenda, Chad, and Emmy.
Debbie loved spending time in the kitchen, creating delicious meals for her family. Neighborhood children would gather around the kitchen table for after-school cookies and loved listening to Debbie’s stories about her travels. She was a skilled piano player and filled her home with classical music. Most weekends were spent as a volunteer at the local soup kitchen.
A funeral service is scheduled for 11 am on July 9, 2020 at the Presbyterian church on the corner of State Street and Broadway. In lieu of flowers, please donate to the downtown soup kitchen on her behalf."""

class NewObituaryPage:
    URL= 'http://localhost:3000/startObit'
    NEXT_BUTTON = (By.NAME, 'next_button')
    SUBMIT_BUTTON = (By.NAME, 'submit_button')

    #Login Page
    LOGIN_DEMO_BUTTON = (By.ID, 'demo-login')

    #STEP 1 FIELDS
    FIRST_NAME_FIELD = (By.ID, 'firstName')
    MIDDLE_NAME_FIELD = (By.ID, 'middleName')
    LAST_NAME_FIELD = (By.ID, 'lastName')
    NICKNAME_FIELD = (By.ID, 'nickName')
    DATE_OF_DEATH_FIELD = (By.ID, 'deathDate')
    BIRTH_DATE_FIELD = (By.ID, 'birthDate')

    #STEP 2 FIELDS
    UPLOAD_IMAGE_BUTTON = (By.ID, 'uploadImage')
    SHORT_MESSAGE_FIELD = (By.ID, 'short_message')
    LONG_MESSAGE_FIELD = (By.ID, 'long_message')

    #STEP 3 FIELDS
    MEMORIAL_SERVICE_CHECKBOX = (By.ID, 'onlineService')
    MEMORIAL_SERVICE_START_DATE_FIELD = (By.ID, 'onlineMemorialStartDate')
    MEMORIAL_SERVICE_END_DATE_FIELD = (By.ID, 'onlineMemorialEndDate')
    MEMORIAL_SERVICE_INVITATION_LINK = (By.ID, 'onlineServiceLink')
    MEMORIAL_SERVICE_INVITATION_PASSWORD = (By.ID, 'onlineServicePassword')

    FINANCIAL_ASSISTANCE_CHECKBOX = (By.NAME, 'financialAssistance')
    FINANCIAL_ASSISTANCE_BANK_ACCOUNT_NAME = (By.NAME, 'bankClientName')
    FINANCIAL_ASSISTANCE_BANK_NAME = (By.ID, 'bankName')
    FINANCIAL_ASSISTANCE_BANK_ACCOUNT_NUMBER = (By.ID, 'bankAccountNumber')

    DONATE_TO_CHARITY_CHECKBOX = (By.ID, 'donateChartiy')

    
    

    def __init__(self, driver):
        self.driver = driver
        

    def load(self):
        self.driver.get(self.URL)
    
    def fill_step_1_fields(self):
        self.driver.find_element(*NewObituaryPage.FIRST_NAME_FIELD).send_keys('John')
        self.driver.find_element(*NewObituaryPage.MIDDLE_NAME_FIELD).send_keys('Doe')
        self.driver.find_element(*NewObituaryPage.LAST_NAME_FIELD).send_keys('Smith')
        self.driver.find_element(*NewObituaryPage.NICKNAME_FIELD).send_keys('J.D.')
        # self.driver.find_element(*NewObituaryPage.DATE_OF_DEATH_FIELD).send_keys('01/01/2020')
        # self.driver.find_element(*NewObituaryPage.BIRTH_DATE_FIELD).send_keys('01/01/2000')

    def fill_step_2_fields(self):
        file_upload = self.driver.find_element_by_id('uploadImage')
        file_upload.send_keys("C:\\Projects\\seedfund\\app\\tests\\test_img.jpg")
        time.sleep(5)

        self.driver.find_element(*NewObituaryPage.SHORT_MESSAGE_FIELD).send_keys('This is a short message')
        self.driver.find_element(*NewObituaryPage.LONG_MESSAGE_FIELD).send_keys(LONG_MESSAGE)


    def fill_step_3_fields(self):
        pass
        # self.driver.find_element(*NewObituaryPage.MEMORIAL_SERVICE_CHECKBOX).click()
        # self.driver.find_element(*NewObituaryPage.MEMORIAL_SERVICE_START_DATE_FIELD).send_keys('01/01/2020')
        # self.driver.find_element(*NewObituaryPage.MEMORIAL_SERVICE_END_DATE_FIELD).send_keys('01/01/2021')
        # self.driver.find_element(*NewObituaryPage.MEMORIAL_SERVICE_INVITATION_LINK).send_keys('https://TestLink.com')
        # self.driver.find_element(*NewObituaryPage.MEMORIAL_SERVICE_INVITATION_PASSWORD).send_keys('password')
        # self.driver.find_element(*NewObituaryPage.FINANCIAL_ASSISTANCE_CHECKBOX).click()
        # self.driver.find_element(*NewObituaryPage.FINANCIAL_ASSISTANCE_BANK_ACCOUNT_NAME).send_keys('John Doe')
        # self.driver.find_element(*NewObituaryPage.FINANCIAL_ASSISTANCE_BANK_NAME).send_keys('Bank of America')
        # self.driver.find_element(*NewObituaryPage.FINANCIAL_ASSISTANCE_BANK_ACCOUNT_NUMBER).send_keys('123456789')
        # self.driver.find_element(*NewObituaryPage.DONATE_TO_CHARITY_CHECKBOX).click()

    def submit(self):
        self.driver.find_element(*NewObituaryPage.SUBMIT_BUTTON).click()

    def next(self):
        #Scroll to bottom of page``
        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        self.driver.find_element(*NewObituaryPage.NEXT_BUTTON).click()

    def back(self):
        self.driver.find_element(*NewObituaryPage.BACK_BUTTON).click()

    def login_demo(self):
        self.driver.find_element(*NewObituaryPage.LOGIN_DEMO_BUTTON).click()
  
def test_newObit_UI(browser):
    #Load Page
    new_obit_page = NewObituaryPage(browser)
    new_obit_page.load()

    # Maximize the browser
    browser.maximize_window()
    
    #If in login page, click demo login
    if new_obit_page.driver.current_url == 'http://localhost:3000/login':
        new_obit_page.login_demo()
        time.sleep(4)
        assert new_obit_page.driver.current_url == 'http://localhost:3000/'
        new_obit_page.load()

    assert new_obit_page.driver.current_url == new_obit_page.URL
    #Step 1 Fields
    new_obit_page.fill_step_1_fields()
    new_obit_page.next()

    #Step 2 Fields
    new_obit_page.fill_step_2_fields()
    new_obit_page.next()

    #Step 3 Fields
    new_obit_page.fill_step_3_fields()
    new_obit_page.submit()

    time.sleep(2)

    #Assert that we have been redirected to the obit page
    expected_value = 'http://localhost:3000/obit/'
    current_url = new_obit_page.driver.current_url
    assert current_url.split('/')[:-1] == expected_value.split('/')[:-1]
    assert type(int(current_url.split('/')[-1])) == type(2)

    #Assert that the name is the same as the one entered
    assert new_obit_page.driver.find_element(By.NAME, "obit_name").text == 'John Doe Smith'

    #Assert that the short message is the same as the one entered
    assert new_obit_page.driver.find_element(By.NAME, "short_message").text == 'This is a short message'

    #Assert that the long message is the same as the one entered
    #assert new_obit_page.driver.find_element(By.NAME, "long_message").text == LONG_MESSAGE