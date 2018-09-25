Feature: Add podcast
  AN an user I WANT TO add a podcast TO hear my best podcasts

  Scenario Outline: Add a podcast from FYYD
    When I swipe left
    Then I touch the "Add Podcast" text
    Then I press the "SEARCH FYYD" button
    Then I enter text <podcastName> into field with id "search_src_text"
    Then I press the enter button
    Then I wait for 5 seconds    
    Then I touch the <podcastShortName> text
    Then I press the "SUBSCRIBE" button
    Then I press the "OPEN PODCAST" button
    Then I wait for <podcastShortName> to appear

    Examples:
      | podcastName         | podcastShortName               |
      | "TED TALKS"         | "TED Talks Daily (SD video)"   |


  Scenario Outline: Add a podcast from iTunes
    When I swipe left
    Then I touch the "Add Podcast" text
    Then I press the "SEARCH ITUNES" button
    Then I touch the <podcastName> text
    Then I press the "SUBSCRIBE" button
    Then I press the "OPEN PODCAST" button
    Then I wait for <podcastShortName> to appear

    Examples:
      | podcastName     | podcastShortName  |
      | "platzi"        | "Platzi"          |