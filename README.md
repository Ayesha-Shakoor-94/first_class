

**First Class of Next.js** 🎉

Today was an exciting start to my Next.js journey! Here’s a recap of what we covered in our first class:

### 1. **Introduction to Next.js** 🗂️  
   We started with an overview of Next.js and its benefits in the React ecosystem. 🌐

### 2. **Installation Steps** 📥💻  
   We set up our Next.js environment by following these steps:
   - **Download Node.js** 📥: Install Node.js from [nodejs.org](https://nodejs.org).
   - **Create a New Folder** 📁: Set up a new directory for the project.
   - **Open Folder in Terminal** 💻: Navigate to the folder using your terminal.
   - **Install Next.js**: Run the command to create a new Next.js application:
     ```bash
     npx create-next-app .
     ```
   - **Run the App**: Start the development server with:
     ```bash
     npm run dev
     ```

### 3. **Hello World in Next.js** 🌍  
   We created a basic component to display "Hello World" using Next.js. Here’s the code for the `Homepage` component:

   ```tsx
   // Function component 'Homepage' (first letter capitalized as a convention)
   function Homepage() {
     // Variable 'myName' is a string with the value "Ayesha"
     let myName: string = "Ayesha";

     // The component must return JSX (HTML-like code)
     return (
       <h1>Hello {myName}</h1>  // 'myName' is dynamically rendered inside the JSX
     );
   }

   // 'export default' is required to use this component in other files
   export default Homepage;
   ```

### 4. **Creating New Pages** 📄  
   We learned how to create new pages in Next.js. The process includes:
   - **Folder Names as URLs**: The name of the file you create in the `pages` directory determines the URL path. For example, creating a file `about.tsx` in the `pages` folder will create a route accessible at `/about`.

   Here’s how to create a new `About` page:

   ```tsx
   // Function component 'About' (first letter capitalized as a convention)
   function About() {
     // Return JSX for the About page
     return (
       <div>
         <h1>About Us</h1>
         <p>Welcome to the About page!</p>
       </div>
     );
   }

   // 'export default' is required to use this component in other files
   export default About;
   ```
