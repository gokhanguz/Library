@smoke
  Feature: Login

    Scenario Outline:
      Given User should be able to login page
      When user login as "<role>"
      Then user should be see  "<page>"

      Examples:
        | role       | page     |
        | student    | Books    |
        | librarian  | Dashboard|
