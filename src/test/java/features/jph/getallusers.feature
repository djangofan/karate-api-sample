@jph
Feature: Get All Users

  Background:
    * url data.dev.url
    * configure report = { showAllSteps: true, showRequest: false, showResponse: false }

  Scenario: get all users and then get the first user by id

    Given path 'users'
    When method get
    Then status 200

    * def first = response[0]

    Given path 'users', first.id
    When method get
    Then status 200

  Scenario: get all users and then get the last user by id

    Given path 'users'
    When method get
    Then status 200

    * def last = response[response.length-1]

    Given path 'users', last.id
    When method get
    Then status 200

