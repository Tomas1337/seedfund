import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By


@pytest.fixture
def browser():
    #s = Service(ChromeDriverManager().install())
    b = webdriver.Chrome(executable_path=r"C:/Projects/seedfund/app/chromedriver.exe")
    b.implicitly_wait(3)
    #b.get('http://localhost:3000/')
    yield b
    
    b.quit()