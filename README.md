# Dining Table Configurator

## Description

The **Dining Table Configurator** is an interactive application that allows users to design and customize their dining table by adding various dishes and tableware. Users can select items from a menu on the left side of the screen and place them on the table in specific spots.

### Key Features:

- **Tableware & Meal Modes**: Switch between adding tableware (plates) and meals (dishes) by selecting the corresponding mode from the menu.
- **Customizable Layout**: Place the selected items anywhere on the table in the available spots.
- **Interactive Menu**: A dynamic menu on the left side that allows users to choose between various types of tableware and meals.

The application is divided into three main components:

1. **Backend**: A RESTful API built using Express.js that serves tableware, plates, and meal data.
2. **Frontend**: A React application that allows users to interact with the configurator.
3. **Tests**: The project includes unit and integration tests to ensure the correctness of the application.

## How to Run

### Step 1: Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/patrykKluczak/dining_table_configurator.git
cd dining_table_configurator
```

### Step 2: Run Server

Open first terminal:

```bash
cd server
npm install
npm run start
```

### Step 3: Run Application

Open second terminal

```bash
npm install
npm run start
```

### Step 4: Run Test

Open new terminal

```bash
npm install
npm run test
```
