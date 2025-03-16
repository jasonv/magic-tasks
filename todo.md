- [X] Generate a starter project using a prompt in GTP-4.
- [X] Verify functionality.
- [X] Setup github repo and commit.
- [X] fix css
- [X] Project: Task Management Application  
- [X] Objective:
- [X] Create a basic task management application where 
   - [X] users can add, 
   - [X] view, and 
   - [X] delete tasks. 
- [X] The application should consist of a backend API to manage tasks and a frontend application to interact with the API. 
- [X] The challenge is designed to assess the candidate's ability to work with full-stack technologies, API development, and frontend application development using JavaScript.
- [X] Backend:
   - [X] Use one of the following backend languages and frameworks:  
      - * ASP.NET Core  
      - * [X] Node.js / [ ] NestJS  
      - * Python / FastAPI / Django  
- [X] Endpoints:  
   - [X] GET /tasks**: Retrieve a list of all tasks.  
   - [X] POST /tasks**: Add a new task. The request body should include the task description.  
   - [X] DELETE /tasks/:id**: Delete a task by ID.  
- [X] Data Storage: Use a relational database (MS SQL, PostgreSQL, [ ] MySQL, [X]SQLLite)  
- [X] and an ORM, such as Entity Framework, [X] Prisma, TypeORM, SQLAlchemy, etc.  
- [X] Task Schema:
  *{*  
      *"id": 1,*  
      *"description": "Example task",*  
      *"created\_at": "2024-07-30T12:00:00Z"*  
  *}*  
* **Requirements:**  
  - [X] Validate requests. 
  - [X] Write clean, modular, and testable code.  
  - [X] Include error handling and proper HTTP status codes.  
  - [X] Assume no authentication for the API.
**Frontend:**
* **Framework:** Use one of the following JavaScript frameworks or libraries:  
  * React (Vite) SPA  
  - [X] Next.js  
  * Vue  
  * Angular  
* **Features:**  
  * [X]List Tasks:** Display a list of tasks retrieved from the API.  
  * [X]Add Task:** Provide a form to add a new task (text input for description).  
  * [X] Delete Task:** Allow users to delete tasks via the interface.  
* **Design:** Keep the design minimalistic and functional. Implement a CSS framework such as [X] Tailwind or Material UI to keep the focus on implementing features rather than styling.  
* **Requirements:**  
  * [X] Implement form validation and error handling.  
  * [X] Provide a clean and user-friendly UI with responsive design.
**Instructions:**
1. **Setup:**  
   * [X] Implement the backend API with the specified endpoints.  
   * [X] Implement the frontend application to interact with the backend API.  
2. **Submission:**  
   * [ ] Provide a link to a public Git repository containing the source code for both the backend and frontend applications. Feel free to create two separate repos as well.  
   * [ ] Include a README file with instructions on how to run the application locally, including any necessary setup steps.  
3. **Evaluation Criteria:**  
   * [X] **Code Quality:** Clean, well-structured, and documented code.  
   * [X] **Functionality:** The application meets the requirements and functions correctly.  
   * [X] **User Experience:** Intuitive and straightforward UI/UX.  
   * [X] **Efficiency:** Efficient handling of data and API interactions.
