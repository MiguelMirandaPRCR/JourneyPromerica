Feature: Guatemala Feature

Scenario: Getting Token to open Guatemala flow
Given The user use validate data to get the token
        | username | view | application |
        | 1100116032 | Preaprovados-gt | BM |
When The user will see the promerica application and use the continue button 
And The user validate the title in loading page
And The user validate titles and specifications of any product
And The user click the button to continue in Product Page
And The user validate titles and specifications of Card Name
And The user click the button to continue in Card Page
And The user validate titles and specifications of the agreement
And The user clicks the button to continue in Agreement Page
And The user validate titles and specifications and select option
And The user clicks the button to continue in Address Page
And The user validate titles and specification in Congrats Screen
Then The user clicks in the button to continue and finish in Congrats Page


