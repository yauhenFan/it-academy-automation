Feature: Test WDIO home site
  Scenario: I close anoucement banner and it doesnt appear after Web page refresh
    Given I open web site "https://webdriver.io/"
    When I close anoucement banner
    Then Anoucement banner is not displayed
    And I reload Web page
    Then Anoucement banner is not displayed

  Scenario Outline: I select language from dropdown and current value is available on Nav menu
    Given I open web site "https://webdriver.io/"
    When "<LanguageInitial>" language is displayed
    Then I hover over language element
    And I click on dropdowm element "<Number>"
    Then "<LanguageNext>" language is displayed

    Examples:
      | LanguageInitial | Number | LanguageNext |
      | English         | 2      | Deutsch      |
      | English         | 3      | Español      |
      | English         | 4      | हिन्दी         |

  Scenario: I click on Welcome icon and select set up suggested option
    Given I open web site "https://webdriver.io/"
    When I click on Welcome icon
    Then I click on set script option from Welcome
    And Suggestion list displays in Welcome window

  Scenario: I navigate via Nav menu is URL is changed
    Given I open web site "https://webdriver.io/"
    When I click on Nav Menu "Docs" option
    Then Url parameter has "docs/gettingstarted"
    And I click on Nav Menu "API" option
    Then Url parameter has "docs/api"
