# Weather Buddy

This is a simple weather app created using React.JS which allows users to obtain current weather statistics of any city using AccuWeather API.

## Features:

- **Search**: Enter the name of a city to get the weather information.
- **Responsive Design**: Optimized for various screen sizes.
- **Animations**: Uses CSS animations for visual effects.
- **Error Handling**: Provides feedback for network errors and invalid city names using popups.
- **Styling**: Customized styling with background images and gradients which make the UI look appealing.

## Demo:

https://ayushwani11.github.io/WeatherApp/

## Technologies Used:

- **React**: Front-end library for building UI components.
- **Axios**: Promise-based HTTP client for making API requests.
- **AccuWeather API**: Provides weather data.
- **CSS Animation**: Utilized for interactive elements and visual feedback.

## API Info:

- Method: GET
- City Search:
URL: http://dataservice.accuweather.com/locations/v1/cities/search
-Weather Information:
URL: http://dataservice.accuweather.com/currentconditions/v1/{locationKey}

## Fonts:
Quicksand: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
Sen: "https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap"

## Run Locally:

To run this project locally:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Obtain an API key from AccuWeather and replace `apiKey` in `Interface.js`.
4. Start the local server using `npm start`.

## Usage

- Enter a city name in the search input and click "Show Weather" or press Enter.
- View current weather details displayed including temperature, location, and weather icon.
- Error messages will appear for invalid inputs or network issues.

  ## Contact:

  For questions or feedback, please contact [Ayush Wani](mailto:ayushwani97@gmail.com).
