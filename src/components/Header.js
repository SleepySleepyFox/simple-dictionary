import React from 'react'

export default function Header() {
  return (
    <header>
        <ul className='header-list'>
          <li><img className='book-svg' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABO0lEQVR4nO2ZQU4DMQxF34IlFeIGRe1d4DZU7NhBKRwEsUIcA7GGbblD2w1VZ2UUkYWFBiaTCe0U/S9ZijLjL3vicWIHBEH417gDKsASZAW8AjPgpIYrzN3Gd1aJnFXUyUaq8d9lDUwcz0Wcy+HadHHAOsoUuCnAUyRsmjAAzoCXXwx5Bk6BwwQ+yw2nn8ImFQfAU43+Y3yWCssNpxLLeAwsne4COGrJYbl2FIlD4MHp3mfo264d8D9vGO+dA1dON4zbwuQAWgEUQugnRlnIlEbRRoZ2YnSUQIe5ttBpFNUDqKAxVWSoJia3qL90Xy+M9y4LjYF3YA6M+uCAJbbXQw9oWMM7jK33txbtddumA14+gHPHOenQXrddOODT53VhzkZYz+XPbmW2IZtm878uEfroRBWTgCAIAv3BJ1Rn5Td6AxX9AAAAAElFTkSuQmCC" /></li>
          <li><a href='/'>Dictionary</a></li>
        </ul>
      </header>
  )
}
