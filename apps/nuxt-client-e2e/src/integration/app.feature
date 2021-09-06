Feature: Being a client scenario outline

  As a website user which handles Scenario Outline
  I want to render the app and check that works properly

  Scenario Outline: Using Scenario Outlines
    When I fetch home page at <url>
    Then I verify that it renders with correct text <h1Text> on h1

    Examples:
      | url                     | h1Text             |
      | /                       | Elephant Seed2      |
