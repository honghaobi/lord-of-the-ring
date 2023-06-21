The project consists of designing a front-end application utilizing React and TypeScript that leverages data from The
Lord of the Rings API. The application has two primary components, a movies page and a characters page, each responsible
for displaying related data retrieved from the API.

The "MoviesPage" component fetches movie details from the API, storing the data in a local state array, with the first
movie selected by default. Each movie's poster is rendered within a grid layout, and users can click on any poster to
select that movie. The selected movie's details are dynamically rendered in an "InfoCard" component. Navigation is
facilitated by the "Arrow" component, ensuring the application maintains a seamless and intuitive user journey.

The "CharactersPage" component fetches character data from the API, rendering a grid of characters for users to interact
with. To enhance the user experience, this page also implements a pagination feature, allowing users to browse through
different character sets. When a character is selected, it gets highlighted, and additional details about the character
are rendered in a "FullCharacterCard" component.

The application employs a clear and modular architecture to ensure code readability and quality, following React's best
practices for state management and side effects. It has a clean and intuitive UI, which significantly enhances the user
experience.

Common elements, like the "Arrow" component, ensure consistency across different parts of the application. Furthermore,
both pages follow a similar design pattern: fetching data from an API, storing it in a state, rendering a list based on
the state, and providing user interactivity by selecting an item from the list. This pattern keeps the application
modular and the codebase maintainable. All styles for the application are encapsulated in individual CSS files for each
component, adhering to a modular design philosophy.

Choosing to implement pagination for the Characters page was driven by efficiency, user experience, and scalability.
Pagination significantly reduces the load on both client and server by only fetching a defined number of records at a
time, improving application response times and overall performance. Also, it enhances the user experience by neatly
organizing the data and allowing users to conveniently navigate through the character list, making the content more
digestible. Finally, pagination is scalable as it effectively manages displaying data, regardless of the list size,
ensuring the application remains performant even with growing data sets.

The decision to forgo Redux in this project hinged on the application's simplicity, as its state management needs were
adequately handled by React's built-in hooks, avoiding the added complexity Redux would introduce. The scope of the
project didn't necessitate Redux's benefits for handling shared state, high-frequency state updates, or complex state
structures. Furthermore, omitting Redux aligns with the aim to maintain a lightweight and efficient application,
streamlining development, debugging, and testing. Therefore, while Redux is powerful for complex scenarios, it was
unnecessary in this project, where local state management proved sufficient and more streamlined.

In summary, the application simple and user-friendly. It effectively uses modern React paradigms, encapsulation, modular
design, and state management to provide a rich and engaging user experience.
