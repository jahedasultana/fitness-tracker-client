import { Typewriter } from 'react-simple-typewriter';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';

const AddNewClass = () => {
    const { user } = useAuth() || {};

    const handleAddClass = (event) => {
        event.preventDefault();
        const form = event.target;
        const className = form.className.value;
        const image = form.image.value;
        const details = form.details.value;
        const additionalInfo = form.additionalInfo.value;
        const category = form.category.value; // Get the category value
        const totalBookingNumber = parseInt(form.totalBookingNumber.value); // Parse totalBookingNumber as integer
        
        const newClass = {
            className,
            image,
            details,
            additionalInfo,
            category, // Include category in the newClass object
            totalBookingNumber // Include totalBookingNumber in the newClass object
        };
    
        // Send data to the server
        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newClass)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Class added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                form.reset(); // Reset the form after successful submission
            }
        });
    }

    return (
        <div>
            <Helmet>
                <title>Classes Project | Add Class</title>
            </Helmet>
            <div className="bg-violet-500 text-lg font-bold p-16 my-16 mx-2 rounded-md">
                <h2 className="text-4xl text-white font-lato text-center font-extrabold mb-6">
                    <span style={{ color: '', fontWeight: 'bold' }}>
                        <Typewriter
                            words={['Add a Class']}
                            loop={1000000}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h2>

                <form onSubmit={handleAddClass} className="space-y-4">
                    {/* Class name and Image */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg font-bold">Class Name</span>
                            </label>
                            <input
                                required
                                type="text"
                                name="className"
                                placeholder="Class Name"
                                className="input input-bordered input-double-line"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg font-bold">Class Image</span>
                            </label>
                            <input
                                required
                                type="text"
                                name="image"
                                placeholder="Class Image URL"
                                className="input input-bordered input-double-line"
                            />
                        </div>
                    </div>
                    {/* Class Details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg font-bold">Class Details</span>
                        </label>
                        <textarea
                            required
                            name="details"
                            placeholder="Class Details"
                            className="input input-bordered input-double-line"
                        />
                    </div>
                    {/* Additional Info */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg font-bold">Additional Info</span>
                        </label>
                        <textarea
                            name="additionalInfo"
                            placeholder="Additional Info"
                            className="input input-bordered input-double-line"
                        />
                    </div>
                    {/* Category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg font-bold">Category</span>
                        </label>
                        <select
                            required
                            name="category"
                            className="select select-bordered input-double-line"
                        >
                            <option value="popular">Popular</option>
                            <option value="trending">Trending</option>
                            <option value="new">New</option>
                        </select>
                    </div>
                    {/* Total Booking Number (default to 0) */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg font-bold">Total Booking Number</span>
                        </label>
                        <input
                            type="number"
                            name="totalBookingNumber"
                            defaultValue="0"
                            className="input input-bordered input-double-line"
                        />
                    </div>
                    {/* User Info (optional) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg font-bold">User Name</span>
                            </label>
                            <input
                                readOnly
                                type="text"
                                name="displayName"
                                defaultValue={user?.displayName}
                                placeholder="User Name"
                                className="input input-bordered input-double-line"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg font-bold">User Email</span>
                            </label>
                            <input
                                readOnly
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                placeholder="User Email"
                                className="input input-bordered input-double-line"
                            />
                        </div>
                    </div>

                    <input type="submit" value="Add Class" className="btn btn-block" />
                </form>
            </div>
        </div>
    );
};

export default AddNewClass;
