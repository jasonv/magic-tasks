**Project:** Task Management Application  
**Objective:**

* Create a basic task management application where users can add, view, and delete tasks. The application should consist of a backend API to manage tasks and a frontend application to interact with the API. The challenge is designed to assess the candidate's ability to work with full-stack technologies, API development, and frontend application development using JavaScript.

**Backend:**

* **Language & Framework:** Use one of the following backend languages and frameworks:  
  * ASP.NET Core  
  * Node.js / NestJS  
  * Python / FastAPI / Django  
* **Endpoints:**  
  * **GET /tasks**: Retrieve a list of all tasks.  
  * **POST /tasks**: Add a new task. The request body should include the task description.  
  * **DELETE /tasks/:id**: Delete a task by ID.  
* **Data Storage:**  Use a relational database (MS SQL, PostgreSQL, MySQL) and an ORM, such as Entity Framework, Prisma, TypeORM, SQLAlchemy, etc.  
* **Task Schema:**  
  *{*  
      *"id": 1,*  
      *"description": "Example task",*  
      *"created\_at": "2024-07-30T12:00:00Z"*  
  *}*  
* **Requirements:**  
  * Validate requests.  
  * Write clean, modular, and testable code.  
  * Include error handling and proper HTTP status codes.  
  * Assume no authentication for the API.

**Frontend:**

* **Framework:** Use one of the following JavaScript frameworks or libraries:  
  * React (Vite) SPA  
  * Next.js  
  * Vue  
  * Angular  
* **Features:**  
  * **List Tasks:** Display a list of tasks retrieved from the API.  
  * **Add Task:** Provide a form to add a new task (text input for description).  
  * **Delete Task:** Allow users to delete tasks via the interface.  
* **Design:** Keep the design minimalistic and functional. Implement a CSS framework such as Tailwind or Material UI to keep the focus on implementing features rather than styling.  
* **Requirements:**  
  * Implement form validation and error handling.  
  * Provide a clean and user-friendly UI with responsive design.

**Instructions:**

1. **Setup:**  
   * Implement the backend API with the specified endpoints.  
   * Implement the frontend application to interact with the backend API.  
2. **Submission:**  
   * Provide a link to a public Git repository containing the source code for both the backend and frontend applications. Feel free to create two separate repos as well.  
   * Include a README file with instructions on how to run the application locally, including any necessary setup steps.  
3. **Evaluation Criteria:**  
   * **Code Quality:** Clean, well-structured, and documented code.  
   * **Functionality:** The application meets the requirements and functions correctly.  
   * **User Experience:** Intuitive and straightforward UI/UX.  
   * **Efficiency:** Efficient handling of data and API interactions.

give me the code files to implement this project in Next.js
provide it in a zip file that I can download