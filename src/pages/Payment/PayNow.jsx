import { useLocation, useNavigate } from "react-router-dom"
import useAxiosSecure from "../../hooks/useAxiosSecure"
import useAuth from "../../hooks/useAuth"
import { toast } from "react-toastify"

const PayNow = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { slot, packageInfo, trainer } = location.state || {}
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()

  const handlePayment = () => {
    axiosSecure
      .post("/pay-now", {
        trainer_info: trainer,
        trainer_id: trainer._id,
        slot_name: slot.selectedSlot,
        package_name: packageInfo.name,
        price: packageInfo.price,
        user_id: user?.id,
        email: user?.email,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
      })
      .then((data) => {
        if (data.data?.result) {
          toast.success(data.data?.message ?? "Payment Successful")
          navigate("/dashboard")
        }
      })
      .catch((err) => {
        toast.error(err.error || "Something went wrong!")
      })
  }

  return (
    <div className="min-h-screen bg-[url('https://img.freepik.com/free-vector/digital-rupee-technology-background-design_1017-36659.jpg?t=st=1740759135~exp=1740762735~hmac=2ace75d3dab904b2ee04fe90a3eb65d65f707a95e0395290439b3b08f76046f1&w=1380')] bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#143951] to-[#143951]/50 px-6 py-4">
          <h2 className="text-xl font-bold text-white">Complete Your Payment</h2>
          <p className="text-blue-100 text-sm mt-1">Secure payment processing</p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Payment Summary */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">Booking Summary</h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Trainer:</span>
                <span className="font-medium text-gray-800">{trainer?.info?.name}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Time Slot:</span>
                <span className="font-medium text-gray-800">{slot.selectedSlot}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Package:</span>
                <span className="font-medium text-gray-800">{packageInfo.name}</span>
              </div>

              <div className="flex justify-between items-center text-lg mt-2 pt-2 border-t border-gray-200">
                <span className="font-semibold text-gray-700">Total Price:</span>
                <span className="font-bold text-black">{packageInfo.price_show_name}</span>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">Your Information</h3>

            <div className="flex items-center mb-3">
              {user?.photoURL && (
                <div className="mr-3">
                  <img
                    src={user.photoURL || "/placeholder.svg"}
                    alt={user?.displayName || "User"}
                    className="h-12 w-12 rounded-full object-cover border-2 border-gray-200"
                  />
                </div>
              )}
              <div>
                <p className="font-medium text-gray-800">{user?.displayName}</p>
                <p className="text-gray-600 text-sm">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Payment Actions */}
          <div className="mt-6">
            <button
              onClick={handlePayment}
              className="w-full bg-[#143951] hover:bg-[#143951]/80 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Confirm Payment
            </button>

            <p className="text-xs text-center text-gray-500 mt-4">
              By clicking "Confirm Payment", you agree to our terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayNow;

