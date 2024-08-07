import { useRouteError } from 'react-router-dom'
import './styles.css'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <div className="error-page">
      <h1>Oops! <span>{ error.statusText }</span> </h1>
      <div>
        <p><label>Status: </label> <i>{ error.status }</i></p>
        <p><label>Error: </label> <i>{ error.data.split(':')[1] }</i></p>
      </div>
    </div>
  )
}

export default ErrorPage