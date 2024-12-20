# Andreas-Ink-Web-Portfolio

Welcome to the repository for my personal web portfolio, showcasing my work as an iOS engineer, college student, and founder.

![image](https://github.com/user-attachments/assets/c81b1414-1b56-4429-a2be-633bec18d227)
![image](https://github.com/user-attachments/assets/49f43602-b383-413f-a861-6b02c69880ba)

## Overview

This project is a responsive website designed to highlight my professional experience, projects, and skills in iOS development and entrepreneurship.

## Features

- **Home Page**: Provides an introduction and overview.
- **Projects Section**: Showcases selected iOS applications and development work.
- **Skills Section**: Details technical proficiencies and tools utilized.
- **Configurable Timeline**: Customize the timeline of years, projects, and experiences to suit your needs.

## Technologies Used

- HTML
- CSS
- JavaScript
- Next.js
- TailwindCSS
- Aceternity UI

## Customization

This portfolio is designed to be fully customizable. To tailor it for your own use:

1. **Edit the Configuration**: 
   Update the `config` object in the `/data/config.json` file to reflect your information, including name, bio, work details, and timeline content.

   ```javascript
   const config = {
       developer: {
           name: "Your Name",
           bio: "Your Bio",
           work: "Your Work Details"
       },
       years: [
           {
               year: 2020,
               content: [
                   {
                       type: "text",
                       content: "Custom text for this year."
                   },
                   // Add more items as needed
               ]
           }
       ]
   };
   ```

2. **Update Item Types**: 
   Modify the `item type` switch in the `src/App.js` file to include new item types if needed. 
   This allows you to define custom displays for new sections or features.

3. **Update the projects in `AppsView.js`**
    Update `const data` in `AppsView.js` so that your projects show as expected

4. **Update the impacts you've made in `ImpactView.js` and `ImapctView2.js` `etc`**

5. **Update the metadata**
    Modify the SEO data in `layout.tsx`

6. **Package.json**: 
   The project uses the following scripts and dependencies. Ensure these are installed for smooth operation:

   ```json
   {
       "name": "resume-app",
       "version": "0.1.0",
       "scripts": {
           "dev": "next dev",
           "build": "next build",
           "start": "next start",
           "lint": "next lint"
       },
       "dependencies": {
           "next": "14.2.7",
           "react": "^18",
           "styled-components": "^6.1.13",
           "tailwindcss": "^3.4.10"
       }
   }
   ```

## Getting Started

To view or modify the portfolio locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AndreasInk/Andreas-Ink-Web-Portfolio.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Andreas-Ink-Web-Portfolio
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open the app in your browser**:
   Visit `http://localhost:3000` to view the portfolio.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For inquiries, please reach out via the contact form on the website or through [my GitHub profile](https://github.com/AndreasInk).
