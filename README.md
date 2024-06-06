# Bookmarker Project 

# Overview:
 Bookmarker is a simple yet powerful tool designed to help users bookmark and manage their favorite websites. The application features a user-friendly interface with functionalities to add, view, and delete bookmarks. It also includes a theme toggle feature to switch between light and dark modes.

# Technologies Used:
- HTML5
- CSS3
- Bootstrap
- JavaScript
- FontAwesome

# Features:

- Bookmark Management:
Add Bookmarks: Users can add new bookmarks by entering a site name and URL. The application validates inputs to ensure the name is at least 3 characters long and the URL is valid.
View Bookmarks: Display a list of saved bookmarks in a table with options to visit or delete each site.
Delete Bookmarks: Users can remove bookmarks from the list. This updates the local storage accordingly.

- Form Validation:
Uses regular expressions to validate bookmark names and URLs.
Provides feedback if inputs do not meet the criteria.

- Theme Toggle: 
Users can switch between light and dark themes using a toggle button.
The theme state is maintained using the themeStylesheet attribute and local storage.

- Persistent Storage: Utilizes the browser’s Local Storage to save bookmarks, ensuring data is preserved across sessions.

- Responsive Design: Bootstrap ensures that the application is mobile-friendly and works well on different screen sizes.

- Error Handling: Displays an error message if the bookmark inputs are invalid, guiding the user to correct the inputs.


# Summary 

- This project demonstrates a blend of modern web technologies to create a practical and user-friendly application for managing bookmarks, incorporating validation, persistent storage, and dynamic theming.