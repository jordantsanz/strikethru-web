<img width="425" alt="readme-icon(1)" src="https://user-images.githubusercontent.com/56173614/115152627-d1500c00-a03f-11eb-9895-20785076b3e7.png">

# Web App

It's no secret that the internet is far from a safe space. There's harmful language - whether it be used "jokingly" or maliciously - that can be triggering for individuals of all identities. And, unfortunately, many websites and social media platforms do not give users the ability to censor content for themselves. This is where strikethru comes in.

**strikethru** is a Web App and Chrome extension that uses HTML scraping to find harmful words on a website and hides them from the user. Think of it like a content warning maker for the internet! The user can pick from different categories of potential trigger words and even add their own.

Our website also has a file upload tool that can filter an uploaded .txt file and output the same document with trigger words edited with asterisks. They can also choose to hide entire sentences that qualify sentiments in text, hiding entire sentences that are recognized as hate speech.

### How we built it
This API was built with two core functions in mind: user storage and text processing. To accomplish the former, we used Google's Cloud Firestore database to store collections of registered users. We implemented basic CRUD functionality for handling users and their stored preferences. When it comes to text processing, we offer users multiple different options for analysis, of which those preferences are stored in the firestore's user collection. We chose to allow users to process their text by either word or sentence, each method lending towards a different overall goal. Our text method consisted of compiling a library of known slurs and/or triggers and using it to process texts for potential outright triggers. Our sentence method utilizes the hatesonar library in python as an NLP hate-speech classifier to make predictions sentence by sentence.

### Challenges
We really wanted to be able to implement our own model for hate-speech classification, however we found that in the time given we could not reach a level of accuracy that surpassed too far off random. We used data from [kaggle](https://www.kaggle.com/usharengaraju/dynamically-generated-hate-speech-dataset) and trained two different Naive Bayes models, one with GaussianNB from Python's sklearn and one with the Naive Bayes Classifier from Python's textblob. In both cases we found issues with quality of data and predictive power, and thus we chose to use Python's hatesonar library. While there are also short comings in this model, we found that this was the best alternative to use for this project, as it was built in so little time.

### Next Steps
Strikethru's first next step would be to create a customized model for predicting our own criteria of 'hate speech'. Two of our members are actually in the first few weeks of COSC 72: Advanced Computational Lingustics, and we hope by the end of the term to be able to build out our own model with our own set of data and curated insights. We would aldo plan to work on increasing the level of customization and analytics for users, perhaps allowing more interactivity with data generated from their text analysis.
