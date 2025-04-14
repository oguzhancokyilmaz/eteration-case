Feature: Eteration Academy Instructor Verification

  Scenario: Verify instructors count on the instructors page
    Given I am on the Eteration Academy homepage
    When I navigate to the instructors page
    Then I should see a non-empty list of instructors
    And the instructor count should be 6
