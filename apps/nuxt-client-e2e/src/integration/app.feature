Feature: Being a client scenario outline

  As a website user which handles Scenario Outline
  I want to render the app and check that works properly

  Scenario Outline: Using Scenario Outlines
    When I add <email> and <password>
    Then I verify that the greeting equals the <greeting>

    Examples:
      | email                   | password    | greeting     |
      | my-email@something.com  | myPassword  | nuxt-client  |
