import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import useRole from '../hooks/useRole'
const TrainerRoute = ({ children }) => {
  const [role] = useRole()


  if (role === 'trainer') return children
  return <Navigate to='/dashboard' />
}

export default TrainerRoute

TrainerRoute.propTypes = {
  children: PropTypes.element,
}