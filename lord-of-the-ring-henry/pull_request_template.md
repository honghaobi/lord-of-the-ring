Please answer the following questions about your work:

1 - Have you manually tested the solution?

Yes, I have manually tested the solution extensively to ensure every feature works as expected and all user interactions
produce the desired outcomes.

2 - Did you add a test suite? If so, how will we use it? If not, why?

Yes, I added a comprehensive unit test suite for all components and utility helpers using Jest and React Testing
Library. These tests ensure each component's functionality and the proper working of utility functions. To run the test
suite, you need to install the project dependencies using npm or yarn, then use the command 'yarn test' in
the terminal.

3 - Did you use any 3rd party library? Why did you use it? What are the tradeoffs?

Yes, I used Axios and React Router, two third-party libraries, in this project. Axios was chosen for making HTTP
requests to the API due to its promise-based nature, easy-to-use API, and powerful features such as request and response
interception. React Router was used to manage navigation and routing in the application, allowing for the seamless
transition between different views without a page refresh. These libraries, despite adding extra dependencies, provide
functionalities that enhance the application's overall development efficiency and user experience. Trade-offs include
adding extra complexity and potential vulnerability, given these are external dependencies, but their wide adoption,
active maintenance, and significant benefits mitigate these concerns.

4 - Do you feel the UI/UX makes it easy to navigate the data from the API?

Yes, I believe the UI/UX of the application is clean, intuitive, and user-friendly. The information is well-organized,
and the navigation is straightforward, making it easy for users to explore the data from the API.

5 - If you had more time, what else would you add?

* A search and filter function for the characters page would be a significant enhancement, allowing users to find
  specific
  characters or filter characters based on certain attributes. This functionality would make the application more
  interactive and user-friendly, enabling users to navigate large amounts of data more efficiently.

* Implementing a loading state across the application would provide feedback to the users about ongoing processes,
  enhancing the user experience. Particularly for slower networks, this can prevent confusion and reassure users that
  their requests are being processed.

* Adding tests for my services would be beneficial for ensuring the robustness of the application. It would not only
  validate that the services function as expected, but also check for potential edge cases, helping to catch any issues
  or
  errors early in the development process.

* Lastly, I would consider adding a 'Guess the Quote' quiz on a Game page, which could make the application more
  engaging and utilizes the quotes api more. This feature would allow users to interact with the quotes from the movies
  in a fun and entertaining way, extending the application's scope beyond just displaying information.

6 - What would you change in your current solution?

Given the rate limit on the API, one change I would consider in my current solution would be storing data in local
storage. This approach would reduce the number of API calls, hence reducing the risk of hitting the rate limit. However,
using local storage has its trade-offs:

Storing data in local storage could improve performance, as the application could load data from there instead of making
a network request. This would provide a quicker response, leading to a more seamless user experience. However, it would
also increase complexity in managing and synchronizing the stored data with the API, especially when
data updates are considered. It requires a robust strategy to ensure that the local data is kept up-to-date with any
changes in the API. Additionally, local storage has a limit on the amount of data that can be stored. For extensive data
sets, this could pose a limitation.

7 - On a scale of 1 to 10 (10 being the highest), how would you rate this solution?

I would rate this solution as an **8.7** The app effectively uses the API and presents the data in a user-friendly
format,
but there's always room for additional features and improvements.

8 - Anything else we should keep in mind when we evaluate the project?

In designing the application, I consciously chose not to use any UI libraries such as Material-UI or Bootstrap. This
decision was driven by the desire for complete creative control over the application's aesthetics and user experience,
allowing for custom-designed components that truly fit the project's theme and requirements. Handcrafting the styles
ensured that the application carries a unique visual identity that can be fine-tuned to match
any design specifications. It also helps to keep the project lightweight, as UI libraries often come with extra styles
and scripts that aren't used, but still need to be loaded, affecting the performance of the application.
This approach demonstrates a proficient understanding of CSS and responsiveness, providing a sound foundation for
customization and scalability in design, without reliance on third-party UI libraries.