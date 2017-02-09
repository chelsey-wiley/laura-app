#  Linguistically Aware Users Record Accessibly (LAURA)

# Users:
Individuals wishing to analyze the similarities and differences between their native language to their second language. Specifically interpreters wanting to practice their ASL to English and English to ASL skills.

## Objective:
Create an accessible multi-page site where Sign Language Users can record, review, and share their language skills.

## Technologies:
The Sign Language and English Recording components of the site are made using the getUserMedia API to access the camera on the user's device. The information is then stored with the mediaRecorder API.
The YouTube component is called using the Google YouTube API. YouTube API has built in caption requirements only allowing the user to access videos with captions.

##Process
* Developed wireframes on paper
* Developed user personas using iWork
* Began code work using React, jQuery, and Express
* Styled using SASS

## Problems:
* getUserMedia is not globally supported
* English recording component textbox box does not clear upon user focus.
* Microphone feedback on English Recording Component

##  Solutions:
* Use headphones to prevent the feedback loop
* English recording component textbox changed to placeholder.

Currently Deployed at: https://languagerecorder.herokuapp.com/#/ 
