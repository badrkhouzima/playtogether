# what is playtogether?
Introduction: 
PlayDate is a web app designed for parents in Barcelona. It allows them to easily find playgrounds in their district and schedule playdates with other families. This way, children can have the opportunity to meet and play with new friends while parents can enjoy the company of other adults. With PlayDate, scheduling playdates has never been easier.
# An Important note this webapp is build for educational purpose and anyone can clone it to tweak it the wa he/she wants.

# Technologies use in PlayTogether
## for the backent
To clean and pick up the columns needed from open data csv file:
- csv-parse for parsing the csv to get an array of objects.
- lodash to clean the csv and pickup what was needed to manipulate
## for the frontend
-vuejs3 for building the ui.
- axios for fetching the park addresses from the server.
- material icons for icons if needed.
- JetBrain font, its files are embeded inside the project; bold, regular, light.
- moment.js to generate calander.

## Where the app is hosted?
- the backend of the app is hosted in azure app services.
- the distribution frontend directory is hosted in azure storage.