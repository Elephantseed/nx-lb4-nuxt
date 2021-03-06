Feature: Being a client on storybook scenario outline

  As a website user which handles Scenario Outline
  I want to render the component and check that works properly

  Scenario Outline: Using Scenario Outlines
    When I visit the component <component> on storybook
    Then I verify the component exists with id <id>

    Examples:
      | component | id    |
      | logo      | #logo |

