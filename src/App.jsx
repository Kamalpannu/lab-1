import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <h3>Lab 1: Git + Vite Setup</h3>
    <h2>Task 2: Git Config</h2>
    <ul>
      <li>It sets the global Git configuration for your username and email, which are used to label your commits. </li>
      <li>They are stored in the global Git configuration file, typically found at:
       ~\.gitconfig on Windows.</li>
       <li>It returns the global Git configuration values which we set.</li>
    </ul>
    <h2>Task 3: Commit Messages & Log</h2>
    <ul>
      <li>It is convention used by coders to know which bug has been fixed. </li>
      <li>e33b572 (HEAD -{'>'} master) Initial commit: set up Vite React app.</li>
    </ul>
    <h2>Task 4: git diff</h2>
    <ul>
      <li>It shows the changes between the working directory and the staging area.</li>
      <li>(+)means what was added<br></br>
          (-)means what was rmoved
      </li>
    </ul>
    <h2>Task 5: git restore</h2>
    <ul>
      <li>It restores file contents to a previous state, either from the staging area or the last commit.</li> 
    </ul>
    <h2>Task 6: git push -u</h2>
    <ul>
      <li>The -u flag sets up tracking so that future pushes/pulls can be done with just
      git push or git pull.</li>
    </ul>
    <h2>Task 7: Screenshot of git log</h2>
    <img src="public/lab1_2__2650.png" alt="react logo" style={{ width: '400px' }} />
    <h2>Task 8: .gitignore</h2>
    <ul>
      <li>The gitignore bascially the files which version control don't have to care about.</li>
      <li>node_modules/, dist </li>

    </ul>
    </>
  )
}

export default App
