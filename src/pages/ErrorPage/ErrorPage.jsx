import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center my-20 p-8">
           <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <img src="https://i.ibb.co/9TzTXHk/error-404-concept-illustration.jpg" alt="" />
    <div className="card-actions justify-end">
    <Link className="btn btn-error" to='/'>Go back to home</Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ErrorPage;